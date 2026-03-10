---
title: Windows 95
favicon: Windows_95-icon.webp
order: 50
background_image: Windows_95-wallpaper.webp
info:
  icon:
    - alt: Windows 95 icon
  paras:
    - "Date released: July 14, 1995"
    - "End of Support: Mainstream - December 31, 2001; Extended: December 31,
      2001"
    - "Last release: OEM Service Release 2.5 on November 26, 1997"
    - "Succeeded by: Windows NT 4.0 (released 1996); Windows 98 (released 1998)"
    - "Codename: Chicago"
    - "Developed by: Microsoft Corporation"
carousel_images:
  - path: /WinPedia/Images/UI/Windows_95-UI.webp
    alt: Windows 95 UI
    desc: A screenshot of Windows 95
---

Windows 95 is a consumer-oriented operating system developed by Microsoft and
the first OS in the Windows 9x family of operating systems, released to
manufacturing on July 14, 1995, and generally to retail on August 24, 1995.
Windows 95 merged Microsoft\'s formerly separate MS-DOS and Microsoft Windows
products, and featured significant improvements over its predecessor, most
notably in the graphical user interface (GUI) and in its simplified
\"plug-and-play\" features. There were also major changes made to the core
components of the operating system, such as moving from a mainly cooperatively
multitasked 16-bit architecture of its predecessor Windows 3.1 to a 32-bit
preemptive multitasking architecture.

+++

Windows 95 introduced multiple functions and features that are still an
important component of the GUI in later Windows versions, which include the
taskbar, notification area, and the Start button which summons the Start menu.
Accompanied by an extensive marketing campaign that generated a lot prerelease
hype, it was a major success and is considered to be one of the biggest and most
important products in the personal computing industry. Microsoft ended
mainstream support for Windows 95 on December 31, 2000. Like Windows NT 3.51,
which was released shortly before, Windows 95 received only one year of extended
support, ending on December 31, 2001.

The most notable difference between Windows 95 and previous versions of Windows,
as previously mentioned, was the Graphical User Interface. The User Interface
was overhauled and and new elements were added such as the Start button, Start
menu, the Desktop, and the taskbar. On clicking the Start button, the Start menu
would pop up, from which you could launch programs. The taskbar held the Start
button, running and pinned applications, and the system tray, which consisted of
the time, volume and other icons.

## Development

The initial design and planning of Windows 95 can be traced back to around March
1992 (3 years before the official release of Windows 95), just around the time
before the release of Windows 3.1. At this time, Windows for Workgroups 3.11 and
Windows NT 3.1 were still in development. At this point, Microsoft's strategy
was to have a next generation, high-end OS based on Windows NT, namely, Cairo,
and a low-end, consumer-focused one as an evolution of Windows 3.1. The latter
strategy was to develop a 32-bit underlying kernel and filesystem with 32-bit
protected mode device drivers in Windows for Workgroups 3.11, to be used as the
basis for the next version of Windows, code named "Chicago." Cairo would be
Microsoft's next-generation operating system based on Windows NT, featuring a
new user interface and an object-based file system, but it was not planned to be
shipped before 1994. Cairo would never be shipped, however, although elements
from the Cairo project eventually shipped in Windows NT 4.0 in late July 1996,
without the object-based file system, which would later evolve into WinFS.

Simultaneously with Windows 3.1's release, IBM started shipping OS/2 2.0.
Microsoft realized they required an updated version of Windows that could
support 32-bit applications and preemptive multitasking, but could still run on
low-end hardware (Windows NT did not). Initially, the "Chicago" team did not
know how the product would be packaged. Initial thoughts were there might be two
products, MS-DOS 7, which would just be the underlying OS, an evolution of the
Windows for Workgroups 3.11 kernel, with a character mode OS on top, and a fully
integrated graphical Windows OS.

### Beta

Before Windows 95's official release, users in the United States and United
Kingdom had an opportunity to participate in the Windows 95 Preview Program. For
US$19.95/£19.95, users would receive several 3.5-inch floppy disks that would be
used to install Windows 95 either as an upgrade from Windows 3.1 or as a fresh
installation. Participants were also given a free preview of The Microsoft
Network (MSN), the online service that Microsoft launched with Windows 95.
During the preview period, Microsoft established various electronic distribution
points for promotional and technical documentation on Chicago, including a
detailed document for media reviewers describing the new system highlights. The
preview versions expired in November 1995, after which the user would have to
purchase their copy of the final version of Windows 95.

