
# geogeeks' style guide

This page is intended as a reference for **styling conventions** used on the site to achieve consistency. The Markdown source can be used as snippets.

!!! tip ":material-microsoft-visual-studio-code: Visual Studio Code snippets"
    The repository contains snippet shortcut files for Visual Studio Code. On this page, if you see something starting with a backslash `\` it is the shortcut for placing that snippet.
    Make sure in Visual Studio code the following options are enabled:
    ```json
    "editor.quickSuggestions": {
        "other": "on",
    },
    "editor.inlineSuggest.enabled": true
    ```


### Difficulty indication
To make it easier for readers to decide how deep they want to dive into a certain topic, it is good to divide the documentation into different difficulty levels. We do this with difficulty tags. Add this tag directly underneath the header of the section.

```<span class="tag beginner-tag">⭐️ Beginner</span>``` Shortcut: `\beginner`

<span class="tag beginner-tag">⭐️ Beginner</span>

```<span class="tag intermediate-tag">⭐️⭐️ Intermediate</span>``` Shortcut: `\intermediate`

<span class="tag intermediate-tag">⭐️⭐️ Intermediate</span> 

```<span class="tag advanced-tag">⭐️⭐️⭐️ Advanced</span>``` Shortcut: `\advanced`

<span class="tag advanced-tag">⭐️⭐️⭐️ Advanced</span>

If a topic covers multiple difficulty levels, indicate it as following:

```<span class="tag beginner-tag">⭐️ Beginner</span> - <span class="tag intermediate-tag">⭐️⭐️ Intermediate</span>```

<span class="tag beginner-tag">⭐️ Beginner</span> - <span class="tag intermediate-tag">⭐️⭐️ Intermediate</span>


### Keyboard shortcuts
Use the following styling: ++ctrl+alt+del++ `++ctrl+alt+del++`

When commands are different across operating systems use the following styles:

Inline: ++ctrl+alt+del++ (++cmd+option+del++ on macOS) `++ctrl+alt+del++ (++cmd+option+del++ on macOS)`

Tabs:
```markdown
=== ":material-microsoft-windows: :simple-linux: Windows & Linux"
    ++ctrl+alt+del++
=== ":simple-apple: macOS"
    ++cmd+option+del++
```

=== ":material-microsoft-windows: :simple-linux: Windows & Linux"
    ++ctrl+alt+del++
=== ":simple-apple: macOS"
    ++cmd+option+del++

### Code and Files
For inline code use inline code blocks like `Matrix::get_row` (Code surrounded by backticks `).

For multiline code, use multiline code blocks. Try to always state the language the code is in.

Code block without stated language:
??? markdown
    ```
     ```
     # code here
     ```
    ```
```
# Python code here
import numpy as np
```

Code block with stated language:
??? markdown
    ```
     ```python
     # code here
     ```
    ```
    
```python
# Python code here
import numpy as np
```

Filenames can be added to code blocks with the following syntax
??? markdown
    ```
     ```python title="myfile.py"
     # code here
     ```
    ```
```python title="myfile.py"
# code here
```

Annotations in code blocks. 

These are used to add extra information that would otherwise clutter the code block. For example libraries that need to be installed, links to other pages on the website, etc.

??? markdown
    The syntax works by placing a comment using the comment syntax of that specific language. Inside the comment place `(1)!` counting up from 1 for multiple annotations. Below the code block place a numbered list with the comments. The `!` exclamation mark also removes the comment character.
    ```md
     ```python
    import numpy as np
    import pandas as pd # (1)!
 
    data = np.array([2,3,4]) 
     ```

    1. Here you can write a comment about the code to further explain.
    ```

```python
import numpy as np
import pandas as pd # (1)!

data = np.array([2,3,4]) 
```

1. Here you can write a comment about the code to further explain. [Links](index.md) and other **markdown** features are possible here.

### Icons 
###### Languages
- :simple-python: Python: `:simple-python:` `\ipython`
- :simple-cplusplus: C++: `:simple-cplusplus:` `\icpp`
- :simple-html5: HTML: `:simple-html5:` `\ihtml`
- :simple-css3: CSS: `:simple-css3:` `\icss`
- :simple-javascript: Javascript: `:simple-javascript:` `\ijavascript`


###### OS
- :material-microsoft-windows: Windows: `:material-microsoft-windows:` `\iwindows`
- :simple-linux: Linux: `:simple-linux:` `\ilinux`
- :simple-apple: macOS: `:simple-apple:` `\imacos`, `\iapple`
- :material-web: www application: `:material-web:` 

###### Computer
- :octicons-terminal-16: Terminal `:octicons-terminal-16:` `\iterminal`

