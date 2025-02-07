
# A good Git repository

!!! note
    This list is inspired by the [JOSS review criteria](https://joss.readthedocs.io/en/latest/review_criteria.html#review-items) and by the [Data Carpentry project's reproducibility](https://github.com/datacarpentry/rr-intro/blob/gh-pages/checklist.md).

This lists all the important parts of a good Git repository, that is a repository that others will want to use/replicate/browse.
If you work alone with your own private repository, those tips are not necessary useful.
They are for the final code that will come with your MSc thesis.

## General
- [ ] The repository should be publicly available

## Documentation

- [ ] There should be a README file that indicates 
  
    - The purpose of the project, what the code is for,
    - Installation instructions
    - Example usage
    - API documentation (if this applies)

- [ ] The README should be a text file (`readme.md` or `readme.txt`), and not a binary file like Word
- [ ] There should be a [LICENSE file](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository). ([Help with choosing a license](https://choosealicense.com))
- [ ] There should be a [CITATION file](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-citation-files) that tells users how to site the project, data, and code
- [ ] A `changelog.md` detailing the changes between the releases should be available ([help with changelog](https://keepachangelog.com/en/))
- [ ] There should be clear guidelines for third-parties wishing to: (1) contribute to the software; (2) report issues or problems with the software; (3) seek support

## Organization

- [ ] Folders should be used to separate data, code, documentation, and results

    - It is the custom to put all source code in `/src`
    - And `/test` for unit tests
    - But each language will have different setups and habits
- [ ] The files should use a consistent naming scheme that indicates what they contain

## Files that should **not** be added to the repository

All files that are created by compiling/running code should **not** be added to the Git repository.

You can [configure you repository to ignore files](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files) (so that you don't see them as modified and not committed to the repository).

Examples of files to ignore:

  - `*.pyc` for Python 
  - `*.aux` for LaTeX
  - `*.pdf` for LaTeX
  - `/build` the whole build folder for C++

## Software

- [ ] There should be releases to package the software ([how to create a release](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases))
- [ ] Is a container available to run the project (eg [Docker](https://www.docker.com/))?
- [ ] Are unit tests available for the code?

## Data

- [ ] If your project has data: are they included or a link is provided?
- [ ] If data is not included, is this because it is not necessary or generated as part of the project?
- [ ] Are your raw data (if any) and processed data files separated?

## Others

- [ ] The code should be well documented
- [ ] Does the repository make use of continuous integration tools to ensure internal reproduciblity?
