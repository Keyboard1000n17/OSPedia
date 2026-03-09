---
title: Windows 98
favicon: Windows_98-icon.webp
order: 70
background_image: Windows_98-wallpaper.webp
info:
  icon:
    - alt: Windows 98 icon
  paras:
    - "Date released: May 15, 1998"
    - "End of Support: Mainstream - December 31, 2001; Extended: December 31,
      2001"
    - "Last release: Second Edition (4.10.2222 A) on June 10, 1999"
    - "Succeeded by: Windows ME (released 2000)"
    - "Codename: Memphis"
    - "Developed by: Microsoft Corporation"
carousel_images:
  - path: /WinPedia/Images/UI/Windows_98-UI.webp
    alt: Windows 98 UI
    desc: A screenshot of Windows 98
---

Windows 98 was consumer-oriented operating system developed by Microsoft as part
of its Windows 9x series of operating systems. It was the second operating
system in the 9x line, as the successor to Windows 95. It was released to
manufacturing on May 15, 1998, and to retail on June 25, 1998. Like its
predecessor, it was a hybrid 16-bit and 32-bit monolithic product with the boot
stage based on MS-DOS.

+++

Windows 98 is web-integrated and bears numerous similarities to its predecessor.
Most of its improvements were cosmetic or designed to improve the user
experience, but there were also a handful of features introduced to enhance
system functionality and capabilities, including improved USB support and
accessibility, and support for hardware advancements such as DVD players.
Windows 98 was the first edition of Windows to adopt the Windows Driver Model,
and introduced features that would become standard in future generations of
Windows, such as Disk Cleanup, Windows Update, multi-monitor support, and
Internet Connection Sharing.

Microsoft had marketed Windows 98 as a "tune-up" to Windows 95, rather than an
entirely improved next generation of Windows. It saw one major update, known as
Windows 98 Second Edition (SE), released on June 10, 1999. After the release of
its successor, Windows Me in 2000, mainstream support for Windows 98 and 98 SE
ended on June 30, 2002, followed by extended support on July 11, 2006 along with
Windows Me's end of extended support.

## Development

Following the success of Windows 95, the development of Windows 98 began,
initially under the development codename "Memphis". The first test version,
Windows Memphis Developer Release, was released in January 1997.

Memphis first entered beta as Windows Memphis Beta 1, released on June 30, 1997.

On December 15, 1997, Microsoft released Windows 98 Beta 3. It was the first
build to be able to upgrade from Windows 3.1x, and introduced new startup and
shutdown sounds.

Build 1998 was compiled as Windows 98 on May 11, 1998,

A second major version of the operating system called Windows 98 Second Edition
was later unveiled in March 1999.

## New and updated features

### Web integration and shell enhancements

The first release of Windows 98 included Internet Explorer 4.01 SP1. This was
updated to 5.0 in the Second Edition. Besides Internet Explorer, many other
Internet companion applications are included such as Outlook Express,

The Windows 98 shell is web-integrated; show up in the Alt-Tab sequence.

Windows 98 also integrates shell enhancements such as LiteStep, themes and other
features from Microsoft Plus! for Windows 95 such as DriveSpace 3, Compression
Agent, Dial-Up Networking Server, Dial-Up Scripting Tool and Task Scheduler.
Windows 98 had its own separately purchasable Plus! pack, called Plus! 98.

Title bars of windows and dialog boxes support two-color gradients, a feature
ported from and refined from Microsoft Office 95. The Quick Res and Telephony
Location Manager Windows 95 PowerToys are integrated into the core operating
system.

### Improvements to hardware support

#### Windows Driver Model

Windows 98 was the first operating system to use the Windows Driver Model (WDM).
This fact was not well publicized when Windows 98 was released, and most
hardware producers continued to develop drivers for the older VxD driver
standard, which Windows 98 supported for compatibility's sake. The WDM standard
only achieved widespread adoption years later, mostly through Windows 2000 and
Windows XP, as they were not compatible with the older VxD standard.

Support for WDM audio enables digital mixing, routing and processing of
simultaneous audio streams, and kernel streaming with high-quality sample rate
conversion on Windows 98. WDM Audio allows for software emulation of legacy
hardware to support MS-DOS games, DirectSound support, and MIDI wavetable
synthesis. The Windows 95 11-device limitation for MIDI devices is eliminated. A
Microsoft GS Wavetable Synthesizer licensed from Roland shipped with Windows 98
for WDM audio drivers. Windows 98 supports digital playback of audio CDs, and
the Second Edition improves WDM audio support by adding DirectSound hardware
mixing and DirectSound 3D hardware abstraction, DirectMusic kernel support,
KMixer sample-rate conversion for capture streams, and multichannel audio
support. All audio is sampled by the Kernel Mixer to a fixed sampling rate,
which may result in some audio getting upsampled or downsampled and having a
high latency, except when using Kernel Streaming or third-party audio paths like
ASIO which allow unmixed audio streams and lower latency. Windows 98 also
includes a WDM streaming class driver (Stream.sys) to address real time
multimedia data stream processing requirements and a WDM kernel-mode video
transport for enhanced video playback and capture.

