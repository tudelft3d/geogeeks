## Why an alternative solution?

Using thrid-party libraries can sometimes not be very straightforward on `windows`, actually using [wsl on windows](https://github.com/tudelft3d/geogeek/blob/main/docs/c%2B%2B/wslclion.md)
is indeed a convenient way. However, during my practice some "disadvantages" have been found:

* **wsl will incrementally occupy system disk space**.
    
    **wsl** is installed on **C drive** by default, there are quite a lot blogs on the internet to show how to move your **wsl** to another drive, but usually it is not recommended to avoid possible issues.
    
    **wsl** is using [vhdx](https://www.techtarget.com/searchwindowsserver/definition/VHDX-Hyper-V-virtual-hard-disk), and usually your **wsl** corresponds to 
    a specific **ext4.vhdx** file, see [here](https://stackoverflow.com/questions/70946140/docker-desktop-wsl-ext4-vhdx-too-large) for an example.
    This file is auto-expanding (depending on your usage of your **wsl**), for example, in my practice it can take up to **14.6GB** space - only installed **C++ tool chain**, **vscode**,
    necessary packages in this tutorial [wsl on windows](https://github.com/tudelft3d/geogeek/blob/main/docs/c%2B%2B/wslclion.md) and one **C++ project**(well ... maybe it is not actually a small project).
    
    If you do not care about the disk space of **C drive**, it will probably be fine. But in this case I would recommend that your **C drive** should have at least **256GB** of space
    for **wsl**. It's the maximum auto-expanding size of **wsl** by default.
    
* **running project in wsl can be slow**

    It depends on the situation, but practically speaking, the more you use **wsl**, the slower the compilation speed and the running speed may be as the size of the occupied space increases.
    
    Another concern is about **gcc/g++** compiler, in some situations, it compiles slower than **MSVC(cl.exe)** on windows(for example in our practice **MSVC** compiles **CGAL** faster)
    
* **separately isolated file system**

    The file system of **wsl** is separated from **windows**, which means only if you have opened **wsl** from windows, the files in it can be accessed. This is sometimes not convenient.

## Using vcpkg and visual studio on windows

Considering the above disadvantages during the practice, another way might be useful for windows users and proven to work pretty well - **vcpkg**!

What is **vcpkg**? To be in short, vcpkg is a free **C/C++ package manager** for acquiring and managing libraries. Maintained by the **Microsoft C++ team** and **open source contributors**.

The **biggest advantage** is that it can be integrated with **IDE(e.g., Visual Studio)**, and **third-party libraries** installed through **vcpkg** can be included directly.

## install vcpkg

#### Step 1: Clone the vcpkg repo
```
git clone https://github.com/Microsoft/vcpkg.git
```
Make sure you are in the directory you want the tool installed to before doing this.
#### Step 2: Run the bootstrap script to build vcpkg
```
.\vcpkg\bootstrap-vcpkg.bat
```
#### Install libraries for your project
```
vcpkg install [packages to install]
```
#### Using vcpkg with MSBuild / Visual Studio (may require elevation)
```
vcpkg integrate install
```
After this, you can create a new project or open an existing one in the IDE. All installed libraries should already be discoverable by IntelliSense and usable in code without additional configuration.

For more detailed info, you can refer to [vcpkg - get started](https://vcpkg.io/en/getting-started.html)

## install CGAL

```
vcpkg install cgal
```

if you want to specify 64bit version:

```
vcpkg install cgal:x64-windows
```

## install GDAL

```
vcpkg install GDAL
```

**Notes:**

It would be more convenient if you use **Windows Powershell**. In **Powershell**, you can install libraries via:

```
PS path\to\vcpkg> .\vcpkg install [package name]
```

All in all, using **wsl** can make you familiar with the linux environment in advance - if you will use linux for development in the future.
While if you are using **windows** platform (as far as I know most of first year students are using it since the Geomatics suggests so), it might be a good idea
to use **vcpkg** and **MSVC**. 

And with regard to **vcpkg**, there is one very comprehensive video:

[vcpkg - C++ libraries simplified](https://www.youtube.com/watch?v=b7SdgK7Y510)

It explains how you download and build **vcpkg** and use it **step by step**.




  
