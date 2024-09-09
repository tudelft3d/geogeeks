
# WSL (Windows Subsystem for Linux)


## What is WSL?

<iframe width="560" height="315" src="https://www.youtube.com/embed/48k317kOxqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[WSL](https://docs.microsoft.com/en-us/windows/wsl/) is an installation of a Linux environment "inside" your Windows (Win10 or Win11).
It will allow you to run several Linux tools on the command line (eg `wget`, `grep`, or `ssh`), to use databases (eg Postgres) or compilers (eg C++) installed under Linux.

## How to install WSL (Windows store)

1. Open the Microsoft store and install the Windows Subsystem for Linux. 
2. Search for "ubuntu lts" and install the latest version available (eg 22.04).
3. See [this](https://superuser.com/questions/1736443/wsl-2-installing-linux-failed-error-code-0x80370114) and enable: (1) Virtual Machine Platform and (2) Windows Subsystem for Linux.

## How to install WSL (command line)

To install WSL, open command prompt as administrator. 

![image](./img/cmd-2.jpg)

Run the following command:

```sh
wsl -l -o
```

This will list the Linux distributions that are available to install in the online store. Out of those, you probably want to install the latest version of Ubuntu with long-term support (LTS). If you selected Ubuntu-22.04 LTS (meaning from April 2022), that would be:

```sh
wsl --install -d Ubuntu-22.04
```

This will start the process to install WSL on your device. Once the installation is complete, you will need to reboot your device.   

After the reboot, wait a couple of seconds for the Ubuntu terminal to open and complete the installation. It will then ask you to specify a username and password. 

![image](./img/setup-3.jpg)

Once you complete this step, your WSL is ready to use! 

If you want to open the current directory in Windows File Explorer, type the following command in the terminal:

```sh
explorer.exe .
```

!!! note

    You will not be able to use "ctrl+c/v" for Copy/Paste on the Ubuntu terminal. Instead, go to *Properties* by right-clicking on the top of the terminal and enable *Use Ctrl+Shift+C/V as Copy/Paste.*

![image](./img/copy_ubuntu.jpg)


!!! warning

    Some computer companies seem to block virtualization by default, and it needs to be explictly enabled. This is done in the BIOS, [follow this manual](https://bce.berkeley.edu/enabling-virtualization-in-your-pc-bios.html).


!!! warning

    Some Windows installations come with either virtualisation features or WSL disabled. See [this](https://superuser.com/questions/1736443/wsl-2-installing-linux-failed-error-code-0x80370114) post to enable them.

!!! warning

    If you want to install another Linux than Ubuntu (as above) or want to see more options, see the [Microsoft Basic commands for WSL](https://learn.microsoft.com/en-us/windows/wsl/basic-commands).

## The Windows Terminal is recommended

We recommend you install and use the [Windows Terminal](https://learn.microsoft.com/en-us/windows/terminal/) instead of the Command Prompt, it's more powerful and flexible.
