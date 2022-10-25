
# Writing LaTeX with other people

!!! note

    This is taken from [*The Rules for happily collaborating on a LaTeX document*©](https://3d.bk.tudelft.nl/hledoux/blog/rules-happy-latex/)

The 10 rules you should follow if you're writing a LaTeX documents with other people.


### 1. You shall use only one sentence per line

And use one empty line to start a new paragraph.
It'll then be easier to track changes in Git, since these are line-based.

```tex
I like to create buffers in ArcGIS.
But it is not always possible as it often crashes.

Also, ...
```


### 2. You shall use natbib for citations

and the commands `\citet{}` (cite in the text as a noun) `\citep{}` (cite between parentheses). 

```tex
\usepackage[round]{natbib}
...
\citet{Smith00} succeeded in creating a buffer.
However, it has been shown that it is not an easy task~\citep{Brown90}.
```


### 3. You shall prevent breaking lines with "~" when referencing and citing

```tex
In Section~\ref{sec:intro}, we can observe that the buffer was a success~\citep{Smith99}.
```


### 4. You shall use one `-` for an hyphen, two `--` for a range between numbers, and three `---` for a punctuation in a sentence

```tex
I like---unlike my father---to build multi-dimensional models, 
especially those made in 1990--1995.
```


### 5. You shall give meaningful labels
A figure's label should start with `fig:` and a section's label with `sec:`

```tex
\section{Introduction}  
\label{sec:intro}

In recent years, buffers have been rather complex to implement because ...
```


### 6. You shall put a short space after e.g. and i.e. with the use of a backslash

The following two commands shall thus be used:

```tex
\newcommand{\ie}{i.e.}
\newcommand{\eg}{e.g.}
...
Buffers can be generated on different geometries, \eg\ points, polylines and polygons.
```


### 7. You shall put all figures/graphs in a single subfolder (`figs/`)

And you shall put the source file (eg [IPE](http://ipe7.sourceforge.net), OmniGraffle, Illustrator, etc.) there as well for future use.

You can then use this to specify the relative path for all figures (it refers to the figure `./figs/potato.pdf`):

```tex
\graphicspath{{figs/}}

\includegraphics[width=0.95\linewidth]{potato.pdf}
```

### 8. In your BibTeX file, you shall use curly brackets for words/letters you want to have capitalised in the title

The other fields are not affected by this. LaTeX does this to uniformise the capitalisation in all citations.

```tex
@article{Smith00,
  Author = {Smith, John},
  Journal = {The GIS Journal},
  Title = {The {3D} {CityGML} building was constructed with the {Delaunay} triangulation},
  Year = {2001},
  ...
}
```


### 9. You shall not add any commands to change the format until the the paper is finished

`\vspace` and `\newpage` are thus forbidden.


### 10. You shall declare all sizes relative to `\linewidth`.

So that the paper can be switched to a 2-column one without (too much) pain.

```tex
\includegraphics[width=0.95\linewidth]{potato.pdf}
```
