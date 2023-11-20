
# How to install Python using pyenv

Installing and using Python as recommended below has major benefits and will prevent problems in the future.

!!! warning ":simple-windows: Windows: use the python.org version!"

    pyenv was created for macOS and Linux, and although it has a Windows version (called "**pyenv-win**"), this is not working very well and the installation is buggy. 

    Therefore, for Windows we recommend you install Python "the normal way" ([downloading from python.org](https://www.python.org/downloads/)), but we **strongly recommend** you use [virtual environments](venv.md).

---

We recommend installing and managing Python using "pyenv". 
pyenv is a tool that allows you to install *multiple versions* of Python, and select which specific version should be used.


=== ":simple-apple: macOS"
    To install Python via pyenv, make sure you have [Homebrew](../computer/packagemanager.md) installed and then run the following commands in your [terminal](../computer/terminal.md).

    **Step 1: Install pyenv using Homebrew**
    ```bash
    brew install pyenv
    ```
    Then run the following commands, these set up pyenv for your terminal.
    ```bash
    conf_file="$HOME/.${SHELL##*/}"rc
    echo 'export PYENV_ROOT="$HOME/.pyenv"' >> "$conf_file"
    echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> "$conf_file"
    echo 'eval "$(pyenv init -)"' >> "$conf_file"
    exec "$SHELL"
    ```


=== ":simple-linux: Linux"
    Run the following commands in your [terminal](../computer/terminal.md).

    **Step 1: Install pyenv**
    ```bash
    curl https://pyenv.run | bash
    ```

**Step 2: Using pyenv, install Python 3.10.5**

```bash
pyenv install 3.10.5
```
This will install Python 3.10.5; on macOS and Linux you can omit the minor version (the `.5` at the end) and pyenv will automatically choose the latest version.

??? info "(Optional) What version of Python should I install?"
    How do I know which Python version I need? Generally it's recommended to use the previous version of Python (so if Python 3.11 is the latest, install 3.10). This is because it takes some time for libraries to be updated, so it's safer to use a version of Python which is more supported.

    You can use `pyenv install -l` to get a list of all available Python versions`

**Step 3: Check what version of Python is currently the default Python**
```bash
pyenv version
```
If you already have a pre-installed Python, this will print `system`. It might also say "No Python version has been set yet". You can use this command anytime you want to check what version of Python is active.

**Step 4: Set your newly installed Python as default**
```bash
pyenv global 3.10.5
```
This command sets your newly installed Python as the default Python for all terminals.

