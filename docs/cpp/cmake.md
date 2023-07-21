

[CMake](https://cmake.org) is a cross-platform software for building, installing, and testing C++ code (other languages are supported though). 
It does not actually compile the code, but generate a `Makefile` that can then be used to compile the source code.

CMake can also thus be used to generate a project file, eg in CLion.


## Installing CMake

=== ":simple-apple: MacOS"

    `brew install cmake`

=== ":simple-linux: Linux"

    `apt install cmake`

=== ":simple-windows: Windows"

    TODO


## CMake with the console

If you have a folder in which there is a `CMakeLists.txt` file (this [simple repository](https://github.com/hugoledoux/demo_cmake) shows ones example), follow those steps:

=== ":simple-apple: :simple-linux: Unix (MacOS & Linux)"

    ```bash
    mkdir build
    cd build
    cmake ..
    make
    ./demo_cmake
    ```

Notice that we create a new folder `/build` so that all the temporary compilation files are not in the same folder, all created files will go in that one folder (which can be safely deleted).
The step `cmake ..` means that the `CMakeLists.txt` file is located in the parent folder, its output is a `Makefile` file which allows us to compile the code (and build the binary `demo_cmake`).

=== ":simple-windows: Windows"

    TODO


## CMake with CLion

1. In CLion, create a new project (File > New Project) or click on New Project on the Welcome screen.

2. Set the language to C++ and the type as executable. 

3. Select the root folder location (where you want to store the project) and select the language standard. For the latter, note that CGAL requires C++14 or higher.

These steps will create a new CMake-based project in CLion, which will include a minimal `main.cpp` file for your code and a `CMakeLists.txt` for the compilation/linking instructions.

## Making sense of your CMakeLists.txt file

The `CMakeLists.txt` file that was created by CLion contains four commands:

1. `cmake_minimum_required`, which specifies the minimum required CMake version to compile your project;

2. `project`, which specifies the name of your project;

3. `set`, which sets a variable called `CMAKE_CXX_STANDARD` to whatever C++ version you specified as the minimum for your project;

4. `add_executable`, which creates a new compilation target with the same name as your project and adds the `main.cpp` so that it's compiled

## Modifying your CMakeLists.txt file to add external libraries

Anything in the C++ standard library should work after merely including a header in your `main.cpp`. No changes to the `CMakeLists.txt` required. For example, if you want to use [`std::cout` and its `<<` operator](https://www.cplusplus.com/reference/ostream/ostream/operator%3C%3C/), you just need include `iostream` in the `main.cpp`:

```cpp
#include <iostream> 
```

However, if you need to use an external library (eg CGAL or GDAL), you will first need to add some commands to your `CMakeLists.txt` for compilation and linking. Every library is different, but the process usually starts by calling a script that finds the library. An example using CGAL:

```
find_package( CGAL REQUIRED )
```

The `REQUIRED` keyword is optional, but it makes CMake generate an error if CGAL is not found. Here's another example asking for GDAL version 3.0 and higher:

```
find_package( GDAL 3.0 )
```

These `find_package` commands set a number of variables with the required paths and also set some compilation targets. For a lot of libraries, this command is followed by the `include_directories`, which tells CMake to consider the folders where the library's header files (`.h` or `.hpp`) are stored. For example, with GDAL it is:

```
include_directories( ${GDAL_INCLUDE_DIR} )
```

There, `GDAL_INCLUDE_DIR` is a variable that was set by `find_package`. Finally, for most libraries, linking to them is also necessary. An example with GDAL:

```
target_link_libraries(PROJECT_NAME ${GDAL_LIBRARY} )
```

Where `GDAL_LIBRARY` is also a variable that was set by `find_package`. CGAL is a bit different, since `find_package(CGAL)` actually sets a target `CGAL::CGAL` that you should link to. Because of that, you should use something like this:

```
target_link_libraries(PROJECT_NAME CGAL::CGAL)
```

## CMake and vcpkg

If you use `vcpkg`, you probably want to use Visual Studio or the Visual Studio toolchain in CLion.

However, if for some reason you prefer to use CMake, note that the libraries installed using `vcpkg` are installed in the Windows filesystem, not the Linux one of WSL. Therefore, CMake can have trouble finding them.

For some libraries, like CGAL, you can modify the `find_package` command to give it a hint of a path to search for:

```
find_package(CGAL PATHS "C:/Program Files (x86)/CGAL")
```

For some other libraries, like Boost, you'll have to set the required variables manually:

```
set(BOOST_ROOT "C:/dev/boost")
```

## A sample CMake file for CGAL

```
cmake_minimum_required(VERSION 3.1)
project(PROJECT_NAME)
set(CMAKE_CXX_STANDARD 14)
find_package(CGAL)
add_executable(PROJECT_NAME main.cpp)
target_link_libraries(PROJECT_NAME CGAL::CGAL)
```