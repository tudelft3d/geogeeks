# Python
Python is a programming language that's easy to read, write, and understand. It's used a lot in Geomatics because:

- **Quick to write:** When making scripts for data analysis, most of the time you care a lot about how fast you can *write* the code and not too much about how fast the code will *run*. Python is very quick to *write*.
- **Many libraries:** There are many so-called "libraries" made for Python and they're easy to install. These libraries contain code other people wrote, so you don't have to code everything yourself. For example, if you want to open a shapefile, someone made a library for that! See [our list of useful libraries for Geomatics](/python/pypackages).
- **Open source, free, very popular:** Python is free for anyone to use, and its code is open source. There is lots of help out there on the internet, as it's one of the most popular programming languages worldwide. It's an industry standard in many Geomatics companies.

### Installing Python
For Python code to run, you need a program called "the Python interpreter" (or more commonly "Python"). Often it's already installed on your computer, but we recommend against using the pre-installed Python.
??? warning "(Optional) Why you should not use pre-installed Python"
    Sometimes there will already be a version of Python installed on your computer. Here are the main reasons you don't want to use this version:
    
    - This Python is used by your operating system. If it somehow gets broken, other software on your computer depending on it might not work anymore and it will be very difficult to repair.
    - This Python is usually an older version, sometimes even Python 2. Code written for a newer version of Python might not run or give errors.

So what to do instead? We recommend installing and managing Python using "pyenv". Pyenv is a tool that allows you to *install* multiple versions of Python, and *select* which specific version is *active*.

[This guide shows you how to install Python using pyenv.](/python/install)

### Python FAQ
!!! question "When should I use Python for my project? (Over something like C++)"
    Short answer: If you want to write code quickly, use lots of libraries, and speed isn't crucial. 
    
    Long answer: See [How to choose a programming language](/programming/chooselanguage).

### Learning Python
%% TODO

### Other useful Python Resources
- We've made a list of a bunch of [useful Python packages for Geomatics](/python/pypackages)