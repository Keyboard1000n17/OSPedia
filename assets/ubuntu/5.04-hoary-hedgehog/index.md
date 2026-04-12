---
title: Ubuntu 5.04 Hoary Hedghehog
favicon: 5.04-hoary-hedgehog-icon.webp
order: 20
background_image: 5.04-hoary-hedgehog-wallpaper.webp
---

Ubuntu 5.04 (Hoary Hedgehog) is the second release of Ubuntu, launched by
Canonical Ltd. on 8 April 2005. It was available as a digital download or on
physical media, including CD and DVD. Unlike its predecessor, 5.04 expanded live
CD support to AMD64 and PowerPC architectures. A combined install/live DVD was
also offered, which contained both the installer and a live environment on a
single disc.

+++

Ubuntu 5.04 introduced the first "official flavor", Kubuntu, which used the KDE
desktop environment as the default, while the main Ubuntu release continued to
use GNOME 2.8. The GNOME desktop retained much of the layout from Warty Warthog
but included minor refinements to panels and menus. It also used the 2.6.10
release of the Linux kernel.

## Features

The announcement for Ubuntu 5.04 listed these features:

### Simple and fast installation

Like its predecessor, [Ubuntu 4.10](/ubuntu/4.10-warty-warthog/index.md), Hoary
Hedghehog has a text-based installer. The supported architectures were also the
same as before: i386/x86, amd64/x86_64 and PowerPC.

However, the installer was modified in a few ways:

- The screen that is shown when the install CD is booted shows the Ubuntu logo
  as well as some text. However, the text differs between the two releases.

  In Ubuntu 4.10, the installer shows the following text:

  `Press F1 for help or ENTER to boot: _`

  The cursor indicates that it is a text field, which lets the user type in
  kernel parameters and boot options. The text is very concise but does not much
  help except instructing to press F1 for help. Boot options/parameters passed
  allow Linux to boot properly on some configurations where it can't autodetect
  hardware.

  However, in Ubuntu 5.04, the installer shows the following text:

  ```
  The default installation is suitable for most desktop or laptop systems.
  Press F1 for help and advanced installation options.

  To install the base system, type 'server' then ENTER.
  For the default installation, press ENTER.

  boot: _
  ```

  This gives more information and clarity, especially the fact that the default
  installation is suitable for most setups. It also immediately mentions that
  passing `server` as a parameter will install the base system, which is a
  minimal install that only includes core utilities that are important to
  interact with the system and make it usable.

### Live CDs for multiple architectures

However, in contrast to its predecessor, it has Live CDs for the three
architectures it can be installed on.

### GNOME 2.10.1

Ubuntu 5.04 also included GNOME 2.10.1, the latest stable release at the time.
Kubuntu also came with KDE 3.4.0.

### Firefox 1.0.2

In the 6-month timeframe between the release of Ubuntu 4.10 and 5.04, Firefox
1.0 was released and had two patches leading to version 1.0.2. It was the latest
at the time of release of Hoary, so it was included in the full install.

### Productivity software

The release includes Evolution 2.2.1.1, an open-source personal information
manager that combines mail, calendar, contacts and more into one application,
and OpenOffice.org 1.1.3, an office productivity suite with a word processor,
slideshow program and spreadsheet program.

### X.org 6.8.2

The release announcement states that X autodetection and laptop screen detection
had had considerable updates based on community participation, and that ATI and
Nvidia drivers were available and could be installed easily, although Ubuntu
would still use open source drivers by default.

Besides these,

- There is a new GUI-based update manager. Users are notified of updates by the
  `update-notifier` program.
- The release added better support for Suspend/Hibernate options, which allowed
  the system to stop using power altogether and _properly_ resume at a later
  time; earlier it was unreliable.

## Announcement

