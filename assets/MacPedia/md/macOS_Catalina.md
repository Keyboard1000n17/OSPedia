---
title: macOS Catalina
favicon: Catalina-icon.webp
order: 170
background_image: Catalina-wallpaper.webp
info:
  icon:
    - alt: macOS Catalina logo
  paras:
    - "Developed by: Apple Computer"
    - "General availability: October 7, 2019 (version 10.15 build 19A583 - original Software Update release)"
    - "Last release: July 20, 2022 (version 10.15.7 build 19H2026 - final security update)"
    - "Preceded by: macOS Mojave (version 10.14)"
    - "Succeeded by: macOS Big Sur (version 11)"
    - "Kernel type: Hybrid (XNU)"
    - >
      Support status: Unsupported as of November 30, 2022. Finder is still
      able to download driver updates to sync to newer devices.
---

_macOS 10.15 refers to this version. For macOS 15, refer to macOS
Seqouia._

macOS Catalina (version 10.15) is the sixteenth major release of macOS,
Apple Inc.\'s desktop operating system for Macintosh computers. It is
the successor to macOS Mojave and was announced at WWDC 2019 on June 3,
2019 and released to the public on October 7, 2019. Catalina is the
first version of macOS to support only 64-bit applications and the first
to include Activation Lock. It is also the last version of macOS to have
the major version number be 10.x; its successor, Big Sur, released on
November 12, 2020, is version 11. In
order to increase web
compatibility, Safari, Chromium and Firefox have frozen the OS in the
user agent running in subsequent releases of macOS at 10.15.7 Catalina.

:::
![macOS Catalina
logo](/MacPedia/Images/Icons/Catalina-icon.webp)

Developed by: Apple Computer, Inc.

General availability: October 7, 2019 (version 10.15 build 19A583 -
original Software Update release)

Last release: July 20, 2022 (version 10.15.7 build 19H2026 - final
security update)

Preceded by: macOS Mojave (version 10.14)

Succeeded by: macOS Big Sur (version 11)

Kernel type: Hybrid (XNU)

Support status: Unsupported as of November 30, 2022. Finder is still
able to download driver updates to sync to newer devices.
:::

The operating system is named after Santa Catalina Island, which is
located off the coast of southern California.

macOS Catalina is the final version of macOS that supports the Unibody
MacBook Pro, as its successor, macOS Big Sur, drops support for its
mid-2012 and final model. The Unibody MacBook Pro was a design of the
MacBook Pro used from 2008-2012.

## System requirements

All standard configuration Macs that supported macOS Mojave support
macOS Catalina. 2010 to 2012 Mac Pros, which could run Mojave only with
a GPU upgrade, are no longer supported. Catalina requires 4 GB of
memory, an increase over the 2 GB required by Lion through Mojave.

- iMac (Late 2012 or later)
- iMac Pro (2017)
- MacBook (Early 2015 or later)
- MacBook Air (Mid 2012 or later)
- MacBook Pro (Mid 2012 or later)
- Mac Mini (Late 2012 or later)
- Mac Pro (Late 2013 or later)

It is unofficially possible to install macOS Catalina on many older
Macintosh computers that are not officially supported by Apple. This
requires using a patch to modify the install image. \"dosdude1\"\'s
Catalina Patcher is an example of those tools, which can be used to
Install Catalina on machines between 2008 and 2011.

## Features

[System]

Catalyst is a new software-development tool that allows developers to
write apps that can run on macOS, iOS and iPadOS. Apple demonstrated
several ported apps, including Jira and Twitter (after the latter
discontinued its macOS app in February 2018).

[System extensions]

An upgrade from Kexts. System extensions avoid the problems of Kexts
(kernel extensions). There are 3 kinds of System extensions: Network
Extensions, Endpoint Security Extensions, and Driver Extensions. System
extensions run in userspace, outside of the kernel. Catalina will be the
last version of macOS to support legacy system extensions.

[DriverKit]

A replacement for IOKit device drivers, driver extensions are built
using DriverKit. DriverKit is a new SDK with all-new frameworks based on
IOKit, but updated and modernized. It is designed for building device
drivers in userspace, outside of the kernel.

[Gatekeeper]

Mac apps, installer packages, and kernel extensions that are signed with
a Developer ID must be notarized by Apple to run on macOS Catalina.

[Activation Lock]

Activation Lock helps prevent the unauthorized use and drive erasure of
devices with an Apple T2 security chip (2018, 2019, and 2020 MacBook
Pro; 2020 5K iMac; 2018 MacBook Air, iMac Pro; 2018 Mac Mini; 2019 Mac
Pro).

[Dedicated system volume]

The system runs on its own read-only volume, separate from all other
data on the Mac.

