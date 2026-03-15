---
title: Windows 3.0
favicon: windows-3.0-icon.webp
order: 30
background_image: windows-3.0-wallpaper.webp
info:
  icon:
    - alt: Windows 3.0 icon
  paras:
    - "Date released: May 22, 1990"
    - "End of Support: December 31, 2001"
    - "Last release: 3.00a on October 20, 1991"
    - "Succeeded by: Windows 3.1 (released 1987)"
    - "Codename: Janus"
    - "Developed by: Microsoft Corporation"
carousel_images:
  - path: /windows/windows-3.0/windows-3.0-ui.webp
    alt: Windows 3.0 UI
    desc: A screenshot of Windows 3.0
---

Windows 3.0 is the third major release of Microsoft Windows, launched on May
22, 1990. It introduces a new graphical user interface (GUI) that represents
applications as clickable icons, instead of the list of file names in its
predecessors. Later updates expand capabilities, such as multimedia support for
sound recording and playback, and support for CD-ROMs. This is all unified in
Windows 3.1.

+++

Windows 3.0 was the first version of Windows to perform well both critically and
commercially, and was seen as a major improvement over its previous offering of
Windows 2.0. Its GUI was considered a challenger to those used and popularized
by the Apple Macintosh and Commodore Amiga. Other praised features include
improved multitasking, customizability, and especially the utilitarian memory
management that troubled the users of Windows 3.0\'s predecessors. The software
was a major success, achieving 10 million sales. However, Microsoft was
criticized by third-party developers for bundling its separate software with the
operating environment, which they viewed as an anticompetitive practice. Windows
3.0 had many changes from Windows 2.0 and 1.0 like adding the File Manager,
using the MS-DOS Prompt during your Windows session and the Program Manager
instead of MS-DOS Executive to launch programs.

## Development

Before Windows 3.0, a partnership bundled IBM\'s personal computers with
Microsoft\'s MS-DOS since 1981. Microsoft had previous attempted to develop a
successful operating environment called Windows, which IBM declined for its
product line. As MS-DOS\'s fifth iteration approached, IBM demanded a version
that could run in \"protected mode\", to allow multiple programs at once, among
other benefits. MS-DOS was originally designed to run in real mode and run only
one program at a time, due to the limitations of the Intel 8088 microprocessor.
Intel had later released the Intel 80286, supporting such multitasking
efficiently (with several different hardware features, including memory
protection, hardware task switching, program privilege separation, and virtual
memory, all absent on the earlier Intel x86 CPUs) and which could be directly
connected to 16 times as much memory as the 8088 (and 8086). The two companies
developed the next generation beyond MS-DOS, called OS/2. Early OS/2 software is
not encumbered with MS-DOS compatibility, giving IBM a technological advantage.

In late 1987, Windows/386 2.0 introduced a protected mode kernel that can
multitask several MS-DOS applications using virtual 8086 mode, but all Windows
applications still run in a shared virtual DOS machine. As the rest of the
Microsoft team moved on to the OS/2 2.0 project, David Weise, a member of the
Windows development team and a critic of IBM, believed that he could restart the
Windows project. Microsoft needed programming tools to run in protected mode, so
it hired Murray Sargent, a physics professor from the University of Arizona who
had developed a DOS extender and a debugging program that works with protected
mode applications.

Windows 3.0 originated in 1988 as an independent project by Weise and Sargent,
using Sargent\'s debugger to improve the memory manager and run Windows
applications in separate protected memory segments. In a few months, Weise and
Sargent cobbled together a rough prototype to run Windows versions of Word,
Excel, and PowerPoint, then presented it to company executives, who were
impressed enough to approve it as an official project. When IBM learned of
Microsoft\'s upcoming project, their relationship was damaged, but Microsoft
asserted that it would cancel Windows after its launch and that it would
continue to develop OS/2.

Windows 3.0 was officially announced worldwide on May 22, 1990, in the New York
City Center Theater. The event had 6,000 attendees, and it was broadcast live in
the Microsoft social fairs of seven other North American cities and twelve major
cities outside. Microsoft spent US\$3 million to host the festivities, which
co-founder Bill Gates referred to as the \"most extravagant, extensive, and
expensive software introduction ever\". Microsoft did not offer free runtime
licenses of the software to applications vendors, because runtime versions of
Windows lack multitasking. Instead, the company offered upgrades for both full
and runtime previous versions of Windows at a cost of US\$50 (equivalent to
\$117 in 2023)—considerably lower than the full license\'s suggested retail
price of \$149. The software was bundled by computer hardware manufacturers. The
first were Zenith Data Systems, Austin Computer Systems, and CompuAdd, followed
by more than 25 others, not including IBM.

