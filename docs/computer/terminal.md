
# Intro to the terminal

The terminal (also called the *console*, *command line interface* (CLI)) is a tool to interact with computers by typing textual commands on your keyboard. 
Terminals are the "window" in which you type commands, and handle user input and output.

!!! warning
    Notice that while the terms "terminal" and "shell" are often used interchangeably, they are not the same.

    A **shell** is a distinct component of a terminal, it takes the commands you type and translates them into actions that the operating system has to perform.

    Examples of shells:

    1. **bash**:  Bourne-Again SHell, common on Linux and macOS
    2. **zsh**: extended bash with many improvements, now default on macOS
    3. **PowerShell**: A Windows shell that integrates command-line shell and scripting language

The terminal is a powerful tool mostly used by developers and power users.
It's often a quicker and more precise way to interact with the computer, and it can well be the only way to perform some operations (ie they don't have a graphical-user interface (GUI)).


## Where is the terminal??


=== ":simple-apple: macOS"
    It's built-in, it's called `Terminal.app` and it's in the `Applications` folder.

=== ":simple-linux: Linux"
    It's built-in, either called `GNOME Terminal` or `Konsole`.

=== ":simple-windows: Windows"
    While the `Command Prompt` (or `cmd`) could be used, we do not recommend it as it's too simple.
    Instead, use the `PowerShell`, which is already installed on all Windows machine.

!!! external-link "A terminal emulator on the web"
    [Useful to fiddle and learn the basic commands of Linux/macOS](https://www.terminaltemple.com/).


!!! note
    Observe that the commands for the PowerShell and those of macOS/Linux will differ slightly.
    For Windows, you can always install [WSL](wsl.md) and use the Linux terminal.


## Basic (bash) commands

  - `cat <file>`: print to the console the content of the file
  - `cd <directory>`: change the current directory
  - `ls`: list files and directories
  - `mkdir <directory>`: create a new directory (as a child of `pwd`)
  - `mv <file> <new-destination>`: move the file to another folder
  - `pwd`: print the current working directory
  - `rm <file>`: remove/delete the file 
  - `touch <file>`: create a new file
  

## Navigation in the filesystem

The Linux filesystem is a tree, its root is `/`.

  - `.` (dot): is the current directory (`pwd` to know where you are)
  - `..`: is the parent directory
  - `~`: is your home folder

So let's say you want to move to the parent folder: `cd ..`



## File permissions

![](./img/filepermissions.png)


## A video explaining all of the above at length

!!! video "Beginner's Guide to the Bash Terminal. <span class="tag beginner-tag">⭐️ Beginner</span>"
    <div style="display: flex; justify-content: center; padding-bottom: 1em;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/oxuRxtrO2Ag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    This video gives a very good overview of pretty much everything you need to know.
    It's long, but totally worth it in our opinion!