The
[Ubuntu Maiing Lists](https://lists.ubuntu.com/archives/ubuntu-announce/2005-April/000023.html)
site hosts the original announcement for Ubuntu 5.04. Sent by Matt Zimmerman, it
states:

```
The Array (*) is pleased to announce the second release of Ubuntu!

If you've heard all about Ubuntu and just want to get the Install CD
or test the Live CD, you can download it here immediately:

  http://www.ubuntulinux.org/download/

If you want a shrinkwrapped CD we will gladly ship it to you at no
cost.  To receive a complimentary copy of the Hoary Hedgehog CD -- or
a handful to give to your friends, your school or LUG, place your
request at:

  http://shipit.ubuntulinux.org/

Ubuntu is a Linux distribution for the desktop or the server that
includes all of Debian as well as most of the packages of apt-get.org,
with a fast and easy install, regular releases (every six months), a
tight selection of excellent packages installed by default and a
commitment to security updates with 18 months of security and
technical support for every release.

Although Ubuntu includes more packages than any other Linux
distribution, only a single CD is required for installation.
Everything else can be selected and installed on demand from the
network. Only the core "main" set of packages receives a guaranteed
level of security review and updates.

Ubuntu gives you a distribution that is:

  * absolutely committed to free software, every application on the CD
    is free software

  * 100% free of charge, and the Ubuntu team is committed to keeping
    it that way

  * complete with security updates for the distribution at no charge
    for at least 18 months after every release

  * easily upgradable to the latest desktop and kernel and
    infrastructure every six months

  * able to run on machines with x86, AMD64 and PowerPC processors,
    with additional ports to IA64, SPARC and HPPA under way in the
    community

Hoary Hedgehog (5.04) Features

 * Simple and fast Installation

   Ubuntu comes on one single CD, with thousands of extra packages
   available online. The install is optimised for speed and
   simplicity. Ubuntu has excellent support for laptops (both x86
   based and Powerbook / iBook PPC based), and can also be setup in a
   minimalist server configuration. It's a text based installer for
   maximum compatibility and speed, we think it's the fastest Linux
   install around.

 * Live CD's for Intel x86, AMD64 and PPC

   Ubuntu is the first distribution to offer Live CDs for all three
   architectures simultaneously. The new Live CD is easy to modify and
   update for custom Live CDs with your personal selection of
   packages.

 * GNOME 2.10.1

   Ubuntu always includes the very latest stable GNOME and KDE. In
   Hoary we have GNOME 2.10.1, which features better performance and
   significant theme polish. You might also be interested in Kubuntu
   (**), the new community driven KDE-based Ubuntu, that is being
   released today.

 * Firefox 1.0.2

   Ubuntu provides the Wall Street Journal's favourite open source
   browser, tightly integrated into the GNOME desktop environment.

 * First class productivity software

   Evolution 2.2.1.1 and OpenOffice.org 1.1.3 are just two.

 * X.org 6.8.2

   X autodetection and laptop screen detection have had considerable
   updates based on community participation. The binary drivers from
   ATI and Nvidia are available and can be installed easily, though
   the system will use open source drivers by default.

The complete release notes can be found here:

  http://www.ubuntulinux.org/support/ReleaseNotes504/

Hoary can be installed in a minimalist mode designed for servers, or
in full desktop mode. It works well on laptops and desktops. Ubuntu
aims for security by design - there are no network services open to
the net after a default installation, and we have greatly reduced the
number of tools that run with system privileges to enhance security
further.

For more information, you can turn to any of the following resources:

  Ubuntu Website: http://www.ubuntulinux.org

    The website contains some basic background on Ubuntu, an overview
    of the project, information on how to get it, and some
    documentation for the software.

  Ubuntu Wiki: http://www.ubuntulinux.org/wiki/

    The wiki is a shared web space used by the Ubuntu community to
    develop new ideas for Ubuntu. Anybody is welcome to edit and add
    to the wiki.

  Ubuntu Mailing Lists:

    Ubuntu mailing lists are the heart of our community. In addition
    to the announcement list, and lists for users and developers of
    Ubuntu, there are now Ubuntu mailing lists for the Dutch, German,
    French, Spanish, Italian, Portuguese, Polish, Russian and Israeli
    communities as well as lists devoted to Ubuntu security, news,
    translation, and the inevitable lighthearted chitchat. To get more
    information or to subscribe, visit:

      http://lists.ubuntu.com

  Ubuntu Forums

    The forums provide a web interface to the Ubuntu mailing lists
    that many people find easier in addition to the providing a large
    number of unique web-only forums. The Ubuntu Forums won an Ars
    Technica award for the best free software community in 2004.

      http://www.ubuntuforums.org/

  Ubuntu IRC Channel: #ubuntu and on irc.freenode.net

    The Ubuntu IRC channel is your best place to start for help and
    discussion about Ubuntu and the Warty Warthog release. We aim to
    keep the signal-to-noise ratio as high as possible on that
    channel, and on all community forums.

Thanks to the team of professional and volunteer maintainers who have
worked so hard to bring The Hoary Hedgehog Release to fruition, and to
members of the Ubuntu community, who have provided bug reports,
documentation and translations.

"Ubuntu" is an ancient African word for "humanity towards others", and
we think it's a perfect name for an open source community project. In
that spirit we invite you to join, to contribute and to share Ubuntu
with your own community. Our next release, the Breezy Badger, is due
in six months time. You can help to shape it by joining the team
and contributing your own expertise. See you at #ubuntu on
irc.freenode.net!

 (*) Array (n) A collection of Hedgehogs. Continuing in the fine tradition
         of collective nouns established with the 4.10 Warty Warthog
         release,  we have called the community testing team for Hoary
         Hedgehog "The Array".

 (**) Kubuntu is being released simultaneously with Ubuntu for the Hoary
         release. It includes the complete KDE 3.4 desktop and login
         manager, as well as the whole of Ubuntu and all the k-bling you
         would expect from the KDE Community. See the Kubuntu home page
         at http://www.kubuntu.org/ for details.
```

## System requirements

The
[documentation for Ubuntu 5.04](https://old-releases.ubuntu.com/ubuntu/dists/hoary/main/installer-ia64/current/doc/manual/en/ch02s01.html)
states

> Ubuntu does not impose hardware requirements beyond the requirements of the
> Linux kernel and the GNU tool-sets. Therefore, any architecture or platform to
> which the Linux kernel, libc, gcc, etc. have been ported, and for which an
> Ubuntu port exists, can run Ubuntu."

This simply means that if an architecture has a port for the Linux kernel and
GNU tools, it is supported by Ubuntu. GNU tools add much more functionality to
the Linux kernel. It is worth noting that Canonical only released CDs for x86,
amd64 and PowerPC, and the Linux kernel supports architectures beyond these,
including SPARC and Itanium. For those architectures, the interested user had to
use alternative installation methods like writing a pre-installed image to the
disk, using floppy-based installers, or even using the Debian installer and
pointing the package mirrors to Ubuntu's. Since Linux is just a kernel, there
must be another set of programs to make it somewhat usable. GNU software
includes core utilities like `ls` to list files, `cat` to print the contents of
a file to the terminal, and many more.

Ubuntu 5.04 needs the following minimum system requirements:

- 250 MB of hard disk space for a minimal console-based system.
- 32 MB RAM
- An Intel 80386 CPU (80386DX, 80386SX, etc.) or higher, including Pentium and
  AMD equivalents.

However, these specifications were recommended:

- 400 MB to a few gigabytes of hard drive space if the user wanted to install a
  considerable amount of software like the X Window System, development
  utilities, multimedia software or office suites.
- More than 256-512 MB of RAM was ideal for running Ubuntu 5.04, which woild
  enable smooth multi-tasking.
- A Pentium processor or AMD equivalent was ideal for Hoary Hedghehog.

These requirements are very modest compared to modern versions of Ubuntu and
other operating systems, but it should be noted that programs were also usually
well-optimized due to the relatively low specifications on many PCs.
