
# LaTeX Figures, tables, and flowcharts


## Figures

!!! important
    Make sure your figures are **vector** when possible, and __not__ raster. 
    This will make them of greater quality, especially for text.
    
    Vector formats: PDF, SVG.

    Raster formats: PNG, JPG, JPEG, GIF.

    ![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bitmap_VS_SVG.svg/580px-Bitmap_VS_SVG.svg.png){:width="400px"}

Best vector graphics drawing tools:

  - [Affinity Designer](https://affinity.serif.com/es/designer/full-feature-list/)  :simple-apple: :simple-windows: (€€ but way less than Adobe)
  - [Inkscape](https://inkscape.org/en/) :material-open-source-initiative: :simple-linux: :simple-apple: :simple-windows:
  - [IPE](http://ipe.otfried.org/) :material-open-source-initiative: :simple-linux: :simple-apple: :simple-windows: (integrates LaTeX text; great for triangulation and geometric stuff)
  - Adobe Illustrator :simple-apple: :simple-windows: (nice, but €€€)


## Tables 

Tables are notoriously difficult to make in LaTeX.

!!! tip 
    [LaTeX package booktabs](https://nhigham.com/2019/11/19/better-latex-tables-with-booktabs/) is strongly recommended!

    ```tex
    The package \texttt{booktabs} permits you to make nicer tables than the basic ones in \LaTeX.
    See for instance \autoref{tab:example}.

    \usepackage{booktabs}
    ...
    \begin{table}
      \centering
      \begin{tabular}{@{}lrrcrrc@{}} \toprule
        & \multicolumn{2}{c}{3D model} && \multicolumn{2}{c}{input} \\
        \cmidrule{2-3}  \cmidrule{5-6} 
        & solids & faces && vertices & constraints  \\ 
        \toprule
        \textbf{campus}  & 370   & 4~298  && 5~970  & 3~976   \\
        \textbf{kvz}     & 637   & 6~549  && 8~951  & 13~571  \\
        \textbf{engelen} & 1~629 & 15~870 && 23~732 & 15~868 \\ 
        \bottomrule
       \end{tabular}
      \caption{Details concerning the datasets used for the experiments.}%
    \label{tab:example}
    \end{table}
    ```


## Flowcharts

![](./fc.svg)

  - [draw.io](https://app.diagrams.net) :material-web: (free, simple, all you probably need)
  - [OmniGraffle](https://www.omnigroup.com/omnigraffle) :simple-apple: (nice, but €€€)
