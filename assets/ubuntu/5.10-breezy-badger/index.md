---
title: Ubuntu 5.10 Breezy Badger
favicon: 5.10-breezy-badger-icon.webp
order: 30
background_image: 5.10-breezy-badger-wallpaper.webp
---

Ubuntu 5.10 (Breezy Badger) is the third release of Ubuntu developed by
Canonical Ltd. and released on 12th or 13th of October, 2005. It introduced a
graphical splash screen with a progress bar, new documentation like the Quick
Tour and FAQ Guide and updates to GNOME. The release also saw the introduction
of Edubuntu, an official flavor of Ubuntu designed for educational/academic
environments, and Ubuntu for Servers, a separate CD specifically designed for
servers.

+++

Breezy upgraded the Linux kernel to 2.6.12.6 and added support for cluster
filesystems on the server. Cluster filesystems are a type of filesystem that
share data by being simultaneously mounted on multiple servers. Besides these,
Canonical added many quality-of-life and aesthetic improvements to Ubuntu.
Interestingly, Kubuntu 5.10 was announced separately.

## Features

Ubuntu 5.10 adds many improvements:

### GNOME 2.12.1

GNOME was updated to 2.12.1 from 2.8 in
[Ubuntu 5.04](/ubuntu/5.04-hoary-hedgehog/) and includes some customizations.
The GNOME menus are now editable, allowing users to customize the menus for
Applications, System, Places, and more. Also, the GNOME logo in the top-left
corner has been replaced with the Ubuntu logo.

### Hardware support improvements

- The Linux kernel recieved updated hardware support in the 6-month period
  between Hoary and Breezy, which directly caused Ubuntu to have better hardware
  support.
- HP all-in-one scanner/printer are now supported out of the box along with
  Bluetooth input devices like keyboards and mice, so users no longer had to
  manually find drivers for their HP all-in-one printer and/or Bluetooth
  devices.
- Better handling was added for multiple audio devices along with allowing the
  user to select the default audio device.
- 64-bit PowerPC machines were now supported, although the experience was subpar
  as most drivers and software for PowerPC was 32-bit.

### X.org 6.8.2

The X.org version did not change between the release of Hoary Hedgehog and
Breezy Badger, so at the time of release, X.org 6.8.2 was still the latest
version (X.org 6.9, the next version, was released in December of 2005).

X.org 6.8.2 was released as a maintenance update in February 2005, containing
bug fixes, security updates and 5 new video drivers

### Thin client integration

The release announcement states that Ubuntu was the first distribution to have
integrated thin client technology. A thin client is a simple, low-performance
computer optimized for remote connection to a server-based environment, where
the server performs most of the workload and the client is just used to access
the server. This allows Ubuntu to be deployed in large-scale networked
environments or even in classrooms with a lightweight Ubuntu image booting over
the network (see release announcement and the Edubuntu section).

### OEM installer support

Breezy Badger allows OEM (Original Equipment Manufacturing) hardware vendors to
pre-install and test Ubuntu without configuring end user information like the
username, password and timezone, which the end user will configure on first
boot. The OEM install mode was available in the boot menu of the installer.

### Launchpad integration

Launchpad is a web application/website developed and maintained by Canonical
Ltd. that allows users to develop and maintain software, especially open-source
software.

With this release, the Ubuntu project began using Launchpad to manage various
aspects of the project like translation, bug tracking and sharing code patches,
fixes and technical support, allowing users to easily contribute to the project.

### Better server support

The release of 5.10 brought about separate install CDs for servers, and it had a
separate announcement as well, with the main Ubuntu 5.10 announcement referring
to it briefly. The announcement states that the server edition is distinguished
from the default Ubuntu by the following features:

- Server-oriented kernels are included out of the box, removing the need for
  installing some kernels optimized for servers manually.
- Plone 2.1 and Zope 2.8.1 were also available. Plone is an open-source Content
  Management System (think, WordPress) and Zope is a free and open-source web
  application server written in Python.
- The PHP version was upgraded from 4 to version 5. PHP is a popular open-source
  server-side scripting language designed for web development.
