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

GNOME 2.16 was released in September 2006, and it was the release Ubuntu shipped
with. The release notes for it can be found
[here](https://release.gnome.org/2-16/).

A summary can be found here:

- Advanced 3D effects: Numerous extensions to the compositor of the default
  GNOME window manager, Metacity, enabled 3D effects on windows, making them
  wobble, shrink, explode, fade in and out and other interesting and/or funny
  effects.
- Cleaner icon theme, Cairo, and Wanda: GNOME 2.16 improves the icon theme
  system; many icons were shipped with their applications, icons were redesigned
  to follow the Tango project artwork guidelines and renamed to follow the
  Freedesktop icon naming specification.
- Better battery life for laptops: 2.16 brought integrated power management
  support, allowing the user to manage their battery, UPS, and wireless
  peripherals and offering graphs that show the amount of power being used. It
  is typically accessed through a panel icon.
- Easier disk management: GNOME added Baobab to allow the user to easily analyze
  their disk usage, scan any local or remote directory, requested folders or the
  complete filesystem, and the program displays an image of all the directories
  found.
- New screen reader: Orca was the new screen reader introduced by GNOME in 2.16,
  using the Assistive Technology Service Provider Interface (AT-SPI) to query
  the display and output he content using various combinations of speech
  synthesis, braille, and magnification, thus supporting all applications and
  toolkits that support AT-SPI.
- Easier file permission manager: Nautilus gained the ability to change the
  permissions of all files in a folder by right-clicking the folder and
  selecting Properties Permissions.
- Simpler bug reporting: The Bug-Buddy utility is now automatically launched
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
  execution paths.
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
    its memory-access analysis outside of the vectoizer into a shared module
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
