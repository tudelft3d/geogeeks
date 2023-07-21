
# Installing C++ libraries


=== ":simple-apple: MacOS"
    The easiest way to install external libraries on Mac is to use [Homebrew](https://brew.sh) (recommended), although it's quite easy to use an alternative like [MacPorts](https://www.macports.org) or to install them manually (follow the Linux or Unix instructions if there are none for Mac).

    An example to install CGAL with Homebrew:

    ```
    brew install cgal
    ```

    Another example with GDAL:

    ```
    brew install gdal
    ```

    If you're using an Apple Silicon (arm64) Mac, the paths used by Homebrew are: `/opt/homebrew/include` (for headers) and `/opt/homebrew/lib` (for libraries).

    If you're using an Intel (x86-64) Mac, the paths used by Homebrew are: `/usr/local/include` (for headers) and `/usr/local/lib` (for libraries).

=== ":simple-linux: Linux"
    TODO

=== ":simple-windows: Windows"
    TODO