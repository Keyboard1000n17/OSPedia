---
title: Ubuntu 6.06 LTS Dapper Drake
favicon: 6.06-dapper-drake-icon.webp
order: 40
background_image: 6.06-lts-dapper-drake-wallpaper.webp
---

<!--
AI was used in:
- the GNOME section
-->

Ubuntu 6.06 Dapper Drake is the 4th release of Canonical's Ubuntu, featuring a
graphical installer, faster startup and login times, simplified menu
organisation, improved video playback support and updated software. It also
featured a graphical shutdown process in contrast to the text logs previous
versions would display during the process and Networkmanager for changing
betweeen wired and wireless networks.

+++

Dapper was the first ever LTS (Long Term Support) release. It was released two
months late as the developers wanted to polish the release, because of which the
developers joked that it was the first "Late To Release" version. It also
introduced more kernels for servers and improved support for clusters.

## Features

Dapper Drake was a milestone in Ubuntu's history as it was the first LTS
release, with the next LTS version releasing every 2 years to this day. It
introduced a lot of features and was pushed back two months to focus on
polishing the release so that it was ready for both server administrators and
home desktop users to use. These features are listed here.

### Graphical installer

The release brought about the Ubiquity graphical installer similar to the
earlier Live CD but for installation, replacing the separate Live and Install
CDs. It allowed the user to try out the desktop before deciding to install it,
which was given as an option on the desktop. However, it was not guaranteed to
work, so an alternate CD was available, as mentioned in the
[release notes](https://wiki.ubuntu.com/DapperReleaseNotes#Known_Issues)).

### Faster system startup and login

Dapper introduced better startup and login times.

### Updated software

Ubuntu 6.06 LTS also introduced updated versions of previously included
software, like X.org 7.0 and OpenOffice.org 2.0.2.

#### X.org 7.0

X.org 7.0 was a major version of the X Window System, introducing a completely
modularised and autotooled codebase, besides being the first major release of
X.org in over a decade since 6.0's release in 1994.

X.org is a windowing system that draws windows on the screen according to calls
from the window manager which is passed to either the framebuffer or the
compositor which combines the window positions, shadows and transparencies into
a single image which is then rendered.

#### OpenOffice.org 2.0.2

OpenOffice is an office productivity suite developed and maintained by Apache.
It features a word processor, spreadsheet program, a presentation tool and more.

2.0.2 brought many things like Microsoft Office compatibility, UI improvements,
enhanced PDF exports and localised support including Hindi language settings and
Indian Rupee support.

#### GNOME 2.14.1

GNOME 2.14.1 was released on the 12th of April in 2006. It brought extensive
fixes throughout its components, new features in some applications and
performance improvements in core components and multimedia stack along with
translation and accessibility improvements.

The (full) list of changes can be found here:
[https://download.gnome.org/desktop/2.14/2.14.1/NEWS](https://download.gnome.org/desktop/2.14/2.14.1/NEWS)

#### GCC 4.0.3

The GNU Compiler Collection or GCC is a collection of compilers for various
languages like C++, C, Objective-C, Objective-C++, Fortran, Ada, Go and more
along with libraries for these languages. It is cross-platform and supports
various architectures, including x86, x86-64, ARM (both 32-bit and 64-bit),
RISC-V along with various extensions to the Instruction Architecture set,
PowerPC and POWER and even more.

The 4.0 release saw huge speed improvements (up to 25%) in compiling C++ without
optimizations, better support for x86, x86-64, MIPS, SPARC and S/390
architectures, obsoletion of the Intel i860, Ubicom IP2022, National
Semiconductor NS32K, Texas Instruments TMS320C[34]x and SPARClite-based systems.

Version 4.0.3 made the compiler recognize that the function `getcontext` has the
same semantics as the `setjmp` function, meaning that the compiler will ensure
all registers are dead before calling such a function.

The list of changes in the GCC 4.0 release series can be found here:
[https://gcc.gnu.org/gcc-4.0/changes.html#GCC4.0.3](https://gcc.gnu.org/gcc-4.0/changes.html)

#### glibc 2.3.6

The GNU C Library or `glibc` is GNU's implementation of the C standard library.
It provides a wrapper around the system calls of the Linux kernel and other
kernels for use by programs.

`glibc` 2.3.6 was mostly a bugfix release with minor improvements. You can find
more about it here:
[https://gcc.gnu.org/gcc-4.0/changes.html](https://gcc.gnu.org/gcc-4.0/changes.html)

### Installation

Dapper improved the installation process and introduced new features, notably
these:

- Ubuntu can now be installed to USB devices, such as removable hard drives and
  flash memory, using the text-mode installer.
- A new upgrade tool is available, for simple, clean and reliable upgrades from
  one Ubuntu release to the next, starting with Ubuntu 5.10.
- The alternate installer now runs in a single stage, rebooting straight into
  the complete system. This makes it faster, simpler, and more reliable.

### Server improvements

6.06 LTS brought special low-end as well as big iron kernels. These kernels were
specialised and tuned for servers to provide better performance for server
applications. Low-end kernels were meant for the same hardware as the desktop
kernel whereas the big iron kernels were targeted towards servers with more than
8 CPUs.

There was also an option for installing software for the LAMP (Linux, Apache,
MySQL and PHP) stack which was a common server configuration due to its
popularity at the time.

Ubuntu also introduced better support for SANs (Storage Area Networks) and
clusters.

Thin client improvements were made, including faster startup, a graphical boot
process, reduced memory requirements and sound device support, most of which was
a result of the optimizations done to the normal desktop OS.

## Xubuntu 6.06

Xubuntu is an official flavor of Ubunut that uses the Xfce4 desktop environment
instead of GNOME. It is suitable for lower end hardware and thin clients.

Xubuntu was first released alongside Ubuntu 6.06 Dapper Drake. It included these
features:

- Xfce 4.4beta1 including a more flexible panel, many panel plugins and icons on
  the desktop
- Thunar file manager
- GDM desktop manager
- Gnome Office (latest Abiword and Gnumeric)
- Evince document viewer
- Xarchiver archive manager
- Xfburn simple CD burner
- Xubuntu System Tools for GUI system administration
- Firefox 1.5.0.3
- Thunderbird 1.5.0.2
- Package updates manager
- Graphical .deb package installer ('GDebi')
- New documentation ('Xubuntu Desktop Guide')
- New and more consistent artwork

and more.

In addition, OpenOffice.org and Gnome CUPS Manager are included on the alternate
CD but not installed by default.

## Announcement

The announcement for Ubuntu 6.06 LTS was sent on June 1st, 2006 and can be found
on the
[Ubuntu Mailing Lists](https://lists.ubuntu.com/archives/ubuntu-announce/2006-June/000083.html)
site. Its contents are as follows:

```
The Ubuntu team is proud to announce the release of Ubuntu 6.06 LTS,
codenamed "Dapper Drake". This release includes both installable
Desktop CDs and alternate text-mode installation CDs for several
architectures, for Ubuntu, Kubuntu and Edubuntu.

Ubuntu is a Linux distribution for your desktop or server, with a
fast and easy install, regular releases, a tight selection of
excellent packages installed by default, every other package you can
imagine available with a few clicks from a global network of mirrors,
and professional commercial technical support from Canonical Ltd and
hundreds of other companies around the world.

Ubuntu 6.06 LTS will be the first Ubuntu release with a long-term
support cycle: free security updates and commercial technical support
will be available for three years on the desktop, and five years on
the server.


To Get Ubuntu 6.06 LTS
----------------------

Download Ubuntu 6.06 LTS here:

  United States:
    http://us.releases.ubuntu.com/releases/6.06/

  Europe:
    http://se.releases.ubuntu.com/6.06/   (Sweden)
    http://fr.releases.ubuntu.com/6.06/   (France)
    http://releases.ubuntu.com/6.06/      (All)

  Rest of the World:
    http://releases.ubuntu.com/6.06/

To burn these CD images, you will need 700MB media.

To receive a complimentary copy of the Official Ubuntu 6.06 LTS CD --
or a handful of them to give to your friends, your school or LUG --
place your request at the relevant URL below.

   http://shipit.ubuntu.com/
   http://shipit.kubuntu.org/
   http://shipit.edubuntu.org/


About Ubuntu 6.06 LTS
---------------------

Highlights of this release include:

 On the Desktop CD

  * A new, very fast, graphical installer based on the Live CD

  * Faster system startup and login

  * Simplified menu organization

  * Graphical shutdown process

  * Easy access to power management settings with GNOME Power
    Manager (Ubuntu)

  * Improved support for video playback

  * Optional NetworkManager for convenient roaming between different
    wireless and wired networks

  * OpenOffice.org 2.0.2, X.org 7.0

  * Support for ongoing translation updates throughout the life of
    this release, for all supported desktop environments


 On the Server

  * New kernels targeted at server platforms. The server kernels are
    tuned differently than the desktop kernels (providing better
    performance for server applications).

  * Both low-end and "big iron" server kernels. The low-end
    server kernel is generic, and should work on the same equipment
    that the desktop kernel runs on. The high-end server kernel is
    geared towards systems with greater than 8 CPUs (ES7000 / Summit
    / BIGSMP).

  * Turn-key LAMP installation for this common deployment scenario

  * Improved support for clusters and SANs

  * Thin client enhancements, including faster client startup,
    graphical boot process, reduced memory requirements, and sound
    device support


 Localization

  * Automatic setup of non-Latin input methods

  * Menu item translations included in language packs, for faster
    integration of new and updated translations provided through
    Rosetta

  * Ongoing translation updates from the Rosetta web service:

      https://launchpad.net/distros/ubuntu/dapper/+translations


 Installation and Upgrades

  * Ubuntu can now be installed to USB devices, such as removable
    hard drives and flash memory, using the text-mode installer

  * A new upgrade tool is available, for simple, clean and reliable
    upgrades from one Ubuntu release to the next, starting with
    Ubuntu 5.10

  * The alternate installer now runs in a single stage, rebooting
    straight into the complete system. This makes it faster,
    simpler, and more reliable.


 "Under the hood"

  * GCC 4.0.3

  * glibc 2.3.6

  * Linux 2.6.15.6

  * New live CD infrastructure for improved performance, usability and
    space-efficiency

  * Greatly improved infrastructure for automatic hardware detection and activation

  * The system PATH is now set in exactly one place, /etc/environment, for
    convenient administration


As always, Ubuntu includes the very best of the 100% Free / Libre
application software world, and each new release incorporates
countless new features and bugfixes from the global development
community. More detailed release notes are at

   http://wiki.ubuntu.com/DapperReleaseNotes


Helping Shape Ubuntu
--------------------

If you would like to help shape Ubuntu, take a look at the list of
ways you can participate at

  http://www.ubuntu.com/community/participate/

If you have a question, or if you think you may have found a bug but
aren't sure, try asking on the #ubuntu channel on IRC.FreeNode.net,
on the Ubuntu Users mailing list, or on the Ubuntu forums:

  http://lists.ubuntu.com/mailman/listinfo/ubuntu-users
  http://www.ubuntuforums.org/


More Information
----------------

You can find out more about Ubuntu and about this release on our
websites:

  http://www.ubuntu.com/
  http://www.kubuntu.org/
  http://www.edubuntu.org/


To sign up for future Ubuntu announcements, please subscribe to Ubuntu's
very low volume announcement list at:

  http://lists.ubuntu.com/mailman/listinfo/ubuntu-announce
```

The announcement for Kubuntu 6.06 can also be found on the
[Ubuntu Mailing Lists](https://lists.ubuntu.com/archives/kubuntu-devel/2006-June/001232.html)
site and it reads:

```
Kubuntu 6.06 LTS Here for the Long Term

[1 June 2006]  http://kubuntu.org/announcements/6.06-lts-release.php

Kubuntu 6.06 LTS has been released. It is available for download now
or, for the first time, you can order free Kubuntu CDs through
Shipit. This release comes with KDE 3.5.2 and includes a new installer
which you can use direct from the live desktop CD. We have focused on
stability and bugfixes, as our first Long Term Support release 6.06
will be supported for 3 years on the desktop and 5 years on the
server.

To download Kubuntu 6.06 LTS go to:

* http://kubuntu.org/download.php

To order free CDs through Shipit go to:

* https://shipit.kubuntu.org/

What's New
==========

Here is what's new in Kubuntu 6.06 LTS

Ubiquity Desktop Installer
--------------------------

Install Kubuntu 6.06 LTS directly from the live Desktop CD. It takes
just 6 steps to set it going and you can browse the web while it
installs. Most users will only need the Desktop CD but for advanced
installs with low memory needs, preseeded options, LVM or RAID the old
text installer is still available on the Alternate CD.

Adept Notifier and Simplified Installer
---------------------------------------

Our software package manager now comes with a notification icon when
you have updates that can be installed and a simplified installer
which you can find as Add/Remove Programs.

X Display Configuration from Guidance
-------------------------------------

The Guidance suite of configuration tools in System Settings has been
expanded to include a display module to help you fix any problems to
your X driver settings.

Windows Free Software
---------------------

The Desktop CD comes with an improved range of Free Software for
Windows, including Scribus DTP and Kexi Database 1.0. Use it to
convert your friends to Freedom.

CJK Languages Support
---------------------

Kubuntu 6.06 LTS comes with much improved support for oriental
languages thanks to Skim and changes to KDE.

Zeroconf
--------

Zeroconf support is ready to go to let you easily find services on
your local network. Turned off by default as required by our security
policy just install avahi-daemon to enable it.

Netboot Install
---------------

You can also install over the network, see
https://wiki.kubuntu.org/KubuntuNetboot.

Rosetta Language Packs
----------------------

Language packs now come direct from Rosetta, our web based translation
application. The language packs will be updated during the release so
it is not too late to start translating.

* https://launchpad.net/distros/ubuntu/+translations

Improved Documentation
----------------------

The new Kubuntu Desktop Guide gets you started with you new Kubuntu install.

On the Server
=============

  * New Linux builds targeted at server platforms. The server kernels
    are tuned differently than the desktop kernels (providing better
    performance for server applications).

  * There are both low-end, and "big iron" server kernels. The low-end
    server kernel is generic, and should work on the same equipment that
    the desktop kernel runs on. The highend server kernel is geared
    towards systems with greater than 8 CPUs (ES7000 / Summit / BIGSMP).

  * Turn-key LAMP installation for this common deployment scenario.

  * Improved support for clusters and SANs.

  * Numerous thin client enhancements, including faster client
    startup, graphical boot process, reduced memory requirements, and
    sound device support.

Downloading and Installing
==========================

Kubuntu 6.06 LTS can be downloaded from
http://releases.ubuntu.com/kubuntu/6.06 and then burned onto a
writable CD or DVD. It is available for PC (i386), 64-bit PC (AMD64)
and Mac (PowerPC) as Desktop CD (runs a Desktop from the live CD and
allows for install), Alternate CD (text installer) or combined
desktop/ alternate DVD.

Please download using Bittorrent if possible.

The CDs require 700MB media.

Recommended Minimum Requirements
--------------------------------

Install Type    Memory         Hard Drive Space
Desktop         256 megabytes  3 gigabytes
Server          64 megabytes   500 megabytes

Upgrading from 5.10
===================

Users of Kubuntu 5.10 can upgrade to 6.06 LTS over the internet by following
these instructions:

  * In Adept go to Manage Repositories and change "breezy" to "dapper"
  * Click "Fetch Updates"
  * Click "Full Upgrade"
  * Click "Commit"
  * After all packages have installed reboot the computer

If you have a Kubuntu 6.06 CD put it in the drive and run apt-cdrom
from the command line then follow the instructions above.

Feedback and Helping
====================

We welcome feedback and help with making the next version of Kubuntu.

Comments can be left on this wiki page

 * https://wiki.kubuntu.org/KubuntuDapperReleaseComments

Any known problems can be found at

 * https://wiki.kubuntu.org/KubuntuDapperKnownProblems

Please report any problems through Launchpad.

 * http://launchpad.net/distros/ubuntu/+bugs

If you have a question try asking on the #kubuntu IRC channel on
freenode, the kubuntu-users mailing list and the Kubuntu
Forums. Community support is also available in a increasing number of
languages.

 * http://lists.ubuntu.com/mailman/listinfo/kubuntu-users
 * http://www.kubuntuforums.net
 * http://kubuntu.org/forums-local-groups.php

Finally if you want to help improve Kubuntu please come and join us.

 * https://www.kubuntu.org/HelpingKubuntu

Contact
=======

For more information about Kubuntu visit our website:

 * http://kubuntu.org
```

The first announcement for Xubuntu 6.06 can, of course, be found on the
[Ubuntu Mailing Lists](https://lists.ubuntu.com/archives/ubuntu-announce/2006-June/000084.html)
site as well, reading:

```
Xubuntu is the newest official Ubuntu derivative distribution, using the
Xfce desktop environment and a selection of GTK2 applications.  Its
lightweight footprint is well suited for low-end hardware and thin
clients.  Xubuntu builds on the solid foundation of Ubuntu, with
world-class hardware support and access to a vast repository of
additional software.

This announcement highlights some of the features in Xubuntu 6.06,
download and installation notes, known issues, and frequently asked
questions. Please read these notes before, during, and after
installation and configuration, and before reporting bugs in
Launchpad: https://launchpad.net/malone/distros/ubuntu

== Downloading Xubuntu 6.06 ==

You can download Xubuntu 6.06 from the following URL:

    http://cdimage.ubuntu.com/xubuntu/releases/6.06/release/

You can also download all architecture types of Xubuntu 6.06 using
BitTorrent and Jigdo.

=== On the Desktop ===

  * Xfce 4.4beta1 including a more flexible panel, many panel plugins
and icons on the desktop
  * Thunar file manager
  * GDM desktop manager
  * Gnome Office (latest Abiword and Gnumeric)
  * Evince document viewer
  * Xarchiver archive manager
  * Xfburn simple CD burner
  * Xubuntu System Tools for GUI system administration
  * Firefox 1.5.0.3
  * Thunderbird 1.5.0.2
  * Package updates manager
  * Graphical .deb package installer (''GDebi'')

  * New documentation (''Xubuntu Desktop Guide'')
  * New and more consistent artwork

and more.

In addition, OpenOffice.org and Gnome CUPS Manager are included on the
alternate CD but not installed by default.

=== Thin clients ===

  * The alternate CD includes an option to automatically install an LTSP
server environment for quick and painless deployment of thin client
networks.
  * Xfce and a selection of lightweight applications are provided, to
minimize network overhead and maximize the number of thin clients which
can be served by a single server

=== "Under the hood" ===

   * GCC 4.0.3

   * glibc 2.3.6

   * Linux 2.6.15.7

As always, Xubuntu includes the very best of the 100% Free / Libre
application software world, and each new release incorporates
countless new features and bugfixes from the global development
community.

== Downloading and Installing ==

Xubuntu 6.06 supports three (3) major architectures: Intel x86, AMD64,
and PowerPC. Depending on your needs, you might manage with less than
some of the recommended hardware listed in the table below. However,
most users risk being frustrated if they ignore these suggestions.

=== Recommended Minimum Requirements ===

To run the Desktop CD at lest 128 megabytes of RAM are required. To use
the installed system at least 64 megabytes of RAM is required but 128 is
recommended. At least 1.4 gigabytes of disk space is required.

=== Known Issues ===

  * The menu editor (xfce4-menueditor) doesn't work as expected, and
might eat your menu. To restore the default menu: remove
~/.config/xfce4/desktop/menu.xml, log out from Xfce and then log in again.

  * Other issues may already be listed here

  https://launchpad.net/people/xubuntu-team/+subscribedbugs

== Getting Help and Technical Support ==

Technical Support for Xubuntu 6.06 is available from a variety of
sources: from the community, from Canonical Ltd, from recognized
organizations, and from developers directly through open web forums,
mailing lists and IRC channels:

  * http://www.ubuntu.com/support

If you have a question, or if you think you may have found a bug but
aren't sure, first try asking on the #ubuntu or #xubuntu IRC channels on
Freenode, on the Ubuntu Users mailing list, or on the Ubuntu forums:

  * http://lists.ubuntu.com/mailman/listinfo/ubuntu-users
  * http://lists.ubuntu.com/mailman/listinfo/xubuntu-devel
  * http://www.ubuntuforums.org


== Reporting Bugs ==

Your comments, bug reports, patches and suggestions will help fix bugs
and improve future releases. Please report bugs through Malone:

  http://bugs.ubuntu.com/


== More Information ==

You can find out more about Xubuntu and about the 6.06 release on our
website, IRC channel and wiki. If you're new to Xubuntu, please visit:

  http://www.xubuntu.org/
```

Interestingly, the announcement for Edubuntu can not be found (if there is, fix
it on [GitHub](https://github.com/Keyboard1000n17/OSPedia)!), but the
announcement for its beta can be found on the
[mailing lists](https://lists.ubuntu.com/archives/ubuntu-announce/2006-April/000069.html),
and it states:

```
== Edubuntu 6.06 LTS Beta Released ==

The Edubuntu team is happy to announce the release of Edubuntu 6.06 LTS
Beta.
Aside from the usual install CDs for all architectures, this release
includes the Edubuntu live CD that comes with a new live installer to
install the Edubuntu Workstation flavour directly to the disk.

Edubuntu is a classroom distribution, shipping with a selection of
educational applications and built around LTSP the linux terminal server
project. Edubuntu aims for an as easy-as-possible installation of an
LTSP setup, but also comes with a workstation flavour for home usage.
The Edubuntu 6.06 LTS (long term support) release comes with 3 Year
support on the desktop and 5 year support on the server.

== Downloading Edubuntu 6.06 LTS Beta ==

To download Edubuntu 6.06 LTS Beta, use one of the following URLs,
please use bittorrent if possible:

 * United States: http://us.releases.ubuntu.com/edubuntu/6.06/
 * Europe: http://se.releases.ubuntu.com/edubuntu/6.06/
 * United Kingdom: http://releases.ubuntu.com/edubuntu/6.06/
 * Rest of the World: http://releases.ubuntu.com/edubuntu/6.06/

The final release of Edubuntu 6.06 LTS Beta will be released on June
1st, at which time you will be able to order pressed install CDs free of
charge.

== Whats New ? ==

 * Edubuntu ships three themes by default in its -artwork package now,
   with a simple dpkg-reconfigure edubuntu-artwork you are able to
   select the systemwide default look. The choices are Junior (6-10 age
   group), Senior (10-16 age group) *default* and Plain (less graphic
   rich).
 * Themed graphical login manager for the LTSP clients.
 * Support for multiple architectures for the LTSP clients (It is now
   possible to build the client chroot on AMD64 systems for i386
   clients by running sudo ltsp-build-client --arch i386 post install).
 * The first Edubuntu live CD is now available (it contains all of the
   Edubuntu workstation install and is available for all 3 supported
   architectures).
 * Support for the PowerPC architecture was added
 * LTSP now finally supports the X_COLOR_DEPTH variable to force the
   usage of 16Bit on the clients through lts.conf.
 * By default we now install only the linux-image package in the client
   chroot, the excessive memory usage of the restricted modules package
   is gone
 * A special netboot mode was introduced to initramfs so only network
   device drivers are loaded, this reduces the size to two thirds of a
   normal initramfs and speeds up the bootprocess
 * LTSP now understands the X_MOUSE_DEVICE and X_MOUSE_PROTOCOL
   in lts.conf options and adds support for various serial devices
   including touchscreens and serial tablets.
 * 3 button emulation of 2 button mice is now supported as well.
 * The bootprocess has seen a lot of speed improvements
 * Startup links in rcS.d and rc2.d are now started based on whitelists
   (RC2_WHITELIST RCS_WHITELIST), only the bare minimum of processes is
   started on the thin clients
 * this results in a shorter boottime.
 * Usplash was included and enabled by default on thin clients - Many
   patches were merged from the debian team to make the packages work
   on debian as well.
 * There is optional Sound support on the thin clients now.
 * The ltsp-build-client script now has options to manually enable
   extra and security mirrors during chroot creation.
 * The default mirror of ltsp-build-client points to
   archive.ubuntu.com  now.

== Feedback and Helping ==

If you want to help us developing, documenting and improving edubuntu,
have a look at:

 * https://wiki.edubuntu.org/EdubuntuCommunity

== More Information from online ressources ==

For more information see the edubuntu website, wiki and mailing list:

 * https://www.edubuntu.org

 * https://wiki.edubuntu.org

 * https://lists.ubuntu.com/mailman/listinfo/edubuntu-devel
```

## System requirements

The system requirements for Ubuntu (and Kubuntu) 6.06 LTS were different for
desktops and servers.

For desktops, the recommended minimum requirements were 256 MB of RAM and 3 GB
of hard drive space.

For servers, the recommended minimum requirements were 64 MB of RAM and 500 MB
of hard drive space. Ubuntu would only take part of the hard drive space; most
of the space would be allocated to server applications.

The notes state that while the user might be able to work with less than these
specifications. they risk having a frustrating experience.

The requirements for Xubuntu were not the same as the main Ubuntu due to Xfce
being lighter in weight and had these minimal requirements:

- 128 MB to run the Desktop CD
- 64 MB to run the installed system, although 128 MB was recommended
- At least 1.4 GB of hard drive space