- Thin client functionality was also added (see above).
- Simple NFS-root setup was added with automatic hardware detection. NFS root or
  Network FileSystem root is a way for a computer to boot without local storage
  by mounting its filesystem over the network from a server.
- There was support for up to 4 GB of RAM on 32-bit architectures like x86. 4 GB
  was the limit as that was the maximum supported by _any_ 32-bit architecture
  without special methods like Physical Address Extension.

### Installation

Ubuntu added an OEM mode for simple pre-installation on commercial consumer
hardware (see above).

Breezy automatically made existng hard drive partitions available to the
desktop, meaning that users no longer had to manually mount their partitions
through the terminal by using `mount` commands or edit `/etc/fstab` to mount
partitions on boot.

There was also an option during installation to dual-boot with other operating
systems that automatically resized an existing installation of another operating
system. This meant that users were able to easily install Ubuntu to try the
relatively new and user-friendly Linux distribution while keeping their default
OS—for example, [Windows](/windows/) or [Mac OS X (now macOS)](/macos/)—for
general use like office software that was unavailable for Linux or playing
games.

The second stage of the installation was updated with a progress bar, allowing
users to see how much they had left in the second stage. The first stage is
where files are copied from the CD and user preferences/settings are saved to
the disk; the second stage is where the name, host name, username and password
are configured and the files, specifically the packages, are unpacked on the
disk so that they can actually be used.

### Updated/improved core components

The Badger release also brought about newer versions of packages:

- The GNU Compiler Collection, or GCC, was updated to 4.0.1.
- The GNU C Library, or `glibc`, was updated to 2.3.5.
- Early userspace infrastructure based on `initramfs-tools` was introduced to
  replace the older `initrd` system. `initramfs` is a small filesystem archive
  (specifically, a `cpio` archive) that is loaded into RAM during boot that
  serves as a temporary root filesystem and loads the necessary drivers to read
  the disk. Its only purpose is to mount the real root filesystem and hand over
  control to it <!-- according to linuxfromscratch.org! -->. This is still used
  today and applies to most Linux systems. `initrd` was used before `initramfs`,
  and it serves the same purpose but does it in a different way.
- X.org packaging was made more modular by being split into multiple small
  packages. The server, video drivers, input drivers, fonts and user tools were
  separated into various packages, and they did not pull dependencies
  automatically; the user had to mix and match packages, however usually this
  was not required for most users as the `ubuntu-base` metapackage would pull in
  the appropiate packages.
- Python was upgraded from 2.4.1 in Hoary to 2.4.2 in Breezy. 2.4.2 was a bugfix
  release, and according to the Python website, "more than 60 bugs have been
  squashed since Python 2.4.1".

## Edubuntu

Edubuntu is a flavor of Ubuntu designed specifically for educational/academic
environments. It includes extra software on top of the base Ubuntu to tailor it
to the academic environments it is designed for.

Edubuntu debuted with the release of Breezy. It included most of the `kdeedu`
suite, an educational suite of programs designed to teach and train students in
various fields, `gcompris`, another set of educational applications developed by
KDE for ages 2-10, and more (read announcements).

## Announcement