## Architecture

Windows 95 was designed to be maximally compatible with existing MS-DOS and
16-bit Windows programs and device drivers while offering a more stable and
better performing system. The development team purchased a copy of every PC
software at a local Egghead Software and tested them on the operating system.
The Windows 95 architecture is an evolution of Windows for Workgroups' 386
enhanced mode.

**Configuration Manager (CONFIGMG)**: Responsible for implementing Plug and Play
functionality; monitoring hardware configuration changes; detecting devices
using bus enumerators; and allocating I/O ports, IRQs, DMA channels and memory
in a conflict-free fashion.

**Installable File System Manager (Input/Output Subsystem)**: Coordinates access
to supported file systems. Windows 95 initially shipped with support for FAT12,
FAT16, the VFAT extension, ISO 9660 (CDFS), Joliet and network redirectors, with
later releases supporting FAT32.

Access requests to physical media are sent to Input/Output Supervisor, a
component responsible for scheduling the requests. Each physical media has its
device driver: access to the disk is performed by a port driver, while access to
a SCSI device is handled by a miniport driver working atop the SCSI layer. Port
and Miniport drivers perform I/O operations in 32-bit protected mode, bypassing
MS-DOS and BIOS, significantly improving performance. In case there is no native
Windows driver for a certain storage device, or if a device is forced to run in
compatibility mode, the Real Mode Mapper can access it through MS-DOS.

32-bit Windows programs are assigned protected memory segments, which can be
adjusted to any desired size, and memory areas outside the segment cannot be
accessed by a program, that limited harm to other programs and the system when a
program crashed. Before this, programs used fixed non-exclusive 64 KB segments.
While the 64 KB size was a serious handicap in DOS and Windows 3.x, lack of
guarantee of exclusiveness was the cause of stability issues because programs
sometimes overwrote each other's segments, a crashing Windows 3.x program could
knock out surrounding processes. Unfortunately for compatibility reasons some
parts of the 32-bit Windows program memory was non-exclusive and shared among
the whole system (most famously the first 1MiB of the address space), this meant
that in Windows 95 a crash which incorrectly modified this shared memory could
still cause harm to other programs or the system (full memory protection only
came to consumer Windows systems with the

lThe Win32 API is implemented by three modules, each consisting of a 16-bit and
a 32-bit component:

**Kernel**: Provides high-level access to memory and process management, and
access to the file system. Consists of KRNL386.EXE, KERNEL32.DLL, and
VWIN32.VXD.

**User**: responsible for managing and drawing the various user interface
components, such as windows, menus and buttons. Consists of USER.EXE and
USER32.DLL.

**Graphics Device Interface (GDI)**: Responsible for drawing graphics in a
device-independent way. Consists of GDI.EXE and GDI32.DLL.aunch of Windows XP).

### Dependence on MS-DOS

To end-users, MS-DOS appears as an underlying component of Windows 95. For
example, it is possible to prevent the loading of the graphical user interface
and boot the system into a real-mode MS-DOS environment. This was done by
inserting command.com into the autoexec.bat file or changing the BootGUI
variable in the MSDOS.SYS file to 0. This sparked debate amongst users and
professionals regarding the extent to which Windows 95 is an operating system or
merely a graphical shell running on top of MS-DOS.

When the graphical user interface is started, the virtual machine manager takes
over the filesystem-related and disk-related functionality. MS-DOS itself is
demoted to a compatibility layer for 16-bit device drivers. This contrasts with
earlier versions of Windows which rely on MS-DOS to perform file and disk access
(Windows for Workgroups 3.11 could also largely bypass MS-DOS when 32-bit file
access and 32-bit disk access were enabled). Keeping MS-DOS in memory allows
Windows 95 to use DOS device drivers when suitable Windows drivers are
unavailable. Windows 95 is capable of using all 16-bit Windows 3.x drivers.

