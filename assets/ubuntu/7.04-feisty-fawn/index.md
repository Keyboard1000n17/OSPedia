---
title: Ubuntu 7.04 Feisty Fawn
favicon: 7.10-feisty-fawn-icon.webp
order: 60
background_image: 7.04-feisty-fawn-wallpaper.webp
---

Ubuntu 7.04 Feisty Fawn is the 6th release of Ubuntu, developed and maintained
by Canonical Ltd. The release is somewhat small, with it boasting Windows
Migration, Improved Networking, Graphics and Multimedia Support.

+++

Feisty includes a Windows Migration feature that allows users to import Windows
settings and data, making it easier for users installing the system to
immediately start using Ubuntu. The release also adds a wizard for automatic
installation of multimedia codecs that do not ship with Ubuntu by default. Along
with that, Feisty includes the ability to automatically join a network to share
multimediaa and find printers using Avahi, among other things.

## Features

### Windows Migration

A Windows Migration assistant was added to simplify the process of switching
from Windows to Ubuntu. It allows the user to import data from their Windows
installation such as desktop wallpapers, Internet Explorer bookmarks, Firefox
favourites, AOL and Yahoo Instant Message contacts and more. This makes it
easier and faster for a user to immediately start using Ubuntu.

### Multimedia

Feisty Fawn introduces a wizard to automatically install multimedia codecs that
are not included in the base installation by default. These multimedia codecs
include propietary/restricted ones like MP3, MPEG or DVD. The reason behind this
is so that users have a simple way of installing codecs without going through
complex terminal commands to install said codecs.

### Plug and Play network sharing

Ubuntu adds Avahi to allow a user to automatically join a network and share
multimedia or find printers.

Avahi is a free and open-source Zero-configuration (zeroconf) implementation
available for Linux and BSD systems. It implements the Apple Zeroconf
specification, mDNS, DNS-SD and RFC 3927/IPv4LL and was created because Bonjour,
Apple's own Zeroconf implementation had a license incompatible with the GNU
Public License.

### Core

The following mention improvements in the core components of the system.

#### Linux kernel 2.6.20

Linux 2.6.20 focuses on virtualization capabilities and introduces two new
implementations: A full virtualization implementation that uses Intel/AMD
hardware virtualization capabilities caled KVM and a paravirtualization
implementation.

- **KVM** is a full virtualization implementation that uses Intel/AMD hardware
  virtualization capabilities. KVM is short for Kernel-based Virtual Machine.
- **Paravirtualization** is the act of running a guest operating system, under
  control of a host system, where the guest has been ported to a virtual
  architecture which is almost like the hardware it is actually running on.

Either of these can be used by different hypervisors like Xen or VMWare.

The release also introduces (incomplete) support for the Sony PlayStation 3, a
fault injection debugging feature , UDP-lite support, better per-process IO
accounting, relative atime (atime: access time), support for using swap files
for suspend users, relocatable x86 kernel support for kdump users, small
microoptimizations in x86, a generic HID layer, DEEPNAP power savings for
`PPC970` (PowerPC 970), lockless radix-tree readside, shared pagetables for
`hugetbl`, ARM support for the `AT91` and `iop13xx` processors, full NAT for
`nf_conntrack` and many other things.

##### Sony PlayStation 3 support

The PlayStation 3 gained official Linux support by Sony engineers. However,
support in this release was incomplete as just enabling it wouldn't allow it to
boot on a stock PS3 and did not include support for its components like the
graphics card.

##### KVM virtualization

KVM adds a driver for hardware virtualization extensions developed by Intel and
AMD for the x86 architecture. Obviously, it only works on processors that have
these virtualization capabilities.

The driver added by KVM adds a character device (`/dev/kvm`) that exposes these
capabilities to the userspace, using which a process can run a virtual machine
or a "guest" in a completely virtualized PC with a virtual CPU, virtual RAM,
virtual hard drives, etc. A character device is hardware device or a virtual
component that is accessed as a continuous stream of bytes rather than in blocks
or chunks, and is used to access the virtualization capabilities as running a
guest operating system reads and writes random chunks that need to be accessed
immediately.

Trying to install Windows 32-bit or 64-bit virtually using KVM in this release
leads to a blue screen due to an issue with APIC that was fixed in later
releases.

##### Paravirtualization for x86/i386

