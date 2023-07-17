
# Geogeek style guide

This page is intended as a reference for **styling conventions** used on the site to achieve consistency. The Markdown source can be used as snippets.

!!! tip ":simple-visualstudiocode: Visual Studio Code snippets"
    The repository contains snippet shortcut files for Visual Studio Code. On this page, if you see something starting with a backslash `\` it is the shortcut for placing that snippet.
    Make sure in Visual Studio code the following options are enabled:
    ```json
    "editor.quickSuggestions": {
        "other": "on",
    },
    "editor.inlineSuggest.enabled": true
    ```


### Keyboard shortcuts
Use the following styling: ++ctrl+alt+del++ `++ctrl+alt+del++`

When commands are different across operating systems use the following styles:

Inline: ++ctrl+alt+del++ (++cmd+option+del++ on MacOS) `++ctrl+alt+del++ (++cmd+option+del++ on MacOS)`

Tabs:
```markdown
=== ":simple-windows: :simple-linux: Windows & Linux"
    ++ctrl+alt+del++
=== ":simple-apple: MacOS"
    ++cmd+option+del++
```

=== ":simple-windows: :simple-linux: Windows & Linux"
    ++ctrl+alt+del++
=== ":simple-apple: MacOS"
    ++cmd+option+del++

### Code\Files
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


### Icons 
###### Languages
- :simple-python: Python: `:simple-python:` `\ipython`
- :simple-cplusplus: C++: `:simple-cplusplus:` `\icpp`
- :simple-html5: HTML: `:simple-html5:` `\ihtml`
- :simple-css3: CSS: `:simple-css3:` `\icss`
- :simple-javascript: Javascript: `:simple-javascript:` `\ijavascript`


###### OS
- :simple-windows: Windows: `:simple-windows:` `\iwindows`
- :simple-linux: Linux: `:simple-linux:` `\ilinux`
- :simple-apple: MacOS: `:simple-apple:` `\imacos`, `\iapple`

###### Computer
- :octicons-terminal-16: Terminal `:octicons-terminal-16:` `\iterminal`

###### Software
- :simple-pycharm: Pycharm `:simple-pycharm:` `\ipycharm`
- :simple-clion: CLion `:simple-clion:` `\iclion`
- :simple-visualstudiocode: Visual Studio Code `:simple-visualstudiocode:` `\ivscode`
- :simple-qgis: QGIS `:simple-qgis:` `\iqgis`
- :simple-arcgis: ArcGIS `:simple-arcgis:` `\iarcgis`

### Multiple instructions 
For example different operating system, different software, different programming language

#### Operating-system specific instructions
These should be split into content tabs with consistent tab naming. 

??? Markdown

    Since the website uses global tabs, only use the predefined names:

    - :simple-windows: Windows `:simple-windows: Windows` 
    - :simple-apple: MacOS `:simple-apple: MacOS` 
    - :simple-linux: Linux `:simple-linux: Linux` 
    - :simple-apple: :simple-linux: Unix (MacOS & Linux) `:simple-apple: :simple-linux: Unix (MacOS & Linux)` 
    - :simple-windows: :simple-linux: Windows & Linux `:simple-windows: :simple-linux: Windows & Linux` (Mainly used for shortcuts)

    Windows/MacOS/Linux. `\os_win_macos_linux`.

    ```md
    === ":simple-windows: Windows"

        Windows instructions here

    === ":simple-apple: MacOS"

        MacOS instructions here

    === ":simple-linux: Linux"

        Linux instructions here
    ```

    === ":simple-windows: Windows"

        Windows instructions here

    === ":simple-apple: MacOS"

        MacOS instructions here

    === ":simple-linux: Linux"

        Linux instructions here

    Windows/Unix. `\ow_win_unix`.

    ```md
    === ":simple-windows: Windows"

        Windows instructions here

    === ":simple-apple: :simple-linux: Unix (MacOS & Linux)"

        Linux instructions here
    ```

    === ":simple-windows: Windows"

        Windows instructions here

    === ":simple-apple: :simple-linux: Unix (MacOS & Linux)"

        Linux instructions here

    Windows&Linux/MacOS `\os_winlinux_macos`

    ```md
    === ":simple-windows: :simple-linux: Windows & Linux"
        
        Windows & Linux instructions here
        
    === ":simple-apple: MacOS"
        
        MacOS instructions here
        
    ```

    === ":simple-windows: :simple-linux: Windows & Linux"
        
        Windows & Linux instructions here
        
    === ":simple-apple: MacOS"
        
        MacOS instructions here

=== ":simple-windows: Windows"

    Windows instructions here

=== ":simple-apple: MacOS"

    MacOS instructions here

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