Windows Driver Model also includes Broadcast Driver Architecture, the backbone
for TV technologies support in Windows. WebTV for Windows utilized BDA to allow
viewing television on the computer if a compatible TV tuner card is installed.
TV listings could be updated from the Internet and WaveTop Data Broadcasting
allowed extra data about broadcasts to be received via regular television
signals using an antenna or cable, by embedding data streams into the vertical
blanking interval portion of existing broadcast television signals.

#### Other device support improvements

Windows 98 had more robust USB support than Windows 95, which only had support
in OEM versions OSR2.1 and later. Windows 98 also supports UDMA, 3DNow! and SSE.

Windows 98 introduced ACPI 1.0 support which enabled Standby and Hibernate
states. However, hibernation support was extremely limited and vendor-specific.
Hibernation was only available if compatible (PnP) hardware and BIOS are
present, and the hardware manufacturer or OEM supplied ACPI-compatible drivers.
However, there are hibernation issues with the FAT32 file system, making
hibernation problematic and unreliable.

Windows 98, in general, provides improved — and a broader range of — support for
IDE and SCSI drives and drive controllers, floppy drive controllers and all
other classes of hardware as compared to Windows 95.

### Networking enhancements

Windows 98 networking enhancements to TCP/IP include built-in support for
Winsock 2, SMB signing, a new IP Helper API, Automatic Private IP Addressing
(also known as link-local addressing), IP multicasting, and performance
enhancements for high-speed high bandwidth networks. Multihoming support with
TCP/IP is improved and includes RIP listener support.

The DHCP client has been enhanced to include address assignment conflict
detection and longer timeout intervals. NetBT configuration in the WINS client
has been improved to continue persistently querying multiple WINS servers if it
failed to establish the initial session until all of the WINS servers specified
have been queried or a connection is established.

Network Driver Interface Specification 4 support means Windows 98 can support a
wide range of network media, including Ethernet, Fiber Distributed Data
Interface (FDDI), Token Ring, Asynchronous Transfer Mode (ATM), ISDN, wide area
networks, X.25, and Frame Relay. Additional features include NDIS power
management, support for quality of service, Windows Management Instrumentation
(WMI) and support for a single INF file format across all Windows versions.

Windows 98 Dial-Up Networking supports PPTP tunneling, support for ISDN
adapters, multilink support, and connection-time scripting to automate
non-standard login connections. Multilink channel aggregation enables users to
combine all available dial-up lines to achieve higher transfer speeds. PPP
connection logs can show actual packets being passed and Windows 98 allows PPP
logging per connection. The Dial-Up Networking improvements are also available
in Windows 95 OSR2 and are downloadable for earlier Windows 95 releases.

For networked computers that have user profiles enabled, Windows 98 introduces
Microsoft Family Logon which lists all users that have been configured for that
computer, enabling users to simply select their names from a list rather than
having to type them in.

Windows 98 supports IrDA 3.0 which specifies both Serial Infrared Devices and
Fast Infrared devices, which are capable of sending and receiving data at 4
Mbit/s. Infrared Recipient, a new application for transferring files through an
infrared connection is included. The IrDA stack in Windows 98 supports
networking profiles over the IrCOMM kernel-mode driver. Windows 98 also has
built-in support for browsing Distributed File System trees on Server Message
Block shares such as Windows NT servers.

UPnP and NAT traversal APIs can be installed on Windows 98 by installing the
Windows XP Network Setup Wizard. An L2TP/IPsec VPN client can also be
downloaded. By installing Active Directory Client Extensions, Windows 98 can
take advantage of several Windows 2000 Active Directory features.

### Improvements to the system and built-in utilities

#### Performance improvements

Windows 95 introduced the 32-bit, protected-mode cache driver VCACHE (replacing
SMARTDrv) to cache the most recently accessed information from the hard drive in
memory, divided into chunks. However, the cache parameters needed manual tuning
as it degraded performance by consuming too much memory and not releasing it
quickly enough, forcing paging to occur far too early. The Windows 98 VCACHE
cache size management for disk and network access, CD-ROM access and paging is
more dynamic compared to Windows 95, resulting in no tuning being required for
cache parameters. On the FAT32 file system, Windows 98 has a performance feature
called MapCache that can run applications from the disk cache itself if the code
pages of executable files are aligned/mapped on 4K boundaries, instead of
copying them to virtual memory. This results in more memory being available to
run applications, and lesser usage of the swap file.