[Voice control]

Users can give detailed voice commands to applications. On-device
machine processing is used to offer better navigation.

[Sidecar]

Sidecar allows a Mac to use an iPad (running iPadOS) as a wireless
external display. With Apple Pencil, the device can also be used as a
graphics tablet for software running on the computer. Sidecar requires a
Mac with Intel Skylake CPUs and newer (such as the fourth-generation
MacBook Pro), and an iPad that supports Apple Pencil.

[Support for wireless game controllers]

The Game Controller framework adds support for two major console game
controllers: the PlayStation 4\'s DualShock 4 and the Xbox One
controller.

[Time Machine]

A number of under-the-hood changes were made to Time Machine, the backup
software. For example, the manner in which backup data is stored on
network-attached devices was changed, and this change is not
backwards-compatible with earlier versions of macOS. Apple declined to
document these changes, but some of them have been noted.

[Applications]

iTunes is replaced by separate Music, Podcasts, TV and Books apps, in
line with iOS. iOS device management is now conducted via Finder. The TV
app on Mac supports Dolby Atmos, Dolby Vision, and HDR10 on MacBooks
released in 2018 or later, while 4K HDR playback is supported on Macs
released in 2018 or later when connected to a compatible display.

[Find My]

Find My Mac and Find My Friends are merged into an application called
Find My.

[Notes]

The Notes application was enhanced to allow better management of
checklists and the ability to share folders with other users. The
application version was incremented from 4.6 (in macOS 10.14 Mojave) to
4.7.

[Reminders]

Among other visual and functional overhauls, attachments can be added to
reminders and Siri can intelligently estimate when to remind the user
about an event.

[Voice Memos]

The Voice Memos application, first ported from iOS to the Mac in macOS
10.14 Mojave as version 2.0, was incremented to version 2.1.

[Removed or changed components]

- macOS Catalina exclusively supports 64-bit applications. 32-bit
  applications no longer run (including all software that utilizes the
  Carbon API as well as QuickTime 7 applications, image, audio and
  video codecs). Apple has also removed all 32-bit-only apps from the
  Mac App Store.
