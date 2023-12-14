# Compiled systems programming languages

You've chosen a compiled (systems) programming language! Below you will find some examples with their pros and cons for geomatics.

## Languages

??? info "C++"
    [Website](https://cppreference.com/)

    **Pros:**
    
    - Performance: As a compiled language, C++ offers high performance and efficiency, crucial for handling large geospatial datasets and intensive computations.
    - Control over Memory: It provides control over system resources, including memory management, crucial for dealing with large amounts of complex data.
    - Library Ecosystem: C++ has libraries for graphics, data processing, and even some geospatial-specific libraries. These libraries are very powerful.

    **Cons:**

    - Complexity: C++ has a steep learning curve due to its complexity and many features. It can be very difficult to debug.
    - Verbose and Less Readable Code: Compared to higher-level languages like Python, C++ code can be more verbose and less readable, which might slow down development.
    - Manual Memory Management ("Unsafe"): While it offers control, manual memory management can cause errors and unpredictable things happening.

#### Optionally

??? info "C"
    [Website](https://en.wikipedia.org/wiki/C_(programming_language))

    Pros:
    - High Performance: Just like C++, C is very fast.
    - Efficient Memory Usage: C provides direct control over hardware and memory usage, allowing for efficient handling of resources.
    - Simple language: While C is not easy, it is *simple*. C doesn't have a lot of features, so you can learn the functionality quite quickly. 
  
    **Cons:**

    - "Unsafe": Just like C++, you can make mistakes in handling memories which can cause many issues.
    - Difficult: Writing and maintaining C code can be complex and time-consuming. The language is simple (not many features), but difficult (hard to use those features correctly).
    - Lack of Built-In Geomatics Features: C doesn't natively support geomatics functionalities, requiring more effort to implement complex geospatial algorithms.
    - Potential for Errors: With great control comes the increased risk of bugs, such as memory leaks. C has even more possibilities for errors than C++.

??? info "Rust"
    [Website](https://www.rust-lang.org)

    **Pros:**

    - Performance with Safety: Rust offers performance comparable to C++, but with a focus on safety, particularly memory safety, making it much less likely to have big memory problems.
    - Modern Language Features: Rust is quite a young language with modern features that make it more approachable than older languages like C and C++.
    - Easier multi-threading: Because of its safety features, you can quickly set up computations that run on multiple cores. 

    **Cons:**

    - Smaller Ecosystem: Rust has a smaller ecosystem compared to C++ and Python, particularly in the domain of geomatics libraries.
    - Steeper Learning Curve: Rust's way of handling memory is very safe, but also difficult to learn and master.
    - Limited Legacy Support: For projects that need to integrate with existing geospatial systems or legacy code, Rust's newer status might cause challenges.