Windows 98 registry handling is more robust than Windows 95 to avoid corruption
and there are several enhancements to eliminate limitations and improve registry
performance.

Disk Defragmenter has been improved to rearrange program files that are
frequently used to a hard disk region optimized for program start.

Windows 98 also supports a Fast Shutdown feature that initiates shutdown without
uninitializing device drivers. However, this can cause Windows 98 to hang
instead of shutting down the computer if a buggy driver is active, so Microsoft
supplied instructions for disabling the feature.

### Other system tools

A number of improvements are made to various other system tools and accessories
in Windows 98. Microsoft Backup supports differential backup and SCSI tape
devices in Windows 98. Disk Cleanup, a new tool, enables users to clear their
disks of unnecessary files. Cleanup locations are extensible through Disk
Cleanup handlers. Disk Cleanup can be automated for regular silent cleanups.

Scanreg (DOS) and ScanRegW are Registry Checker tools used to back up, restore
or optimize the Windows registry. ScanRegW tests the registry's integrity and
saves a backup copy each time Windows successfully boots. The maximum number of
copies could be customized by the user through "scanreg.ini" file. The
restoration of a registry that causes Windows to fail to boot can only be done
from DOS mode using ScanReg.

System Configuration Utility is a new system utility used to disable programs
and services that are not required to run the computer. This tool was introduced
to resolve the DLL hell issue and was replaced in Windows Me by System File
Protection.

Windows 98 Setup simplifies installation, reducing the bulk of user input
required.

The system could be updated using Windows Update. A utility to automatically
notify the user of critical updates was later released.

Windows 98 includes an improved version of the Dr. Watson utility that collects
and lists comprehensive information such as running tasks, startup programs with
their command line switches, system patches, kernel driver, user drivers, DOS
drivers and 16-bit modules. With Dr. Watson loaded in the system tray, whenever
a software fault occurs (general protection fault, hang, etc.), Dr. Watson will
intercept it and indicate what software crashed and its cause.

Windows Report Tool takes a snapshot of system configuration and lets users
submit a manual problem report along with system information to technicians. It
has e-mail confirmation for submitted reports.

#### Accessories

Windows 98 includes Microsoft Magnifier, Accessibility Wizard and Microsoft
Active Accessibility 1.1 API (upgradeable to MSAA 2.0.) A new HTML Help system
with 15 Troubleshooting Wizards was introduced to replace WinHelp.

Users can configure the font in Notepad. Microsoft Paint supports GIF
transparency. HyperTerminal supports a TCP/IP connection method, which allows it
to be used as a Telnet client. Imaging for Windows is updated. System
Monitor—used to track the performance of hardware and software—supports output
to a log file.

#### Miscellaneous improvements

- Telephony API (TAPI) 2.1
- DCOM version 1.2
- Ability to list fonts by similarity determined using PANOSE information.
- Tools to automate setup, such as Batch 98 and INFInst.exe, support
  error-checking, gathering information automatically to create an INF file
  directly from a machine's registry, customizing IE4, shell and desktop
  settings and adding custom drivers.
- Several other Resource Kit tools are included on the Windows 98 CD.
- Windows 98 has new system event sounds for Low Battery Alarm and Critical
  Battery Alarm.
- Windows 98 also introduced new and updated system sounds. The new startup
  sound for Windows 98 was composed by Microsoft sound engineer Ken Kato, who
  considered it to be a "tough act to follow", while the new shutdown sound was
  composed by Stan LePard. The newly updated system sounds were created by
  another Microsoft sound engineer, Bill Wolford.
- Windows 98 shipped with Flash Player and Shockwave Player preinstalled.

## Windows 98 Second Edition

Windows 98 Second Edition (often shortened to Windows 98 SE and sometimes to
Win98 SE or 98 SE) is an updated version of Windows 98 released on June 10,
1999, about eight months before the release of the business-oriented
Windows 2000. It includes many bug fixes, improved WDM audio and modem support,
improved USB support, added SSE2 support, the replacement of Internet Explorer
4.0 with Internet Explorer 5.0, Web Folders (WebDAV namespace extension for
Windows Explorer), and related shell updates. Also included is basic
OHCI-compliant FireWire DV camcorder support (MSDV class driver) and SBP-2
support for mass storage class devices. Wake-On-LAN reenables suspended
networked computers due to network activity, and Internet Connection Sharing
allows multiple networked client computers to share an Internet connection via a
single host computer.

