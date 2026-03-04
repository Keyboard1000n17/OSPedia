---
title: macOS Big Sur
favicon: Big_Sur-icon.webp
order: 180
background_image: Big_Sur-wallpaper.webp
info:
  icon:
    - alt: macOS Big Sur logo
  paras:
    - "Developed by: Apple Computer"
    - "General availability: November 12, 2020 (version 11.0 build 19A583 - original Software Update release)"
    - "Last release: July 20, 2022 (version 11.7.10 build 20G1427 - final security update)"
    - "Preceded by: OS X Mavericks (version 10.9)"
    - "Succeeded by: macOS Monterey (version 12)"
    - "Kernel type: Hybrid (XNU)"
    - >
      Support status: Unsupported as of September 26, 2023. Finder is still
      able to download driver updates to sync to newer devices.
---

macOS Big Sur (version 11) is the seventeenth major release of macOS,
Apple\'s operating system for Macintosh computers. It was announced at
Apple\'s Worldwide Developers Conference (WWDC) on June 22, 2020, and
was released to the public on November 12, 2020.

+++

Big Sur is the successor to macOS Catalina (macOS 10.15). The release of
Big Sur was the first time the major version number of the operating
system had been incremented since the Mac OS X Public Beta in 2000.
After sixteen distinct versions of macOS 10 (\"Mac OS X\"), macOS Big
Sur was presented as version 11 in 2020, and four subsequent versions
incremented the major version number, similarly to previous versions of
Apple\'s other OSes.

For the first time since OS X Yosemite (version 10.10) six years
earlier, macOS Big Sur features a user interface redesign. It features
new blurs to establish a visual hierarchy, along with making icons more
square and UI elements more consistent. Other changes include a revamp
of the Time Machine backup mechanism, and the addition of the Control
Center (which was previously introduced, exclusively for touch devices,
with iOS 7). It is also the first macOS version to support Macs with
ARM-based processors. To mark the transition, the operating system\'s
major version number was incremented, for the first time since 2001,
from 10 to 11. The operating system is named after the coastal region of
Big Sur in the Central Coast of California, continuing the naming trend
of California locations that began with OS X Mavericks.

macOS Big Sur is the final version of macOS that supports Macs with
Nvidia graphics cards, specifically the 15-inch dual graphics late 2013
and mid 2014 MacBook Pro models, as its successor, macOS Monterey, drops
support for those models.

Providing some indication as to how the pre-release operating system may
have been viewed internally at Apple during its development cycle,
documentation accompanying the initial beta release of macOS Big Sur
referred to its version as \"10.16\", and when upgrading from prior
versions of macOS using the Software Update mechanism to early beta
releases, the version referred to was \"10.16\". An exception to this
was the Developer Transition Kit, which always reported the system
version as \"11.0\". macOS Big Sur started reporting the system version
as \"11.0\" on all Macs as of the third beta release.

To maintain backwards compatibility, macOS Big Sur identified itself as
10.16 to legacy software and in the browser user agent.

## System requirements

Unlike macOS Catalina, which supported every standard configuration Mac
that Mojave supported, Big Sur drops support for various Macs released
in 2012 and early 2013. Big Sur runs on the following Macs:

- iMac (Mid 2014 or later)
- iMac Pro (2017)
- MacBook (Early 2015 or later)
- MacBook Air (Mid 2013 or later)
- MacBook Pro (Late 2013 or later)
- Mac Mini (Late 2014 or later)
- Mac Pro (Late 2013 or later)
- Developer Transition Kit (only up to Big Sur 11.3 beta 2)

By using patcher tools (such as OpenCore Legacy), macOS 11 Big Sur can
be installed on earlier computers that are officially unsupported, such
as the 2012 iMac and the 2012 MacBook Pro. Using these methods, it is
possible to install macOS Big Sur on computers as old as a 2008 MacBook
Pro and iMac and 2009 Mac Mini running smooth with non-metal graphics.

## Features and Changes

## System

[Support for Apple silicon]

macOS Big Sur is the first release of macOS for Macs powered by
Apple-designed ARM64-based processors, a key part of the transition from
Intel x86-64-based processors. The chip mentioned in demo videos, and
used in the Developer Transition Kit, is the A12Z Bionic. On November
10, 2020, Apple announced the first Mac Apple silicon chip, the Apple
M1, in the Late 2020 Mac Mini, MacBook Air, and MacBook Pro. Apple has
said that it will support Intel Macs \"for years to come\", and most
software that has not been ported to run on ARM Macs can use Rosetta 2,
an update of a compatibility mechanism originally developed for the
PowerPC-to-Intel x86 transition. Likewise, Apple also introduced an
updated universal binary format, Universal 2, which allows developers to
package their applications so that they can run natively on both ARM64
and x86-64 processors.

[Support for iOS and iPadOS applications]

On Macs based on Apple silicon, macOS Big Sur can run iOS and iPadOS
applications natively and without any modifications needed from
developers, aside from allowing the app to be available on the Mac App
Store. The first Macs with this capability are those that use the Apple
M1 SoC (system on a chip).

[Time Machine overhaul]

Time Machine, the backup mechanism introduced back in Mac OS X 10.5
Leopard, has been overhauled to utilize the APFS file system (introduced
in MacOS High Sierra) instead of the outdated HFS+. Specifically, the
new version of Time Machine makes use of APFS\'s snapshot technology.
According to Apple, this enables \"faster, more compact, and more
reliable backups\" than were possible previously with HFS+-formatted
backup destinations. An independent evaluation of this claim found that
Time Machine on macOS 11 in conjunction with APFS was 2.75-fold faster
upon initial local backup and 4-fold faster upon subsequent backups
relative to macOS 10.15\'s Time Machine implementation using HFS+. A
more modest yet nevertheless significant advantage was noted as well for
backups to network-attached disks.

New local (i.e. USB- or Thunderbolt-connected) and network-connected
Time Machine backup destinations are formatted as APFS by default,
though Time Machine can continue backing up to existing HFS+ backup
volumes. There is no option to convert existing, HFS+-based backups to
APFS; instead, users who want to benefit from the advantages of the new,
APFS-based implementation of Time Machine need to start with a fresh
volume.

In the new version of Time Machine, encryption appears to be required
(instead of merely optional) for local disks, but it remains elective
for networked volumes.

It is no longer possible to restore the whole system using a Time
Machine backup, as the signed system volume is not backed up. Non-core
applications and user data can be restored in full using Migration
Assistant, preceded by a system reinstall if necessary.

[Spotlight]

Spotlight, the file system indexing-and-search mechanism introduced in
Mac OS X 10.4 Tiger, is faster and the interface has been refined.
Spotlight is now the default search mechanism in Safari, Pages, and
Keynote.

[Signed system volume]

The system volume containing the core operating system is
cryptographically signed. Apple indicates this is a security measure to
prevent malicious tampering. This includes adding an SHA-256 hash for
every file on the system volume, preventing changes from third-party
entities and the end user.

[Software updates]

Software updates can begin in the background before a restart, thus
requiring less downtime to complete. Because system files are
cryptographically signed, the update software can rely on them being in
precise locations, thus permitting them to be effectively updated in
place.

[Encryption]

macOS Big Sur supports encryption at the file level. Earlier versions of
macOS (10.15 Catalina and older) supported encryption only at the level
of entire volumes. As of June 2020, this capability is known to be
compatible with Macs based on Apple silicon; it is unclear whether it is
compatible with Intel-based Macs.

## Application features

[Safari]

Big Sur includes Safari 14, which was also released for macOS Catalina
and macOS Mojave on September 16, 2020. Safari 14 includes features such
as a new home page in which users can customize what features are
visible in addition to being able to set a custom wallpaper. It also
allows the viewer to preview a page and
favicon before visiting it.

Safari 14 also includes built-in web page translations in English,
Spanish, German, French, Russian, Chinese and Portuguese as well as
support for 4K HDR content from Netflix on Macs with an Apple T2 chip,
although none of these were made available for macOS Catalina and
Mojave.

Privacy features such as iCloud Keychain (which notifies users of
compromised passwords), extension privacy management and Privacy Report
(which monitors privacy trackers and further increases Safari\'s
security) were added for Safari 14. Users were now also able to import
password from Google\'s Chrome browser in addition to being notified of
compromised passwords.

Safari 14 also supports WebExtensions API, the WebP image format as well
as VP9 decoding, the latter of which allows for the playback of 4K and
HDR content from YouTube. In addition, it allowed for better performance
and power efficiency.

Safari 14 ended support for Adobe Flash Player in September, three
months prior to its end-of-life on December 31, 2020.

[Messages]

The Messages app was rewritten to be based upon Apple\'s Catalyst
technology to enable it to have feature parity with its iOS counterpart.
The new version of the app included a refined design as well as the
ability to pin up to nine conversations that can sync across iOS, iPadOS
and macOS. Users were also now allowed to search for messages and share
their names and photos. Photo thumbnails could now also be used for
group chats on the app.

In addition, users could mention contacts by putting the @ symbol in
front of their name. They were also able to reply to specific messages.
Memojis, 3d avatars were also made available on Messages. On Messages,
users could now select photos based on parameters.

In India, text message effects were added when users sent certain texts
(e.g., texting \"Happy Holi\" will result in users seeing effects).

[Mac App Store]

Refinements and new features of the Mac App Store include:

- A new \"nutrition label\" section dedicated to the data and
  information an app collects, also featured in the iOS App Store
- A new extensions category for Safari
- Third party Notification Center widgets, similar to those also added
  in iOS and iPadOS 14.
- The ability to share in-app purchases and subscriptions on the Mac
  via iCloud Family Sharing

[Notes]

Changes to the Notes app include:

- A collapsible pinned section
- Quick text style and formatting options
- Scanning enhancements

[Photos]

Changes to the Photos app:

- New editing capabilities
- Improved Retouch tool
- New zooming feature in views

[Maps]

New features and changes to the Maps app are as follows:

- \"Look Around\" interactive street-level 360° panoramas, first
  implemented in the iOS 13 version of Maps, have been incorporated
  into the macOS version of Maps.
- Availability of directions for cyclists.
- Electric vehicle routing, based on proximity to charging stations
  and monitoring of battery levels (on selected car models).
- Guides for exploring new places.

[Voice Memos]

These are the new features and changes made to Voice Memos:

- A file structure has been implemented to allow organization of
  recordings in folders
- Recordings can be marked as Favorites for easier subsequent access
- Smart Folders automatically group Apple Watch recordings, recently
  deleted recordings, and Favorites
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
- The \"Now Playing\" widget has been moved from the Notification
  Center to the Menu Bar
- Podcasts \"Listen Now\" feature
- FaceTime sign language prominence
- Network Utility has been replaced with a message that it has been
  deprecated
- A new startup chime was added (it was absent on all machines
  released from 2016 to 2020) and is now enabled by default; an option
  was added in System Preferences to enable or disable this
  functionality.

## Release History

+-------------+-------------+-------------+-------------+-------------+
| Version | Build | Release | Darwin | Release |
| | | date | version | notes |
+-------------+-------------+-------------+-------------+-------------+
| 11.0 | 20A2411 | November | 20.1.0\ | First |
| | | 17, 2020 | [xnu | releases |
| | | | -7195.41.8\ | |
| | | | ~9] | |
+-------------+-------------+-------------+-------------+-------------+
| 11.0.1 | 20B29 | November | 20.1.0\ | |
| | | 12, 2020 | [xnu | |
| | | | -7195.50.7\ | |
| | | | ~2] | |
+-------------+-------------+-------------+-------------+-------------+
| | 20B50 | November | | |
| | | 19, 2020 | | |
+-------------+-------------+-------------+-------------+-------------+
| 11.1 | 20C69 | December | 20.2.0\ | Introduces |
| | | 14, 2020 | [xnu- | support for |
| | | | 7195.60.75\ | AirPods |
| | | | ~1] | Max, TV app |
| | | | | en |
| | | | | hancements, |
| | | | | Apple News |
| | | | | widgets, |
| | | | | and privacy |
| | | | | information |
| | | | | on the App |
| | | | | Store. It |
| | | | | also |
| | | | | includes |
| | | | | bug fixes. |
+-------------+-------------+-------------+-------------+-------------+
| 11.2 | 20D64 | February 1, | 20.3.0\ | Improves |
| | | 2021 | [xnu | Bluetooth |
| | | | -7195.81.3\ | reliability |
| | | | ~1] | and fixes |
| | | | | the |
| | | | | following |
| | | | | issues: |
| | | | | |
| | | | | - |
| | | | | External |
| | | | | |
| | | | | displays |
| | | | | may |
| | | | | show a |
| | | | | black |
| | | | | screen |
| | | | | when |
| | | | | |
| | | | | connected |
| | | | | to a |
| | | | | Mac |
| | | | | mini |
| | | | | |
| | | | | (M1, 2020) |
| | | | | using |
| | | | | an HDMI |
| | | | | to DVI |
| | | | | |
| | | | | converter |
| | | | | - Edits |
| | | | | to |
| | | | | Apple |
| | | | | ProRAW |
| | | | | photos |
| | | | | in the |
| | | | | Photos |
| | | | | app may |
| | | | | not |
| | | | | save |
| | | | | - iCloud |
| | | | | Drive |
| | | | | could |
| | | | | turn |
| | | | | off |
| | | | | after |
| | | | | |
| | | | | disabling |
| | | | | the |
| | | | | iCloud |
| | | | | Drive |
| | | | | Desktop |
| | | | | & |
| | | | | |
| | | | | Documents |
| | | | | Folders |
| | | | | option |
| | | | | - System |
| | | | | |
| | | | | Preferences |
| | | | | may not |
| | | | | unlock |
| | | | | when |
| | | | | |
| | | | | entering |
| | | | | your |
| | | | | ad |
| | | | | ministrator |
| | | | | |
| | | | | password |
| | | | | - Globe |
| | | | | key may |
| | | | | not |
| | | | | display |
| | | | | the |
| | | | | Emoji & |
| | | | | Symbols |
| | | | | pane |
| | | | | when |
| | | | | pressed |
+-------------+-------------+-------------+-------------+-------------+
| 11.2.1 | 20D74 | February 9, | | Addresses |
| | | 2021 | | an issue |
| | | | | that may |
| | | | | prevent the |
| | | | | battery |
| | | | | from |
| | | | | charging in |
| | | | | some 2016 |
| | | | | and 2017 |
| | | | | MacBook Pro |
| | | | | models. |
+-------------+-------------+-------------+-------------+-------------+
| | 20D75 | February | | |
| | | 15, 2021 | | |
+-------------+-------------+-------------+-------------+-------------+
| 11.2.2 | 20D80 | February | | Prevents |
| | | 25, 2021 | | models of |
| | | | | MacBook Pro |
| | | | | (2019 or |
| | | | | later) and |
| | | | | MacBook Air |
| | | | | (2020 or |
| | | | | later) from |
| | | | | incurring |
| | | | | damage when |
| | | | | they are |
| | | | | connected |
| | | | | to certain |
| | | | | t |
| | | | | hird-party, |
| | | | | no |
| | | | | n-compliant |
| | | | | powered |
| | | | | USB-C hubs |
| | | | | and docks. |
+-------------+-------------+-------------+-------------+-------------+
| 11.2.3 | 20D91 | March 8, | | Provides |
| | | 2021 | | important |
| | | | | security |
| | | | | updates and |
| | | | | is |
| | | | | recommended |
| | | | | for all |
| | | | | users. |
+-------------+-------------+-------------+-------------+-------------+
| 11.3 | 20E232 | April 26, | 20.4.0\ | Consult |
| | | 2021 | [xnu- | Apple\'s |
| | | | 7195.101.1\ | webpage for |
| | | | ~3] | this |
| | | | | release: |
| | | | | |
| | | | | [About the |
| | | | | macOS Big |
| | | | | Sur 11.3 |
| | | | | update |
| | | | | ](https://s |
| | | | | upport.appl |
| | | | | e.com/en-us |
| | | | | /106338#mac |
| | | | | os113){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.3.1 | 20E241 | May 3, 2021 | 20.4.0\ | Provides |
| | | | [xnu- | important |
| | | | 7195.101.2\ | security |
| | | | ~1] | updates and |
| | | | | is |
| | | | | recommended |
| | | | | for all |
| | | | | users. |
+-------------+-------------+-------------+-------------+-------------+
| 11.4 | 20F71 | May 24, | 20.5.0\ | Adds new |
| | | 2021 | [xnu- | features to |
| | | | 7195.121.3\ | Podcasts |
| | | | ~9] | and fixes |
| | | | | the |
| | | | | following |
| | | | | bugs: |
| | | | | |
| | | | | - Apple |
| | | | | |
| | | | | Podcasts |
| | | | | su |
| | | | | bscriptions |
| | | | | are |
| | | | | |
| | | | | available |
| | | | | for |
| | | | | |
| | | | | purchase |
| | | | | via |
| | | | | monthly |
| | | | | and |
| | | | | annual |
| | | | | su |
| | | | | bscriptions |
| | | | | - |
| | | | | Channels |
| | | | | group |
| | | | | |
| | | | | together |
| | | | | |
| | | | | collections |
| | | | | of |
| | | | | shows |
| | | | | from |
| | | | | podcast |
| | | | | |
| | | | | creators |
| | | | | - |
| | | | | Bookmarks |
| | | | | in |
| | | | | Safari |
| | | | | may get |
| | | | | |
| | | | | reordered |
| | | | | or |
| | | | | moved |
| | | | | into a |
| | | | | folder |
| | | | | that |
| | | | | can |
| | | | | appear |
| | | | | hidden |
| | | | | - Certain |
| | | | | |
| | | | | websites |
| | | | | may not |
| | | | | display |
| | | | | |
| | | | | correctly |
| | | | | after |
| | | | | your |
| | | | | Mac |
| | | | | wakes |
| | | | | from |
| | | | | sleep |
| | | | | - |
| | | | | Keywords |
| | | | | may not |
| | | | | be |
| | | | | |
| | | | | included |
| | | | | when |
| | | | | |
| | | | | exporting |
| | | | | a photo |
| | | | | from |
| | | | | the |
| | | | | Photos |
| | | | | app |
| | | | | - Preview |
| | | | | may |
| | | | | become |
| | | | | u |
| | | | | nresponsive |
| | | | | when |
| | | | | |
| | | | | searching |
| | | | | PDF |
| | | | | |
| | | | | documents |
| | | | | - 16-inch |
| | | | | MacBook |
| | | | | may |
| | | | | become |
| | | | | u |
| | | | | nresponsive |
| | | | | when |
| | | | | playing |
| | | | | C |
| | | | | ivilization |
| | | | | VI |
+-------------+-------------+-------------+-------------+-------------+
| 11.5 | 20G71 | July 21, | 20.6.0\ | Includes |
| | | 2021 | [xnu-719 | i |
| | | | 5.141.2\~5\ | mprovements |
| | | | Wed Jun 23 | and fixes |
| | | | 00:26:31 | bugs which |
| | | | PDT | are as |
| | | | 20 | follows: |
| | | | 21] | |
| | | | | - |
| | | | | Podcasts |
| | | | | Library |
| | | | | tab |
| | | | | allows |
| | | | | you to |
| | | | | choose |
| | | | | to see |
| | | | | all |
| | | | | shows |
| | | | | or only |
| | | | | |
| | | | | followed |
| | | | | shows |
| | | | | - Music |
| | | | | may not |
| | | | | update |
| | | | | play |
| | | | | count |
| | | | | and |
| | | | | last |
| | | | | played |
| | | | | date in |
| | | | | your |
| | | | | library |
| | | | | - Smart |
| | | | | cards |
| | | | | may not |
| | | | | work |
| | | | | when |
| | | | | logging |
| | | | | into |
| | | | | Mac |
| | | | | |
| | | | | computers |
| | | | | with |
| | | | | the M1 |
| | | | | chip |
+-------------+-------------+-------------+-------------+-------------+
| 11.5.1 | 20G80 | July 26, | | Consult |
| | | 2021 | | Apple\'s |
| | | | | webpage for |
| | | | | this |
| | | | | release: |
| | | | | |
| | | | | [About the |
| | | | | security |
| | | | | content of |
| | | | | macOS |
| | | | | 11.5.1]( |
| | | | | https://sup |
| | | | | port.apple. |
| | | | | com/en-us/1 |
| | | | | 03144){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.5.2 | 20G95 | August 11, | | Includes |
| | | 2021 | | bug fixes |
| | | | | for Macs. |
+-------------+-------------+-------------+-------------+-------------+
| 11.6 | 20G165 | September | 20.6.0\ | Consult |
| | | 13, 2021 | [xnu-719 | Apple\'s |
| | | | 5.141.6\~3\ | webpage for |
| | | | Mon Aug 30 | this |
| | | | 06:12:21 | release: |
| | | | PDT | |
| | | | 20 | [About the |
| | | | 21] | security |
| | | | | content of |
| | | | | macOS |
| | | | | 11.6]( |
| | | | | https://sup |
| | | | | port.apple. |
| | | | | com/en-us/1 |
| | | | | 03147){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.6.1 | 20G224 | October 25, | 20.6.0\ | Consult |
| | | 2021 | [xnu-719 | Apple\'s |
| | | | 5.141.8\~1\ | webpage for |
| | | | Tue Oct 12 | this |
| | | | 18:33:42 | release: |
| | | | PDT | |
| | | | 20 | [About the |
| | | | 21] | security |
| | | | | content of |
| | | | | macOS |
| | | | | 11.6.1]( |
| | | | | https://sup |
| | | | | port.apple. |
| | | | | com/en-us/1 |
| | | | | 03164){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.6.2 | 20G314 | December | 20.6.0\ | Consult |
| | | 13, 2021 | [xnu-7195 | Apple\'s |
| | | | .141.14\~1\ | webpage for |
| | | | Wed Nov 10 | this |
| | | | 22:23:07 | release: |
| | | | PST | |
| | | | 20 | [About the |
| | | | 21] | security |
| | | | | content of |
| | | | | macOS |
| | | | | 11.6.2]( |
| | | | | https://sup |
| | | | | port.apple. |
| | | | | com/en-us/1 |
| | | | | 02876){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.6.3 | 20G415 | January 26, | 20.6.0\ | Consult |
| | | 2022 | [xnu-7195 | Apple\'s |
| | | | .141.19\~2\ | webpage for |
| | | | Wed Jan 12 | this |
| | | | 22:22:42 | release: |
| | | | PST | |
| | | | 20 | [About the |
| | | | 22] | security |
| | | | | content of |
| | | | | macOS |
| | | | | 11.6.3]( |
| | | | | https://sup |
| | | | | port.apple. |
| | | | | com/en-us/1 |
| | | | | 03173){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.6.4 | 20G417 | February | | Recommended |
| | | 14, 2022 | | for all |
| | | | | users and |
| | | | | improves |
| | | | | the |
| | | | | security of |
| | | | | macOS. |
+-------------+-------------+-------------+-------------+-------------+
| 11.6.5 | 20G527 | March 14, | 20.6.0\ | Consult |
| | | 2022 | [xnu-7195 | Apple\'s |
| | | | .141.26\~1\ | webpage for |
| | | | Tue Feb 22 | this |
| | | | 21:10:41 | release: |
| | | | PST | |
| | | | 20 | [About the |
| | | | 22] | security |
| | | | | content of |
| | | | | macOS |
| | | | | 11.6.5]( |
| | | | | https://sup |
| | | | | port.apple. |
| | | | | com/en-us/1 |
| | | | | 02847){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.6.6 | 20G624 | May 16, | 20.6.0\ | Consult |
| | | 2022 | [xnu-7195 | Apple\'s |
| | | | .141.29\~1\ | webpage for |
| | | | Tue Apr 19 | this |
| | | | 21:04:45 | release: |
| | | | PDT | |
| | | | 20 | [About the |
| | | | 22] | security |
| | | | | content of |
| | | | | macOS |
| | | | | 11.6 |
| | | | | .6](https:/ |
| | | | | /support.ap |
| | | | | ple.com/HT2 |
| | | | | 13256){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.6.7 | 20G630 | June 9, | | Recommended |
| | | 2022 | | for all |
| | | | | users and |
| | | | | improves |
| | | | | the |
| | | | | security of |
| | | | | macOS. |
+-------------+-------------+-------------+-------------+-------------+
| 11.6.8 | 20G730 | July 20, | 20.6.0\ | Consult |
| | | 2022 | [xnu-7195 | Apple\'s |
| | | | .141.32\~1\ | webpage for |
| | | | Tue Jun 21 | this |
| | | | 20:50:28 | release: |
| | | | PDT | |
| | | | 20 | [About the |
| | | | 22] | security |
| | | | | content of |
| | | | | macOS |
| | | | | 11.6 |
| | | | | .8](https:/ |
| | | | | /support.ap |
| | | | | ple.com/HT2 |
| | | | | 13344){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.7 | 20G817 | September | 20.6.0\ | Consult |
| | | 12, 2022 | [xnu-7195 | Apple\'s |
| | | | .141.39\~2\ | webpage for |
| | | | Mon Aug 29 | this |
| | | | 04:31:06 | release: |
| | | | PDT | |
| | | | 20 | [About the |
| | | | 22] | security |
| | | | | content of |
| | | | | macOS |
| | | | | 11 |
| | | | | .7](https:/ |
| | | | | /support.ap |
| | | | | ple.com/HT2 |
| | | | | 13443){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.7.1 | 20G918 | October 24, | 20.6.0\ | Consult |
| | | 2022 | [xnu-7195 | Apple\'s |
| | | | .141.42\~1\ | webpage for |
| | | | Thu Sep 29 | this |
| | | | 20:15:11 | release: |
| | | | PDT | |
| | | | 20 | [About the |
| | | | 22] | security |
| | | | | content of |
| | | | | macOS |
| | | | | 11.7 |
| | | | | .1](https:/ |
| | | | | /support.ap |
| | | | | ple.com/HT2 |
| | | | | 13493){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.7.2 | 20G1020 | December | 20.6.0\ | Consult |
| | | 13, 2022 | [xnu-7195 | Apple\'s |
| | | | .141.46\~1\ | webpage for |
| | | | Sun Nov 6 | this |
| | | | 23:17:00 | release: |
| | | | PST | |
| | | | 20 | [About the |
| | | | 22] | security |
| | | | | content of |
| | | | | macOS |
| | | | | 11.7 |
| | | | | .2](https:/ |
| | | | | /support.ap |
| | | | | ple.com/HT2 |
| | | | | 13534){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.7.3 | 20G1116 | January 23, | 20.6.0\ | Consult |
| | | 2023 | [xnu-7195 | Apple\'s |
| | | | .141.49\~1\ | webpage for |
| | | | Fri Dec 16 | this |
| | | | 00:35:00 | release: |
| | | | PST | |
| | | | 20 | [About the |
| | | | 22] | security |
| | | | | content of |
| | | | | macOS |
| | | | | 11.7.3]( |
| | | | | https://sup |
| | | | | port.apple. |
| | | | | com/en-us/1 |
| | | | | 02789){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.7.4 | 20G1120 | February | | Consult |
| | | 15, 2023 | | Apple\'s |
| | | | | webpage for |
| | | | | this |
| | | | | release: |
| | | | | |
| | | | | [About the |
| | | | | security |
| | | | | content of |
| | | | | macOS |
| | | | | 11.7 |
| | | | | .4](https:/ |
| | | | | /support.ap |
| | | | | ple.com/HT2 |
| | | | | 13534){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.7.5 | 20G1225 | March 27, | 20.6.0\ | Consult |
| | | 2023 | [xnu | Apple\'s |
| | | | -7195.141.4 | webpage for |
| | | | 9.700.6\~1\ | this |
| | | | Thu Mar 9 | release: |
| | | | 20:39:26 | |
| | | | PST | [About the |
| | | | 20 | security |
| | | | 23] | content of |
| | | | | macOS |
| | | | | 11.7 |
| | | | | .5](https:/ |
| | | | | /support.ap |
| | | | | ple.com/HT2 |
| | | | | 13675){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.7.6 | 20G1231 | April 10, | | Consult |
| | | 2023 | | Apple\'s |
| | | | | webpage for |
| | | | | this |
| | | | | release: |
| | | | | |
| | | | | [About the |
| | | | | security |
| | | | | content of |
| | | | | macOS |
| | | | | 11.7 |
| | | | | .6](https:/ |
| | | | | /support.ap |
| | | | | ple.com/HT2 |
| | | | | 13725){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.7.7 | 20G1345 | May 18, | 20.6.0\ | Consult |
| | | 2023 | [xnu | Apple\'s |
| | | | -7195.141.4 | webpage for |
| | | | 9.701.3\~1\ | this |
| | | | Mon Apr 24 | release: |
| | | | 23:00:57 | |
| | | | PDT | [About the |
| | | | 20 | security |
| | | | 23] | content of |
| | | | | macOS |
| | | | | 11.7 |
| | | | | .7](https:/ |
| | | | | /support.ap |
| | | | | ple.com/HT2 |
| | | | | 13760){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.7.8 | 20G1351 | June 21, | 20.6.0\ | Consult |
| | | 2023 | [xnu | Apple\'s |
| | | | -7195.141.4 | webpage for |
| | | | 9.701.4\~1\ | this |
| | | | Thu Jun 8 | release: |
| | | | 22:36:09 | |
| | | | PDT | [About the |
| | | | 20 | security |
| | | | 23] | content of |
| | | | | macOS |
| | | | | 11.7 |
| | | | | .8](https:/ |
| | | | | /support.ap |
| | | | | ple.com/HT2 |
| | | | | 13809){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.7.9 | 20G1426 | July 24, | 20.6.0\ | Consult |
| | | 2023 | [xnu- | Apple\'s |
| | | | 7195.141.49 | webpage for |
| | | | .702.12\~1\ | this |
| | | | Thu Jul 6 | release: |
| | | | 22:12:47 | |
| | | | PDT | [About the |
| | | | 20 | security |
| | | | 23] | content of |
| | | | | macOS |
| | | | | 11.7 |
| | | | | .9](https:/ |
| | | | | /support.ap |
| | | | | ple.com/HT2 |
| | | | | 13845){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+
| 11.7.10 | 20G1427 | September | | Consult |
| | | 11, 2023 | | Apple\'s |
| | | | | webpage for |
| | | | | this |
| | | | | release: |
| | | | | |
| | | | | [About the |
| | | | | security |
| | | | | content of |
| | | | | macOS |
| | | | | 11.7. |
| | | | | 10](https:/ |
| | | | | /support.ap |
| | | | | ple.com/HT2 |
| | | | | 13915){.ext |
| | | | | ernal-links |
| | | | | rel= |
| | | | | "nofollow"} |
+-------------+-------------+-------------+-------------+-------------+

## User Interface