Unlike Windows 3.x, DOS programs running in Windows 95 do not need DOS drivers
for the mouse, CD-ROM and sound card; Windows drivers are used instead.
HIMEM.SYS is still required to boot Windows 95. EMM386 and other memory
managers, however, are only used by DOS programs. In addition, CONFIG.SYS and
AUTOEXEC.BAT settings (aside from HIMEM.SYS) do not affect Windows programs. DOS
games, which could not be executed on Windows 3.x, can run inside Windows 95
(games tended to lock up Windows 3.x or cause other problems). As with Windows
3.x, DOS programs that use EGA or VGA graphics modes run in windowed mode (CGA
and text mode programs can continue to run).

On startup, the MS-DOS component in Windows 95 responds to a pressed F8 key by
temporarily pausing the default boot process and presenting the DOS boot options
menu, allowing the user to continue starting Windows normally, start Windows in
safe mode or exit to the DOS prompt. As in previous versions of MS-DOS, there is
no 32-bit support and DOS drivers must be loaded for mice and other hardware.

As a consequence of DOS compatibility, Windows 95 has to keep internal DOS data
structures synchronized with those of Windows 95. When starting a program, even
a native 32-bit Windows program, MS-DOS momentarily executes to create a data
structure known as the Program Segment Prefix. It is even possible for MS-DOS to
run out of conventional memory while doing so, preventing the program from
launching. Windows 3.x allocated fixed segments in conventional memory first.
Since the segments were allocated as fixed, Windows could not move them, which
would prevent any more programs from launching.

Microsoft partially removed support for File Control Blocks (an API hold-over of
DOS 1.x and CP/M) in Windows 95 OSR2 (OEM Service Release 2). FCB functions can
read FAT32 volumes, but not write to them.

With merging Windows together with MS-DOS, Microsoft had effectively locked-in
users who may have been using a different non-Microsoft DOS, like PC DOS and DR
DOS, who could previously make use of Windows 3.x without requiring Microsoft's
MS-DOS. Caldera demonstrated that Windows 95 could in fact run on top of its DR
DOS operating system, and argued that Microsoft was being anti-competitive,
which would prove useful in a later court case between Caldera and Microsoft.

## Features and technical improvements

Windows 95 included support for 255-character mixed-case long filenames and
preemptively multitasked protected-mode 32-bit applications. 16-bit processes
were still co-operatively multitasked.

### Plug and Play

Windows 95 tried to automate device detection and configuration as much as
possible, but could still fall back to manual settings if necessary. During the
initial install process of Windows 95, it would attempt to automatically detect
all devices installed in the system.

Windows 95 also introduced the Device Manager to indicate which devices were
working optimally with correct drivers and configuration and to allow the user
to override automatic Plug and Play-based driver installation with manual
options or give a choice of several semi-automatic configurations to try to free
up resources for devices that still needed manual configuration. Windows 95 also
has built-in support for Advanced Power Management.

### Long file names

32-bit File Access is necessary for the long file names feature introduced with
Windows 95 through the use of the VFAT file system extension. It is available to
both Windows programs and MS-DOS programs started from Windows (they have to be
adapted slightly, since accessing long file names requires using larger pathname
buffers and hence different system calls). Competing DOS-compatible operating
systems released before Windows 95 cannot see these names. Using older versions
of DOS utilities to manipulate files means that the long names are not visible
and are lost if files are moved or renamed and by the copy (but not the
original) if the file is copied. During a Windows 95 automatic upgrade of an
older Windows 3.1 system, DOS and third-party disk utilities which can destroy
long file names are identified and made unavailable. When Windows 95 is started
in DOS mode, e.g. for running DOS programs, low-level access to disks is locked
out. In case the need arises to depend on disk utilities that do not recognize
long file names, such as the MS-DOS 6.x\'s defrag utility, a program called
`LFNBACK` for backup and restoration of long file names is provided on the
CD-ROM, specifically in its `\\ADMIN\\APPTOOLS\\LFNBACK directory`.

### 32-bit

Windows 95 followed Windows for Workgroups 3.11 with its lack of support for
older, 16-bit x86 processors, thus requiring an Intel 80386 (or compatible).
While the OS kernel is 32-bit, much code (especially for the user interface)
remained 16-bit for performance reasons as well as development time constraints.

The introduction of 32-bit file access in Windows for Workgroups 3.11 meant that
16-bit real mode MS-DOS is not used for managing the files while Windows is
running, and the earlier introduction of the 32-bit disk access means that the
PC BIOS is often no longer used for managing hard disks. DOS can be used for
running old-style drivers for compatibility, but Microsoft discourages using
them, as this prevents proper multitasking and impairs system stability. Control
Panel allows a user to see which MS-DOS components are used by the system;
optimal performance is achieved when they are bypassed. The Windows kernel uses
MS-DOS style real-mode drivers in Safe Mode, which exists to allow a user to fix
problems relating to loading native, protected-mode drivers.