Other features in the update include DirectX 6.1 which introduced major
improvements to DirectSound and the introduction of DirectMusic, improvements to
Asynchronous Transfer Mode support (IP/ATM, PPP/ATM and WinSock 2/ATM support),
Windows Media Player 6.1 replacing the older Media Player 4.1, Microsoft
NetMeeting 3.0, MDAC 2.1 and WMI. A memory overflow issue was resolved in which
earlier versions of Windows 98 would crash most systems if left running for 49.7
days (equal to 232 milliseconds); this bug was also present on its predecessor,
Windows 95. Windows 98 SE could be obtained as retail upgrade and full version
packages, as well as OEM and a Second Edition Updates Disc for existing Windows
98 users. USB audio device class support is present from Windows 98 SE onwards.
Windows 98 Second Edition improved WDM support in general for all devices, and
it introduced support for WDM for modems (and therefore USB modems and virtual
COM ports). However, Microsoft driver support for both USB printers and USB
mass-storage device class is not available for Windows 98.

### Removed features

The Active Channels Channel bar from the original release of Windows 98 is not
installed upon first boot, however it is retained when upgrading from the
original release of Windows 98 to Windows 98 Second Edition.

Windows 98 Second Edition did not ship with the WinG API or RealPlayer 4.0,
unlike the original release of Windows 98, due to both of these having been
superseded by DirectX and Windows Media Player, respectively. On the other hand,
ActiveMovie still exists in Windows 98 Second Edition despite having been
superseded by Windows Media Player.

## Upgradeability

- Several components of Windows 98 can be updated to newer versions. These
  include:
- Internet Explorer 6 SP1 and Outlook Express 6 SP1
- Windows Media Format Runtime and Windows Media Player 9 Series
- Windows Media Encoder 7.1 and Windows Media 8 Encoding Utility
- DirectX 9.0c (the latest compatible runtime is from October 2007.)
- MSN Messenger 7.0
- Significant features from newer Microsoft operating systems can be installed
  on Windows 98. Chief among them are .NET Framework version 2.0, the Visual C++
  2005 runtime, Windows Installer 2.0, the GDI+ redistributable library, Remote
  Desktop Connection client 5.2 and the Text Services Framework.
- Several other components such as MSXML 3.0 SP7, Microsoft Agent 2.0,
  NetMeeting 3.01, MSAA 2.0, ActiveSync 3.8, WSH 5.6, Microsoft Data Access
  Components 2.81 SP1, WMI 1.5 and Speech API 4.0.
- Office XP SP3
- Although Windows 98 does not fully support Unicode, certain Unicode
  applications can run if the Microsoft Layer for Unicode is installed.

## System requirements

The majority of copies of Windows 98 were distributed in CD-ROM format. A
3.5-inch floppy disk version was available for older machines, albeit only via
mail order. The floppy disk version of Windows 98 came on 39 DMF formatted
floppy disks and excluded some additional software components that the CD-ROM
version might have featured. The original release of Windows 98 was the last
version of Windows to be available on floppy disks, as Windows 98 Second Edition
was only available on CD-ROMs. Microsoft Plus! for Windows 98 was also only
available on CD-ROMs.

The two major versions of Windows 98 have minimum requirements needed to be run.

<table class="releases">
  <caption class="top-left top top-right">Minimum System Requirements</caption>
  <thead>
    <tr>
      <th rowspan="2" class="left">Field</td>
      <th colspan="2">System</td>
      <th rowspan="2" class="right">Comments</td>
    </tr>
    <tr>
      <th>Windows 98</td>
      <th>Second Edition</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="left">Processor</td>
      <td colspan="2">Intel 80486 66 MHz or higher</td>
      <td class="right">Pentium processor recommended</td>
    </tr>
    <tr>
      <td class="left">RAM</td>
      <td>16 MB</td>
      <td>24 MB</td>
      <td class="right">24 MB recommended; it is possible to run on 8 MB machines with <code>/nm</code> option used during the
        installation process</td>
    </tr>
    <tr>
      <td class="left">Storage</td>
      <td colspan="2">
        <ul>
          <li>Upgrading from Windows 3.1 or 95: 120–295 MB (typically 195 MB).</li>
          <li>New installation (FAT16): 165–355 MB (typically 225 MB).</li>
          <li>New installation (FAT32): 140–255 MB (typically 175 MB).</li>
        </ul>
      </td>
      <td class="right">The amount of space required depends on the installation method and the components selected, but virtual
        memory and system utilities as well as drivers should be taken into consideration.</td>
    </tr>
    <tr>
      <td class="left">Display</td>
      <td colspan="2">VGA or higher resolution monitor (640×480)</td>
      <td class="right"></td>
    </tr>
    <tr>
      <td class="left">Media drive</td>
      <td colspan="2">CD-ROM or DVD-ROM drive</td>
      <td class="right">Floppy install is possible but slow</td>
    </tr>
    <tr>
      <td class="bottom-left">Input</td>
      <td colspan="2" class="bottom">Microsoft Mouse or compatible pointing device</td>
      <td class="bottom-right"></td>
    </tr>
  </tbody>
