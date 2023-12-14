# What is more important?
[Program runs faster, but coding takes longer](./compiled/){.md-button}

Choose this option if the processing speed of your project is crucial, even if it takes a while longer to write the code. You want your code to run absolutely as fast as possible, and you want control over things like memory (RAM). These languages (compiled languages) usually require more time and expertise in coding, debugging, and optimization to achieve this speed. 

### Examples of where speed and control is crucial:
- Analyzing/editing huge amounts of data: This might make the difference between 5 minutes or 5 hours to do a complex analysis on a pointcloud with a 100 million points. Or it makes the difference between 20GB and 2GB of memory (RAM) usage on your computer. If the data does not fit in your RAM, the program get's even slower.
- Real-time processing: In a video, each frame last just a few miliseconds. Do you want to process these frames in real time (so just a few miliseconds for millions of pixels)? Then speed is definitely crucial. 

---

[Program runs slower, but coding is faster](./interpreted/){.md-button}

Select this if speed is important but not crucial for your project and you don't need control over memory (RAM). Don't worry, these languages (interpreted languages) are not slow, they are just not as fast as the ones mentioned above. They offer a balance between having decent speed and being very easy and quick to write and read. The wide availability of libraries for almost anything makes it even faster to write your code.

### Examples of the speed or a "slower" language like Python:
- Do `4+4` a million times: Less than a millisecond
- Count the number of times the letter `e` occurs in a text with a million words: Less than a millisecond
- Generate a text of a million words, each consisting of 1-10 random letters: A few seconds
- Process a CSV file with 10 million lines: Between a few seconds and a few minutes

!!! info "How to decide on what speed you need?"
    You can do the following trick to decide what language to use when it comes to speed:

    Let's say you're writing code to analyze a dataset. Writing the code in Python would take 2 hours, writing the code in C++ would take 5 hours. In Python the code takes 1 minute to run and in C++ it takes 1 second. You will only run the code a few times on the full dataset, so in total spending hours more on coding only saves you a few minutes.

    In another example, you're making an algorithm for analyzing point clouds. Writing the code in Python would take 5 hours, in C++ it might even take 20 hours. The algorithm takes 10 milliseconds per point in Python, and 1 millisecond per point in C++. The code is going to be reused for lots of point clouds. If 10 people use the algorithm 10 times, each on a pointcloud of 1 million points, that's 2700 hours of runtime on Python and 270 hours of runtime in C++. In this case, you save over thousands hours of runtime by spending 15 more hours coding. 

    Of course, you don't know the exactly how long it will take you to code and how fast the code will run. Here are some rough and arbitrary estimates:

    - Speed of writing code: It can be 2 to 5 times slower to write code in a compiled language (like C++) compared with an interpreted language (like Python).
    - Runtime speed: Compiled code can be in a range of 2 to 50 times faster than interpreted code.
 
!!! info "How to decide if memory usage is important?"
    First of all, usually you don't need to think about RAM if you're writing scripts for data analysis and processing. 
    
    Once you start talking about 10s of millions, it becomes a different story:

    - 3D model consisting of 10s millions of vertices
    - Excel/csv file with 10s of millions of rows

    A Python list with a 100 million integers takes about 3 GB of RAM.
    A C++ vector with a 100 million integers takes about 0.3 GB of RAM.

    BUT....there is a trick. Python has libraries that allow you to store data in the same way compiled languages store data. For example there is [Numpy](https://numpy.org), which can store and process arrays (similar to lists) of integers, floats, and booleans. Many libraries use a compiled language behind the scenes to lower their memory usage.

    A Numpy array with a 100 million integers ALSO takes only about 0.3 GB of RAM, just like C++.

    These libraries only work with simple datatypes though, if you are making you want to store millions of instances of your own class there is no way around the higher memory usage of Python.

    So, if speed is crucial you're choosing a compiled language. If speed is not crucial, but your data is so big that it might not fit in your computers memory, you can use a compiled language or you can use Python libraries that use a compiled language behind the scenes.