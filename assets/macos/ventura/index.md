---
title: macOS Ventura
favicon: ventura-icon.webp
order: 200
background_image: ventura-light-wallpaper.webp
info:
  icon:
    - alt: macOS Ventura logo
  paras:
    - "Developed by: Apple Computer"
    - "General availability: October 24, 2022 (version 13.0 builds 22A380 and
      22A8380 - original releases)"
    - "Last release: May 12, 2025 (version 13.7.6 build 22H625)"
    - "Preceded by: macOS Monterey (version 12)"
    - "Succeeded by: macOS Sonoma (version 14)"
    - "Kernel type: Hybrid (XNU)"
    - >
      Support status: Unsupported as of September 15, 2025.
carousel_images:
  - path: /macos/ventura/ventura-light-ui.webp
    alt: Dark mode macOS Ventura screenshot
    desc: A screenshot of macOS Ventura's dark mode.
  - path: /macos/ventura/ventura-dark-ui.webp
    alt: macOS Ventura screenshot
    desc: A screenshot of macOS Ventura.
  - path: /macos/ventura/ventura-light-wallpaper.webp
    alt: macOS Ventura wallpaper
    desc: The default wallpaper for macOS Ventura.
  - path: /macos/ventura/ventura-dark-wallpaper.webp
    alt: macOS Ventura dark mode wallpaper
    desc: The default dark mode wallpaper for macOS Ventura.
---

_macOS 13 refers to this version. For macOS 10.13, refer to macOS High Sierra._

macOS Ventura (version 13) is the nineteenth major release of macOS, Apple\'s
operating system for Macintosh computers. The successor to macOS Monterey, it
was announced at WWDC 2022 on June 6, 2022, and launched on October 24, 2022.
macOS Ventura was succeeded by macOS Sonoma, which was released on September
26, 2023.

+++

It is named after the city of Ventura and is the tenth macOS release to bear a
name from the company\'s home state of California. The macOS 13 Ventura logo,
official graphics and default wallpaper resemble an abstract California poppy.

macOS Ventura is the last version of macOS supporting Macs released in 2017,
including the 21.5-inch 2017 iMac and the 12-inch MacBook, with the exception of
the iMac Pro, which is supported by releases up to macOS Sequoia.

## Supported hardware

macOS Ventura is the last release for Macs with Apple T1 Security chip. macOS
Ventura officially supports Macs with Apple silicon and Intel\'s Skylake-based
Xeon-W and 7th-generation Kaby Lake chips or later, and drops support for Macs
released from 2015 to 2016, officially marking the end of support for the Retina
MacBook Pro, 2015-2017 MacBook Air, 2014 Mac Mini, 2015 iMac and cylindrical Mac
Pro. The 2016 MacBook Pro is also dropped, however, the operating system can be
installed and run using OpenCore because all required drivers for T1 system are
present (drivers are removed in macOS Sonoma). The 21.5 inch 2017 iMac is the
only supported standard configuration model to have no Retina display.

Macs that support macOS Ventura are as follows.

- iMac (2017 or later)
- iMac Pro (2017)
- MacBook (2017)
- MacBook Air (2018 or later)
- MacBook Pro (2017 or later)
- Mac Mini (2018 or later)
- Mac Pro (2019 or later)
- Mac Studio (all models)

AirPlay to Mac, always-on \"Hey Siri\", 4K HDR streaming, and Spatial Audio are
not supported on all models. Offline dictation, Live Captions, Portrait Mode in
FaceTime, and \"Reference mode\" (which allows users to use an iPad as a
secondary reference monitor) only work on Apple silicon Macs.

### Unofficial support on older models (discontinued hardware)

By using patch tools, macOS Ventura can be unofficially installed on earlier
models that are officially unsupported, such as a 2017 MacBook Air and a 2015
MacBook Pro. Using these methods, it is possible to install macOS Ventura on
models as early as a 2008 MacBook Pro or a 2007 iMac (after a Penryn CPU
upgrade).

## Features and Changes

macOS Ventura includes changes, many related to productivity, and adds two apps
from iOS and iPadOS: Weather and Clock. Freeform was added in an update to all
three operating systems.

### New system features

- Stage Manager, which provides an alternative interface for multitasking, in
  addition to the previous Mission Control.

### New apps

- Weather: shows detailed weather forecasts. Clicking on the Weather widget now
  opens this app, not The Weather Channel\'s website.
- Clock: displays world time and manages alarms, stopwatches, and timers.
  Clicking on the Clock widget now opens this app, not the Date & Time section
  of System Preferences.