### Core improvements in OEM Service Releases

OEM Service Releases of Windows 95 introduced support in Windows for several
core new technologies that were not included in the original release of
Windows 95. These include the Internet Explorer web browser, DriveSpace
compression, OpenGL, DirectX, FAT32 file system support, UltraDMA mode for disk
drives, Universal Serial Bus, IEEE 1394 (FireWire), and Accelerated Graphics
Port.

### Accessibility features

Windows 95 introduced computer accessibility features like Sticky keys,
FilterKeys, ToggleKeys, Mouse keys. Microsoft Active Accessibility API was
introduced as an add-on for Windows 95.

## System requirements

Official system requirements were an Intel 386DX CPU (12 or 16 Mhz being the
slowest), 4 MB of system RAM and 50–55 MB of hard disk space depending on
features selected. These minimal claims were made in order to maximize the
available market of Windows 3.1 migrations. This configuration would rely
heavily on virtual memory and was only optimal for productive use on
single-tasking dedicated workstations. It was possible to run Windows 95 on a
386SX, but this led to even less acceptable performance due to its 16-bit
external data bus. To achieve optimal performance, Microsoft recommended an i486
or compatible CPU with at least 8 MB of RAM.

Windows 95 may fail to boot on computers with a processor faster than 2.1 GHz
and more than approximately 480 MB of memory. In such a case, reducing the file
cache size or the size of video memory can help. The theoretical maximum
according to Microsoft is 2 GB.

Most copies of Windows 95 were on CD-ROM, but a 3.5-inch floppy version was also
available for older machines. The retail floppy disk version of Windows 95 came
on 13 DMF formatted floppy disks, while OSR2.1 doubled the floppy count to 26.
Both versions exclude additional software that the CD-ROM version might have
featured. Microsoft Plus! for Windows 95 was also available on floppy disks.
OSR2.5 dropped support for floppy installation.

## Upgradeability

Windows 95 was superseded by Windows 98, which also included the Windows Desktop
Update and Internet Explorer 4 by default. It could still be directly upgraded
by either Windows 2000 Professional or Windows Me. The last version of Microsoft
Office available for Windows 95 is Office 2000 (released in June 1999).
Similarly, Windows Media Player 7.0, released in June 2000, and DirectX 8.0a,
released in February 2001, are the last versions of Windows Media Player and
DirectX available for Windows 95, respectively. The last version of Windows
Installer available for Windows 95 is Windows Installer 2.0 (released in
September 2001), respectively.

Updates for Windows 95 could be installed via the Windows Update website. The
Windows Update website for Windows 95 and 98 was shut down in 2011. An
independent project named Windows Update Restored aims to restore the Windows
Update websites for older versions of Windows, including Windows 95.

While Windows 95 did not officially support the .NET Framework, versions 2.0 and
3.5 were unofficially backported for the operating system in 2024.

### Internet Explorer

Windows 95 originally shipped without Internet Explorer, and the default network
installation did not include TCP/IP, the network protocol used on the Internet.
At the release date of Windows 95, Internet Explorer 1.0 was available, but only
in the Plus! add-on pack for Windows 95, which was a separate product. The Plus!
pack did not reach as many retail consumers as the operating system itself (it
was mainly advertised for its non-Internet-related add-ons such as themes and
better disk compression) but was usually included in pre-installed (OEM) sales,
and at the time of Windows 95's release, the web was being browsed mainly with a
variety of early web browsers such as NCSA Mosaic and Netscape Navigator
(promoted by products such as IBox).

Windows 95 OEM Service Release 1 was the first release of Windows to include
Internet Explorer (version 2.0) with the OS. While there was no uninstaller, it
could be deleted easily if desired. OEM Service Release 2 included Internet
Explorer 3. The installation of Internet Explorer 4 on Windows 95 (or the OSR2.5
version preinstalled on a computer, 486 or later processor is required) gave
Windows 95 Active Desktop and browser integration into Windows Explorer, known
as the Windows Desktop Update. The CD version of the last release of Windows 95,
OEM Service Release 2.5 (version 4.00.950C), includes Internet Explorer 4, and
installs it after Windows 95's initial setup and first boot are complete.

