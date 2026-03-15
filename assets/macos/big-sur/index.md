---
title: macOS Big Sur
favicon: big-sur-icon.webp
order: 180
background_image: big-sur-colorful-light.webp
info:
  icon:
    - alt: macOS Big Sur logo
  paras:
    - "Developed by: Apple Computer"
    - "General availability: November 12, 2020 (version 11.0 build 19A583 -
      original Software Update release)"
    - "Last release: July 20, 2022 (version 11.7.10 build 20G1427 - final
      security update)"
    - "Preceded by: OS X Mavericks (version 10.9)"
    - "Succeeded by: macOS Monterey (version 12)"
    - "Kernel type: Hybrid (XNU)"
    - >
      Support status: Unsupported as of September 26, 2023. Finder is still able
      to download driver updates to sync to newer devices.
carousel_images:
  - path: /macos/big-sur/big-sur-light-ui.webp
    alt: macOS Big Sur screenshot
    desc: A screenshot of macOS Big Sur.
  - path: /macos/big-sur/big-sur-light-ui.webp
    alt: Dark mode macOS Big Sur screenshot
    desc: A screenshot of macOS Big Sur in dark mode.
  - path: /macos/big-sur/big-sur-colorful-light.webp
    alt: macOS Big Sur wallpaper
    desc: One of the default wallpapers, arguably the most recognizable one.
  - path: /macos/big-sur/big-sur-colorful-dark.webp
    alt: macOS Big Sur dark wallpaper
    desc: The dark version of the colorful wallpaper.
  - path: /macos/big-sur/big-sur-day.webp
    alt: macOS Big Sur day wallpaper
    desc: A picture of the daytime Big Sur landscape used as a wallpaper.
  - path: /macos/big-sur/big-sur-night.webp
    alt: macOS Big Sur night wallpaper
    desc: A picture of the nighttime Big Sur landscape used as a wallpaper.
---

macOS Big Sur (version 11) is the seventeenth major release of macOS, Apple\'s
operating system for Macintosh computers. It was announced at Apple\'s Worldwide
Developers Conference (WWDC) on June 22, 2020, and was released to the public on
November 12, 2020.

+++

