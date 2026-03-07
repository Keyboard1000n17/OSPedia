---
title: macOS High Sierra
favicon: High_Sierra-icon.webp
order: 150
background_image: High_Sierra-wallpaper.webp
jsonData: ./macOS_High_Sierra.json
info:
  icon:
    - alt: macOS High Sierra logo
  paras:
    - "Developed by: Apple Computer"
    - "General availability: September 25, 2017 (version 10.13 build 17A365 -
      original Mac App Store release)"
    - "Last release: November 12, 2020 (version 10.13.6 build 17G14042 - final
      security update)"
    - "Preceded by: macOS Sierra (version 10.12)"
    - "Succeeded by: macOS Mojave (version 10.14)"
    - "Kernel type: Hybrid (XNU)"
    - >
      Support status: Obsolete, unsupported as of November 12, 2020. iTunes is
      no longer being updated, but is able to download driver updates to sync to
      newer devices.
carousel_images:
  - path: /MacPedia/Images/UI/High_Sierra-UI.webp
    alt: macOS High Sierra screenshot
    desc: A screenshot of macOS High Sierra.
  - path: /MacPedia/Images/Wallpapers/High_Sierra-wallpaper.webp
    alt: macOS High Sierra wallpaper
    desc: The default wallpaper for macOS High Sierra.
---

_macOS 10.13 refers to this version. For macOS 13, refer to macOS Ventura._

macOS High Sierra (version 10.13) is the fourteenth major release of macOS,
Apple Inc.\'s desktop operating system for Macintosh computers. macOS High
Sierra was announced at the WWDC 2017 on June 5, 2017 and was released on
September 25, 2017. The name \"High Sierra\" refers to the High Sierra region in
California. Its name signified its goal to be a refinement of the previous macOS
version, macOS Sierra, focused on performance improvements and technical updates
rather than features. This makes it similar to previous macOS releases Snow
Leopard, Mountain Lion and El Capitan. Among the apps with notable changes are
Photos and Safari.

+++

macOS High Sierra is the final version of macOS to support the Unibody iMac and
the Polycarbonate Unibody MacBook, as its successor, macOS Mojave, drops support
for the late 2009 and final models. The Unibody iMac was an all-in-one desktop
manufactured by Apple while the Polycarbonate Unibody MacBook refers to one of
the designs of MacBook models produced from 2006 to 2012.

## System Requirements

All Macs that supported macOS Sierra support macOS High Sierra. They include the
following models:

- iMac (Late 2009 or later)
- MacBook (Late 2009 or later)
- MacBook Air (Late 2010 or later)
- MacBook Pro (Mid 2010 or later)
- Mac Mini (Mid 2010 or later)
- iMac Pro (2017)
- Mac Pro (Mid 2010 or later)

macOS High Sierra requires at least 2 GB of RAM and 20.12 GB of available disk
space. It is also possible to install High Sierra on many older Macintosh
computers that are no longer supported by Apple. However, it requires using a
patch to modify the install image.

## Features

### System

#### Apple File System

Apple File System (APFS) replaces HFS Plus as the default file system in macOS
for the first time with High Sierra. It supports 64-bit inode numbers, is
designed for flash memory, and is designed to speed up common tasks like
duplicating a file and finding the size of a folder\'s contents. It also has
built-in encryption, crash-safe protections, and simplified data backup on the
go.

#### Metal 2

Metal, Apple\'s low-level graphics API, has been updated to Metal 2. It includes
virtual reality and machine-learning features, as well as support for external
GPUs. The system\'s windowing system, Quartz Compositor, supports Metal 2.

#### Media

macOS High Sierra adds support for High Efficiency Video Coding (HEVC), with
hardware acceleration where available, as well as support for High Efficiency
Image File Format (HEIF). Macs with the Intel Kaby Lake processor offer hardware
support for Main 10 profile 10-bit hardware decoding, those with the Intel
Skylake processor support Main profile 8-bit hardware decoding, and those with
AMD Radeon 400 series graphics also support full HEVC decoding. However,
whenever an Intel IGP is present, the frameworks will only direct requests to
Intel IGP. In addition, audio codecs FLAC and Opus are also supported, but not
in iTunes.

