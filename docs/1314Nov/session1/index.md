

# Session #1 support material/info

## Markdown

- exercise #1: [HTML page to replicate](md_result.html)
- exercise #2: convert your .md file to a PDF with [Pandoc](https://pandoc.org/) 


## LaTeX

### Exercises

  1. register on overleaf.com with your `@tudelft.nl email (for free goodies)
  1. start with the template just below here and discover/try some features. Notice that this won't compile correctly because of the reference on line 26: the file `myreferences.bib` should be in the same folder
  1. check this [demo template](https://github.com/tudelft3d/latex-getting-started/tree/main/template) to know the best way to make complex things (tables, code, etc.)
  1. try to replicate [this PDF](latex_result.pdf)


### A better starting template for simple LaTeX

```tex
\documentclass[a4paper,11pt]{scrartcl}

\usepackage{graphicx}
\usepackage[utf8]{inputenc} %-- pour utiliser des accents en français
\usepackage{amsmath,amssymb,amsthm} 
\usepackage[round]{natbib}
\usepackage{url}
\usepackage{mathpazo}
\usepackage{booktabs}
\usepackage{hyperref}

\title{My great title}
\author{Jan Smit\\ \url{j.smit@tudelft.nl}}
\date{\today}

\begin{document}

\maketitle

\section{Introduction}

Lemongrass frosted gingerbread bites banana bread orange crumbled lentils sweet potato black bean burrito green pepper springtime. 
Strawberry ginger lemongrass agave green tea smoky maple tempeh glaze enchiladas couscous. 
Cranberry spritzer Malaysian cinnamon pineapple salsa apples spring cherry bomb bananas blueberry pops scotch bonnet pepper.

Bento box roasted peanuts pasta Sicilian~\citep{DeVries20}.

\bibliographystyle{abbrvnat}
\bibliography{references.bib}

\end{document}
```

## The slides

are available [there](https//hugo.com)