</table>

Users can bypass processor requirement checks with the undocumented /NM setup
switch. This allows installation on computers with processors as old as the
Intel 80386.

### Limitations

The original release of Windows 98 may fail to boot on computers with a
processor faster than 2.1 GHz. The Active Channels Channel bar will also not set
up properly on computers with a processor faster than 1.5 GHz.

Windows 98 is only designed to handle up to 512 MB of physical memory (RAM)
without changes; the maximum amount of RAM the operating system is designed to
use is up to 1 GB of memory. Systems with more than 1.5 GB of memory may
continuously reboot during startup.

Windows 98 may have problems running on hard drives of capacities larger than 32
GB in systems with certain Phoenix BIOS configurations. A software update fixed
this shortcoming.

## Support lifecycle

Computers running Windows 98 can be directly upgraded to Windows XP, providing
they meet the requirements for Windows XP. Support for Windows 98 under
Microsoft's consumer product life cycle policy was originally planned to end on
June 30, 2003, however, in December 2002, Microsoft extended the support window
to January 16, 2004. This date would then be extended again to June 30, 2006 on
January 13, 2004 up to a final end of support date of July 11, 2006, citing
support volumes in emerging markets as the reason for the extension.

Retail availability for Windows 98 ended on June 30, 2002, and later became
completely unavailable from Microsoft in any form (through MSDN or otherwise)
due to the terms of Java-related settlements Microsoft made with Sun
Microsystems.

In 2011, Microsoft retired the Windows Update v4 website. An independent project
named Windows Update Restored aims to restore the Windows Update websites for
older versions of Windows, including Windows 98.

## Reception

Windows 98 was released to positive reviews, with praise directed to its
improved graphical user interface and customizability, ease of use, and the
degree to which it addressed complaints that users and critics had with
Windows 95. Michael Sweet of Smart Computing characterized it as heavily
integrating features of the web browser, and found file and folder navigation
easier. Ed Bott of PC Computing lauded the bug fixes, easier troubleshooting,
and support for hardware advances such as DVD players and USB. However, he also
found that the operating system crashed only slightly less frequently, and
criticized the high upgrade price and system requirements. He rated it four
stars out of five.

### Sales

Windows 98 sold 530,000 licenses in its first four days of availability,
overtaking Windows 95's 510,000. It later sold a total of 580,000 and 350,000
licenses in the first and second months of availability, respectively.

In the first year of its release, Windows 98 sold a total of 15 million licenses
– 2 million more than its predecessor. However, International Data Corporation
estimated that of the roughly 89 million shipped computers in the desktop
market, the operating system had a market share of 17.2 percent, compared to
Windows 95's 57.4 percent. Meanwhile, the two operating systems continued to
observe a trend whereby Windows 98 improved in sales performance, whereas
Windows 95 dwindled. After a legal dispute and subsequent settlement with Sun
Microsystems over the former's Java Virtual Machine, Microsoft ceased
distributing the operating system on December 15, 2003, and IDC estimated that a
total of 58 million copies were installed worldwide by then.

## User interface

Windows 98 was released to positive reviews, with praise directed to its
improved graphical user interface and customizability, ease of use, and the
degree to which it addressed complaints that users and critics had with
Windows 95. Michael Sweet of Smart Computing characterized it as heavily
integrating features of the web browser, and found file and folder navigation
easier.  Ed Bott of PC Computing lauded the bug fixes, easier troubleshooting,
and support for hardware advances such as DVD players and USB. However, he also
found that the operating system crashed only slightly less frequently, and
criticized the high upgrade price and system requirements. He rated it four
stars out of five.

Windows 98\'s GUI built upon the foundation of its predecessor Windows 95. Many
of its improvements were cosmetic. The title bars of windows and dialog boxes
now had a blue-to-white gradient. The taskbar, Start button and Start menu
remained cosmetically identical to those of Windows 95. Overall, one could not
differentiate between the OS and its predecessor simply by looking at the
desktop.