HEVC hardware acceleration requires a Mac with a sixth-generation Intel
processor or newer (late 2015 27-inch iMac, mid 2017 21.5-inch iMac, early 2016
MacBook, late 2016 MacBook Pro or iMac Pro).

#### Other

- In High Sierra, kernel extensions (\"kexts\") require explicit approval by the
  user before being able to run.
- Certain UI elements, such as the Low Battery notification and App Store icon,
  were redesigned to either be based on the iOS 11 equivalents or match with the
  overall less detailed design used in all releases since Yosemite.
- The time service `ntpd` was replaced with timed for the time synchronization.
- The FTP and telnet command line programs were removed.
- Caching Server, File Sharing Server, and Time Machine Server, features that
  were previously part of macOS Server, are now provided as part of the OS.
- A new "now playing" widget has been added to the Notification Center, based on
  the music Lock Screen toggle in iOS 11.
- The screen can now be locked using the shortcut Cmd+Ctrl+Q. The ability to
  lock screen using a menu bar shortcut activated in Keychain Access preferences
  has now been removed.
- The 10.13.4 update added support for external graphics processors for Macs
  equipped with Thunderbolt 3 ports. The update discontinued support for
  external graphics processors in 2015 or older Macs, equipped with Thunderbolt
  1 and 2 ports.
- Starting with 10.13.4, when a 32-bit app is opened, users get a one-time
  warning about its future incompatibility with the macOS operating system.

### Applications

#### Final Cut Pro 7

Apple announced the original Final Cut Studio suite of programs will not work on
High Sierra. Media professionals that depend on any of those programs were
advised to create a double boot drive to their computer.

#### Photos

macOS High Sierra gives Photos an updated sidebar and new editing tools. Photos
synchronizes tagged People with iOS 11.

#### Mail

Mail has improved Spotlight search with Top Hits. Mail also uses 35% less
storage space due to optimizations, and Mail\'s compose window can now be used
in split-screen mode.

#### Safari

macOS High Sierra includes Safari 11. Safari 11 has a new \"Intelligent Tracking
Prevention\" feature that uses machine learning to block third parties from
tracking the user\'s actions. Safari can also block auto playing videos from
playing. The \"Reader Mode\" can be set to always-on. Safari 11 also supports
WebAssembly. The last version of Safari that High Sierra supports is 13.1.2.
This version has known security issues.

#### Notes

The Notes app includes the ability to add tables to notes, and notes can be
pinned to the top of the list. The version number was incremented to 4.5.

#### Siri

In High Sierra, Siri uses a more natural and expressive voice. It also uses
machine learning to understand the user better. Siri synchronizes information
across iOS and Mac devices so the Siri experience is the same regardless of the
product being used.

#### Messages

The release of macOS High Sierra 10.13.5 (and iOS 11.4) introduced support for
Messages in iCloud. This feature allows messages to sync across all devices
using the same iCloud account. When messages are deleted they are deleted on
each device as well, and messages stored in the cloud do not take up local
storage on the device anymore. In order to use the feature, the user has to
enable two-factor authentication for their Apple ID.

## Problems

macOS High Sierra 10.13.0 and 10.13.1 have a critical vulnerability that allowed
an attacker to become a root user by entering \"root\" as a username, and not
entering a password, when logging in. This was fixed in the Security Update
2017-001 for macOS High Sierra v10.13.1.

When it was first launched, it was discovered that the WindowServer process had
a memory leak, leading to much slower graphics performance and lagging
animations, probably due to some last-minute changes in Metal 2. This was fixed
in macOS 10.13.1.

macOS High Sierra 10.13.4 had an error that caused DisplayLink to stop working
for external monitors, allowing only one monitor to be extended. When using two
external monitors, they could only be mirrored. Alban Rampon, the Senior Product
Manager for DisplayLink, stated on December 24, 2018, that the company was
working with Apple to resolve the issue.

## Release History

<table class="releases">
  <caption class="top-left top-right">macOS High Sierra Releases</caption>
  <tbody>
    <tr>
      <th class="left">Version</th>
      <th>Build</th>
      <th>Release Date</th>
      <th>Darwin Version</th>
      <th class="right">Release Notes</th>
  </tr>
</table>

## User Interface