###### Software
- :simple-pycharm: Pycharm `:simple-pycharm:` `\ipycharm`
- :simple-clion: CLion `:simple-clion:` `\iclion`
- :material-microsoft-visual-studio-code: Visual Studio Code `:material-microsoft-visual-studio-code:` `\ivscode`
- :simple-qgis: QGIS `:simple-qgis:` `\iqgis`
- :simple-arcgis: ArcGIS `:simple-arcgis:` `\iarcgis`

### Multiple instructions 
For example different operating system, different software, different programming language

#### Operating-system specific instructions
These should be split into content tabs with consistent tab naming. 

??? Markdown

    Since the website uses global tabs, only use the predefined names:

    - :material-microsoft-windows: Windows `:material-microsoft-windows: Windows` 
    - :simple-apple: macOS `:simple-apple: macOS` 
    - :simple-linux: Linux `:simple-linux: Linux` 
    - :simple-apple: :simple-linux: Unix (macOS & Linux) `:simple-apple: :simple-linux: Unix (macOS & Linux)` 
    - :material-microsoft-windows: :simple-linux: Windows & Linux `:material-microsoft-windows: :simple-linux: Windows & Linux` (Mainly used for shortcuts)

    Windows/macOS/Linux. `\os_win_macos_linux`.

    ```md
    === ":material-microsoft-windows: Windows"

        Windows instructions here

    === ":simple-apple: macOS"

        macOS instructions here

    === ":simple-linux: Linux"

        Linux instructions here
    ```

    === ":material-microsoft-windows: Windows"

        Windows instructions here

    === ":simple-apple: macOS"

        macOS instructions here

    === ":simple-linux: Linux"

        Linux instructions here

    Windows/Unix. `\ow_win_unix`.

    ```md
    === ":material-microsoft-windows: Windows"

        Windows instructions here

    === ":simple-apple: :simple-linux: Unix (macOS & Linux)"

        Linux instructions here
    ```

    === ":material-microsoft-windows: Windows"

        Windows instructions here

    === ":simple-apple: :simple-linux: Unix (macOS & Linux)"

        Linux instructions here

    Windows&Linux/macOS `\os_winlinux_macos`

    ```md
    === ":material-microsoft-windows: :simple-linux: Windows & Linux"
        
        Windows & Linux instructions here
        
    === ":simple-apple: macOS"
        
        macOS instructions here
        
    ```

    === ":material-microsoft-windows: :simple-linux: Windows & Linux"
        
        Windows & Linux instructions here
        
    === ":simple-apple: macOS"
        
        macOS instructions here

=== ":material-microsoft-windows: Windows"

    Windows instructions here

=== ":simple-apple: macOS"

    macOS instructions here

=== ":simple-linux: Linux"

    Linux instructions here

#### Language-specific instructions
Split instructions/code for different languages into content tabs. You can use the snippets to achieve consistent naming.

??? Markdown

    - Python: `\pytab`
    - C++: `\cpptab`
    - More will be added
  
    ```markdown

    === ":simple-python: Python"
        
        ```py
        # some test code
        ```

    === ":simple-cplusplus: C++"
        
        ```cpp
        \\ Some test code
        ```
        

    ```


=== ":simple-python: Python"
    
    ```py
    # some test code
    ```

=== ":simple-cplusplus: C++"
    
    ```cpp
    \\ Some test code
    ```
    
### External links/embeds

#### Inline YouTube

On the page of the YouTube video, select "Share/Embed Video" and copy directly the code in the following template:

??? Markdown
    ```md
    !!! video "%TODO title here"
        <div style="display: flex; justify-content: center; padding-bottom: 1em;">
        %TODO Paste the code here
        </div>
        %TODO Write description
    ```
    Shortcut: `\video-embed`

    Then the markdown will look like this:
    ```md
    !!! video "%TODO title here"
        <div style="display: flex; justify-content: center; padding-bottom: 1em;">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        %TODO Write description
    ```

and you'll get this:

!!! video "%TODO title here"
    <div style="display: flex; justify-content: center; padding-bottom: 1em;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    %TODO Write description

#### External web pages/tutorials
Want to recommend an external web page that is not a video? Use the following admonition block:

??? Markdown
    ```md
    !!! external-link "Title of the external resource"
        Write your text here and add a link to the external resource
        using the [title](link to webpage) syntax.

        Make the title long, so the link is clearly visible. So instead of [title](link to webpage) you would write [The official GitHub tutorial](link to webpage).
    ```
!!! external-link "Title of the external resource"
    Write your text here and add a link to the external resource
    using the [title](https://geogeeks.tudelft.nl) syntax.

    Make the title long, so the link is clearly visible. So instead of [title](https://geogeeks.tudelft.nl) you would write [The official GitHub tutorial](https://geogeeks.tudelft.nl).

It's good to write a short text on why the resource is useful, and if possible give a difficulty tag. Also a screenshot of the web page can help.