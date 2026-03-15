---
title: macOS Mojave
favicon: mojave-icon.webp
order: 160
background_image: mojave-day-wallpaper.webp
info:
  icon:
    - alt: macOS Mojave logo
  paras:
    - "Developed by: Apple Computer"
    - "General availability: September 24, 2018 (version 10.14 build 18A391 -
      original Mac App Store release)"
    - "Last release: July 21, 2021 (version 10.14.6 build 18G9323 - final
      security update)"
    - "Preceded by: macOS High Sierra (version 10.13)"
    - "Succeeded by: macOS Catalina (version 10.15)"
    - "Kernel type: Hybrid (XNU)"
    - >
      Support status: Unsupported as of October 2021. iTunes is no longer being
      updated, but is able to download driver updates to sync to newer devices.
      (iTunes is replaced by separate apps in macOS Catalina, including Music,
      TV, Podcasts, and Finder for syncing devices.)
carousel_images:
  - path: /macos/mojave/mojave-light-ui.webp
    alt: macOS Mojave screenshot
    desc: A screenshot of macOS Mojave.
  - path: /macos/mojave/mojave-dark-ui.webp
    alt: Also a screenshot of macOS Mojave
    desc: Also a screenshot of macOS Mojave, but in dark mode.
  - path: /macos/mojave/mojave-day-wallpaper.webp
    alt: macOS Mojave wallpaper
    desc: The default light mode wallpaper for macOS Mojave.
  - path: /macos/mojave/mojave-night-wallpaper.webp
    alt: macOS Mojave dark mode wallpaper
    desc: The default dark mode wallpaper for macOS Mojave.
---

_macOS 10.14 refers to this version. For macOS 14, refer to macOS Sonoma._

macOS Mojave (pronounced mo-HAH-vee) is the fifteenth major release of macOS,
Apple Inc.\'s desktop operating system for Macintosh computers. macOS Mojave was
announced at Apple\'s Worldwide Developers Conference on June 4, 2018, and was
released to the public on September 24. The operating system\'s name refers to
the Mojave Desert, continuing the use of California-themed names that began with
OS X Mavericks. It succeeded macOS High Sierra and was followed by macOS
Catalina. macOS Mojave is the last version of macOS that features the iTunes and
Dashboard apps.

+++

macOS Mojave brings several iOS apps to the desktop operating system, including
Apple News, Voice Memos, and Home. It also includes a more comprehensive \"dark
mode\", is the final version of macOS to support 32-bit application software, is
the last version of the macOS capable of being booted from an HFS+ partition
without third-party patching, and is also the last version of macOS to support
the iPhoto app, which had already been superseded in OS X Yosemite (10.10) by
the newer Photos app.

macOS Mojave was well received and was supplemented by point releases after
launch.

## System requirements

macOS Mojave requires a GPU that supports Metal, and the list of
officially-compatible systems is more restrictive than the previous version,
macOS High Sierra. Mojave drops support for various Macs released from late 2009
to 2011. Compatible models are the following Macintosh computers running OS X
Mountain Lion or later:

- iMac (Late 2012 or later)
- iMac Pro (2017)
- MacBook (Early 2015 or later)
- MacBook Air (Mid 2012 or later)
- MacBook Pro (Mid 2012 or later)
- Mac Mini (Late 2012 or later)
- Mac Pro (2013, 2010-2012 supported with a Metal-capable graphics card)/li\>

macOS Mojave requires at least 2 GB of RAM as well as 12.5 GB of available disk
space to upgrade from OS X El Capitan, macOS Sierra, or macOS High Sierra, or
18.5 GB of disk space to upgrade from OS X Yosemite and earlier releases. Some
features are not available on all compatible models. Mojave installations
convert the installation volume to Apple File System (APFS), if the volume had
not previously been converted from HFS+.

## Features

### System updates

macOS Mojave deprecates support for several legacy features of the OS. The
graphics frameworks OpenGL and OpenCL are still supported by the operating
system, but will no longer be maintained; developers are encouraged to use
Apple\'s Metal library instead.

OpenGL is a cross-platform graphics framework designed to support a wide range
of processors. Apple chose OpenGL in the late 1990s to build support for
software graphics rendering into the Mac, after abandoning QuickDraw 3D. At the
time, moving to OpenGL allowed Apple to take advantage of existing libraries
that enabled hardware acceleration on a variety of different GPUs. As time went
on, Apple has shifted its efforts towards building its hardware platforms for
mobile and desktop use. Metal makes use of the homogenized hardware by
abandoning the abstraction layer and running on the \"bare metal\". Metal
reduces CPU load, shifting more tasks to the GPU. It reduces driver overhead and
improves multithreading, allowing every CPU thread to send commands to the GPU.