Paravirtualization is the act of running a guest operating system, under control
of a host system, where the guest has been ported to a virtual architecture
which is almost like the hardware it is actually running on. This allows for
running these guest operating systems relatively efficiently.

Limitations of paravirtualization in this release include no support for
Symmetric Multiprocessing (SMP), where a guest operating system uses multiple
vCPUs (virtual CPUs) simultaneously.

##### Relocatable x86 kernels

Although not easily noticeable for the end user, this feature was quite
interesting. Before this update, x86/i386 kernels had to be loaded at a fixed
memory address to start; attempting to load it from a different memory address
would cause it to fail. Enabling this feature (`CONFIG_RELOCATABLE`) allowed the
kernel to be loaded from different 4K-aligned addresses (addresses that were an
exact multiple of 4096) with no runtime overhead.

##### Fault injection

Linux kernel 2.6.20 adds a fault injection feature that causes the system to
fail in several layers, for example, disk input/output errors. It allows a
developer to test how their program behaves when such uncommon errors occur so
they can find bugs faster. The options `CONFIG_FAILSLAB`, `CONFIG_PAGE_ALLOC`
and `CONFIG_MAKE_REQUEST` must be enabled while compiling the 2.6.20 kernel to
allow this feature. To configure these options via `debugfs`, the
`CONFIG_FAULT_INJECTION_DEBUG_FS` option must also be enabled while compiling
the kernel.

##### I/O accounting

Before 2.6.20, the kernel did have IO accounting (Input/Output accounting), but
it was not helpful since it simply counted the number of bytes passed into
`read()` and `write`. This can be inaccurate. For example, if a process reads 1
megabyte of data from a file that was already cached, it is accused of having
performed 1 megabyte of I/O, which is inaccurate since the file was cached in
memory (RAM) and was not accessed directly from the disk. This update
implemented _per-process_ I/O that tracks actual read/write operations to the
drives. This was already present in previous versions, but it was the
overall/total read/write data, not per-process)

##### Relative atime support

`atime` is the access time of a file. When a process reads a file, its `atime`
is updated. One of the most common performance tweaks at the time was to disable
`atime` updates by mounting a filesystem with the `noatime` mount flag. The
reason it improved performance was because it prevented frequent, unnecessary
writes to the disk, which could quickly add up on a busy server.

