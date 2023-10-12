
# Installing C++ libraries

=== ":simple-apple: macOS"
    The easiest way to install external libraries on macOS is to use [Homebrew](https://brew.sh) (recommended), although you could install them manually (follow the Linux or Unix instructions if there are none for Mac).

    An example to install [CGAL](https://www.cgal.org) with Homebrew:

    ```
    brew install eigen
    brew install cgal
    ```

    Another example with [GDAL](https://gdal.org/):

    ```
    brew install gdal
    ```

    If you're using an Apple Silicon (arm64) Mac, the paths used by Homebrew are: `/opt/homebrew/include` (for headers) and `/opt/homebrew/lib` (for libraries).

    If you're using an Intel (x86-64) Mac, the paths used by Homebrew are: `/usr/local/include` (for headers) and `/usr/local/lib` (for libraries).

=== ":simple-linux: Linux"
    The easiest way to install external libraries on Linux is to use `apt` (recommended).

    An example to install [CGAL](https://www.cgal.org):

    ```
    sudo apt install libeigen3-dev
    sudo apt-get install libcgal-dev
    ```

    Another example with [GDAL](https://gdal.org/):

    ```
    sudo add-apt-repository ppa:ubuntugis/ppa 
    sudo apt update
    sudo apt install gdal-bin libgdal-dev
    ```

=== ":simple-windows: Windows"
    TODO