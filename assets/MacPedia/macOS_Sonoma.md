---
title: macOS Sonoma
favicon: Sonoma-icon.webp
order: 210
background_image: Sonoma-wallpaper.webp
json_path: ./macOS_Sonoma.json
info:
  icon:
    - alt: macOS Sonoma logo
  paras:
    - "Developed by: Apple Computer"
    - "General availability: September 26, 2023 (version 14.0 build 23A344 -
      original release)"
    - "Latest release: September 15, 2025 (version 14.8 build 23J21)"
    - "Preceded by: macOS Ventura (version 13)"
    - "Succeeded by: macOS Sequoia (version 15)"
    - "Kernel type: Hybrid (XNU)"
    - >
      Support status: Recieving security updates.
carousel_images:
  - path: /MacPedia/Images/UI/Sonoma-UI.webp
    alt: macOS Sonoma screenshot
    desc: A screenshot of macOS Sonoma.
  - path: /MacPedia/Images/Wallpapers/Sonoma-wallpaper.webp
    alt: macOS Sonoma wallpaper
    desc: The default wallpaper for macOS Sonoma.
---

_macOS 14 refers to this version. For macOS 10.14, refer to macOS Mojave._

macOS Sonoma (version 14) is the twentieth major release of macOS, Apple\'s
operating system for Mac computers. The successor to macOS Ventura, it was
announced at WWDC 2023 on June 5, 2023, and released on September 26, 2023. It
is named after the wine region located in California\'s Sonoma County.

+++

macOS Sonoma was succeeded by macOS Sequoia, which was released on September
16, 2024.

The first developer beta was released on June 5, 2023, and macOS Sonoma entered
public beta on July 11, 2023.

Sonoma is the final version of macOS that supports the 2018-2019 MacBook Air, as
its successor, macOS Sequoia, drops support for those models.

## Supported hardware

macOS Sonoma supports Macs with Apple silicon and Intel\'s Xeon-W and
8th-generation Coffee Lake/Amber Lake chips or later, and drops support for
various models released in 2017, officially marking the end of support for Macs
without Retina display and the 12-inch MacBook. The 2019 iMac is the only
Sonoma-supported Intel Mac that lacks a T2 chip.

Mac models that support macOS Sonoma are as follows.

- iMac (2019 and later)
- iMac Pro (2017)
- MacBook Air (2018 and later)
- MacBook Pro (2018 and later)
- Mac Mini (2018 and later)
- Mac Pro (2019 and later)
- Mac Studio (all models)

[Unofficial support]

By using patch tools such as OpenCore Legacy Patcher, macOS Sonoma can be
unofficially installed on earlier models that are officially unsupported. Such
models date back to the 2008 MacBook Pro and 2007 iMac.

According to an Ars Technica analysis, 2016 and 2017 Macs received on average
six years of updates, lower than the seven to eight years of updates received by
Intel Macs released from 2009 to 2015.

## New features and changes

macOS Sonoma includes a number of new features and improvements, mainly focused
on productivity and creativity:

- Widgets have been revamped. They are no longer constrained to the Notification
  Center - instead they can be placed anywhere on the desktop, and the widget
  picker has been redesigned to resemble the iOS and iPadOS versions of it.
- The lock screen has been redesigned to include a date and time similar to iOS
  and iPadOS. The power buttons have become a context menu.
- Video-conferencing apps can overlay the presenter\'s webcam video on top of
  screen sharing.
- App icons have been made more rounded.
- The Spotlight search bar has been made more rounded, and its width has been
  decreased.
- Safari changes:
  - Browsing profiles enable separate sets of bookmarks, extensions, and
    cookies, which can be used to separate, for example, a personal setup from a
    work one.
  - Password sharing lets multiple people have access to the same collection of
    website passwords, and update them as needed, with changes syncing across
    all enrolled devices.
  - Safari web apps let the user add any website to the Dock and open it in a
    simplified Safari interface, in a way that is similar to both web apps
    introduced in iPhone OS 1.1.3 and Google Chrome. This feature is slightly
    different from progressive web apps since it does not require additional
    work from website developers.