Relative atime or `relatime` was added to the mount options (later becoming
default), and it works by updating the `atime` only if the previous `atime` is
older than its `ctime` (Change Time: when the file's metadata was last changed)
or its `mtime` (Modification Time: when the file's actual content was last
changed).

##### UDP-Lite support

2.6.20 adds support for UDP-Lite for IPv4 and an extension for UDP-Lite over
IPv6. UDP-Lite is a network protocol, much like HTTP or HTTPS. Its idea is that
packets are divided into two parts, a sensitive part whose data must not be
corrupted and an insensitive part that contained non-essential data. The
sensitive part of the packet was required to be uncorrupted and the packet would
not be sent if it got corrupted. However, the insensitive part was allowed to be
corrupted and would be sent even if it was corrupted as advanced codecs could
theoretically conceal or correct minor errors in the insensitive part.

##### Generic HID layer

The HID layer (HID: Human Interface Device) only worked with USB devices in
versions 2.6.19 and before. In 2.6.20, the HID was made generic so that any
subsystem that may require it can use it, for example, Bluetooth.

A Human Interface Device is the software or firmware that allows a system to
communicate with accessories/peripherals. A Human Interface Device layer gets
the information of a connected device. This information will inlude the type of
data the device sends and how to interpret it. This way, any HID-compliant
device can run on any operating system that has an HID layer.

##### Hacky FPU optimization

This optimization was an i386 port of the x86-64 feature implemented in kernel
version 2.6.19. It gives only a small improvement in FPU-intensive programs
(FPU: Floating-Point Unit), but it is an interesting optimization. At the time,
the kernel had a 100% lazy FPU behavior—after _every_ context switch, a trap was
taken for the first FPU use to restore the FPU context lazily, which was helpful
for applications that had very sporadic or no FPU use as then the expensive
save/restore was infrequent and did not happen often. However, for very frequent
FPU users, every context switch took an extra trap.

This feature adds a simple rule to this code: After 5 consecutive context
switches of FPU use, the lazy behavior is disabled and the context gets restored
every context switch. If the application indeed uses the FPU, the trap is
avoided (the chance of the 6th time slice using FPU after the previous 5 having
done so are quite high, obviously). After 256 switches, this is reset and lazy
behavior is returned (until there are 5 consecutive switches again). The reason
for this is to give the lazy behavior back to applications that use the FPU in
bursts.

##### Use `regparm` in x86-32

This feature was also mostly irrelevant to users, and had been optional for some
time. However, it became the default in 2.6.20. Since the beginning, the x86
architecture had stored the function parameters in the stack. On the contrary,
modern architectures (PowerPC, SPARC, etc) use registers, which are much faster
because there is no need to do anything to bring the parameters back; the
parameters are just there, in the register. The x86 world (including Linux)
continued using stacks for parameter passing, for compatibility reasons with
software, compilers, etc; they only added extensions to compilers to optionally
tell the compiler to use registers for parameter passing in a given function
(usually involving the `fastcall` keyword) for performance-critical paths.

Thanks to a GCC extension, the Linux kernel uses the `-mregparm=3` compile
option, which means that if a function uses 3 or less arguments, GCC will
automatically use registers to pass its parameters. In the case of x86-64,
however, using the registers has always been the default.

##### New drivers

A number of frivers were added to Linux, including these:

- **Networking**:
  - Driver for the Atmel MACB on-chip Ethernet module
  - Tsi108/9 On Chip Ethernet device driver
  - Netxen 1G/10G Ethernet driver

- **Hwmon**
  - New Winbond W83793 hardware monitoring driver
  - New PC87427 hardware monitoring driver
  - New AMS hardware monitoring driver

- **I2C**
  - New ARM Versatile/Realview bus driver
  - New Atmel AT91 bus driver
  - New Philips PNX bus driver

- **Watchdog:**
  - NS pc87413-wdt Watchdog driver
  - MIPS RM9000 on-chip watchdog device driver

- **Input**
  - Add Philips UCB1400 touchscreen driver
  - Add driver for keyboard on AAED-2000 development board (ARM)

- **Graphics**: Fbdev driver for IBM GXT4500P videocards

- **RTC**: rtc-omap driver

##### Core changes

The 2.6.20 also introduced multple changes to the core. Changes include:

- Enhanced memory management, block layer, etc
- Revamped work queue
- Changes to the TTY (Teletypewriter: it is a console for commands)
- Generic BUG implementation
- Addition of an API for internal notification of bus eventa, initiialization of
  the module and display of the drivers in `/sys/module/`
- Addition of a new `sysrq` feature to show blocked tasks
- Creation of CONFIG_SYSFS_DEPRECATED to provide backwards-compatible `sysfs`
  tree layouts for older user-space tools to mitigate the effects of a major
  `sysfs` reorganization.
- Addition of a child reaper to clean up orphaned child processes to
  `pid_namespace`
- And a few more

More information can be found in the
[release notes](https://kernelnewbies.org/Linux_2_6_20#Short_overview_.28for_news_sites.2C_etc.29).

#### GCC 4.1.2

GCC, or the GNU Compiler Collection (formerly GNU C Compiler), is a collection
of compilers by GNU for various languages such as C, C++, Objective-C, and more.

This is the
[list of problem reports (PRs)](https://gcc.gnu.org/bugzilla/buglist.cgi?bug_status=RESOLVED&resolution=FIXED&target_milestone=4.1.2)
from GCC's bug tracking system that are known to be fixed in the 4.1.2 release.
This list might not be complete, that is, it is possible that some PRs that have
been fixed are not listed here.

When generating code for a shared library, GCC now recognizes that global
functions may be replaced when the program runs. Therefore, it is now more
conservative in deducing information from the bodies of functions. For example,
in this example:

```
void f() {}

void g() {
  try { f(); }
  catch (...) {
    cout << "Exception";
  }
}
```

G++ would previously have optimized away the catch clause, since it would have
concluded that `f` cannot throw exceptions. Because users may replace `f` with
another function in the main body of the program, this optimization is unsafe,
and is no longer performed. If you wish G++ to continue to optimize as before,
you must add a `throw()` clause to the declaration of `f` to make clear that it
does not throw exceptions.

The details of the GCC 4.1.2 update can be found on the
[GNU GCC](https://gcc.gnu.org/gcc-4.1/changes.html#4.1.2) website.