- Z shell (executable \"zsh\") is the default login shell and
  interactive shell in macOS Catalina, replacing Bash, the default
  shell since Mac OS X Panther in 2003. Bash continues to be available
  in macOS Catalina, along with other shells such as csh/tcsh and ksh.
- Dashboard has been removed in macOS Catalina.
- The ability to add Backgrounds in Photo Booth was removed in macOS
  Catalina.
- The command-line interface GNU Emacs application was removed in
  macOS Catalina.
- Built-in support for Perl, Python 2.7 and Ruby are included in macOS
  for compatibility with legacy software. Future versions of macOS
  will not include scripting language runtimes by default, possibly
  requiring users to install additional packages.
- Legacy AirDrop for connecting with Macs running Mac OS X Lion,
  Mountain Lion and Mavericks, or 2011 and older Macs has been
  removed.
- Support for legacy Safari extensions such as uBlock Origin, and
  WebSQL has been removed in Safari 13.
- Circular app icons now have outlines matching their main color.

[Security]

Ars Technica reported that macOS Catalina contained a critical privilege
escalation vulnerability, which resulted in a backdoor being installed
if users visited a Hong Kong pro-democracy website. The vulnerability
was reported to Apple in August 2021 and patched in a Catalina update in
September, but it had already been patched by Apple in macOS Big Sur
11.2, released 234 days earlier on February 1. Security experts have
criticized Apple for not patching critical known vulnerabilities in
older versions and for not being transparent about older versions only
receiving some, but not all, security patches. The latest major release
of Apple\'s operating systems (macOS, iOS, and others) receive all
security updates.

## Release History

---

Version Build Date Darwin version Release Notes

10.15 19A583 October 7, 19.0.0 Original
2019 Software
Update release

                 19A602         October 15,                                      Supplemental
                                2019                                             update

                 19A603         October 21,                                      Revised
                                2019                                             Supplemental
                                                                                 update

10.15.1 19B88 October 29, 19.0.0\ About the
2019 [xnu-6153.41.3\~29] macOS Catalina
10.15.1 Update

10.15.2 19C57 December 10, 19.2.0\ About the
2019 [xnu-6153.61.1\~20] macOS Catalina
10.15.2 Update

                 19C58

10.15.3 19D76 January 28, 19.3.0\ About the
2020 [xnu-6153.81.5\~1] macOS Catalina
10.15.3 Update

10.15.4 19E266 March 24, 2020 19.4.0\ About the
[xnu-6153.101.6\~15] macOS Catalina
10.15.4 Update

                 19E287         April 8, 2020                                    Supplemental
                                                                                 update

10.15.5 19F96 May 26, 2020 19.5.0\ About the
[xnu-6153.121.1\~7] macOS Catalina
10.15.5 Update

                 19F101         June 1, 2020   19.5.0\                           Supplemental
                                               [xnu-6153.121.2\~2]       update

10.15.6 19G73 July 15, 2020 19.6.0\ About the
[xnu-6153.141.1\~9]\ macOS Catalina
[Jul 5 00:43:10 PDT 2020] 10.15.6 Update

                 19G2021        August 12,     19.6.0\                           Supplemental
                                2020           [xnu-6153.141.1\~1]\      update
                                               [Jun 18 20:49:00 PDT
                                               2020]

10.15.7 19H2 September 24, 19.6.0\ About the
2020 [xnu-6153.141.2\~1]\ macOS Catalina
[Mon Aug 31 22:12:52 PDT 10.15.7 Update
2020]

                 19H4           October 27,
                                2020

                 19H15          November 5,    19.6.0\                           Supplemental
                                2020           [xnu-6153.141.2.2\~1]\    update
                                               [Thu Oct 29 22:56:45 PDT
                                               2020]

                 19H114         December 14,   19.6.0\                           About the
                                2020           [xnu-6153.141.10\~1]\     security
                                               [Tue Nov 10 00:10:30 PST          content of
                                               2020]                     Security
                                                                                 Update
                                                                                 2020-001

                 19H512         February 1,    19.6.0\                           About the
                                2021           [xnu-6153.141.16\~1]\     security
                                               [Tue Jan 12 22:13:05 PST          content of
                                               2021]                     Security
                                                                                 Update
                                                                                 2021-001

                 19H524         February 9,                                      Supplemental
                                2021                                             Update

                 19H1030        April 26, 2021 19.6.0\                           About the
                                               [xnu-6153.141.28.1\~1]\   security
                                               [Mon Apr 12 20:57:45 PDT          content of
                                               2021]                     Security
                                                                                 Update
                                                                                 2021-002

                 19H1217        May 24, 2021   19.6.0\                           About the
                                               [xnu-6153.141.33\~1]\     security
                                               [Thu May 6 00:48:39 PDT           content of
                                               2021]                     Security
                                                                                 Update
                                                                                 2021-003

                 19H1323        July 21, 2021  19.6.0\                           About the
                                               [xnu-6153.141.35\~1]\     security
                                               [Thu Jun 22 19:49:55 PDT          content of
                                               2021]                     Security
                                                                                 Update
                                                                                 2021-004

                 19H1417        September 13,  19.6.0\                           About the
                                2021           [xnu-6153.141.40\~1]\     security
                                               [Tue Aug 24 20:28:00 PDT          content of
                                               2021]                     Security
                                                                                 Update
                                                                                 2021-005

                 19H1419        September 23,  19.6.0\                           About the
                                2021           [xnu-6153.141.40.1\~1]\   security
                                               [Thu Sep 16 20:58:47 PDT          content of
                                               2021]                     Security
                                                                                 Update
                                                                                 2021-006

                 19H1519        October 25,    19.6.0\                           About the
                                2021           [xnu-6153.141.43\~1]\     security
                                               [Tue Oct 12 18:34:05 PDT          content of
                                               2021]                     Security
                                                                                 Update
                                                                                 2021-007

                 19H1615        December 13,   19.6.0\                           About the
                                2021           [xnu-6153.141.50\~1]\     security
                                               [Sun Nov 14 19:58:51 PST          content of
                                               2021]                     Security
                                                                                 Update
                                                                                 2021-008

                 19H1713        January 26,    19.6.0\                           About the
                                2022           [xnu-6153.141.51\~3]\     security
                                               [Thu Jan 13 01:26:33 PST          content of
                                               2022]                     Security
                                                                                 Update
                                                                                 2022-001

                 19H1715        February 14,                                     Security
                                2022                                             Update
                                                                                 2022-002

                 19H1824        March 14, 2022 19.6.0\                           About the
                                               [xnu-6153.141.59\~1]\     security
                                               [Tue Feb 15 21:39:11 PST          content of
                                               2022]                     Security
                                                                                 Update
                                                                                 2022-003

                 19H1922        May 16, 2022   19.6.0\                           About the
                                               [xnu-6153.141.62\~1]\     security
                                               [Mon Apr 18 21:50:40 PDT          content of
                                               2022]                     Security
                                                                                 Update
                                                                                 2022-004

                 19H2026        July 20, 2022  19.6.0\                           About the
                                               [xnu-6153.141.66\~1]\     security
                                               [Tue Jun 21 21:18:39 PDT          content of
                                               2022]                     Security
                                                                                 Update
                                                                                 2022-005

---

## User Interface