- Messages changes:
  - More precise search filters: for example, the contact name can be combined
    with a search term to look for the term within a specific conversation.
  - Catch-up lets the user quickly jump to the first unread message in a
    conversation.
  - Tapback now appears as multiple icons instead of being a context menu.
  - iMessage stickers have a new selection interface.
- Apple TV now has a sidebar instead of a top bar.
- Game mode optimizes gaming performance by prioritizing gaming tasks and
  allocating more GPU and CPU capacity to the game. It provides smoother frame
  rates for game play and reduced latency for Bluetooth peripherals, such as
  wireless game controllers and AirPods.
- New slow-motion screensavers of different locations worldwide. When logged in,
  they gradually slow down and become the desktop wallpaper.
- Smoother animations for several areas such as the notification panel, the lock
  screen, and the show desktop gesture. The notifications now slide in with an
  ease-out motion, the lock screen now zooms in and out when unlocking and
  locking, the show desktop gesture has a new spring back animation.
- Users can react with their hands and animations will pop up based on the hand
  gesture.
- AV1 hardware decoding has been introduced on devices with AV1 hardware
  decoding support, such as Macs with SoCs from the Apple M3 family.
- Print Center, a utility application returning from Mac OS X Tiger, was
  reintroduced for managing print jobs, viewing different printer queues, and
  pausing or deleting print jobs.
- The text cursor now looks more like its iOS counterpart. It is bolder, has a
  smooth blinking motion, and its color follows the current app\'s accent color.
  It also briefly displays an indicator that shows the current input language
  when the user switches keyboard languages. This indicator can also signal
  helpful input details like when Caps Lock is on.
- Videos now encode faster in Final Cut Pro, Compressor, and third-party video
  applications on Mac computers using M1 Ultra or M2 Ultra.
- The startup screen is now slightly different, with the loading bar at the
  bottom being lowered to the bottom of the screen instead of immediately under
  the Apple logo.

[Gaming]

Alongside macOS Sonoma, Apple announced developer tools for porting Windows
games to macOS. The Game Porting Toolkit (GPTK), derived from Wine and Crossover
and released in beta, translates Windows application programming interface (API)
calls to equivalent macOS APIs, allowing developers to run unmodified versions
of their x86 Windows DirectX games on macOS. Mac users have been able to use the
Game Porting Toolkit to run a number of DirectX 12 games; tech news outlets have
compared the tool to Valve Corporation\'s Proton compatibility layer for Linux.
Apple also released a Metal Shader Converter that converts shaders to Apple\'s
Metal graphics API.

A DigitalFoundry review of the first beta of Game Porting Toolkit found it
\"impressive\", with few graphical glitches and full support for console
controllers instead of the keyboard, though they found that frame rates were
around half of what they would be on Windows, and that many games were not
supported. During the Sonoma beta, updates to the Game Porting Toolkit brought
support for 32-bit games and around 20% better performance.

Writing for AppleInsider and iMore, reporter Peter Cohen said that Game Mode and
the Game Porting Toolkit are improvements but do not indicate the kind of \"sea
change\" in Apple\'s priorities and culture that are needed to build a true Mac
gaming ecosystem. Cohen says that the problem with Mac gaming is not in the
ability to port games, but in a lack of a \"business case\" for game publishers
to do so, due to the Mac\'s low market share, the cost of supporting a port, and
uncertain demand for Mac games when many Mac users also own consoles or gaming
PCs. YouTuber Snazzy Labs issued similar criticisms, which journalist John
Siracusa agreed with.

[New Unicode Characters Font Support]

macOS 14.0 introduced support for the following Unicode characters:

- Tagalog Letter Ra (U+170D) (14.0)
- Tagalog Sign Pamudpod (U+1715) (14.0)
- Tagalog Letter Archaic Ra (U+171F) (14.0)

[Removed features]

- Support for legacy Mail plug-ins has been removed.
- System API support for converting PostScript and Encapsulated PostScript files
  to PDF format has been removed, following previous changes in macOS Ventura
  that removed support for viewing and converting PostScript and Encapsulated
  PostScript files within Preview.

## Release History

Version Build Release date Darwin version Release Notes

---

## User Interface
