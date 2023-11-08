

# Session 4: geo-Python (Jupyter, Numpy, GeoPandas, Matplotlib)

Instructors: Lukas Beuster & Gina Stavropoulou


# Requirements: 

A computer with Python3.8 or higher.


# Getting Started:

You will need to use your [terminal](../../computer/terminal.md) on Linux/macOS, or your PowerShell on Windows. 

## Clone the repo (or use GitHub Desktop)

```bash
git clone https://github.com/GinaStavropoulou/geogeek-workshop.git
cd geogeek-workshop
```

## Create a new venv

Use either [pyenv](../../python/venv.md) or the following commands:

=== ":simple-apple: macOS + :simple-linux: Linux"
  
    Create a virtual environment:
    ```
    python -m venv .venv
    ```
    Activate the environment 
    ```bash
    source .venv/bin/activate
    ```

=== ":simple-windows: Windows"

    Create a virtual environment:
    ```
    python -m venv .venv
    ```
    Activate the environment 
    ```bash
    .venv\Scripts\Activate.ps1
    ```


## Install the requirements:
```bash
pip install -r requirements.txt
```

### Then get started with:

```bash
jupyter lab
```

This will open jupyter lab on your browser. You can choose the notebook of Exercise 0 to start with. 