The release announcement for Ubuntu 5.10 can be found
[here](https://lists.ubuntu.com/archives/ubuntu-announce/2005-October/000038.html),
and it states:

```
The Ubuntu team is proud to announce Ubuntu 5.10. This is the
official Ubuntu 5.10 release, and includes installation
CDs, live CDs, and combination DVDs for three architectures.

Ubuntu is a Linux distribution for your desktop or server, with a
fast and easy install, regular releases, a tight selection of
excellent packages installed by default, every other package you can
imagine available from the network, a commitment to security updates
for 18 months after each release and professional technical support
from many companies around the world.

To Get Ubuntu 5.10
--------------------

Download Ubuntu 5.10 here (choose the mirror closest to you):

  United States:
    http://us.releases.ubuntu.com/releases/5.10/

  Europe:
    http://se.releases.ubuntu.com/5.10/

  United Kingdom:
    http://releases.ubuntu.com/5.10/

  Rest of the World:
    http://releases.ubuntu.com/5.10/

Please download using Bittorrent if possible.

To burn the Ubuntu 5.10 CD images to disk, you will need 700MB
media.

To receive a complimentary copy of the Official Breezy Badger CD --
or a handful of them to give to your friends, your school or LUG --
place your request at the URL below.

  http://shipit.ubuntu.com/



About Ubuntu 5.10
-----------------

With this release, the Ubuntu family grows in several significant
directions:

  * Edubuntu
       A partner distribution based on Ubuntu that is specially
       focused on the needs of schools. Developed in partnership
       with the K12-LTSP community, this is a great base distro
       for people working with FLOSS in schools.  Watch for a
       subsequent announcement with download information for
       Edubuntu.

       http://www.edubuntu.org/

  * Ubuntu for Servers
       This is a CD installer specifically optimised for server
       installation.  Watch for a subsequent announcement with
       download information for the new Server CD.

Major new features in Ubuntu 5.10 include:

  * Thin Client Integration
       Ubuntu is the first distribution in the world to include
       deeply-integrated thin client technology. This allows you
       to deploy Ubuntu in large scale networked environments or,
       for example, in classrooms, with a lightweight Ubuntu image
       booting over the network. All Ubuntu management tools work
       for the thin client image as well as for the server.

  * OEM Installer Support
       This release of Ubuntu has special support for OEM hardware
       vendors. Ubuntu can be pre-installed and tested without
       configuring end user information. The user will be asked to
       complete that configuration (name, timezone and password)
       upon first startup.

  * Launchpad Integration
       Launchpad.net is the new infrastructure that Ubuntu and its
       derivatives use for translation, bug tracking, sharing code
       patches, fixes and technical support. Users of Ubuntu 5.10
       can make technical support requests for any package in Ubuntu,
       and can help to translate their software, directly from the
       built-in Help menu in every desktop application.


To see it all, you'll need to try the CD, but the highlights
of Ubuntu itself include:

 On the Desktop

  * GNOME 2.12.1
  * OpenOffice.org 2.0 beta 2
  * X.org 6.8.2 with wider hardware support
  * An enhanced tool for easily installing new applications
    (see "Add Applications" on the Applications menu)
  * A new tool which makes it easy to install support for
    multiple languages (Language Selector)
  * Editable GNOME menus
  * Applications are now linked into the Launchpad infrastructure
    (new entries on the Help menus for translation and support)
  * Support for writing audio CDs (Serpentine)
  * Graphical startup process with progress bar (USplash)
  * New documentation (Ubuntu 5.10 Quick Tour and Ubuntu 5.10 FAQ Guide)
  * Language packs with updates from the Rosetta translation platform,
    part of Launchpad.net, which makes contributing translations easy
    for everybody in any language.

 On the Server

  * Kernel support for cluster filesystems (OCFS2 and GFS)
  * Plone 2.1 & Zope 2.8.1
  * PHP5
  * Support for automatic storage allocation into LVM volumes
  * Built-in thin client functionality produced in cooperation
    with the LTSP project (http://wiki.ubuntu.com/ThinClientHowto)
  * Simple NFS root setup with automatic hardware detection
    through initramfs-tools
  * Support for up to 4 gigabytes of RAM by default on 32-bit
    architectures

 Hardware Support Improvements

  * Linux 2.6.12.6 with many updated drivers from third parties
  * Further enhancements to laptop support (hot keys,
    and working suspend/resume on more models)
  * HP all-in-one printer/scanner devices are supported out of
    the box
  * Bluetooth input devices (such as keyboards and mice) are
    supported out of the box
  * Multiple audio devices are handled more gracefully (and one
    can easily select the default device)
  * 64-bit PowerPC kernel available

 Installation

  * A new OEM mode to simplify the process of preinstalling
    Ubuntu on computers for resale or redistribution
  * Automatically makes existing hard drive partitions available
    to the desktop
  * Simple "dual boot" configuration with automatic resizing of
    an existing installed OS
  * The second stage of the installation now has a progress bar

 "Under the hood"

  * GCC 4.0.1
  * glibc 2.3.5
  * New early userspace infrastructure based on initramfs-tools
  * More modular X.org packaging
  * Python 2.4.2

As always, Ubuntu includes the very best of the 100% free/libre
application software world, and each new release incorporates
countless new features and bugfixes from the global development
community.

Feedback and Helping
--------------------

If you would like to help shape Ubuntu, take a look at the list of
ways you can participate at

  http://www.ubuntu.com/community/participate/

Your comments, bug reports, patches and suggestions will help ensure
that our next release is the best release of Ubuntu ever.  Please
report bugs through Launchpad:

  http://launchpad.net/distros/ubuntu/+bugs

If you have a question, or if you think you may have found a bug but
aren't sure, first try asking on the #ubuntu IRC channel on Freenode,
on the Ubuntu Users mailing list, or on the Ubuntu forums:

  http://lists.ubuntu.com/mailman/listinfo/ubuntu-users
  http://www.ubuntuforums.org/


More Information
----------------

You can find out more about Ubuntu on our website, IRC channel and wiki.
If you're new to Ubuntu, please visit:

  http://www.ubuntu.com/


To sign up for future Ubuntu announcements, please subscribe to Ubuntu's
very low volume announcement list at:

  http://lists.ubuntu.com/mailman/listinfo/ubuntu-announce
```

As for Kubuntu 5.10, the
[announcement](https://lists.ubuntu.com/archives/ubuntu-announce/2005-October/000039.html)
was separate, and it stated:

```
Announcing Kubuntu 5.10

[13 October 2005]
http://kubuntu.org/announcements/breezy-release.php

The second release of Kubuntu, codenamed Breezy Badger, is now
available for download. This release comes with the very latest KDE
3.4.3 and includes the new Guidance configuration tools. If you missed
our testing releases for Breezy you will be pleased to see the other
new additions in Kubuntu Breezy including Adept package manager,
System Settings and KDE Bluetooth. To download Kubuntu 5.10 go to:

 http://www.kubuntu.org/download.php

What's New
----------

Here is what's new in Kubuntu 5.10

Adept and Adept-Updater

 Adept is a new package manager for KDE. With advanced search
 facilities using debtags, hunting for packages is now easier than
 ever.

 To help keep your system current, adept-updater checks to see which
 packages have changed and makes it easy to download and install the
 latest fixes.

KDE System Settings

 Kawabunga! The traditional KDE Control Center has been replaced with
 KDE System Settings. This change is not part of KDE, but is unique to
 Kubuntu. The new interface is cleaner, faster, simpler and comes with
 improved usability features such as quick search.

Guidance Configuration Tools

 Guidance is a set of configuration tools new to Kubuntu. Currently
 included are modules for user accounts, mount configuration and
 system services selection.  You can find the Guidance modules in
 System Settings.

KDE Language Packs

 Kubuntu now includes KDE translations on the CD for the most popular
 languages,
 over 50 languages are supported in total.

KDE Bluetooth Framework

 The KDE Bluetooth tools aim to provide easy access to Bluetooth
 profiles and facilitate the communication between Bluetooth enabled
 devices such as cell phones and PDAs.

Katapult

 Katapult is used to start applications and bookmarks. Just press
 Alt+Space then type the name of the program you are interested in, it
 will quickly become the most useful tool on your desktop.

OpenOffice.org 2

 OpenOffice.org 2 is installed by default and now comes with KDE
 integration.

GStreamer for AmaroK and Kaffeine

 Our Kaffeine video player and AmaroK music player now use the
 GStreamer media framework, a large range of GStreamer plugins are
 available to support a wide range of different media file formats.

Krita

 A new advanced image editor program from KOffice.

KLaptopDaemon

 To help out our laptop users, KLaptopDaemon now works for hibernation
 and uses acpi.

Locate File Search

 Having problems finding that file? In Konqueror just type locate:/
 followed by what you are looking for. Konqueror will search for it.

 Searching for something on the web? Use Konqueror's search bar and
 Google suggest to help find exactly what you are looking for.

KOffice 1.4 and Kexi

 KOffice 1.4 is now included in the main repository. This lightweight
 but powerful office suite includes Kexi, a powerful database
 frontend.

X.org 6.8.2

 For better hardware support Kubuntu 5.10 has updated X.org to version
 6.8.2 and comes in new modular packages.

KDE WinFOSS

 Free Software for Windows machines is on the Live CDs. This includes
 some of the leading KDE applications: KOrganizer, KAddressbook and
 Kexi.


Off the Desktop

  . PHP5
  . LVM Volumes
  . Support for thin client devices
  . Support for 4 GB of RAM
  . Linux 2.6.12.6
  . 64-bit PowerPC Linux build

Downloading and Installing

 Kubuntu 5.10 can be downloaded from
 http://releases.ubuntu.com/kubuntu/5.10 and then burned onto a
 writable CD or DVD. It is available for PC (i386), 64-bit PC (AMD64)
 and Mac (PowerPC) as install CD, live CD or combined live/install
 DVD.

 Please download using Bittorrent if possible.

 The PowerPC live CD is larger than 650MB so please ensure you have
 appropriate media.

 Users of Kubuntu 5.04 (Hoary) can upgrade to Breezy by editing
 /etc/apt/sources.list and running sudo apt-get update && sudo apt-get
 dist-upgrade.  Existing Ubuntu users can install Kubuntu with the
 kubuntu-desktop package.

Feedback and Helping
--------------------

 We welcome feedback and help with making the next version of Kubuntu.

 Comments can be left on this wiki page

  https://wiki.ubuntu.com/KubuntuBreezyReleaseComments

 Any known problems can be found at

  https://wiki.ubuntu.com/KubuntuBreezyKnownProblems

 Please report any problems through Bugzilla (main packages) or
 Launchpad
 (universe packages).

  http://launchpad.net/distros/ubuntu/+bugs http://bugzilla.ubuntu.com

 If you have a question try asking on the #kubuntu IRC channel on
 freenode, the mailing list and the Kubuntu Forums. Community support
 is also available in a increasing number of languages.

  http://lists.ubuntu.com/mailman/listinfo/kubuntu-users
  http://www.kubuntuforums.net
  http://kubuntu.org/forums-local-groups.php

 Finally if you want to help improve Kubuntu please come and join us.

  https://www.ubuntulinux.org/wiki/HelpingKubuntu
```

The Edubuntu release
[announcement](https://lists.ubuntu.com/archives/edubuntu-devel/2005-October/000651.html)
says:

```
Edubuntu 5.10 Released

13 October 2005
http://wiki.edubuntu.org/EdubuntuReleaseAnnouncement

The Edubuntu team is proud to announce the first Edubuntu release
Edubuntu 5.10.

The Edubuntu 5.10 release consists of an Install CD for the PC (Intel
x86) ad 64-bit PC (AMD64) architectures.

Edubuntu is a flavour of the Ubuntu Linux operating system, which is
optimised for classroom use. It has been developed in collaboration
with
teachers and technologists around the world. The aim of Edubuntu is
that
an educator with limited technical knowledge and skill should be
able to
set up a computer lab, or establish an on-line learning
environment, in
an hour or less, and then administer that environment without
having to
become a fully-fledged Linux geek. This is our first step towards that
goal.

Principal design goals of Edubuntu are centralized management of
configuration, users, and processes, together with facilities for
working collaboratively in a classroom setting. Equally important
is the
gathering together of the best available free software and digital
materials for education.

Edubuntu is built on top of the solid and stable Ubuntu base, and
incorporates the LTSP thin client architecture, as well as
Education-specific applications, aimed at the 6-18 age group. It also
aims to allow resource poor environments to maximise their available
(older) equipment.

Based on Ubuntu, the new Edubuntu features a fast and easy install,
regular releases, a tight selection of excellent packages installed by
default, any other package you can imagine available from the network,
and a commitment to security updates for 18 months after each release.
We will also be pursuing establishing a network of professional
technical support from companies around the world as Edubuntu grows.


To get Edubuntu 5.10
--------------------

Download Edubuntu 5.10 here (choose the mirror closest to you):

      * United States
                http://us.releases.ubuntu.com/releases/edubuntu/5.10/

      * Europe
                http://se.releases.ubuntu.com/edubuntu/5.10/

      * United Kingdom
                http://releases.ubuntu.com/edubuntu/5.10/

      * Rest of the World
                http://releases.ubuntu.com/edubuntu/5.10/

Note:  Please download using Bittorrent if possible.

Note that the CD images are larger than 650MB, so you will need to
ensure you have 700MB blank CDs and a burner capable of using them.


About Edubuntu 5.10
--------------------

Highlights of Edubuntu include: (much of what Ubuntu now offers, with
some variations and additions)

      * On the Desktop

              * A set of selected educational apps including

                     a. most of the kdeedu suite

                     b. gcompris

                     c. scribus desktop publishing

                     d. blender 3D modelling

                     e. dia diagram editing

                     f. and lots more ...

              * Fresh, colourful artwork for the desktop

              * Full ltsp client functionality by default

      * On the Server

              * Standalone Classroom server installed by default,
based
                on the brand-new Ubuntu thin client infrastructure
                developed in cooperation with LTSP.

              * Simple NFS root setup with automatic hardware
detection
                through initramfs-tools

              * Support for up to 4 gigabytes of RAM by default on
                32-bit architectures

              * Kernel support for cluster filesystems (OCFS2 and GFS)

      * Installation

              * Automated installation of the thin client
environment by
                default

              * Easy installation of the ltsp server by default
with as
                few questions as possible

              * Optional workstation install for standalone
workstations
                (just type "workstation" at the CD bootprompt)


As with Ubuntu, Edubuntu includes the very best of the 100% FREE /
LIBRE
application software world, and each new release incorporates
countless
new features and bug-fixes from the global development community.


Edubuntu 5.10 Installation Notes
--------------------------------

The default Edubuntu install works a bit different from a default
Ubuntu
install, please see http://wiki.edubuntu.org/EdubuntuInstallNotes for
known issues, hints for the installation and post installation
considerations.


Community Feedback and Participation
------------------------------------

If you would like to help build and shape Edubuntu, or just find out
some more about the project, take a look at our site:

      * http://www.edubuntu.org/

Your comments, suggestions, bug reports, patches and artwork
contributions will help us to make Edubuntu the best educational
distro
available.

Please report any bugs you find through Bugzilla:

      * http://bugzilla.ubuntu.com/

If you have a question, or if you think you may have found a bug but
aren't sure, first try asking on the #edubuntu IRC channel on
FreeNode,
and/or on our Edubuntu-Devel mailing list:

      * http://lists.ubuntu.com/mailman/listinfo/edubuntu-devel


We welcome feedback and help with making the next version of Edubuntu.

 Comments can be left on this wiki page

      * http://wiki.edubuntu.org/EdubuntuBreezyReleaseComments


```

(Note that formatting is preserved to match the formatting of the announcement)

## System requirements

The
[manual](http://old-releases.ubuntu.com/ubuntu/dists/breezy/main/installer-i386/current/doc/manual/en/ch02.html)
for Ubuntu 5.10 states the following system requirements:

- 32 MB of RAM
- 110 MB of hard drive space (250 MB for a minimal console-based system with all
  standard packages)
- Any processor newer than the Intel 80286 with an architecture supported by the
  Linux kernel and with ports for core utilities.

However, these were the **bare** minimum and could **technically** run Ubuntu
5.10, but usability would be almost non-existent with those specifications and
an Intel 80386. For a much better and more usable system, the manual states
these as the recommended minimum system specifications for these configurations:

- **No desktop**: 64 MB RAM and 400 MB of disk space
- **With Desktop**: 128 MB RAM and 2 GB of disk space
- **Server**: 128 MB RAM and 4 GB of disk space

The recommended minimum processor was a Pentium 100 for desktop systems and
Pentium II-300 for servers.

It is also noted in the manual that the user might manage with less than some of
the recommended specifications, but most users risk being frustated if they
attempt to do so.
