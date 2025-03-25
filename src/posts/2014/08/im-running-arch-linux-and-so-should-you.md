---
title: "I'm running Arch Linux and so should you"
date: 2014-08-16
summary: "Why switch to Arch Linux? Long time Ubuntu user having taken the plunge and never looked back"
---

I was a long time Ubuntu user (since 10.04) and a pretty happy one with that too. The foremost reason for running Ubuntu was its large and newbie friendly user base and also that its aim is to be low maintenance, easy to run and install.

## Whats wrong with Ubuntu?
One problem kept getting to me though: The bi-yearly updates. You'd get the notification about a new version and click 'remind me later'.. a lot.

Being fully aware of the freeride on others work given that Ubuntu is based largely on voluntarily efforts - I like the OS to just function without me having to do anything. I'm not that into OS debugging. Sorry. I'd wait at least 2-3 months after the official release letting others do the most of the work until it had stabilized somewhat.

There were always some glitches rolling over from one version to a new one. Things would stop working or work differently. In one extreme case the only solution was a full re-install, which is [recommended](https://help.ubuntu.com/community/UbuntuReinstallation) if the upgrade goes awry.

## Time spent
Counting - there were the actual upgrade, an hour or so. I change enough config files to keep the merge tool hot when upgrading.. Then there were setting up all the small customization you'd done (I was a sucker for visual stuff until I recently discovered the awesomeness of a tiled window manager). Another hour or two.

On top of this I usually add several [PPA:s](https://help.launchpad.net/Packaging/PPA) which compounds the time spent since PPA:s move much slower (or even stops) at some version. So all my favorite programs coming via PPA:s (that are disabled on an update) needed to be re-enabled, updated to a new version and installed again (hoping that the bulk had updated to the new version). Another half hour of so hunting for sameish versions of lost PPA:s.

In alles: about half a work day = 4 hrs on average per upgrade. Now, since OS debugging doesn't tickle me any time spent upgrading or tweaking once the initial tinkering is done is pretty much a waste of time.

## New version still equals old software
Canonical plays it safe and uses [quite old versions](http://stackoverflow.com/questions/19792909/why-does-ubuntu-14-04-stick-with-old-eclipse-3-8-when-4-3-is-out) of software for a new OS release.

So you wait for the upgrade - and once you did upgrade you'd get - old software! Even older than it should have been because you put off the upgrade waiting for the OS and PPA:s to stabilize.

Same deal went for kernels where patches and hardware fixes. Also, since kernel bugs are not always back patched to the version you're running on Ubuntu sometimes the only option was upgrading (or downgrading should that help) the stock kernel hoping that it'll solve the hardware issues.

## In shining armor!
So finally after hearing about Arch Linux for about a year and a half from colleagues I took the plunge.

I thought the biggest hurdle would be the [bootstrapping process](https://wiki.archlinux.org/index.php/Beginners'_guide)- and although there were some pitfalls in figuring out if you have [UEFI](https://wiki.archlinux.org/index.php/beginners'_guide#Testing_if_you_are_booted_into_UEFI_mode) and need an EFI partition or if a regular [GPT](http://en.wikipedia.org/wiki/GUID_Partition_Table) is ok - it went fairly smooth.

If you have time - do this. Its not only a great ego booster to have bootstrapped your own Linux image from scratch, but you get to know some useful system commands which differ from Ubuntu (upstart / service = systemctl in Arch for example).

If bootstrapping it isn't your bag - then do look into getting a pre-baked versions, there are [plenty of derrivates](https://wiki.archlinux.org/index.php/Arch_based_distributions_(active)) that still gets you all the goodies but with more bloat (since one size does not fit all).

Having run Arch for closer to a year now - here's the take away points (serves as a comparison to Ubuntu):

## The really greats:
It's a rolling release - which means when its installed, it stays this way. No more upgrades or installations. Just run updates regularly - that's it.

The [Arch wiki](https://wiki.archlinux.org/). Even when googling for Ubuntu problems I'd wind up in the Arch wiki. Everything is here, all from installing your system, to what applications are available, to get your odd hardware working. Great site if you like to learn more.

Its mostly [bleeding edge](https://wiki.archlinux.org/index.php/Arch_compared_to_other_distributions) software which gives you the goodies fast including kernel fixes and patches that you'd have to wait for the new Ubuntu version to maybe get.

## The oks:
Configs. Not a surprise really since the philosophy of Arch is to provide a system that can be customized a lot. Customized means you're in charge of how things are set up, and the way things are set up in Linux is usually a config file.

Also, if something does not work, its really up to you to fix it. Again, since each users system is unique the problems are also more unique.

But to be honest, if you're a semi used to Ubuntu you've already got this down. Its less in Ubuntu, but once you step off the beaten path its pretty much the same. Try something, google the error message, rinse repeat. Open source y'know?

## The not so greats:
Installing [yaourt](https://wiki.archlinux.org/index.php/yaourt) was a bit of a pain. Yaourt is an Arch linux user repo ([AUR](https://aur.archlinux.org/)) frontend - the core repo are quite strict on what packages are accepted, so the rest goes into the aur. You want this. Its like all the PPA:s you'd ever wanted in one package loaded with the latest versions.

Source distributions. I've only found one package so far - [mysql workbench](https://aur.archlinux.org/packages/mysql-workbench/) comes as a source build. This slows down the machine to a halt for several hours two while the package is built. Since Arch is a smallish distro, large software bundles are usually offered in [.deb](http://en.wikipedia.org/wiki/Deb_\(file_format\)) or [.rpm](http://en.wikipedia.org/wiki/RPM_Package_Manager) precompiled binaries but not the format [pacman](https://wiki.archlinux.org/index.php/pacman) supports.

Building from source these days feels a bit of waste unless you're [paranoid](https://www.gentoo.org/).

## The surprises:
Staying near the bleeding edge has in my book so far meant lots of bugs and instability. Dunno why really - its more of a hard lived myth I guess than empirically proven. Because - Arch is really stable (as in it hasn't broken yet - not even once during an entire year). And the colleagues running Arch for 2½ years now have had 1-2 broken updates during that entire period and when the breakage did occur it was fixed in a matter of hours.

Its far far less manual work than I had expected. Once the initial hump is over of setting up your system - which did take somewhat longer than an Ubuntu install with printers and whatnot I haven't really had to do much.

So in conclusion - its actually pretty much what I was looking for. An OS that just works and needs little intervention or work once its up and running.

## Add snarkyness
And if that's not enough, as a kicker is you get to look down on the folks running Ubuntu because you're running a hard core linux distro. Just grow a decent open source beard first to back your claims.

![Richard stallman meme saying no arch no os](./stallman-no-arch-no-os.jpg)
