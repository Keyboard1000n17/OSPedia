FROM archlinux:latest

# Update and install base dependencies, sudo, git, and github-cli
# Also install 'which' as it's often used by scripts and might be missing
RUN pacman -Syu --noconfirm && \
    pacman -S --noconfirm bash sudo git github-cli which less && \
    # Clean up pacman cache
    pacman -Scc --noconfirm

# Install OpenSSH server
RUN pacman -Syu --noconfirm openssh && \
    ssh-keygen -A && \
    echo "PermitRootLogin no" >> /etc/ssh/sshd_config && \
    echo "PasswordAuthentication no" >> /etc/ssh/sshd_config

# Create the codespace user with a home directory, add to wheel group (for sudo)
# Set bash as the default shell
RUN useradd -m -G wheel -s /bin/bash Keyboard1000n17 && \
    # Setup passwordless sudo for the codespace user
    echo 'Keyboard1000n17 ALL=(ALL) NOPASSWD:ALL' > /etc/sudoers.d/Keyboard1000n17 && \
    chmod 0440 /etc/sudoers.d/Keyboard1000n17

# Generate machine-id for system services
RUN dbus-uuidgen --ensure=/etc/machine-id