- Freeform: a whiteboard app that supports real-time collaboration. It was only
  added in version 13.1.

### Changes

- Mail adds \"send later\" and \"undo send\" options and includes improvements
  to search, email organization, and formatting.
- Spotlight produces richer search results; with Live Text, it can return
  pictures that contain the queried text.
- Safari adds Shared Tab Groups and Passkeys, uses WebAuthn for password-less
  account management, gets a redesigned sidebar, and gains AVIF support.
- Messages now allows the user to edit and unsend recent iMessages, similar to
  iOS 16 and iPadOS 16.
- FaceTime gets Handoff, the ability to transfer a call between multiple Apple
  devices.
- Continuity Camera, a feature that allows a user\'s iPhone to wirelessly serve
  as a front-facing camera, with support for Desk View on some iPhones.
- System Preferences is renamed to System Settings and gets a brand new tabbed
  interface and re-organized panes based on the iOS/iPadOS Settings app. Because
  of this, the app-specific \"Preferences\...\" menu bar item has been renamed
  \"Settings\...\" for all apps.
- Photos app: iCloud Shared Photo Library allows multiple members of iCloud
  Family Sharing to add, edit, and delete photos in the same photo library.
- The Game Center dashboard is redesigned.
- Font Book gets a new visual design.
- Maps adds support for routes with multiple stops.
- Siri gets redesigned to match its appearance since iOS 14 and iPadOS 14.
- Apple Music adds the ability for the user to mark artists as \"favorites\" and
  receive new music notifications from those artists.
- Print dialogs have been redesigned. Many users report that Print Presets no
  longer save all essential printer features (paper type, duplexing, color mode,
  print quality, etc.) requiring settings to be manually selected with every
  print job.
- Ability to play ambient background sounds as an accessibility feature in
  System Settings.
- New backgrounds and screensavers.
- A bug was fixed in Disk Utility concerning the verification of Time Machine
  backup volumes.
- Improved game controller support.
- Apple\'s Virtualization framework: better support for multitouch gestures in
  macOS Ventura VMs, support for graphics acceleration, folder sharing, and
  Rosetta 2 in Linux VMs.
- Metal 3, with support for spatial and temporal image upscaling.
- Live Text now works in videos.
- About This Mac tab was updated. It now shows an image of the device you are
  using and shows less information, it also gives you an option to go to System
  Settings to see more info about your Mac.
- **iCloud**
  - Advanced Data Protection: optional end-to-end encryption for all iCloud data
    except emails, calendars and contacts.
  - Support for physical security keys
- **Security**
  - Rapid Security Response, a new update mechanism to rapidly patch security
    vulnerabilities without having to install a full system update; according to
    Apple, these patches will not require a reboot.
  - New Login Items section in System Settings (in the General pane), which
    shows all programs that start on boot (including all LaunchAgents and
    LaunchDaemons for both the user and the system). In previous versions of
    macOS, the Login Items list in the \"Users & Groups\" pane only showed
    programs that registered themselves to be displayed, and most malware would
    not have been listed.
  - Confirmation before allowing data connections with USB-C accessories, to
    prevent malicious USB-C chargers from installing malware.
  - Gatekeeper now checks the notarization of third-party apps every time they
    are launched.
  - Lockdown Mode, which prevents USB devices from connecting when the Mac is
    asleep, blocks the installation of MDM profiles, limits the risk of
    malicious attachments in the Messages app, and removes just-in-time
    compilation for JavaScript in Safari.
  - Built-in apps cannot be moved from the cryptographically verified Signed
    System Volume to another location where they could be tampered with.

### Removed features

- The Preview app on Mac no longer supports PostScript (.ps) and Encapsulated
  PostScript (.eps) files. Printing of such files, to a printer natively
  supporting PostScript, remains possible by accessing the Printer Queue from
  System Settings and dragging the file into the queue window.
- Network Utility has been removed.
- The Network Locations feature was removed from the graphical user interface.
  It can still be accessed from the command line.
- Help files related to dial-up modems have been removed.
- Schedule Shutdown, Restart and Boot have been removed from the graphical user
  interface. They can still be accessed from the command line.
- Support for USB 1.1 accessories is removed.

## Release History

<table>
  <tr>
    <td
      class="top-left bottom-left previous-release"
    >
      Previous release
    </td>
    <td class="top bottom current-release">
      Current release
    </td>
    <td class="top bottom beta-release">
      Current beta release
    </td>
    <td
      class="top-right bottom-right security-response"
    >
      Security response
    </td>
  </tr>
</table>
<table class="releases">
  <caption class="top-left top-right">macOS Tahoe Releases</caption>
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