Microsoft\'s \"Entry Team\" was assigned to make Windows 3.0 generally appealing
to the public, and was concerned that the public might perceive it as no more
than a tool for large enterprises, due to high system requirements. Major game
publishers did not see it as a potential game platform, instead sticking to
MS-DOS. Microsoft\'s product manager Bruce Ryan compiled games that the Windows
team had designed in its spare time to create Microsoft Entertainment Pack,
which includes Tetris and Minesweeper. There was little budget, none spent on
quality testing. Nevertheless, the Entertainment Pack was sold as a separate
product, and it became so popular that it was followed by three other
Entertainment Packs.

On December 31, 2001, Microsoft dropped support for Windows 3.0, along with
previous versions of Windows and Windows 95, Windows for Workgroups, and MS-DOS
versions up to 6.22.

## Memory modes

Windows 3.0 was the only version of Windows that could be run in three different
memory modes:

- Real mode, intended for older computers with a CPU below Intel 80286, and
  corresponding to its real mode;
- Standard mode, intended for computers with an 80286 processor, and
  corresponding to its protected mode;
- 386 Enhanced mode, intended for newer computers with an Intel 80386 processor
  or above, and corresponding to its protected mode and virtual 8086 mode.

Real mode primarily existed as a way to run Windows 2.x applications. It was
removed in Windows 3.1. Almost all applications designed for Windows 3.0 had to
be run in standard or 386 enhanced modes. (Microsoft Word 1.x and Excel 2.x
would work in real mode as they were actually designed for Windows 2.x).
However, it was necessary to load Windows 3.0 in real mode to run SWAPFILE.EXE,
which allowed users to change virtual memory settings. Officially, Microsoft
stated that an 8Mhz turbo 8086 was the minimum CPU needed to run Windows 3.0. It
could be run on 4.77 MHz 8088 machines, but performance was so slow as to render
the OS almost unusable. Up to 4 MB of expanded memory (EMS) is supported in real
mode.

Standard mode was used most often as its requirements were more in-line with an
average PC of that era—an 80286 processor with at least 1 MB of memory. Since
some PCs (notably Compaqs) did not place extended memory (XMS) at the 1MB line
and instead left a hole between the end of conventional memory and the start of
XMS, Windows could not work on them except in real mode.

386 Enhanced mode was a 32-bit virtual machine that ran a copy of 16-bit
Standard mode, and multiple copies of MS-DOS in virtual 8086 mode. 386 enhanced
mode uses virtual 8086 mode to allow multiple DOS programs to run (each DOS
session takes 1MB of memory) along with being windowed and allowing multitasking
to continue. Virtual memory support allows the user to employ the hard disk as a
temporary storage space if applications use more memory than exists in the
system.

Normally, Windows will start in the highest operating mode the computer can use,
but the user may force it into lower modes by typing WIN /R or WIN /S at the DOS
command prompt. If the user selects an operating mode that cannot be used due to
lack of RAM or CPU support, Windows merely boots into the next lowest one.

## Updates

There are two updates known to have been published for Windows 3.0. One of them
is Windows 3.0a, released in December 1990. It modified Windows\' DOS extender—a
program that enables DOS applications to access extended memory—to prevent
errors caused by software calling into real-mode code when Windows is loaded in
standard mode. It also simplified the installation process and alleviated
crashes associated with networking, printing, and low-memory conditions.

### Windows 3.0 with Multimedia Extensions

Windows 3.0 with Multimedia Extensions 1.0 (MME) was released to third-party
manufacturers in October 1991. The application programming interface introduced
Media Control Interface, designed for any media-related device such as graphics
and audio cards, scanners, and videotape players. It also supported recording
and playing digital audio, MIDI devices, screensavers and analog joysticks, as
well as CD-ROM drives, which were then becoming increasingly available. Other
features included additional applets such as an alarm clock and Media Player,
used to run media files. MME supports stereo sound and 16-bit audio bit depth
and sampling rates of up to 44.1 kHz.