While only the 4.x series of the browser contained the option to install the
Windows Desktop Update features, the subsequent 5.x version had the option
hidden. Editing the installer's configuration file located in a temporary folder
would make the feature available in the installer. Alternatively, Windows 95 and
Windows NT 4.0 users could first install IE 4 with the desktop update before
installing a newer version of Internet Explorer. The last version of Internet
Explorer available for Windows 95 is Internet Explorer 5.5 with SP2, (released
in July 2001). Windows 95 shipped with Microsoft's dial-up online service called
The Microsoft Network (MSN).

## Release and promotion

Sales were projected as high as $720 million on release day. The marketing
campaign for Windows 95 was estimated at $1 billion and spanned the entire
industry. The Windows 95 release included a commercial featuring The Rolling
Stones' 1981 single "Start Me Up" (a reference to the Start button). It was
widely reported that Microsoft paid the Rolling Stones between US$8 and US$14
million for the use of the song in the Windows 95 advertising campaign. However,
Microsoft said that this was just a rumour spread by the band to increase their
market value, and the company paid US$3 million. A 30-minute promotional video,
labeled a "cyber sitcom," featuring Jennifer Aniston and Matthew Perry, was also
released to showcase the features of Windows 95. Microsoft's US$200 million
advertising campaign featured stories of people waiting in line outside stores
to get a copy.

In the UK, the largest computer chain, PC World, received a large quantity of
point-of-sale material; many branches opened at midnight to sell the first
copies of the product. Copies of The Times were available for free, and
Microsoft paid for 1.5 million issues (twice the daily circulation at the time).

In the United States, the Empire State Building in New York City was lit to
match the colors of the Windows logo. In Canada, a 100 m (330 ft) banner was
hung down the side of the CN Tower in Toronto.

The release included a number of "Fun Stuff" items on the CD, including music
videos of Edie Brickell's "Good Times" and Weezer's "Buddy Holly," a trailer for
the 1995 film Rob Roy and the computer game Hover!

Sales were strong, with one million copies shipped worldwide in just four days.
According to International Data Corporation, by the end of 1998, Windows 95 was
the most used desktop OS with 57.4% of the marketshare, with its successor
Windows 98 coming in second at 17.2%. Windows 95 also still sold more non-OEM
copies to large customers in the month of May 1999, which analysts attributed to
large companies opting to wait for the release of Windows 2000.

### Editions

Several Windows 95 editions have been released. Only the original release was
sold as a shrink-wrapped product; later editions were provided only to computer
OEMs for installation on new PCs. For this reason, these editions are known as
OEM Service Releases (OSR).

Together with the introduction of Windows 95, Microsoft released the Microsoft
Plus! for Windows 95 pack, which contained several optional components for
high-end multimedia PCs, including Internet Explorer, DriveSpace and additional
themes.

The first service pack was made available half a year after the original release
and fixed several small bugs.

The second service pack mainly introduced support for new hardware, most notably
support for hard drives larger than 2 GB in the form of the FAT32 file system.
This release was never made available to end-users directly and was only sold
through OEMs (OSR2) with the purchase of a new PC.

A full third service pack was never released, but two smaller revisions to the
second were released in the form of a USB Supplement (OSR2.1) and the Windows
Desktop Update (OSR2.5). Both were made available as updated disc images shipped
by OEMs, and the Windows Desktop Update was also released with the standalone
Internet Explorer 4.0 release. OSR2.5 was notable for featuring several changes
to the Windows Explorer, integrating it with Internet Explorer 4.0---this
version of Internet Explorer looks very similar to the one featured in
Windows 98.

## Reception

As the cover story of its August 1995 issue, PC World featured an extensive
review of the system, highlighting new features and shortcomings, with an
editorial by the magazine's editor in chief stating that staff consensus about
the user interface was "a standing ovation, with more than a few raspberries for
the Explorer". Before general release, The New York Times published an article
about the new operating system, listing positives which included "an extremely
Mac-like cosmetic makeover," performance improvements when using multiple
programs at once, and convenient installation of drivers; however, it was added
that "the industrial-strength Windows NT and OS/2 Warp offer greater stability
and better multitasking" for corporate users. In its October 1995 Emory Report,
Emory University praised the system's user-friendly interface, but criticized
its stability and networking limitations. A November 1996 column in Fortune
acknowledged the system's widespread adoption but scrutinized its bugs, hardware
requirements, and Microsoft's dominance.

