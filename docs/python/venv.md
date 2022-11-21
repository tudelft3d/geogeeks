
# Virtual environments (venv)


A Python virtual environment (venv) is ["created on top of an existing Python installation [...] and may optionally be isolated from the packages in the base environment"](https://docs.python.org/3/library/venv.html).
Each venv will have its own set of Python packages, indepedent from the the main Python installation.

It allows us to avoid this (from [xkcd-1987](https://xkcd.com/1987/)):

![](https://imgs.xkcd.com/comics/python_environment_2x.png){ width="400" }



## How to create and use a venv

Nothing needs to be installed, venv are builtin Python.

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


## How to create a venv with PyCharm



## A venv manager: pyenv

Creating local folders in each different project is simple, but at some points you might forget what you've done and Python venv doesn't give you an overview.

We suggest to use [pyenv](https://github.com/pyenv/pyenv) (for macOS/Linux; for Windows use [pyenv-win](https://github.com/pyenv-win/pyenv-win)), which is a rather simple and very useful managers for virtual environments.
It lets your switch between venv, and you get an overview of the ones you have created (they are globally defined).

For macOS, to install pyenv: `brew install pyenv` (you need to have [Homebrew](https://brew.sh/) installed).

Some useful commands:

  - install a specific version of Python: `pyenv install 3.10.4`
  - make it global: `pyenv global 3.10.4`
  - create a new venv (based on the current global version): `penv virtualenv myenv1`
  - activate it: `penv activate myenv1`
  - deactivate it: `pyenv deactivate`

