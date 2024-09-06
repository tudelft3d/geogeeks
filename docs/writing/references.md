
# References (BibTeX)


[BibTeX](https://en.wikipedia.org/wiki/BibTeX) is what LaTeX use, it's simple and just works.
Manually editing your `.bib` is probably a bad idea, we suggest you use a GUI that will help you create the entries and search your database.



## Software to manage references

  - [JabRef](http://jabref.sourceforge.net) :material-open-source-initiative: :simple-linux: :simple-apple: :material-microsoft-windows:
  - [Zotero](https://www.zotero.org/) :material-web: (integrations for Office and browsers; use a plugin like [better bibtex](https://retorque.re/zotero-better-bibtex/))
  - [Mendeley](https://www.mendeley.com/) :simple-linux: :simple-apple: :material-microsoft-windows: (integrations for Office and browsers; integrates with Overleaf professional accounts)
  - [BibDesk](https://bibdesk.sourceforge.io) :material-open-source-initiative:  :simple-apple:

!!! warning
    BibTeX will capitalise the titles automatically according to the [bibliography style (`*.bib`)](https://www.overleaf.com/learn/latex/Bibtex_bibliography_styles) you choose.
    This can be problematic for acronyms and many words (eg GIS, CityJSON, 3D, Delft Univeristy of Technology, etc.).
    You can control the capitalisation of those words by adding curly-brackets around those words, like in the following:
    ```tex
    @article{Guth21,
        author = {Elvis Presley and Tera M. Smith},
        title = {Point cloud and {ICESat-2} evaluation of {3D} datasets in {Delft}},
        journal = {Transactions in {GIS}},
        number = {2},
        pages = {245--261},
        volume = {15},
        year = {2011}
    }
    ```
    
## How to obtain well-formatted BibTeX entries? 



### Option #1: Paste a DOI

With BibDesk (and probably others) you can simply copy the [DOI](https://www.scribbr.com/citing-sources/what-is-a-doi/) and a new entry nicely formatted will be created (might need minimal manual work).

### Option #2: Use www.doi2bib.org

You could alternatively use [www.doi2bib.org](https://www.doi2bib.org) to obtain nicely formatted BibTeX entries.

### Option #3: Use ChatGPT

ChatGPT can also take the text of a reference in a PDF and BibTeX format it, see a simple example:

![](img/chatgpt.png)