# Installing Python Packages using pip
<span class="tag beginner-tag">⭐️ Beginner</span>

!!! warning "This guide presumes you have [installed Python using pyenv](/python/install)."

!!! info "All commands shown on this page are run in the [terminal](computer/terminal)."

**Step 1: Make sure you are in the correct Python version**
```bash
pyenv version
```
It should print the version you've installed, so `3.11.5` from our Python installation tutorial. Does it not? Run `pyenv global 3.11.5` to activate it.

Are you using [virtual environments](python/venv)? Then make sure it prints out the name of the environment you want to be in.

If you are ever wondering why you get a `ModuleNotFoundError` even though you've just installed the library, it's probably because you had a different version of Python activated than what you're using to run your code.

**Step 2: Using pip, install the package**

In this example, we are installing the `numpy` package.
```bash
pip install numpy
```
It will print progress on the screen and tell you when it's done.

**The package is now installed!**

!!! tip "Installing multiple packages at once"
    You can install multiple package at once by separating their names with spaces. If we want to install matplotlib, numpy, and pandas we can run 
    ```
    pip install matplotlib numpy pandas
    ```

!!! tip "See what packages are installed"
    Want to know what is installed in your active version of Python? Use this command:
    ```
    pip list
    ```
    Which will print a list of all installed packages.

!!! tip "More pip possibilities <span class="tag intermediate-tag">⭐️ Intermediate</span>"
    %%TODO add video about more pip options

    Or see the [official documentation website of pip](https://pip.pypa.io/en/stable/cli/).