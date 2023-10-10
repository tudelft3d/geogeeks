# Intro to LaTeX


## LaTeX installation


### Online environment: Overleaf

[![](img/overleaf.png)](https://overleaf.com)

To start, we recommend you use the [online LaTeX environment Overleaf](https://www.overleaf.com) since it has a full installation of LaTeX and there is nothing to install.
If you login with your TUDelft email, you get extra features (TUDelft pays for it).

### Local installation

If you want to use LaTeX locally (it's faster to compile) then you need either:

  - [MiKTeX](http://miktex.org/about) :simple-windows: 
  - [MacTeX](https://tug.org/mactex) :simple-apple: 
  - [TeXLive](https://www.tug.org/texlive) :simple-linux:

You can also combine the best of both worlds (overleaf and local), by using either the [Git Integration](https://www.overleaf.com/learn/how-to/Git_integration) to treat your Overleaf project as a remote repository or by using [GitHub synchronisation](https://www.overleaf.com/learn/how-to/GitHub_Synchronization) linking your project to a GitHub repository. Check the recommendations for local editors below. 

!!! warning 

    For small documents Overleaf is great. But it becomes rather slow for medium to large documents, and then using LaTeX locally is probably a better idea.

    Beware that pushes from Git/GitHub can result in the loss or displacement of track changes and comments, so make sure you don't mix the two (and make your supervisors aware).



## Getting started

!!! external-link "Overleaf's getting started with LaTeX"

    The best is to follow the [Overleaf's Learn LaTeX in 30min](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes) to start.

    The only crucial thing missing from it is how to add references, for this we suggest you use "natbib" ([tutorial about bibliography management with natbib](https://www.overleaf.com/learn/latex/Bibliography_management_with_natbib)).


## Tips and tricks for LaTeX

:material-download-box-outline: [this simple demo](https://github.com/tudelft3d/latex-getting-started/tree/main/template) gives you tips and tricks to do most of the useful things in LaTeX.

Use it as the template for submitting your homeworks for instance.

!!! info

    LaTeX is great but there are often 37 ways to accomplish something... The template we give you shows you what we think is "the best to do X"


## Which software to use? 

### Editors (if you don't use Overleaf, or use Git/GitHub to edit your Overleaf project locally)

  - [TeXnicCenter](http://www.texniccenter.org) :material-open-source-initiative: :simple-windows: 
  - [TeXStudio](https://www.texstudio.org/) :material-open-source-initiative: :simple-linux: :simple-apple: :simple-windows:
  - [TeXshop](http://pages.uoregon.edu/koch/texshop/) :material-open-source-initiative: :simple-apple: (bundled with MacTeX)
  - [Visual Studio Code](https://code.visualstudio.com/) as generic editor with the [LaTeX Workshop plugin](https://github.com/James-Yu/LaTeX-Workshop) :material-open-source-initiative: :simple-linux: :simple-apple: :simple-windows:
  - [Texmaker](https://www.xm1math.net/texmaker/) :material-open-source-initiative: :simple-linux: :simple-apple: :simple-windows:
  - [Sublime Text](https://www.sublimetext.com) :material-open-source-initiative: :simple-linux: :simple-apple: :simple-windows: (TeX support can be added through [package control](https://packagecontrol.io) with the LaTeXTools package; also with package control you can get a nice linter called SublimeLinter with TeX support through SublimeLinter-chktex)

For some of these editors, you can also add local grammar/spell checking, e.g. [LTeX](https://marketplace.visualstudio.com/items?itemName=valentjn.vscode-ltex) for Visual Studio Code or [LanguageTool](https://packagecontrol.io/packages/LanguageTool) for Sublime Text.

### Managing references

  - [JabRef](http://jabref.sourceforge.net) :material-open-source-initiative: :simple-linux: :simple-apple: :simple-windows:
  - [Zotero](https://www.zotero.org/) :material-open-source-initiative: :simple-linux: :simple-apple: :simple-windows: :material-web: (integrations for Office and browsers; use a plugin like [better bibtex](https://retorque.re/zotero-better-bibtex/))
  - [Mendeley](https://www.mendeley.com/) :simple-linux: :simple-apple: :simple-windows: (integrations for Office and browsers; integrates with Overleaf professional accounts)
  - [BibDesk](https://bibdesk.sourceforge.io) :material-open-source-initiative:  :simple-apple:

### Drawing figures

  - [IPE](http://ipe.otfried.org/) :material-open-source-initiative: :simple-linux: :simple-apple: :simple-windows: (integrates LaTeX text; great for triangulation and geometric stuff)
  - [Affinity Designer](https://affinity.serif.com/es/designer/full-feature-list/)  :simple-apple: :simple-windows: (€€ but way less than Adobe)
  - [Inkscape](https://inkscape.org/en/) :material-open-source-initiative: :simple-linux: :simple-apple: :simple-windows:
  - Adobe Illustrator :simple-apple: :simple-windows:(nice, but €€€)

### Drawing flowcharts

  - [MathCha](https://www.mathcha.io/) :material-web:
  - [draw.io](https://www.draw.io/) :material-web:
  - [OmniGraffle](https://www.omnigroup.com/omnigraffle) :simple-apple: (nice, but €€€)

### Equation writers

  - Grapher :simple-apple: (graphical interface to write equations that offers the option to copy them as LaTeX expression)
  - LaTeXiT :simple-apple: (utility to write equations in LaTeX and export them for use in other software)
  - [Mathpix Snip](https://mathpix.com) :material-web: (many cool things with equations)

### Help to make tables

  - [Tables Generator](https://www.tablesgenerator.com/) :material-web: (LaTeX tables are tough to type and align, this helps greatly to start)# latex-getting-started
Quick LaTeX course