## System requirements

The official system requirements for Windows 3.0 and its substantial update,
Windows 3.0 with Multimedia Extensions:

<table>
  <caption class="top-left top-right">
    Minimum system requirements
  </caption>
  <tbody>
    <tr>
      <th class="left"></th>
      <th>Windows 3.0</th>
      <th class="right">Windows 3.0 with Multimedia Extensions</th>
    </tr>
    <tr>
      <th class="left">CPU</th>
      <td>8088 processor</td>
      <td class="right">80286 processor running at 10 MHz</td>
    </tr>
    <tr>
      <th class="left">RAM</th>
      <td>
        1 MB of memory (640 KB and 384 KB of conventional and extended memory,
        respectively) (works with only 640 KB – Real Mode)
      </td>
      <td class="right">2 MB of memory</td>
    </tr>
    <tr>
      <th class="left">Storage</th>
      <td>Hard drive with 6–8 MB of free space</td>
      <td class="right">Hard drive with 30 MB of total space</td>
    </tr>
    <tr>
      <th class="left">Medium</th>
      <td>At least one floppy drive for the installation disks</td>
      <td class="right">
        A CD-ROM drive is essential for performing numerous multimedia
        operations.
      </td>
    </tr>
    <tr>
      <th class="left">Video</th>
      <td>
        Windows 3.0 supports a large array of graphics cards and computer
        monitors, and will try to use one of its generic drivers in the event
        that no driver exists to support the hardware. However, because the user
        interface is designed to be displayed at resolutions relatively high by
        1990's standards, an VGA display was recommended. (works with CGA and
        Hercules)
      </td>
      <td class="right">VGA graphics card</td>
    </tr>
    <tr>
      <th class="left">OS</th>
      <td colspan="2" class="right">MS-DOS or PC DOS version 3.1 or higher</td>
    </tr>
    <tr>
      <th class="bottom-left">Mouse</th>
      <td class="bottom">
        A Microsoft-compatible pointing device is recommended.
      </td>
      <td class="bottom-right">
        A mouse is required to perform many of the multimedia operations.
      </td>
    </tr>
  </tbody>
</table>

The processor and memory minimum requirements for the original version are those
needed to run Windows in real mode, the lowest of the three operating modes.
This mode severely limits the multitasking capabilities of Windows, although it
can still use expanded memory, which is memory that is added by installing
expanded memory boards or memory managers. However, it also provides backward
compatibility with as many hardware and software designed for DOS as possible,
and it may be used to run DOS applications and older Windows applications not
optimized for Windows 3.0 if running them in higher operating modes is not
possible. Standard mode requires at least an 80286 processor, and although the
memory required is unchanged, the mode does allow the processor to use extended
memory for running applications. 386 enhanced mode requires at least an 80386
processor and two megabytes of memory. While the other modes can run DOS
applications in full-screen only and must suspend DOS applications to run
Windows programs and vice versa, the DOS applications in 386 enhanced mode can
be run windowed and concurrently with the Windows applications. Unlike the other
modes, this one cannot be used to run DOS applications that use DOS extenders
incompatible with DPMI specifications. Normally, Windows will start in the
highest operating mode the computer can use, but the user may force it into
lower modes by typing `WIN /R` or `WIN /S` at the DOS command prompt. If the
user selects an operating mode that cannot be used due to lack of RAM or CPU
support, Windows merely boots into the next lowest one.

## Reception

Windows 3.0 is considered to be the first version of Windows to receive critical
acclaim. Users and critics universally lauded its icon-based interface and the
ensuing ease of performing operations, as well as the improved multitasking and
greater control over customizing their environments. Computerworld considered
the software to share the same benefits as OS/2 and Unix. Garry Ray of Lotus
considered this version of Windows the first of the environment to bear "serious
long-term consideration." Bill Howard of PC Magazine found its user interface to
be easy to use, though not quite as intuitive as Macintosh. The editor of
InfoWorld, Michael J. Miller, had faith that PC users would fully transition
from the preceding text-only environment to the GUI with Windows 3.0 as their
primary choice.

