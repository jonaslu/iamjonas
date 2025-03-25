---
title: "Fix for broken chromium open in folder"
date: 2014-09-27
summary: "Small tech post on how to fix broken file associations in chromium on (arch) linux. Example with Gnome and gvfs-open."
---

My chromium did not handle open in folder correctly after a file had downloaded - nothing happend. On linux the first thing do to when a GUI application fails silently is to start it in a terminal instead - its usually a bit more chatty and will tell you more what's going on.

This appeared when issuing show in folder:

``` bash
$> gvfs-open: /home/jonasl/Documents/exiting_file.txt: error opening location: Failed to change to directory '%u' (No such file or directory)
```

After some researching it turns out that [chromium](https://wiki.archlinux.org/index.php/chromium) uses [xdg-open](https://wiki.archlinux.org/index.php/Xdg-open) to open applications. Xdg works by examining the $CURRENT_DESKTOP_SESSION in the glue file /usr/bin/xgd-open and if a Desktop enviroment is found forwards calls to that system mime handler.

I'm currently running Gnome as my DE so the mime handling is in turn done by gvfs-open (as inidicated in the error message above).

So now we're near the epiecenter of the problem. To query what mime applications that are registered for the type we're trying to open (inode/directory) issue:

``` bash
$> gvfs-mime --query inode/directory
Default application for 'inode/directory': git-cola-folder-handler.desktop
Registered applications:
 nautilus.desktop
 git-cola-folder-handler.desktop
Recommended applications:
 nautilus.desktop
 git-cola-folder-handler.desktop
``` 

Ah, it tried to open folders via git-cola browser. No wonder it did not work. To change it to the folder of your choice:

``` bash
$> gvfs-mime --set inode/directory nautilus.desktop
```

And to test it

``` bash
gvfs-open /home/jonasl/exiting\_testfile
``` 

Nautilus shows its shiny face! Test it in chrome and it works there too. Good times.
