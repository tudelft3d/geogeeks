
# Virtual environments (venv)

## What is a venv?

A Python virtual environment (venv) is ["created on top of an existing Python installation [...] and may optionally be isolated from the packages in the base environment"](https://docs.python.org/3/library/venv.html).
Each venv will have its own set of Python packages, indepedent from the the main Python installation.

It allows us to avoid this mess (from [xkcd-1987](https://xkcd.com/1987/)):

![](img/xkcd.png){ width="400" }


## How to create and use a venv

=== "Directly with PyCharm" 

    PyCharm allows you to create venv and activate them, follow those instructions:

    <iframe width="560" height="315" src="https://www.youtube.com/embed/UhOJF66gmvY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

=== "If you use pyenv"

    If you used [pyenv](install.md) to install Python (this is what we recommend for macOS and Linux!), then you can also install the [pyenv-virtualenv plugin](https://github.com/pyenv/pyenv-virtualenv) to install and manage your virtual environments.
    It keeps a global list of which versions and venv you have installed, and allows you to easily switch between them.

    To install:

      - macOS: `brew install pyenv-virtualenv`
      - Linux: [see details](https://github.com/pyenv/pyenv-virtualenv?tab=readme-ov-file#installation)

    Some useful commands:

      - create a new venv called "myenv1" (based on the current global version): `pyenv virtualenv myenv1`
      - activate it: `penv activate myenv1`
      - deactivate it: `pyenv deactivate`


=== "Built-in Python"

    venv are builtin Python, and you can install a venv in a specific folder.
    In the folder where you have some code, you can create a new venv:

    ```
    python -m venv ./myenv
    ```

    For Windows, replace `./myenv` by the path where you want the venv.

    Then the venv needs to be activated, how to do this depends on your OS and used console:

    ![](img/activate.png)

    If you're still in the folder above, with macOS I need to:

    ```
    source ./myvenv/bin/activate
    ```

    ![](img/cli.png)


    The new venv you created is empty, that is it should only have 2 packages as shown in the console above.
    You can install new packages with `pip install numpy` and those will be added in the venv.
    As long as you see the name of your venv between brackets (`(myenv)`) it means that you are using the venv.

    To stop using this venv:

    ```
    deactivate
    ```

=== "pyenv + PyCharm"

    Just activate and select a new interpreter (which must be a venv, not a Python version!), following those steps:

    1. ![](img/pyenvpycharm-1.png)
    2. ![](img/pyenvpycharm-2.png)
    3. ![](img/pyenvpycharm-3.png)




