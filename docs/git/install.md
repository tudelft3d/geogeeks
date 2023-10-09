
# How to install Git


## GitHub Desktop application :simple-apple: :simple-windows:

By far the simplest method to install Git is to download and install the [GitHub Desktop application](https://desktop.github.com), it comes with an installation of Git.

To use it, you'll need to [create a (free) GitHub account](https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account).

:simple-linux: If you use Linux, then there is a [fork of the GitHub Desktop](https://github.com/muroko/github-desktop-linux) (which might be painful to install), or you can use directly the CLI, or check those [GUI options](https://git-scm.com/download/gui/linux).

## Git in the terminal

If you use Linux, or if you want to use the [terminal](../computer/terminal.md), you can install Git this way:

=== ":simple-apple: macOS"
    In the console: `xcode-select --install` will install clang, gcc, and git.

=== ":simple-linux: Linux"
    It's most likely already installed, verify with `git --version`, which should return `git version 2.42.0` (or similar version).

    If not installed, then `sudo apt update` + `sudo apt install git

=== ":simple-windows: Windows"
    With [Chocolatey](https://community.chocolatey.org/): choco install git`.