macOS does not natively support Vulkan, the Khronos group\'s official successor
to OpenGL. The MoltenVK library can be used as a bridge, translating most of the
Vulkan 1.0 API into the Metal API.

Continuing the process started in macOS High Sierra (10.13), which issued
warnings about compatibility with 32-bit applications, Mojave issues warnings
when opening 32-bit apps that they will not be supported in future updates. In
macOS Mojave 10.14, this alert appears once every 30 days when launching the
app, as macOS 10.15 will not support 32-bit applications.

When Mojave is installed, it will convert solid-state drives (SSDs), hard disk
drives (HDDs), and Fusion Drives, from HFS Plus to APFS. On Fusion Drives using
APFS, files will be moved to the SSD based on the file\'s frequency of use and
its SSD performance profile. APFS will also store all metadata for a Fusion
Drive\'s file system on the SSD.

New data protections require applications to get permission from the user before
using the Mac camera and microphone or accessing system data like user Mail
history and Messages database.

### Removed features

- Mojave removes integrations with Facebook, Twitter, LinkedIn, Vimeo, and
  Flickr, which were added in OS X Mountain Lion and Mavericks.
- Mojave also removes support for sub-pixel rendering of text. The feature was
  previously used on non-Retina displays to improve the appearance of text on
  screen.
- The only supported Nvidia graphics cards are the Quadro K5000 and GeForce GTX
  680 Mac Edition.

### Applications

Mojave features changes to existing applications as well as new ones. Finder now
has metadata preview accessed via View \> Show Preview, and many other updates,
including a Gallery View (replacing Cover Flow) that lets users browse through
files visually. After a screenshot is taken, the image appears in the corner of
the display, as with iOS. The screenshot software can now record video, choose
where to save files, and be opened via <kbd>⇧ Shift</kbd>.

Safari\'s Tracking Prevention features now prevent social media \"Like\" or
\"Share\" buttons and comment widgets from tracking users without permission.
The browser also sends less information to web servers about the user\'s system,
reducing the chance of being tracked based on system configuration. It can also
automatically create, autofill, and store strong passwords when users create new
online accounts; it also flags reused passwords so users can change them.

A new Screenshot app was added to macOS Mojave to replace the Grab app.
Screenshot can capture a selected area, window or the entire screen as well as
screen record a selected area or the entire display. The Screenshot app is
located in the /Applications/Utilities/ folder, as was the Grab app. Screenshot
can also be accessed by pressing <kbd>⇧ Shift</kbd>.

macOS 10.14.1, released on October 30, 2018, adds Group FaceTime, which lets
users chat with up to 32 people at the same time, using video or audio from an
iPhone, iPad or Mac, or audio from Apple Watch. Participants can join in
mid-conversation.

The Mac App Store was rewritten from the ground up and features a new interface
and editorial content, similar to the iOS App Store. A new \'Discover\' tab
highlights new and updated apps; Create, Work, Play and Develop tabs help users
find apps for a specific project or purpose.

Four new apps (News, Stocks, Voice Memos and Home) are ported to macOS Mojave
from iOS, with Apple implementing a subset of UIKit on the desktop OS.
Third-party developers would be able to port iOS applications to macOS in 2019.

With Home, Mac users can control their HomeKit-enabled accessories to do things
like turn lights off and on or adjust thermostat settings. Voice Memos lets
users record audio (e.g., personal notes, lectures, meetings, interviews, or
song ideas), and access them from iPhone, iPad or Mac. Stocks delivers curated
market news alongside a personalized watchlist, with quotes and charts.

A few security fixes were made.

## Release History

<table class="releases">
  <caption class="top-left top-right">macOS Mojave Releases</caption>
  <tbody>
    <tr>
      <th class="left">Version</th>
      <th>Release Date</th>
      <th class="right">Release Notes</th>
  </tr>
  </table>

## User interface

Mojave revamps Dark Mode. A light-on-dark color scheme, it initially affected
only the dock, menu bar, and drop-down menus, while here, it darkens the entire
user interface to make content stand out while the interface recedes. Users can
choose dark or light mode when installing Mojave, or any time thereafter from
System Preferences. All of the built-in apps support the revamp. App developers
can implement the feature in their apps via a public API.

Stacks, a feature introduced in Mac OS X Leopard, now lets users group desktop
files into groups based on file attributes such as file kind, date last opened,
date modified, date created, name and tags. This is accessed via View \> Use
Stacks.

macOS Mojave features a new Dynamic Desktop that automatically changes specially
made desktop backgrounds (two of which are included) to match the time of day.

The Dock has a space for recently used apps that have not previously been added
to the Dock.

macOS update functionality has been moved back to System Preferences from the
Mac App Store. In OS X Mountain Lion (10.8), system and app updates moved to the
App Store from Software Update.
