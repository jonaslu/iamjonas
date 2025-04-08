---
title: "Rotating backups with rsync"
date: 2013-06-01
summary: "A perl script that does rotational backups via ssh and rsync to a backup site. No compression no incremental backups - full snapshots with low data redundancy thanks to hard links"
---

First off: its here – [https://github.com/jonaslu/rsyncrotatingbackup](https://github.com/jonaslu/rsyncrotatingbackup).

## Short description
Its a script that does rotational backups on your folders of choice. No compression involved – the files are mirrored onto the backup machine and hard links keeps redundancy down between snapshots. Done in perl via ssh and rsync (sshd needs to be installed on the backup machine, ssh keys are optional but very handy if you automate it with cron / anacron).

## Background
You know the drill – do backups or loose all of your family photos just before the big family reunion. There are plenty of solutions out there so why roll your own? The ones I found didn’t really fit the bill (edit: looks like [rsnapshot](http://www.rsnapshot.org/) actually might have fitted the bill, oh well – it was educational at least to roll your own :).

## Requirement spec
Files should be accessible via ssh or the like from outside – so no compression. And because its on my local network I’m also trusting it with unencrypted content. If you go outside to any other machine, do encrypt it – for this something like [déja dup](https://apps.ubuntu.com/cat/applications/deja-dup/) or [duplicity](http://duplicity.nongnu.org/) which it builds on is an excellent fit.

No incremental backups. One snapshot per backup round. Again, this goes with the requirement above, need to access the full file from outside. Also, incremental backups usually takes some time to restore – hard links achieves the same thing – to keep the data amount down over a cycle of backups.

Rotating backups. There are mostly files that change much or not at all. It they change much, a week of backups are enough (think source code files) – work from a week ago is usually not that interesting. Plus if you use [git](http://git-scm.com/) (and you should) you have all the history in your repo. So via the repo it turns into category 2 – files that do not change at all. These are photos, books, documents and the likes. If I accidentally delete one file a week or so of backups are more than enough to get it back (if missed and it falls off the edge, it probably wasn’t that interesting to keep around anyway).

Keep folder structure. I know where it was on the local machine from where it was backed up from so I can quickly find it on the remote machine.

Data amount fairly high but turnover low – backups should be fast and only copy the delta from last time, keeping the data on the storage side at a minimum. [Hard links](http://en.wikipedia.org/wiki/Hard_link) does this.

Its based on the script from David Bourget [here](http://www.dbourget.com/software/remote-backup.pl) – but I’ve added that it keeps the directory structure on the mirrored site and fixed the warnings you got when a full cycle had not yet completed.

## Script config
There are a couple of variables you should change – they’re marked with a huge # Config part – edit these header at the top of the script.

``` perl
# SSH user@host
my $login = 'user@server';
```

SSH user and remote backup host (as you would specify it in an ssh command line).

``` perl
# How many backups to keep. If you run the script once a day, 7 = 7 days of backups
my $backupsPerCycle = 7;
```

Number of backups in a cycle. Will create 7 folders / snapshots – a weeks worth of backups if you run it once every day.

``` perl
# Full base path on the backup host where the backups are kept - defaults to
my $backupRootDir = "/home/user/backup/".$hostname."/backup_";
```

I’ve configured the backups to use the hostname of the backed up machine as the root folder. This way its easy to see where from what machine it came and then navigate from there as if it were on the local machine.

``` perl
# Where the list of folders to back up are kept - defaults to ~/.backup_targets
my $backupFolderList = "$ENV{HOME}/.backup_targets";
```

The folders to back up are configured via a file called `.backup_targets` in your home folder. The file contains folders you want backed up, separated by newline. Whitespace is ignored in the file. Example:

``` bash
/home/user/Desktop
/home/user/Pictures/
```

Will back up all files recursively in the home Desktop and Pictures folder. The reason the full path is given is that its mirrored with its full path on the backup machine. So these folders above are found under:

``` bash
/home/storage/backup/user/client/backup_1/home/user/Desktop
/home/storage/backup/user/client/backup_1/home/user/Pictures
```

## Optional config
You might have to change these, they’ll try to find the executable by themselves (via [which](http://linux.die.net/man/1/which)) but if they don’t succeed – feed them the location of the binary:

``` perl
my $rsyncCmd = `which rsync`;
my $ssh = `which ssh`;
```

## Rsync over ssh
You need to set up your ssh keys to allow password-less logins. Rsync will prompt for a password if this is omitted and thus it cannot be automated via anacron / cron. Its covered pretty well here: [http://troy.jdmz.net/rsync/index.html](http://troy.jdmz.net/rsync/index.html).

## What you might expect running it
Running it in the terminal will print the standard rsync messages for each directory. If scheduled via anacron you can capture the logs and check them when the job has finished (see below for scheduling via anacron).
The first time: Depending on the amount of data – this should take some time. All files will be transferred. The second to the nth time: Depending on how much you’ve changed – this should be anywhere from fast to instant. Speedups will be some crazy factor if you change a fairly small amount of files.

``` text
sent 372 bytes  received 18 bytes  260.00 bytes/sec
total size is 114590825  speedup is 293822.63
```

## Running it with anacron
Everything that can should be automated of course. Cron fits if you keep your machine on at all times, but since my laptop goes on about once each day (usually at night) but not always I opted for anacron. Positive side is that it runs after a configurable time when the machine has been switched on, the downside is that you can’t install jobs with your own user (anacron only runs as root) – so it took some shell magic to get it working with my user (for folders, ssh keys and permissions).

``` bash
1    15  client.backup   su user -c "/usr/bin/perl /home/user/bin/rsync_rotating_backups.pl" > /var/log/rsync_backup.log 2>&1
```

Put this line somewhere in your anacrontab file (located at `/etc/anacrontab` on Debian / Ubuntu). This tells anacron to run the backup each day 15 minutes after the computer has booted. Since anacron runs as root it spawns of a new shell `su user -c` and gives the path to perl, the path to the backup script itself. All output is captured (both stdout and stderr) and put into a log file located at `/var/log/rsync_backup.log`.

## Debugging anacron
To test if anacron is working, run: `anacron -fnd` This will cause anacron to stay in the foreground and print any error-messages when running the job. The usual culprit in not working has something to do with paths. Cron and anacron does not come with the usual paths setup, hence the full paths to both perl and the script itself.

## Need more?
I didn’t do this, but if you need to keep data longer but don’t want a high rotational cycle you can schedule a cron job on the backup machine that tars and gzips the backup folder structure once every cycle. This way you keep the data after its rotated out. The job won’t be too heavy on your machine since it only runs once every cycle and it might hit a sweet spot between easy access (mirroring folders) and data longevity (having to unzip and find the file if its rotated out into the tars and gzips).

Happy backing upping!
