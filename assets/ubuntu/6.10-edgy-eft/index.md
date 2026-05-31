---
title: Ubuntu 6.10 Edgy Eft
favicon: 6.10-edgy-eft-icon.webp
order: 50
background_image: 6.10-edgy-eft-wallpaper.webp
---

Ubuntu 6.10 Edgy Eft is the 5th release of Ubuntu, developed and maintained by
Canonical Ltd. It features changes in some parts of the UI, updated software, a
new startup and shutdown sound.

+++

Edgy includes a number of security features to prevent common security
vulnerabilities before they are discovered. The release also improves the server
setup functionality by simplifying a number of commion deployment scenarios.

## Features

Edgy introduces a number of improvements listed here.

### Tomboy

Tomboy is a free and open-source desktop note-taking application written for
[Microsoft Windows](/windows/), [macOS](/macos/), Linux, and BSD operating
systems. Tomboy was part of the GNOME 2 desktop environment. Its interface is a
word processor with a wiki-like linking system to connect notes together. Words
in the note body that match existing note titles become hyperlinks
automatically, making it simple to construct a personal wiki. For example,
repeated references to favorite artists would be automatically highlighted in
notes containing their names. As of version 1.6 (2010), it supports text entries
and hyperlinks to the World Wide Web, but not graphic image linking or
embedding.

The development of the original application ceased in 2017, and was replaced by
`tomboy-ng` written in Free Pascal by the development team.

Ubuntu included the software as it came by default with GNOME.

Tomboy included these features:

- Text highlighting
- Inline spell checking using GtkSpell
- Automatic hyperlinking of Web and email addresses
- Undo/redo
- Font styling and sizing
- Bulleted lists
- Note synchronization over SSH, WebDAV, Ubuntu One, or the Tomboy REST API that
  is implemented by several server applications

### F-Spot

F-Spot is a discontinued image organizer, that was designed to provide personal
photo management for the GNOME desktop environment. The name is a play on the
word F-Stop. F-Spot can be used for basic photo editing and management, and was
first included in Ubuntu with this release.

F-Spot aimed to have an interface that is simple to use but also facilitates
advanced features such as tagging images, and displaying and exporting image
metadata in Exif and XMP formats. F-Spot has been noted as being similar to
iPhoto.

All major photographic image formats are supported, as well as several
vendor-specific RAW formats. As of 2008, the RAW formats were not editable with
F-Spot. However, newer releases of F-Spot have the DevelopInUFRaw extension,
which calls on UFRaw for the conversion work, and then re-imports the resulting
JPEG back into F-Spot as a new version of the original RAW.

Photos can be imported directly from the camera. The driver support is provided
by libgphoto2. The GNOME desktop environment can also optionally detect if a
camera or a memory card has been attached, and import images to F-Spot
automatically. Photo CDs can be created by selecting multiple photographs and
selecting "Export to CD" from the main menu.

F-Spot has a photo tagging feature which allows for photos to be organized based
on user-defined tags or generic pre-included tags such as favorites. Basic
functions such as crop and rotate available alongside more advanced features
such as red-eye removal and versioning. The rotate function allows for movements
in single degree increments with autocrop, not just 90-degree adjustment. Color
adjustments are supported with a histogram. They include an auto-improve and
individual brightness, contrast, hue, saturation and temperature.

Photos in the F-Spot library can be uploaded to a number of online photo storage
sites. F-Spot can export to websites such as Flickr, SmugMug, 23hq, and Picasa
Web Albums, and also to stand-alone web gallery software, such as Gallery.
F-Spot can also generate static web gallery sites and export to Facebook. F-Spot
automatically downsizes photos before exporting to Flickr, and though it
describes this as "optional," there is no option to not downsize photos before
export.

### GNOME 2.16

GNOME is a free and open-source desktop environment for Linux and other
Unix-like operating systems. It is the default desktop environment for multiple
distributions, including Ubuntu, Fedora, and even Oracle Solaris, a Unix
variant.

