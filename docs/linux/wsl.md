
# WSL (Windows Subsystem for Linux)


## What is WSL?

<iframe width="560" height="315" src="https://www.youtube.com/embed/48k317kOxqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[WSL](https://docs.microsoft.com/en-us/windows/wsl/) is an installation of a Linux environment "inside" your Windows (Win10 or Win11).
It will allow you to run several Linux tools on the command line (eg `wget`, `grep`, or `ssh`), to use databases (eg Postgres) or compilers (eg C++) installed under Linux.

## How to install WSL

To install WSL, open command prompt as administrator. 

![image](./img/cmd-2.jpg)

Run the following command:

```sh
wsl --install
```

This will start the process to install WSL on your device. Once the installation is complete, you will need to reboot your device.   

After the reboot, wait a couple of seconds for the Ubuntu terminal to open and complete the installation. It will then ask you to specify a username and password. 

![image](./img/setup-3.jpg)

Once you complete this step, your WSL is ready to use! 

!!! note

    You will not be able to use "ctrl+c/v" for Copy/Paste on the Ubuntu terminal. Instead, go to *Properties* by right-clicking on the top of the terminal and enable *Use Ctrl+Shift+C/V as Copy/Paste.*

![image](./img/copy_ubuntu.jpg)


!!! warning

    If you want to install another Linux than Ubuntu (as above) or want to see more options, see the [Microsoft Basic commands for WSL](https://learn.microsoft.com/en-us/windows/wsl/basic-commands).

## The Windows Terminal is recommended

We recommend you install and use the [Windows Terminal](https://learn.microsoft.com/en-us/windows/terminal/) instead of the Command Prompt, it's more powerful and flexible.