One critical aspect of Windows 3.0 is how it managed memory. Before its release,
users of previous versions of Windows were burdened with trying to circumvent
memory constraints to use those versions' touted capabilities. The Windows
software occupied a large amount of memory, and users regularly experienced
system slowdowns and often exceeded memory limits. Windows 3.0 also had
relatively high memory requirements by 1990's standards, but with the three
memory modes, it was praised for using memory more efficiently, removing the
640–kilobyte limit that had existed in computers running on Microsoft software
since DOS, and supporting more powerful CPUs.

Ted Needleman of the computer magazine Modern Electronics called Windows 3.0's
GUI "state-of-the-art" and compared Microsoft's previous attempts to produce
such a GUI to Apple Lisa, Apple's early such attempt and the predecessor to its
far more successful Macintosh. He cautioned about the seemingly cheap upgrade
cost of US$50 when the system requirements and the need to upgrade any installed
applications for compatibility are considered. He also cautioned that the
software's advantages could be taken only by running Windows applications.
However, in February 1991, PC Magazine noted a vast array of applications
designed specifically for Windows 3.0, including many that had yet to be
available for OS/2. It also cited two other factors leading to the operating
environment's success: one of them was the inexpensive cost of the hardware
needed to run it compared to the Macintosh, and the other was its focus on fully
utilizing hardware components that were relatively powerful by its time's
standards.

Amid the unprecedented success of Windows 3.0, Microsoft came under attack by
critics as well as the United States Federal Trade Commission, who alleged that
the company had attempted to dominate the applications market by luring its
competitors into developing software for IBM's OS/2 while it was developing its
own for Windows. At the time of Windows 3.0's release, Microsoft had only 10 and
15 percent of the market shares on spreadsheets and word processors,
respectively, but those figures had risen to over 60 percent in 1995, overtaking
previously dominant competitors such as Lotus Development Corporation and
WordPerfect. Microsoft did indeed suggest developers to write applications for
the OS/2, but it also intended Windows 3.0 to be a "low-end" alternative to the
latter, with Gates referring to the OS/2 as the operating system of the 1990s.
The Windows brand was also intended to be canceled after this version's release.
The investigations into—and the eventual subsequent suing of—Microsoft led to a
settlement on July 15, 1994, where Microsoft agreed not to bundle separate
software packages with its operating products. It marked the first time that the
company had ever been investigated for anticompetitive practices.

### Sales

Windows 3.0 is also considered the first Windows to see commercial success. At
the time of release, of the 40 million personal computers installed, only five
percent used either previous version of Windows, but within its first week of
availability, it rose as the top-selling business software. After six months,
two million copies were sold. Its success was interdependent with the PC
industry, exemplified by an explosion of demand for and subsequent production of
Intel's more powerful microprocessor, the 80486. Windows became so widely used
in businesses that Brian Livingston of InfoWorld wrote in October 1991 that "a
company with no PCs that run Windows is almost like a company without a fax
machine." Microsoft had spent a total of $10 million in its marketing campaign
for the software, including the $3 million for its release. When its successor,
Windows 3.1, was released, sales totaled about 10 million copies, and a year
later the Windows series would overtake DOS as the bestselling application of
all time.

"[Windows 3.0] wasn't a toy" unlike previous versions, Chris Pratley of
Microsoft recalled in 2004. "It wasn't great, but it actually worked well enough
that people found they could be productive using it". Windows 3.0 is regarded in
retrospect as a turning point in the future of Microsoft, being attributed to
its later dominance in the operating system market and to the company's improved
applications market share. The company used to have close ties with IBM since
the former's inception, but the unexpected success of its new product would lead
to the two companies recasting their relationship, where they would continue to
sell each other's operating products until 1993. After the fiscal year of 1990,
Microsoft reported revenues of US$1.18 billion, with $337 million appearing in
the fourth quarter. This annual statistic is up from $803.5 million in fiscal
1989, and it made Microsoft the first microcomputer software company to reach
the $1 billion mark in one year. Microsoft officials attributed the results to
the sales of Windows 3.0.

## Features