## Legacy

On December 31, 2001, Microsoft ended its support for Windows 95 (as well as
previous versions of Windows dating back to Windows 1.0), making it an
"obsolete" product per the Microsoft Lifecycle Policy.

Many features have since become key components of the Microsoft Windows series,
such as the Start menu and the taskbar, originated in Windows 95. Neil
MacDonald, a Gartner analyst, said that Windows 95 "was a quantum leap in
difference in technological capability and stability." Ina Fried of CNET said
that "by the time Windows 95 was finally ushered off the market in 2001, it had
become a fixture on computer desktops around the world."

The basic design of Windows 95, with its combination of a desktop that can be
used as a storage location, a pop-out application menu, and a taskbar showing
running applications, a clock and a system tray, was strongly influential on
future user interfaces for desktop operating systems. The core UI concepts of
Windows 95 have persisted up to the present day in both Windows itself as well
as on other operating systems like Linux, with the default behaviour of desktop
environments like KDE and XFCE replicating it in many aspects.

Even though support for Windows 95 has ended, the software has occasionally
remained in use on legacy systems for various purposes. In addition, some video
game enthusiasts choose to use Windows 95 for their legacy system to play old
DOS games, although some other versions of Windows such as Windows 98 can also
be used for this purpose.

## User Interface

Windows 95 introduced a redesigned shell based around a desktop metaphor; File
shortcuts (also known as shell links) were introduced and the desktop was
re-purposed to hold shortcuts to applications, files and folders, reminiscent of
Mac OS.

In Windows 3.1, the desktop was used to display icons of running applications.
In Windows 95, the currently running applications were displayed as buttons on a
taskbar across the bottom of the screen. The taskbar also contained a
notification area used to display icons for background applications, a volume
control and the current time.

The Start menu, invoked by clicking the \"Start\" button on the taskbar or by
pressing the Windows key, was introduced as an additional means of launching
applications or opening documents. While maintaining the program groups used by
its predecessor Program Manager, it also displayed applications within cascading
sub-menus.

The previous File Manager program was replaced by Windows Explorer and the
Explorer-based Control Panel and several other special folders were added such
as My Computer, Dial-Up Networking, Recycle Bin, Network Neighborhood, My
Documents, Recent documents, Fonts, Printers, and My Briefcase among others.
AutoRun was introduced for CD drives.

The user interface looked dramatically different from prior versions of Windows,
but its design language did not have a special name like Metro, Aero or Fluent
UI. Internally it was called \"the new shell\" and later simply \"the shell\".
The subproject within Microsoft to develop the new shell was internally known as
\"Stimpy\".

In 1994, Microsoft designers Mark Malamud and Erik Gavriluk approached Brian Eno
to compose music for the Windows 95 project. The result was the six-second
start-up music-sound of the Windows 95 operating system, The Microsoft Sound and
it was first released as a startup sound in May 1995 on Windows 95 May Test
Release build 468.

When released for Windows 95 and Windows NT 4.0, Internet Explorer 4 came with
an optional Windows Desktop Update, which modified the shell to provide several
additional updates to Windows Explorer, including a Quick Launch toolbar, and
new features integrated with Internet Explorer, such as Active Desktop (which
allowed Internet content to be displayed directly on the desktop).

Some of the user interface elements introduced in Windows 95, such as the
desktop, taskbar, Start menu and Windows Explorer file manager, remained
fundamentally unchanged on future versions of Windows. Startup sound

### Startup sound

In 1994, Microsoft designers Mark Malamud and Erik Gavriluk approached Brian Eno
to compose music for the Windows 95 project. The result was a six-second
start-up music-sound of the Windows 95 operating system, The Microsoft Sound,
which first appeared in May 1995 with Windows 95 May Test Release build 468. In
2025, The Microsoft Sound was selected for preservation in the National
Recording Registry by the Library of Congress for being "culturally,
historically and/or aesthetically significant". The sounds from Windows 3.1,
including the "tada.wav" sound that was previously used as its startup sound,
were retained in the new operating system.
