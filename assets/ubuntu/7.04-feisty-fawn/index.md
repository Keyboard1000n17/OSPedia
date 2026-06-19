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