Windows 3.0 features a significantly revamped graphical user interface (GUI),
which was described as having a three-dimensional look similar to the
Presentation Manager, rather than the flat look of its predecessor, Windows 2.1.
It also includes technical improvements to the memory management to make better
use of the capabilities of Intel\'s 80286 and 80386 processors. Dynamic Data
Exchange is a multitasking protocol whereby multiple running applications
dynamically exchange data with one another, i.e., when data in one application
changes, so does the data in another. This feature had appeared in Windows
previously, but until Windows 3.0, due to memory constraints, users were unable
to use the protocol. These users instead had to exit to DOS to run one
application, close it, and open another to exchange data. Due to its support for
the 386 and later processors, Windows 3.0 can also use virtual memory, which is
a portion of a hard disk drive that is substituted for memory by the processor
in the event that its own memory is exhausted. Like its predecessors, Windows
3.0 is not an operating system in its sense, but rather an operating environment
that is designed for DOS and controls its functions.

The MS-DOS Executive file manager was replaced with Program Manager, the
list-based File Manager, and Task List. Program Manager is a graphical shell
composed of icons, each with an underlying title. They can be moved and arranged
in any order, and the icons\' titles can be renamed. When double-clicked on,
these icons open corresponding applications or smaller windows within the
Program Manager window called group windows. These group windows contain such
icons and can be minimized to prevent cluttering of the Program Manager
window\'s space. File Manager is another shell used to access or modify
applications, but displays them as files contained in directories in a list
format. Its purpose as an alternative to using DOS commands is to facilitate
moving files and directories. Task List displays all running applications and
may also be used to terminate them, select a different program, cascade or tile
the windows, and arrange minimized desktop icons. The Control Panel, where users
can change settings to customize Windows and hardware, was also redesigned as an
icon-based window.

The drivers bundled with Windows 3.0 support up to 16 simultaneous colors from
EGA, MCGA or VGA palettes, as opposed to the previous maximum of eight colors,
though the operating environment itself supports graphics adapters that offer
resolutions and the number of colors greater than VGA. Windows 3.0 also
introduced the Palette Manager, a set of functions that allow applications to
change the lookup palette of graphics cards displaying up to 256 colors to use
needed colors. When multiple displayed windows exceed the 256-color limit,
Windows 3.0 prioritizes the active window to use that application\'s colors,
without resorting to dithering and then filling in areas.

Windows 3.0 retains many of the simple applications from its predecessors, such
as the text editor Notepad, the word processor Write, and the improved paint
program Paintbrush. Calculator is expanded to include scientific calculations.
Recorder is a new program that records macros, or sequences of keystrokes and
mouse movements, which are then assigned to keys as shortcuts to perform complex
functions quickly. Also, the earlier Reversi game was complemented with the card
game Microsoft Solitaire, which would eventually be inducted into the World
Video Game Hall of Fame in 2019. Another notable program is Help. Unlike DOS
applications, which may have help functions as part of them, Windows Help is a
separate and readily accessible application that accompanies all Windows
programs that support it.

## User Interface

Windows 3.0 features a significantly revamped graphical user interface (GUI)
that represents applications as clickable icons, instead of the list of file
names in its predecessors. It was described as having a three-dimensional look
similar to the Presentation Manager, rather than the flat look of its
predecessor, Windows 2.1. Ted Needleman of the computer magazine Modern
Electronics called Windows 3.0\'s GUI \"state-of-the-art\" and compared
Microsoft\'s previous attempts to produce such a GUI to Apple Lisa, Apple\'s
early such attempt and the predecessor to its far more successful Macintosh.

The User Interface consisted of icons in the Program Manager, which replaced
MS-DOS Executive for launching applications. As previously mentioned, the UI now
had a \"3D\" feel, as compared to its predecessors with a flat feel. The icons
had changed and were now more graphical, further refined, and easier to
recognize. There were now upto a maximum of 16 colors that could be displayed
simultaneously, as opposed to the maximum of 8 colors on its predecessors. The
OS also introduced the Palette Manager, a set of functions that allowed
applications to change the lookup palette of GPUs, supporting upto 256 colors to
use required colors. The desktop was a graphical representation of the user\'s
workspace. It feature a background which could now be changed to a pattern or
bitmap image, icons that acted as shortcuts (similar to shortcuts on modern
operating system desktops), and at the bottom of the screen a bunch of icons
next to each other that represented minimized programs (similar to today\'s
Windows taskbar or macOS\'s dock). The toolbars were updated. For example, the
File Manager\'s toolbar now had buttons for common tasks like copying, cutting
and pasting files.
