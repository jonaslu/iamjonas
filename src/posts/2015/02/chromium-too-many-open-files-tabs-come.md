---
title: "Chromium too many open files - tabs come a-crashin'"
date: 2015-02-23
summary: "Fix chromium tabs crashing on linux and learn a thing or two about a processes open files and how to fiddle with them."
---

Lately Chromium tabs have been crashing a lot at irregular intervals. It looks like this:

![Chrome unresponsive](./chromium_crashing.png)

[Like said before](http://www.catchmecode.com/2014/09/fix-for-broken-chromium-open-in-folder.html), the best way to get a handle on what is causing it is to start chromium in a terminal. Chances are the application is a lot more chatty in the terminal and giving hints as to why its acting up.

## What version?
I'm running chromium Version 40.0.2214.111 (64-bit) but I've seen bug reports [concerning version 36.0](https://code.google.com/p/chromium/issues/detail?id=367037) and up. That bug reports means chromium is running into the limits of the OS regarding allowed open files.

In other words - the more tabs you are using - the more chance there is that the new tabs (and old tabs) will be crashing looking like the sad sad image above.

## Y u crash?
Lets dig into this a bit and learn a thing or two. This message would appear whenever a tab crashed.

``` text
[13747:13770:0219/150755:ERROR:host_shared_bitmap_manager.cc(144)] Cannot create shared memory buffer
[918:923:0219/150755:FATAL:child_shared_bitmap_manager.cc(55)] Check failed: memory->Map(memory_size).
[WARNING:flash/platform/pepper/pep_module.cpp(63)] SANDBOXED
```

With some googling this turns out to be the soft limits of open file handles being applied to each chromium tab process. Lets dig. To get the limits of a process you can use [prlimit](http://manpages.courier-mta.org/htmlman1/prlimit.1.html) of that process. Choose a chromium tab process id of your liking and hit it with prlimit.

``` bash
jonasl@jonasl:~$ prlimit --pid 13747
RESOURCE  DESCRIPTION                SOFT    HARD UNITS
...
NOFILE   max number of open files         1024    4096
...
```

Or if you are really curious about that process, why don't you cd into its /proc/$pid directory hmmm? You can see the limits in a file called limits:

``` bash
jonasl@jonasl:~$ cat /proc/13747/limits
Limit                     Soft Limit           Hard Limit           Units
Max cpu time              unlimited            unlimited            seconds
Max file size             unlimited            unlimited            bytes
Max data size             2147483647           2147483647           bytes
Max stack size            8388608              unlimited            bytes
Max core file size        0                    unlimited            bytes
Max resident set          unlimited            unlimited            bytes
Max processes             30772                30772                processes
Max open files            1024                 4096                 files
Max locked memory         1048576              1048576              bytes
Max address space         17179869184          17179869184          bytes
Max file locks            unlimited            unlimited            locks
Max pending signals       30772                30772                signals
Max msgqueue size         819200               819200               bytes
Max nice priority         30                   30
Max realtime priority     65                   65
Max realtime timeout      unlimited            unlimited            us
```

To get a rough estimate of the number of open files, lets list all for that process and count them by lines:

``` bash
jonasl@jonasl:~$ lsof -p 13747 | wc -l
1415
```

Wow imagine that, 1415, way over the soft limit of 1024. Again using prlimit you can raise the number of allowed open files by setting the soft (on the left of the colon, and hard limit on the right of the colon) like so:

``` bash
jonasl@jonasl:~$ prlimit --pid 13747 --nofile=4096:4096
```

By now, that tab should have stopped chrashing with the sad sad image. Surf around a bit, and let's again count the numbers of open files:

``` bash
jonasl@jonasl:~$ lsof -p 13747 | wc -l
1918
```

## Y u crash really hard?
Just out of curiosity then, what happens if we lower the hard limit?

``` bash
jonasl@jonasl:~$ prlimit --pid 13747 --nofile=1024:1024
```

Surf some in the tab whose pid you just starved for open file handles. Since the hard limit is now 1024, it will crash all of its siblings and parent process (as opposed to just failing the local tab when enforcing the soft limit) with this funny message

``` text
[13747:13771:0219/151309:FATAL:zygote_host_impl_linux.cc(297)] Check failed: 0 == socketpair(AF_UNIX, SOCK_SEQPACKET, 0, raw_socks). : Too many open files
Aborted (core dumped)
```

## Three fixes for this
The fastest way to increase this is to close down chromium and up the limit with [ulimit](http://ss64.com/bash/ulimit.html) in the terminal before you start it again. This way you can see if this was your root issue before making the fix permanent. Hit:

``` bash
ulimit -n 4096
chromium
```

in a terminal. This will set the number of allowed open files per process to 4096 instead of the default 1024.

``` bash
jonasl@jonasl:~$ prlimit --pid 15691
RESOURCE  DESCRIPTION                SOFT    HARD UNITS
...
NOFILE   max number of open files         4096    4096
...
```

Three ways moving forward from here. You can apply this only to chromium by either creating a script on your path setting ulimit before launching chromium - or you can editing the launcher script of chromium itself (located in /usr/bin/chromium on arch linux) adding the ulimit fix before chromium itself is launched:

``` bash
jonasl@jonasl:~$ which chromium
/usr/bin/chromium

jonasl@jonasl:~$ sudo vim /usr/bin/chromium
```

Third and most impressive solution is if you are running on a desktop you can impress your friends with [cranking up the number of allowed open files](http://www.cyberciti.biz/faq/linux-increase-the-maximum-number-of-open-files/) to whatever your liking screaming "I don't care". The main reason for having a [limit is memory consumption](http://unix.stackexchange.com/questions/36841/why-is-number-of-open-files-limited-in-linux). And you are probably not running chromium on your paltry embedded device.

## We're all to blame for this
So in all it's not just chromiums fault, it seems it has gotten more file resource hungry, but its also the default setting of linux.