GNOME 2.16 was released in September 2006, and it was the release Ubuntu shipped
with. The release notes for it can be found
[here](https://release.gnome.org/2-16/).

A summary can be found here:

- **Advanced 3D effects**: Numerous extensions to the compositor of the default
  GNOME window manager, Metacity, enabled 3D effects on windows, making them
  wobble, shrink, explode, fade in and out and other interesting and/or funny
  effects.
- **Cleaner icon theme, Cairo, and Wanda**: GNOME 2.16 improves the icon theme
  system; many icons were shipped with their applications, icons were redesigned
  to follow the Tango project artwork guidelines and renamed to follow the
  Freedesktop icon naming specification.
- **Better battery life for laptops**: 2.16 brought integrated power management
  support, allowing the user to manage their battery, UPS, and wireless
  peripherals and offering graphs that show the amount of power being used. It
  is typically accessed through a panel icon.
- **Easier disk management**: GNOME added Baobab to allow the user to easily
  analyze their disk usage, scan any local or remote directory, requested
  folders or the complete filesystem, and the program displays an image of all
  the directories found.
- **New screen reader**: Orca was the new screen reader introduced by GNOME in
  2.16, using the Assistive Technology Service Provider Interface (AT-SPI) to
  query the display and output he content using various combinations of speech
  synthesis, braille, and magnification, thus supporting all applications and
  toolkits that support AT-SPI.
- **Easier file permission manager**: Nautilus gained the ability to change the
  permissions of all files in a folder by right-clicking the folder and
  selecting Properties Permissions.
- **Simpler bug reporting**: The Bug-Buddy utility is now automatically launched
  when app crashes, asks fewer questions to save time and displays everything in
  a single window.

This is not the full list; please see the release notes.

### Better startup times

The traditional `init` system was replaced by Upstart, a startup manager
offering a cleaner design, eye-catching effects and faster startup times.

Upstart quickened the boot process as it allowed services to start more
asynchronously rather than in a strict order like `init`.

### Firefox 2.0

Edgy Eft came with Firefox 2.0, the latest version of the open-source browser at
the time. The release article states:

> The latest Firefox web browser, version 2.0, which offers inline spell check
> support in web forms, easy recovery of crashed sessions, built-in phishing
> detectors, enhanced search engine management with built in OpenSearch support,
> and better support for previewing and subscribing to web feeds

According to the release notes for
[Firefox 2](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/2.0/releasenotes/?redirect_source=mozilla-org&ref=blog.tmn.nu):

- The **UI of the browser** has been **updated**.
- **Phishing protection was added** to warn users of suspected scams.
- **Search capabilities have been enhanced**—seach terms/suggestions appear as
  the user types when using Google, Yahoo or Answers.com, and better search
  engine management has been introduced with the ability to add, remove and
  re-order search engines.
- **Links open in new tabs** instead of new windows by default and each tab has
  a close button.
- If there are too many tabs to fit in a window, Firefox shows **arrows on the
  left and right of the tab bar** (or tab "strip"), allowing the user to scroll
  between their tabs.
- **"Session Restore"** allows the user to restore windows, tabs, downloads and
  more. It is activated automatically during installation of an update or
  extension and users are asked if they wish to restore the previous session
  after a crash or update.
- Users have the **liberty to choose how web/RSS feeds are handled**. Choices
  include:
  - Subscribing to them through a web service
  - Subscribing to them in a standalone RSS reader
  - Adding them as bookmarks Preloaded options include My Yahoo!, Bloglines and
    Google Reader, but users can add any web service that handles RSS feeds
- **Built-in spell checking** has been added, removing the need for a separate
  application.
- Users can create a bookmark with a **"Live Title"**. Live Titles are compact
  enough to fit in a bookmark label and are more useful than static page titles.
- There is a **new add-ons manager**.
- **JavaScript 1.7 has been introduced**. It includes several new features that
  make development easier for the people making the web.
- **Client-side session and persistent storage** were added in compliance with
  an early WHATWG (Web Hypertext Application Technology Working Group)
  specification for an alternative to cookies. These evolved into the modern
  `localStorage` and `sessionStorage` web APIs.
- **SVG text can now follow a curve or shape**, allowing for better effects with
  SVG pictures.
- A **new Windows installer** based on the
  [Nullsoft Scriptable Install System](https://sourceforge.net/projects/nsis/)
  resolves many long-standing issues with the Windows installer. Nullsoft
  Scriptable Install System is a professional open-source system to create
  Windows installers and is designed to be as small and flexible as possible.

### Server improvements

<!--This section can be improved-->

The release announcement states:

> The Ubuntu server edition builds on the functionality from the previous
> release simplifying common Linux server deployment processes. It also includes
> a pre-release of the upcoming LTSP-5 (Linux Terminal Server Project). LTSP-5
> offers clients a lower TCO (total cost of ownership), simpler installation and
> easier maintenance than typical IT deployments. With all data stored on the
> server, administrators have substantially eliminated the cost of updating
> individual workstations to ensure their security.

This meant that administrators had less work to do when it came to updating
workstations. Boot times also improved due to the introduction of Upstart, which
increased server uptime directly.

### Core

These cover fundamental parts of the operating system.

#### Linux kernel 2.6.17

The update brought about some changes:

- Filesystem performance improvements
- Networking enhancements for IPv6, DCCP, Netfilter, Wireless, and more.
- Driver additions and improvements for input/output devices like:
  - USB:
    - unified touchscreen driver
    - Open Host Controller Interface/OHCI and Enhanced Host Controller
      Interface/EHCI support
  - Video:
    - ATI RS350 support
    - Radeon memory map rework
    - old Radeon driver removal
    - other video driver improvements
  - SCSI:
    - old `qlogicfc` driver for QLogic Fibre Cards replaced by newer `qla2xxx`
    - improvements to `qla2xxx` and `lpfc` drivers and more
  - IDE: support for ATI SB600 IDE and ULI M-1573 South Bridge
  - `libata` (ATA/SATA management library):
    - ATAPI (ATA Packet Interface) turned on by default
    - Per-device maximum sectors (`max_sectors`) added due to some drives having
      issues with large transfers and storage devices having different limits
      while on the same controller
    - Add soft reset method to `ahci` driver (Advanced Host Controller
      Interface) as `libata` became smart enough to handle both soft and hard
      resets4
    - Wider support and mroe improvements
  - ALSA (Advanced Linux Sound Architecture):
    - Ad Lib FM card support
    - `procfs` (`/proc` filesystem diagnostic information) became optional
    - Backwards compatibility with OSS (Open Sound System, predecessor to ALSA)
      became optional
    - `ac97` driver codec patched for LM4550
    - Wider USB audio device support
    - Heavily improved HDA (High-Definition Audio) support
    - Many more improvements
  - Network drivers:
    - Drivers added for Broadcom 43xx (`bcm43xx`) and Siemens Gigaset 3070
      family of ISDN DECT PABXes
    - Removal of Sangoma drivers
    - LEAP authentication added for `ipw2100` and `ipw2200` (Intel PRO/Wireless
      2100/2200: Mini-PCI WiFi adpaters)
    - Bluetooth coexistence support for `ipw2200`
    - Many improvements to:
      - `tg3` (Broadcom Tigon3 Gigabit Ethernet)
      - `forcedeth` (NVIDIA nForce Ethernet)
      - `e1000` (Intel PRO/1000 Gigabit Ethernet)
      - `sky2` (Marvell Yukon 2 88E80xx chips)
      - `airo` (Cisco Aironet wireless adapters)
      - `s2io` (Neterion/S2io Xframe I/II 10-Gigabit-Ethernet Server adapters)
      - `bnx2` (Broadcom NetXtreme II)
      - `natsemi` (National Semiconductor)
      - `starfire` (Adaptec Starfire Ethernet)
      - `sb1250-mac` (Broadcom SB1250/BCM1480 MAC)
      - `sis900` (Silicon Integrated Systems 900/7016 PCI Fast Ethernet
        adapters)
      - `spidernet` (Spider Southbridge ethernet)
      - `pcnet_cs` (NE2000-based PCMCIA Ethernet network adapters)
      - `axnet_cs` (ASIX AX88190-based PCMCIA Ethernet network adapters)
      - `bonding` (for bonding multiple physical network interface into a single
        'bonded' one)
  - Braille device support
  - SNES mouse support
  - Fujitsu N3510 laptop extra keys support
  - LED driver additions, improvements and enhancements

The full list of additions can be found on
[kernelnewbies.org](https://kernelnewbies.org/Linux_2_6_17).

#### Glibc 2.4

`glibc`, or the GNU C Library, is the standard C library for all GNU systems. It
defines and implements many essential functions that make C, C++ and other
languages usable.

The 2.4 release was made available on March 6, 2006, and it introduced the
following:

- Changes to the `glibc` API (Application Programming Interface)
- A new ABI (Application Binary Interface) has been introduced for all new
  configurations.
- The Native POSIX Threading Library or NPTL has become the only threading
  library, completely replacing LinuxThreads.

The mail archive of the `libc-alpha@sourceware.org` mailing list for the glibc
project can be found
[here](https://sourceware.org/legacy-ml/libc-alpha/2006-03/msg00050.html).

#### GCC 4.1

GCC, or the GNU Compiler Collection (earlier GNU C Compiler), is a collection of
compilers from the GNU project for various languages and architectures to
compile code into executable instructions for various machines.

GCC 4.1 was released on February 28, 2006. This release brings about these
changes:

<!--ChatGPT was used extensively here; you cannot expect a 14 year old to be able to explain compiler theory-->

- Introduction of infrastructure in GCC for inter-procedural optimizations.
  Inter-Procedural Optimizations are a technique that analyze and improve a
  program across multiple functions and files.
- GCC can now do a form of Partial Dead Code Elimination, or PDCE. PDCE is a
  compiler optimization technique that removes code on some, but not all,
  execution paths. However, it is not always useful, so GCC considers only
  profitable cases.
- GCC now has a value range propagation pass. This allows the compiler to
  eliminate bounds checks and branches. The results of the pass can also be used
  to accurately compute branch probabilities. This means that GCC will try to
  predict the value range of a certain variable and remove certain branches if
  it can prove that the branch is redundant and is of no use.
- The pass to convert PHI nodes to straight line code has been improved
  significantly.
- The algorithm to determine the order in which PHI nodes are considered has
  been improved.
- An improvement allows the pass to consider if-conversions of basic blocks with
  more than two predecessors.
- Alias analysis has been improved. GCC can now differentiate between structure
  fields and prove that two memory references or separate fields do not refer to
  the same memory location, thus allowing for optimizations that were previously
  unachievable due to the compiler being unable to prove disjointness (lack of
  overlap) of two structure fields.
- Auto-vectorization has been significantly improved. Auto-vectorization is the
  process of converting a scalar implementation, which processes one data
  element at a time, into a vector implementation, which processes multiple data
  elements simultaneously (SIMD: Single Instruction, Multiple Data). In other
  words, the compiler can compile code such that it generates instructions which
  allow more computations to be processed with one instruction.
  - Static Single Assignment (SSA) form is now preserved when compiling. This
    allowed for better optimization post-vectorization, less compiler overhead
    and fewer lost optimization opportunities.
  - Loop-closed SSA form is preserved during compilation. This means that
    instead of the earlier approach of breaking a loop, vectorizing it and
    rebuilding everything later, GCC 4.1 maintains the loop structure while
    transforming the loop.
  - Peeling for alignment was improved. Processors prefer data to begin at
    addresses which match the alignment boundary size, that is to say,
    `address % alignment boundary size == 0`. Misalignment can cause performance
    issues with SIMD instructions. However, data cannot always begin at such
    addresses. The distance of a pointer from its required alignment is called
    the offset. If the offset is greater than 0, the compiler will generate some
    of the initial instructions as scalar to fix the offset.
  - GCC now considers dependence distance in the vectorizer. Dependence distance
    is how far apart the dependent accesses are. For example, in a loop:
    ```
    for (i = 1; i < n; i++)
      a[i] = a[i - 1] + 1;
    ```
    The dependence distance is 1, as `a[i]` depends on `a[i-1]` and each
    iteration depends directly on the previous one. However, if it was:
    ```
    for (i = 1; i < n; i++)
      a[i] = a[i - 6] + 1;
    ```
    The dependence distance becomes 6, as `a[i]` depends on `a[i-6]`. There is a
    gap of 6 iterations, and can allow for partial vectorization, loop splitting
    and software pipelining.
  - Generic parts of data reference analysis have been externalized to make this
    analysis available to other passes. This means that the compiler has moved
    its memory-access analysis outside of the vectorizer into a shared module
    accessible to multiple optimization passes, giving the benefit of not having
    to compute and recompute muliple memory-access analyses, improving the
    performance of the compiler.
  - Conditional code is now vectorized by the compiler. This means that the
    compiler can now transform loops with multiple branches (`if`/`else`,
    `switch`) into SIMD instructions by speculatively evaluating multiple
    possible outcomes in parallel and using masking operations to select the
    correct result for each element.
  - Reduction loops can now be vectorized. A reduction loop is any loop that
    repeatedly combines multiple values into one result. GCC vectorizes this by
    runnning SIMD (Single Instruction, Muliple Data) instructions to compute
    multiple partial reductions and combining the partial reductions to get the
    final result.
- GCC now separates the "hot" and "cold" sections of code in a function rather
  than considering them as one. A "hot" section of code is that code which is
  run frequently, while a "cold" section of code is one that is rarely run. The
  feature works best with profile feedback driven optimization. Profile feedback
  driven optimization is when the compiler compiles a program with
  "instrumentation" to collect execution statistics, that is, the profile, and
  recompile the program with the profile. The profile gives GCC information
  about the program, such as frequently-called functions, hot paths and cold
  branches. This improves performance as the processor cache has more hot blocks
  of code grouped together instead of those blocks being scattered around in the
  cache due to cold branches that are rarely run. In other words, it increases
  instruction cache locality and allows frequently-executed instructions to be
  closer together instead of being scattered among rarely-executed paths.
- GCC now avoids saving unnecessary arguments to the stack in `vararg` functions
  if it can prove that they are unnecessary. `vararg` functions are those
  functions that can take a variable (theoretically infinite) number of
  arguments. If the pass is able to prove that those variable arguments are
  never actually accessed, GCC will not save those arguments to the stack. This
  improves performance as stack operations and memory writes occur less often
  (eliminating memory traffic).
- The release marks the completion of the transition of block-level profiling
  from occuring at the RTL stage (RTL: Register Transfer Language) to occuring
  at the GIMPLE/Tree-SSA stage. This is a significant change because GIMPLE
  preserves high-level structures, so optimizations are more significant in that
  stage. This makes profiling at the GIMPLE stage more consistent. Better
  profiling drives smarter and more effective decisions regarding higher-level
  optimizations by the compiler. The new implementation is much more reliable,
  (hopefully, according to the changelog) avoiding profile mismatch errors when
  using the `-fprofile-use` or `-fbranch-probabilities` options.
- `-fprofile-use` now implies disabling the old RTL level loop optimizer
  (`-fno-loop-optimize`) and speculative prefetching optimization
  (`-fspeculative-prefetching`) and the `-ftree-based-profiling` were removed.
- GCC can now emit code for protecting applications from stack-smashing attacks.
  The protection is realized by buffer overflow detection and reordering of
  stack variables to avoid pointer corruption.
- Some built-in functions have been fortified to protect them against various
  buffer overflow (and format string) vulnerabilities. Compared to the mudflap
  bounds checking feature, the safe builtins have far smaller overhead. This
  means that programs built using safe builtins should not experience any
  measurable slowdown.

The full list of changes can be found at
[https://gcc.gnu.org/gcc-4.1/changes.html](https://gcc.gnu.org/gcc-4.1/changes.html).

## Kubuntu 6.10

Kubuntu 6.10 is the 4th major release of the Kubuntu flavor of the Ubuntu
distribution of Linux. It features improvements for accessibility and laptop
users.

### Features

These features are specific to Kubuntu. The default Ubuntu uses GNOME, so these
features are mentioned separately under this heading.

#### KDE 3.5.5

KDE is an open-source graphical desktop environment composed of a bundle of
programs like the window manager, the compositor, and tools that the user may
want to use, like a productivity suite or browser. KDE features a Windows-like
interface by default, with a taskbar at the bottom and the "Application
Launcher" that resembles the Windows start menu. However, it is customizable and
can be made to look drastically customizable.

Kubuntu 6.10 came with KDE 3.5.5, which was mostly a bugfix release and did not
introduce much. It has little significance and mostly removes some slight
problems.

The changelog for the release can be found at
[https://kde.org/announcements/changelogs/pre5/changelog3_5_4to3_5_5/](https://kde.org/announcements/changelogs/pre5/changelog3_5_4to3_5_5/).

#### Digikam

Digikam is a free and open-source program for organizing images and editing tags
and is developed by the KDE community.

Kubuntu 6.10 is the first release of Kubuntu to come with Digikam and shipped
version 0.8.2 of the program.

#### Power management

The release introduced a new power management applet that uses HAL (Hardware
Abstraction Layer) to ensure reliable hibernation and long battery life.

The applet in question is the KDE Guidance Power Manager and in this release its
version is 0.7.0. KDE Guidance is a set of graphical tools built for system
administration.

#### Laptop buttons

Most laptop buttons are now automatically supported without any extra
configuration. This allowed for more functional keys on the laptop and thus a
better experience for laptop users.

#### Zeroconf and print sharing

Zeroconf and print sharing allow users to browse their local network for devices
to connect to.

<!--Wikipedia: https://en.wikipedia.org/wiki/Zero-configuration_networking-->

Zeroconf (zero-configuration networking) is a set of technologies that
automatically configures an existing computer network based on the Internet
Protocol Suite (TCP/IP) when network peripherals and/or computers are
interconnected. It does not require manual operator intervention or special
configuration servers. Without zeroconf, a network administrator must set up
network services, such as Dynamic Host Configuration Protocol (DHCP) and Domain
Name System (DNS), or configure each computer's network settings manually.
Zeroconf is built on three core technologies: automatic assignment of numeric
network addresses for networked devices, automatic distribution and resolution
of computer hostnames, and automatic location of network services, such as
printing devices. This automatically-configured network allows an application to
query the network for connected devices so the user can browse through them.
This also applies for print sharing.

#### Accessibilty profiles

A feature was added to the Install CD that allows selecting accessibility
profiles. These can be accessed by pressing F5 in the boot options when booted
from the Install CD. The available accessibility profiles are `None`,
`High Contrast`, `Magnifier` and `Keyboard Modifiers`.

### Upgrading from Kubuntu 6.06

To upgrade from Kubuntu 6.06 LTS, users had to follow a specific set of steps as
there was no GUI to simply upgrade during that time.

Without an install CD, the user had to:

1. Open `/etc/apt` in Konqueror, right-click on `sources.list` and choose
   `Actions` → `Edit as Root`
2. Change all instances of `dapper` to `edgy`
3. Launch a console with K-Menu → System → Konsole
4. Run:
   ```
   sudo apt-get update
   sudo apt-get dist-upgrade
   ```
   and follow the prompts to upgrade.
5. Run
   `sudo apt-get install kubuntu-desktop python-qt3 python-kde3 ubuntu-minimal`
   and follow the prompts to install.
6. Reboot

If the user had the Install CD for Kubuntu 6.10, they could put it in the drive
and run `apt-cdrom` from the command line and follow the above steps.

Although it appears complicated, it was a result of the absence of a one-click
GUI for upgrades in Kubuntu.

## Xubuntu 6.10

Xubuntu 6.10 is the second release of the Xubuntu flavor of Ubuntu. It features
the Xfce desktop environment and more lightweight applications.

### Features

Like Kubuntu, these features are specific to Xubuntu 6.10.

#### Xfce 4.4RC1

Xfce is free and open-source desktop environment for Linux and other Unix-like
systems, aiming to be fast and lightweight while being appealing and easy to use
at the same time. It was first released in 1997 and the name was originally XFce
(with a capital F). It stood for XForms Common Environment, which referred to
the XForms library, but no longer relies on it. However, the name was kept with
a lowercase F.

Xubuntu 6.06 LTS featured the first beta of Xfce 4.4, and 6.10 updates it to
Xfce4.4RC1 (RC: Release Candidate). The release candidate fixes various bugs
found in the betas leading up to the first release candidate. The
[changelog](https://www.xfce.org/download/changelogs/4.4.1) also shows various
improvements to `xfwm4` (Xfce Window Manager) and translation updates in other
parts of the desktop environment.

#### Accessibilty improvements

Xfce also improves accessibility with better support for people with motor
disabilities through configurable sticky keys, mouse keys and an on-screen
keyboard to allow users to type with their mouse.

#### Other

These features are not major enough for separate headings.

- **New artwork**: The release introduces new, fresh artwork for the boot
  splash, login screen and wallpaper.
- **New media player**: The `gxine` media player replaces `xfmedia`.
- **New printer GUI**: A new printer GUI, `system-config-printer`, has been
  brought over from Fedora Core 6 for a simpler printing experience.
- **Easier app installation**: Packages can now be installed using
  `gnome-app-install`.
- **New programs**: A calculator and dictionary plugin for the panel is now
  installed by default.
- **Updated programs**: Programs like Firefox, `abiword` and `gnumeric` have
  been updated.

## Edubuntu 6.10

Edubuntu is the official flavor of Ubuntu tailored for education. 6.10 is its
third release, and features various improvements.

Improvements in the Ubuntu base also benefits Edubuntu, such as an updated
Firefox, GNOME 2.16, faster system startup and shutdown, and more.

### Educational software

Edubuntu features various free and open-source applications developed for
education, such as:

- The KDEEDu suite, version 3.5.5
- Gcompris, another educational suite, version 7.4
- Schooltool, a student information system, version 0.11
- `tux4kids` applications
- and many more

### Server-side improvements

Quoting the release announcement,

> The Edubuntu classroom server install builds on the functionality from the
> previous release simplifying common Linux classroom server deployment
> processes. It is the first distribution that ships with a deeply integrated
> out of the box working pre-release of the upcoming LTSP-5 (Linux Terminal
> Server Project). LTSP-5 offers clients a lower TCO (total cost of ownership),
> simpler installation and easier maintenance than typical IT deployments. With
> all data stored on the server, administrators have substantially eliminated
> the cost of updating individual workstations to ensure their security.
>
> Installing from the CD will provide you with an out of the box working thin
> client environment, including sound and thin client block device support.
>
> Features of the integration work for LTSP-5 in Edubuntu include:
>
> - Automatic network configuration with DHCP service for servers with two or
>   more network cards attached
> - Language and session selection from the LTSP login manager – allowing a user
>   to choose from any of the languages and desktop sessions installed on the
>   server
> - Student Control Panel Control LTSP connections in a school environment
>   Additional features added in edgy to make it more effective
> - Support for locally attached devices on thin clients – allowing users to
>   access cameras, ipods, USB sticks or CDRoms on the thin client
> - Printing support - enabling printing on a local printer from the thin client
> - Full support for Etherboot
> - Network swap memory by default which drops the minimal requirements for Thin
>   Clients to 32Mb
> - Centralized logging by default
> - Sound support switched on by default
> - 16bit colors by default for Thin clients to save network bandwith

## Announcement

### Base Ubuntu

The base Ubuntu announcement can be found
[here](https://lists.ubuntu.com/archives/ubuntu-announce/2006-October/000093.html).
It reads:

<!--prettier-ignore-->
> The Ubuntu team is proud to announce the release of Ubuntu 6.10, codenamed
> "Edgy Eft". This release includes both installable Desktop CDs and alternate
> text-mode installation CDs for several architectures.
>
> Ubuntu is a Linux distribution for your desktop or server, with a fast and
> easy install, regular releases, a tight selection of excellent packages
> installed by default, every other package you can imagine available with a few
> clicks, and professional technical support from Canonical Limited and hundreds
> of other companies around the world.
>
> Ubuntu 6.10 will be supported for 18 months on both desktops and servers. Note
> that the previous stable release (6.06 LTS) is a long-term support release,
> and so users requiring a longer support lifetime may choose to continue using
> that version rather than upgrade to or install 6.10.
>
> To Get Ubuntu 6.10  
> \------------------
>
> Download Ubuntu 6.10 here:
>
> Europe: http://se.releases.ubuntu.com/6.10/
> http://nl2.releases.ubuntu.com/6.10/
>
> New Zealand: http://nz.releases.ubuntu.com/ubuntu-releases/6.10/
>
> Australia: http://au.releases.ubuntu.com/6.10/
>
> France:
>  http://fr.releases.ubuntu.com/6.10/
>
> The Netherlands: http://nl.releases.ubuntu.com/6.10/
>
> Poland: http://pl.releases.ubuntu.com/6.10/
>
> Germany http://de.releases.ubuntu.com/6.10/
>
> United Kingdom and the rest of the world: http://releases.ubuntu.com/6.10/
>
> To burn these CD images, you will need 700MB media.
>
> Ubuntu 6.10 media can also be purchased from a number of retailers. For more
> information, visit:
>
> http://www.ubuntu.com/products/GetUbuntu
>
> About Ubuntu 6.10  
> \-----------------
>
> Highlights of this release include:
>
> On the desktop
>
> This version introduces a host of new features, an improved interface and a
> wide variety of new applications and desktop tools making Ubuntu 6.10 flexible
> and user-friendly. Enhancements include:
>
> - Tomboy, an easy-to-use and efficient note-taking tool
> - F-Spot, a photo management tool that enables tagging, photo editing and
>   automatic uploading to on-line web management sites such as Flickr
> - GNOME 2.16, which in addition to new features such as enhanced power
>   management, makes the GNOME desktop more secure, faster and more stable
> - Substantially faster startup and shutdown with eye-catching high-resolution
>   graphics
> - The latest Firefox web browser, version 2.0, which offers inline spell check
>   support in web forms, easy recovery of crashed sessions, built-in phishing
>   detectors, enhanced search engine management with built in OpenSearch
>   support, and better support for previewing and subscribing to web feeds
> - Proactive security features, preventing many common security vulnerabilities
>   even before they are discovered
> - Evolution 2.8.0, which brings new features such as vertical message panes
>
> On the Server
>
> The Ubuntu server edition builds on the functionality from the previous
> release simplifying common Linux server deployment processes. It also includes
> a pre-release of the upcoming LTSP-5 (Linux Terminal Server Project). LTSP-5
> offers clients a lower TCO (total cost of ownership), simpler installation and
> easier maintenance than typical IT deployments. With all data stored on the
> server, administrators have substantially eliminated the cost of updating
> individual workstations to ensure their security.
>
> Enhancements to LTSP-5 include:
>
> - Automatic network configuration with DHCP service for servers with two or
>   more network cards attached -- available with the alternate CD installer
> - Language and session selection from the LTSP login manager -- allowing a
>   user to choose from any of the languages and desktop sessions installed on
>   the server
> - Support for locally attached devices on thin clients -- allowing users to
>   access cameras, iPods or USB sticks on the thin client
> - Printing support - enabling printing on a local printer from the thin client
> - Full support for Etherboot
>
> Localization
>
> - Automatic setup of non-Latin input methods
> - Menu item translations included in language packs, for faster integration of
>   new and updated translations provided through Rosetta
> - Ongoing translation updates from the Rosetta web service:
>
>   https://launchpad.net/distros/ubuntu/edgy/+translations
>
> Installation and Upgrades
>
> Under the hood
>
> - GCC 4.1
> - Glibc 2.4
> - Linux 2.6.17
>
> As always, Ubuntu includes the very best of the 100% Free / Libre application
> software world, and each new release incorporates countless new features and
> bug fixes from the global development community. More detailed release notes
> are at
>
> http://wiki.ubuntu.com/EdgyReleaseNotes
>
> Helping Shape Ubuntu  
> \--------------------
>
> If you would like to help shape Ubuntu, take a look at the list of ways you
> can participate at
>
> http://www.ubuntu.com/community/participate/
>
> If you have a question, or if you think you may have found a bug but aren't
> sure, try asking on the #ubuntu channel on IRC.FreeNode.net, on the Ubuntu
> Users mailing list, or on the Ubuntu forums:
>
> http://lists.ubuntu.com/mailman/listinfo/ubuntu-users
> http://www.ubuntuforums.org/
>
> More Information  
> \-------------------
>
> You can find out more about Ubuntu and about this release on our website:
>
> http://www.ubuntu.com/
>
> To sign up for future Ubuntu announcements, please subscribe to Ubuntu's very
> low volume announcement list at:
>
> http://lists.ubuntu.com/mailman/listinfo/ubuntu-announce

### Edubuntu

The release announcement for Edubntu 6.10 can be found
[here](https://lists.ubuntu.com/archives/ubuntu-announce/2006-October/000095.html),
and it reads:

<!--prettier-ignore-->
> The Edubuntu team is proud to announce the release of Edubuntu 6.10, codenamed
> "Edgy Eft". This release includes both Installation CDs and installable Live
> CDs for several architectures.
>
> About Edubuntu  
> \--------------
>
> Edubuntu is the education-focused variant of Ubuntu, with a fast and easy
> install, regular releases, and a tight selection of excellent packages
> installed by default, including education and productivity applications.
> Almost every other package you can imagine is available with a few clicks from
> a global network of mirrors, and professional commercial technical support
> from Canonical Ltd and hundreds of other companies around the world.
>
> Edubuntu 6.10 will be supported for 18 months on both desktops and servers.
> Note that the previous stable release (6.06 LTS) is a long-term support
> release, and so users requiring a longer support lifetime may choose to
> continue using that version rather than upgrade to or install 6.10.
>
> To Get Edubuntu 6.10  
> \--------------------
>
> Download Edubuntu 6.10 here: http://www.edubuntu.org/Download
>
> To burn these CD images, you will need 700MB media.
>
> About Edubuntu 6.10  
> \-------------------
>
> Highlights of this release include:
>
> On the Desktop  
> \--------------
>
> Edubuntu includes the very recent versions of well known free educational
> software like:
>
> - The KDEedu suite in version 3.5.5
> - Gcompris 7.4
> - Schooltool 0.11
> - The tux4kids applications
>
> and many many more.
>
> This version introduces a host of new features, an improved interface and a
> wide variety of new applications and desktop tools making Edubuntu 6.10
> flexible and user-friendly.
>
> Enhancements in our Ubuntu base provide these benefits for Edubuntu:
>
> - GNOME 2.16, which in addition to new features such as enhanced power
>   management, makes the GNOME desktop more secure, faster and more stable
> - Substantially faster startup and shutdown with eye-catching high-resolution
>   graphics
> - The latest Firefox web browser, which offers inline spell check support in
>   web forms, easy recovery of crashed sessions, built-in phishing detectors,
>   enhanced search engine management with built in OpenSearch support, and
>   better support for previewing and subscribing to web feeds
> - Proactive security features, preventing many common security vulnerabilities
>   even before they are discovered
> - Evolution 2.8.0, which brings new features such as vertical message panes
>
> On the Server  
> \-------------
>
> The Edubuntu classroom server install builds on the functionality from the
> previous release simplifying common Linux classroom server deployment
> processes. It is the first distribution that ships with a deeply integrated
> out of the box working pre-release of the upcoming LTSP-5 (Linux Terminal
> Server Project). LTSP-5 offers clients a lower TCO (total cost of ownership),
> simpler installation and easier maintenance than typical IT deployments. With
> all data stored on the server, administrators have substantially eliminated
> the cost of updating individual workstations to ensure their security.
>
> Installing from the CD will provide you with an out of the box working thin
> client environment, including sound and thin client block device support.
>
> Features of the integration work for LTSP-5 in Edubuntu include:
>
> - Automatic network configuration with DHCP service for servers with two or
>   more network cards attached
> - Language and session selection from the LTSP login manager – allowing a user
>   to choose from any of the languages and desktop sessions installed on the
>   server
> - Student Control Panel Control LTSP connections in a school environment
>   Additional features added in edgy to make it more effective
> - Support for locally attached devices on thin clients – allowing users to
>   access cameras, ipods, USB sticks or CDRoms on the thin client
> - Printing support - enabling printing on a local printer from the thin client
> - Full support for Etherboot
> - Network swap memory by default which drops the minimal requirements for Thin
>   Clients to 32Mb
> - Centralized logging by default
> - Sound support switched on by default
> - 16bit colors by default for Thin clients to save network bandwith
>
> Localization  
> \------------
>
> - Automatic setup of non-Latin input methods
> - Menu item translations included in language packs, for faster integration of
>   new and updated translations provided through Rosetta
> - Ongoing translation updates from the Rosetta web service:
>   https://launchpad.net/distros/ubuntu/edgy/+translations
>
> Under the hood  
> \--------------
>
> - GCC 4.1
> - Glibc 2.4
> - Linux 2.6.17
>
> As always, Edubuntu includes the very best of the 100% Free / Libre
> application software world, and each new release incorporates countless new
> features and bugfixes from the global development community. More detailed
> release notes are at
>
> http://wiki.edubuntu.org/EdgyReleaseNotes
>
> Helping Shape Edubuntu  
> \----------------------
>
> If you would like to help shape Ubuntu, take a look at the list of ways you
> can participate at
>
> http://www.edubuntu.org/Community
>
> If you have a question, or if you think you may have found a bug but aren't
> sure, try asking on:
>
> - The #edubuntu channel on IRC.FreeNode.net
> - The Edubuntu Users or Edubuntu Developers mailing list:
>   http://lists.ubuntu.com/mailman/listinfo/edubuntu-users
> - The Edubuntu Developers mailing list:
>   http://lists.ubuntu.com/mailman/listinfo/edubuntu-devel
> - Or on the Ubuntu forums: http://www.ubuntuforums.org
>
> More Information  
> \----------------
>
> You can find out more about Edubuntu and about this release on our website:
>
> http://www.edubuntu.org/
>
> To sign up for future Edubuntu related announcements, please subscribe to
> Ubuntu's very low volume announcement list at:
>
> http://lists.ubuntu.com/mailman/listinfo/ubuntu-announce
>
> -- Richard Weideman richard at ubuntu.com
>
> Ubuntu Education Programme Manager http://www.edubuntu.org
> http://www.ubuntu.com

### Kubuntu

The announcement for Kubuntu 6.10 can be found
[here](https://lists.ubuntu.com/archives/ubuntu-announce/2006-October/000094.html).
It reads:

<!--prettier-ignore-->
> Kubuntu 6.10 brings a bit of edgyness to this release, including a new
> and improved desktop, artwork, applications and much more. The goal
> for Kubuntu 6.10 is to create a secure and stable environment
> featuring some of today's leading applications and technology in order
> to be the foundation for future releases of Kubuntu. The development
> team is very happy to bring you this new release, we hope you enjoy
> your Kubuntu 6.10 system.
>
> Kubuntu 6.10 will be supported for 18 months on both desktops and
> servers. Note that the previous stable release (6.06 LTS) is a
> long-term support release, and so users requiring a longer support
> lifetime may choose to continue using that version rather than upgrade
> to or install 6.10.
>
> To download Kubuntu 6.10, go to:
>
> http://www.kubuntu.org/download.php
>
> New in Kubuntu 6.10  
> \-------------------
>
> * K Desktop Environment 3.5.5: Kubuntu 6.10 is the first distribution
>   to include this new KDE release.
>
> * Digikam: now included by default this advanced digital photo
>   management application provides you with the tools necessary to
>   view, manage, edit, enhance, organise, tag and share photographs.
>
> * Power Management: Kubuntu received a new power management applet
>   which uses HAL to ensure reliable hibernation and long battery life.
>
> * Hardware Database Client: profile your system from a basic set of
>   questions and upload the details to the Ubuntu Hardware Database,
>   making it easier to report bugs and allowing the developers to
>   better understand the hardware requirements.
>
> * Laptop Buttons: whether it is controlling your volume, your
>   multimedia applications or your email and Internet access, Kubuntu
>   now supports most laptop buttons without setup.
>
> * Zeroconf and print sharing: let you browse the local network for
>   available services.
>
> * Accessibility Profiles: Kubuntu now offers users the ability to use
>   a preconfigured accessibility profile depending on the type of
>   disability right from the initial point of setup.  Press F5 at the
>   CD boot screen to choose a profile.
>
> * Free Software for Windows: you also have some popular Free and Open
>   Source Software (FOSS) available to install on your Microsoft
>   Windows operating system to preview great Kubuntu applications and
>   ease the path to freedom.
>
> Under the Hood  
> \--------------
>
> GCC 4.1
> Glibc 2.4
> Linux 2.6.17
> LTSP 5 available for thin clients
>
> Upgrading from Kubuntu 6.06 LTS  
> \-------------------------------
>
> * In Konqueror go to /etc/apt, right click on sources.list and choose
>   Actions -> Edit as Root
> * Change all instances of dapper to edgy
> * Launch a console with K-Menu -> System -> Konsole
> * In the console run: sudo apt-get update
> * In the console run: sudo apt-get dist-upgrade and follow the prompts
>   to upgrade
> * In the console run: sudo apt-get install kubuntu-desktop python-qt3
>   python-kde3 ubuntu-minimal and follow the prompts to install
> * Reboot your computer
>
> If you have a Kubuntu 6.10 CD, put it in the drive, and run apt-cdrom
> from the command line. Then follow the instructions above.
>
> Feedback and Helping  
> \--------------------
>
> We welcome feedback and help with making the next version of Kubuntu.
>
> Comments can be left on
>  https://wiki.kubuntu.org/KubuntuEdgyReleaseComments
>
> Any known problems can be found at
>  https://wiki.kubuntu.org/KubuntuEdgyKnownProblems
>
> For support and/or bug issues, report them on Launchpad:
>
> Bugs - http://launchpad.net/distros/ubuntu/+bugs
> Support - https://launchpad.net/distros/ubuntu/+tickets
>
> If you have questions, please try asking on one of the following:
>
> IRC - Server irc.ubuntu.com, Channel #kubuntu
> Kubuntu Users Mailing List -
> http://lists.ubuntu.com/mailman/listinfo/kubuntu-users
> Kubuntu Forums - http://www.kubuntuforums.net
>
> Visit https://wiki.kubuntu.org/HelpingKubuntu if you are interested in
> helping the Kubuntu team.
>
> Contact  
> \-------
>
> For more information about Kubuntu, visit our website at
> http://www.kubuntu.org
>
> Press contact:
>
> Jonathan Riddell <jriddell @ubuntu.com> +44 (0)7941 938912 (Scotland)

### Xubuntu

The release announcement for Xubuntu 6.10 can be found
[here](https://lists.ubuntu.com/archives/ubuntu-announce/2006-October/000096.html).
It reads:

<!--prettier-ignore-->
> The Xubuntu community is happy to announce the release of Xubuntu 6.10,
> codenamed "Edgy Eft". This release includes both installable Desktop CDs
> and alternate text-mode installation CDs for several architectures.
>
> Xubuntu is a Linux distribution for your desktop or server, with a fast
> and easy install, regular releases, a tight selection of excellent
> packages installed by default, every other package you can imagine
> available with a few clicks.
>
> Upgrading from Xubuntu 6.06  
> \--------------------------------------------
>
> NOTE: There is a recently discovered bug which makes upgrading via the
> graphical update-manager crash and leave the upgrade process in a state
> that can only be recovered from by dropping to the command line.
>
> Therefore, it is recommended that instead of upgrade-manager, the
> command line upgrade method is used by invoking apt-get dist-upgrade.
>
> Neither a clean install from the CD nor the other Ubuntu variants are
> affected by this bug.
>
>
> Download  
> \-------------------
> Get the desktop or alternate images for your architecture here and use
> torrents if you can
>
> http://cdimage.ubuntu.com/xubuntu/releases/6.10/release/
>
>
> Visible changes since Xubuntu 6.06  
> \----------------------------------------------------
>
> * Newer Xfce Desktop Environment  (4.4 RC1) which brings trashcan
>   support in Thunar and the panel, accessibility settings for the
>   keyboard, and other improvements and fixes.
> * New artwork for the boot splash, login screen and wallpaper.
> * The more mature gxine media player replaces xfmedia.
> * New printer GUI: system-config-printer from Fedora Core 6.
> * Easier installation of packages with gnome-app-install.
> * A calculator application and a dictionary panel plugin.
> * Better support for users with motor disabilities via configurable
>   sticky keys, mouse keys and an on-screen-keyboard application.
> * Newer versions of firefox, abiword and gnumeric.
> * New LTSP version on the alternate CD for setting up thin client
>   networks.
> * Other changes common to all Ubuntu variants such as the new 2.6.17
>   kernel, Xorg 7.1 and the upstart init system.
>
> The  http://xubuntu.org website has just relaunched and is now actively
> maintained by the community.
>
> System requirements  
> \---------------------------------
>
> To run the liveCD at least 128M of RAM is recommended
> For installation 1.5G of free hard drive space is needed besides swap space.
>
> Feedback  
> \------------------
>
> Get in touch with the user and developer community
>
> http://xubuntu.org/help
>
> Report bugs you find in Launchpad
>
> https://launchpad.net/distros/ubuntu/+bugs

## System requirements

_We can't find any reliable information on this! Please help us by adding
content to this section! See the [About](/about) page for more details._