Big Sur is the successor to macOS Catalina (macOS 10.15). The release of Big Sur
was the first time the major version number of the operating system had been
incremented since the Mac OS X Public Beta in 2000. After sixteen distinct
versions of macOS 10 (\"Mac OS X\"), macOS Big Sur was presented as version 11
in 2020, and four subsequent versions incremented the major version number,
similarly to previous versions of Apple\'s other OSes.

For the first time since OS X Yosemite (version 10.10) six years earlier, macOS
Big Sur features a user interface redesign. It features new blurs to establish a
visual hierarchy, along with making icons more square and UI elements more
consistent. Other changes include a revamp of the Time Machine backup mechanism,
and the addition of the Control Center (which was previously introduced,
exclusively for touch devices, with iOS 7). It is also the first macOS version
to support Macs with ARM-based processors. To mark the transition, the operating
system\'s major version number was incremented, for the first time since 2001,
from 10 to 11. The operating system is named after the coastal region of Big Sur
in the Central Coast of California, continuing the naming trend of California
locations that began with OS X Mavericks.

macOS Big Sur is the final version of macOS that supports Macs with Nvidia
graphics cards, specifically the 15-inch dual graphics late 2013 and mid 2014
MacBook Pro models, as its successor, macOS Monterey, drops support for those
models.

Providing some indication as to how the pre-release operating system may have
been viewed internally at Apple during its development cycle, documentation
accompanying the initial beta release of macOS Big Sur referred to its version
as \"10.16\", and when upgrading from prior versions of macOS using the Software
Update mechanism to early beta releases, the version referred to was \"10.16\".
An exception to this was the Developer Transition Kit, which always reported the
system version as \"11.0\". macOS Big Sur started reporting the system version
as \"11.0\" on all Macs as of the third beta release.

To maintain backwards compatibility, macOS Big Sur identified itself as 10.16 to
legacy software and in the browser user agent.

## System requirements

Unlike macOS Catalina, which supported every standard configuration Mac that
Mojave supported, Big Sur drops support for various Macs released in 2012 and
early 2013. Big Sur runs on the following Macs:

- iMac (Mid 2014 or later)
- iMac Pro (2017)
- MacBook (Early 2015 or later)
- MacBook Air (Mid 2013 or later)
- MacBook Pro (Late 2013 or later)
- Mac Mini (Late 2014 or later)
- Mac Pro (Late 2013 or later)
- Developer Transition Kit (only up to Big Sur 11.3 beta 2)

By using patcher tools (such as OpenCore Legacy), macOS 11 Big Sur can be
installed on earlier computers that are officially unsupported, such as the 2012
iMac and the 2012 MacBook Pro. Using these methods, it is possible to install
macOS Big Sur on computers as old as a 2008 MacBook Pro and iMac and 2009 Mac
Mini running smooth with non-metal graphics.

## Features and Changes

## System

### Support for Apple silicon

macOS Big Sur is the first release of macOS for Macs powered by Apple-designed
ARM64-based processors, a key part of the transition from Intel x86-64-based
processors. The chip mentioned in demo videos, and used in the Developer
Transition Kit, is the A12Z Bionic. On November 10, 2020, Apple announced the
first Mac Apple silicon chip, the Apple M1, in the Late 2020 Mac Mini, MacBook
Air, and MacBook Pro. Apple has said that it will support Intel Macs \"for years
to come\", and most software that has not been ported to run on ARM Macs can use
Rosetta 2, an update of a compatibility mechanism originally developed for the
PowerPC-to-Intel x86 transition. Likewise, Apple also introduced an updated
universal binary format, Universal 2, which allows developers to package their
applications so that they can run natively on both ARM64 and x86-64 processors.

### Support for iOS and iPadOS applications

On Macs based on Apple silicon, macOS Big Sur can run iOS and iPadOS
applications natively and without any modifications needed from developers,
aside from allowing the app to be available on the Mac App Store. The first Macs
with this capability are those that use the Apple M1 SoC (system on a chip).

### Time Machine overhaul

Time Machine, the backup mechanism introduced back in Mac OS X 10.5 Leopard, has
been overhauled to utilize the APFS file system (introduced in MacOS High
Sierra) instead of the outdated HFS+. Specifically, the new version of Time
Machine makes use of APFS\'s snapshot technology. According to Apple, this
enables \"faster, more compact, and more reliable backups\" than were possible
previously with HFS+-formatted backup destinations. An independent evaluation of
this claim found that Time Machine on macOS 11 in conjunction with APFS was
2.75-fold faster upon initial local backup and 4-fold faster upon subsequent
backups relative to macOS 10.15\'s Time Machine implementation using HFS+. A
more modest yet nevertheless significant advantage was noted as well for backups
to network-attached disks.

New local (i.e. USB- or Thunderbolt-connected) and network-connected Time
Machine backup destinations are formatted as APFS by default, though Time
Machine can continue backing up to existing HFS+ backup volumes. There is no
option to convert existing, HFS+-based backups to APFS; instead, users who want
to benefit from the advantages of the new, APFS-based implementation of Time
Machine need to start with a fresh volume.

In the new version of Time Machine, encryption appears to be required (instead
of merely optional) for local disks, but it remains elective for networked
volumes.

It is no longer possible to restore the whole system using a Time Machine
backup, as the signed system volume is not backed up. Non-core applications and
user data can be restored in full using Migration Assistant, preceded by a
system reinstall if necessary.

### Spotlight

Spotlight, the file system indexing-and-search mechanism introduced in Mac OS X
10.4 Tiger, is faster and the interface has been refined. Spotlight is now the
default search mechanism in Safari, Pages, and Keynote.

### Signed system volume

The system volume containing the core operating system is cryptographically
signed. Apple indicates this is a security measure to prevent malicious
tampering. This includes adding an SHA-256 hash for every file on the system
volume, preventing changes from third-party entities and the end user.

### Software updates

Software updates can begin in the background before a restart, thus requiring
less downtime to complete. Because system files are cryptographically signed,
the update software can rely on them being in precise locations, thus permitting
them to be effectively updated in place.

### Encryption

macOS Big Sur supports encryption at the file level. Earlier versions of macOS
(10.15 Catalina and older) supported encryption only at the level of entire
volumes. As of June 2020, this capability is known to be compatible with Macs
based on Apple silicon; it is unclear whether it is compatible with Intel-based
Macs.

## Application features

### Safari

Big Sur includes Safari 14, which was also released for macOS Catalina and macOS
Mojave on September 16, 2020. Safari 14 includes features such as a new home
page in which users can customize what features are visible in addition to being
able to set a custom wallpaper. It also allows the viewer to preview a page and
favicon before visiting it.

Safari 14 also includes built-in web page translations in English, Spanish,
German, French, Russian, Chinese and Portuguese as well as support for 4K HDR
content from Netflix on Macs with an Apple T2 chip, although none of these were
made available for macOS Catalina and Mojave.

Privacy features such as iCloud Keychain (which notifies users of compromised
passwords), extension privacy management and Privacy Report (which monitors
privacy trackers and further increases Safari\'s security) were added for
Safari 14. Users were now also able to import password from Google\'s Chrome
browser in addition to being notified of compromised passwords.

Safari 14 also supports WebExtensions API, the WebP image format as well as VP9
decoding, the latter of which allows for the playback of 4K and HDR content from
YouTube. In addition, it allowed for better performance and power efficiency.

Safari 14 ended support for Adobe Flash Player in September, three months prior
to its end-of-life on December 31, 2020.

### Messages

The Messages app was rewritten to be based upon Apple\'s Catalyst technology to
enable it to have feature parity with its iOS counterpart. The new version of
the app included a refined design as well as the ability to pin up to nine
conversations that can sync across iOS, iPadOS and macOS. Users were also now
allowed to search for messages and share their names and photos. Photo
thumbnails could now also be used for group chats on the app.

In addition, users could mention contacts by putting the @ symbol in front of
their name. They were also able to reply to specific messages. Memojis, 3d
avatars were also made available on Messages. On Messages, users could now
select photos based on parameters.

In India, text message effects were added when users sent certain texts (e.g.,
texting \"Happy Holi\" will result in users seeing effects).

### Mac App Store

Refinements and new features of the Mac App Store include:

- A new \"nutrition label\" section dedicated to the data and information an app
  collects, also featured in the iOS App Store
- A new extensions category for Safari
- Third party Notification Center widgets, similar to those also added in iOS
  and iPadOS 14.
- The ability to share in-app purchases and subscriptions on the Mac via iCloud
  Family Sharing

### Notes

Changes to the Notes app include:

- A collapsible pinned section
- Quick text style and formatting options
- Scanning enhancements

### Photos

Changes to the Photos app:

- New editing capabilities
- Improved Retouch tool
- New zooming feature in views

### Maps

New features and changes to the Maps app are as follows:

- \"Look Around\" interactive street-level 360° panoramas, first implemented in
  the iOS 13 version of Maps, have been incorporated into the macOS version of
  Maps.
- Availability of directions for cyclists.
- Electric vehicle routing, based on proximity to charging stations and
  monitoring of battery levels (on selected car models).
- Guides for exploring new places.

### Voice Memos

These are the new features and changes made to Voice Memos:

- A file structure has been implemented to allow organization of recordings in
  folders
- Recordings can be marked as Favorites for easier subsequent access
- Smart Folders automatically group Apple Watch recordings, recently deleted
  recordings, and Favorites
- Audio can be enhanced to reduce background noise and room reverb

## Removed functionality

The following features were removed in this version:

- The Calculator Widget in the Notification Center
- The option to toggle Font Smoothing in System Preferences
- The option not to have a clock in the menu bar

## Other changes

Other changes include:

- Bilingual dictionaries in French-German, Indonesian-English,
  Japanese-Simplified Chinese and Polish-English
- Better predictive input for Chinese and Japanese users
- New fonts for Indian users
- The \"Now Playing\" widget has been moved from the Notification Center to the
  Menu Bar
- Podcasts \"Listen Now\" feature
- FaceTime sign language prominence
- Network Utility has been replaced with a message that it has been deprecated
- A new startup chime was added (it was absent on all machines released from
  2016 to 2020) and is now enabled by default; an option was added in System
  Preferences to enable or disable this functionality.

## Release History

<table>
</table>
<table class="releases">
  <caption class="top-left top-right">macOS Big Sur Releases</caption>
  <tbody>
    <tr>
      <th class="left">Version</th>
      <th>Build</th>
      <th>Release Date</th>
      <th>Darwin Version</th>
      <th class="right">Release Notes</th>
    </tr>
  </tbody>
</table>

## User Interface
