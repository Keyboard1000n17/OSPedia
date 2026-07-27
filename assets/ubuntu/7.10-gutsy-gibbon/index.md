---
title: Ubuntu 7.10 Gutsy Gibbon
favicon: 7.10-gutsy-gibbon-icon.webp
order: 70
background_image: 7.10-gutsy-gibbon-wallpaper.webp
---

Ubuntu 7.10 Gutsy Gibbon is the 7th release of Ubuntu, developed and maintained
by Canonical Ltd. It includes an enhanced user interface, integrated desktop
search, Plug-and-Play (PnP) printing, a Firefox plugin system, and improvements
in support for display systems and Windows compatibility.

+++

This release initially had various bugs that required workarounds, including the
absence `/etc/papersize`, failure of the `server` kernel flavor on Dell
PowerEdge 2650 servers and more.

## Features

This release added a number of new features, as listed here.

### Hardware management improvements

Ubuntu introduced a number of improvements related to hardware management,
specifically regarding displays, printers, and restricted drivers.

#### Display management

Ubuntu shipped an intuitive graphical configuration tool for managing video
hardware and displays, replacing manual modfication of Xorg (windowing system)
configuration files.

Ryan Paul on
[ARSTechina](https://arstechnica.com/information-technology/2007/11/ubuntu-gutsy-gibbon-review/)
said the following about the utility:

> Ubuntu 7.10 includes a new Screen and Graphics Preferences utility for
> configuring video hardware and displays. This utility provides an intuitive
> user interface that aims to eliminate the need to manually modify an Xorg
> configuration file in most cases. The utility takes advantage of new display
> hotplugging capabilities that have recently been added to Xorg and are finally
> included in Ubuntu. Ubuntu users previously had to restart Xorg when adding a
> display, but a secondary display can now be toggled on the fly.
>
> The Screen tab of the utility provides a list of display outputs and allows
> the user to choose a default and secondary display. The utility can also set
> the resolution and frequency of the displays and configure screen arrangement
> by selecting where the secondary display is positioned relative to the default
> display. Monitor settings can be autodetected on most modern hardware or read
> from the INF files on Windows monitor driver discs.
>
> Unfortunately, the utility currently supports only dual-screen configurations,
> so users with three or more monitors will still be forced to write custom Xorg
> configuration files. I tested the utility on a Dell Inspiron 1420n laptop and
> on my desktop computer, which uses three monitors and has two Nvidia Geforce
> cards. I encountered problems on both computers.
>
> Although the Screen and Graphics Preferences utility still has some rough
> edges, it's much better than the solutions for screen configuration that were
> available in previous Ubuntu releases. Display hotplugging functionality is
> very new on the Linux platform, so it's likely that support for the feature
> will improve in future versions.

#### Restricted drivers manager

While this was first introduced in Ubuntu 7.04, it now offers to handle drivers
that are free but require non-free firmware.
[Luna Park](https://web.archive.org/web/20070830025557/http://lunapark6.com/ubuntu-gutsy-gibbon-710-new-features.html)
mentions that "`bcm4xx` drivers for Broadcom wireless cards work well with the
restricted-manager."

#### Automated printing subsystem

The printing system was also updated in Ubuntu 7.10. Ubuntu automatically set up
most printers when they were plugged in for the first time, removing the need
for users to manually install drivers. A PDF printer was also implemented,
allowing users to convert files from programs like GIMP, Firefox, Rhythmbox, or
other non-GNOME applications into PDF files.

### Firefox plugins

Ubuntu 7.10 added support for Firefox plugins throuh the `apt` package manager.
This was accessed in Firefox by selecting Tools>Tools>Get Ubuntu Addons, and it
provided a simple user interface to install common plugins, replacing the old
method of downloading `.tar.gz` archives and unpacking the compiled binary `.so`
files into hidden directories.

### Desktop search

Ubuntu included the functionality of desktop search by integrating Tracker,
which was a search and indexing system that simplified the process of finding
files on the user's machine. It was most commonly accessed by clicking the
search icon in the Nautilus file manager, and was able to search instant
messaging logs as well, although Evolution was the only supported email client
for indexing.

### Compiz animations

This release enabled Compiz Fusion by default on supported hardware for the
first time. Compiz Fusion was a window manager that replaced GNOME's default
Metacity when enabled. The default settings enabled subtle, unobtrusive
animations, and more elaborate features required the user to manually enable the
Extra option in the Visual Effects tab in the Appearance Preferences dialog.

### Core

#### GNOME 2.20

GNOME 2.20, released on September 19, 2007, marked the 10-year anniversary of
the desktop environment. It included several new features and improvements to:

- Email and calendar (Evolution client)
- The Epiphany web browser
- The Eye of GNOME image viewer
- The Evince document reader
- Sound and video
- Tomboy for note-taking
- `gedit` for text editing
- The Nautilus file manager
- The panels
- The control panels (settings)
- Password management
- Help system
- Power management
- Login and screensaver
- Right-to-left languages
- Accessibility
- GNOME Display Manager (GDM)
- Administrative tools

The release notes are found at <https://release.gnome.org/2-20/>.

#### Linux kernel 2.6.22

2.6.22 includes an optional, more SMP-friendly SLUB allocator, new and much
better wireless and FireWire stacks, a new architecture called Blackfin, an LVM
for flash storage devices called UBI, event notifications through file
descriptors, the POSIX-draft `utimensat()` syscall, the 'TCP Illinois' and
'YeAH-TCP' congestion control algorithms, IPV6 Optimistic Duplicate Address
Detection, `AF_RXRPC` socket support, relocatable x86-64 kernel support,
improvements to the CFQ I/O scheduler, more process footprint information in
`/proc`, various new drivers and many other improvements.

The full list of changes in this update can be found on the
[Linux Kernel Newbies website](https://kernelnewbies.org/Linux_2_6_22).

#### Xorg 7.3

Ubuntu 7.10 comes with Xorg 7.3 for graphics.

Xorg is the open-source implementation of the X Window System, providing the
framework for graphics on Linux and other Unix-like operating systems.

Details about Xorg 7.3 can be found on the
[https://www.x.org/Releases/7.3/](Xorg website).

## Kubuntu 7.10

Kubuntu is a flavor of the Ubuntu distribution. Its main feature is that it
replaces GNOME with KDE.

Kubuntu 7.10 brought about KDE 4 Technical Preview, along with the Dolphin file
manager and Strigi desktop search. OpenOffice and Amarok music player were
upgraded to versions 2.3 and 1.4.7 respectively. The Restricted Manager also
made its way into Kubuntu, along with an on-screen keyboard for improved
accessibility.

More information about external software can be found at these sites:

- KDE 4 Technical Preview:
  [The official KDE announcement (beta 2)](https://kde.org/announcements/4/4.0-beta2/)
- OpenOffice 2.3:
  [The Apache OpenOffice website](https://www.openoffice.org/development/releases/2.3.0.html)
- Amarok 1.4.7:
  [The Tweakers website](https://tweakers.net/downloads/15962/amarok-147.html)

## Xubuntu 7.10

Xubuntu is another derivative of Ubuntu, replacing GNOME with the Xfce desktop
environment and other applications with lighter alternatives. It is ideal for
older computers and weaker machines.

Xubuntu 7.10 features a new theme called MurrinaStormCloud, which uses the
Murrine engine, making it faster than other themes. It also replaces Xarchiver
with a new Archive Manager, Gxine with Totem for media, and Xfburn with Brasero
to burn disks. It also took 17 games from GNOME for entertainment.

Xfce 4.4.1 was the version of the desktop environment included in Xubuntu 7.10.
It was a bugfix release and its changelogs can be found on the official
[Xfce website](https://www.xfce.org/download/changelogs/4.4.1).

## Edubuntu 7.10

Edubuntu is the education-focused derivative of Ubuntu, with features tailored
to classrooms and learning environments.

Edubuntu 7.10 introduces improvements to thin client functionality, specifically
through using compressed images for better speed and an improved login manager
that allowed for autologin, unencrypted, on-demand graphics transport,
multi-server support, and theming for all Ubuntu derivatives. It also featured
faster hardware detection, a new meta-package for an Edubuntu KDE Desktop, and a
collaborative editor called `gobby` where people could work on the same file
together.

## Gobuntu 7.10

Gobuntu was meant to be a testing ground for an operating system composed of
only free and open-source software. The release announcement explicitly stated
that it was reccommended for experienced Linux enthusiasts only, due to the
proprietary software that was necessary but could not be included. This variant
was short-lived, only seeing two releases before being merged into the mainline
distribution through the "Install free software only" option in the installer.

## Release announcement

<!--prettier-ignore-start-->
> ```
> The Ubuntu team is proud to announce version 7.10 of the Ubuntu family of
> distributions.
> 
> Ubuntu is a full-featured Linux distribution for desktops, laptops, and
> servers, with a fast and easy install and regular releases.  A
> tightly-integrated selection of excellent applications is included, and
> an incredible variety of add-on software is just a few clicks away.
> 
> Read more about the features of Ubuntu 7.10 in the following press
> releases:
> 
>   Ubuntu 7.10           http://www.ubuntu.com/news/ubuntu710  
>   Desktop edition       http://www.ubuntu.com/news/ubuntu-desktop710  
>   Server edition        http://www.ubuntu.com/news/ubuntu-server710  
>   Ubuntu family         http://www.ubuntu.com/news/ubuntu-family710  
> 
> Professional technical support is available from Canonical Limited and
> hundreds of other companies around the world.  For more information about
> support, visit http://www.ubuntu.com/support
> 
> Ubuntu 7.10 will be supported for 18 months on both desktops and servers.
> Users requiring a longer support lifetime on servers may choose to
> continue using Ubuntu 6.06 LTS, with security support until 2011, rather
> than upgrade to or install 7.10.
> 
> Ubuntu 7.10 is also the basis for new 7.10 releases of Kubuntu and
> Edubuntu:
> 
>   Kubuntu announcement http://kubuntu.org/announcements/7.10-release.php
>   Edubuntu announcement http://www.edubuntu.org/news/7.10-release
> 
> To Get Ubuntu 7.10
> ------------------
> 
> To download Ubuntu 7.10, or obtain CDs, visit:
> 
>   http://www.ubuntu.com/getubuntu
> 
> Users of Ubuntu 7.04 will be offered an automatic upgrade to 7.10 via
> Update Manager.  As always, upgrades to the latest version of Ubuntu are
> entirely free of charge.  For further information about upgrading, see
> 
>   http://www.ubuntu.com/getubuntu/upgrading
> 
> We recommend that all users read the release notes, which document
> caveats and workarounds for known issues.  They are available at:
> 
>   http://www.ubuntu.com/getubuntu/releasenotes/710
> 
> Find out what's new in this release with a graphical tour:
> 
>   http://www.ubuntu.com/getubuntu/releasenotes/710tour
> 
> If you have a question, or if you think you may have found a bug but
> aren't sure, try asking on the #ubuntu IRC channel, on the Ubuntu Users
> mailing list, or on the Ubuntu forums:
> 
>   #ubuntu on irc.freenode.net
>   http://www.ubuntuforums.org/
>   http://lists.ubuntu.com/mailman/listinfo/ubuntu-users
> Helping Shape Ubuntu
> --------------------
> 
> If you would like to help shape Ubuntu, take a look at the list of ways
> you can participate at
> 
>   http://www.ubuntu.com/community/participate/
> 
> Developers should consider attending the upcoming Ubuntu Developer Summit
> in Cambridge, Massachusetts (US) starting 29 October.  More information
> is available at
> 
>   https://wiki.ubuntu.com/UDS-Boston
> 
> More Information
> ----------------
> 
> You can find out more about Ubuntu and about this release on our website:
> 
>   http://www.ubuntu.com/
> 
> To sign up for future Ubuntu announcements, please subscribe to Ubuntu's
> very low volume announcement list at:
> 
>   http://lists.ubuntu.com/mailman/listinfo/ubuntu-announce
> 
> ```
<!--prettier-ignore-end-->

## System requirements

The minimum memory requirement for Ubuntu 7.10 is 384MB of memory for desktop
CDs, and 256MB for other installation methods. However, some memory is allocated
to the graphics card, making it unavailable.

With only the minimum amount of memory available, the installation process will
take longer than normal, but will complete successfully, and the system will
perform adequately once installed. Low-memory systems may be able to use the
desktop CD to install by adding the only-ubiquity boot option to run just the
installer rather than the whole desktop.
