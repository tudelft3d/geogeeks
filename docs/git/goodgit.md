
# A good Git repository

!!! note
    This list is inspired by the [JOSS review criteria](https://joss.readthedocs.io/en/latest/review_criteria.html#review-items) and by the [Data Carpentry project's reproducibility](https://github.com/datacarpentry/rr-intro/blob/gh-pages/checklist.md).


## General
- [ ] the repository should be publicly available


## Documentation

- [ ] there should be a README file that indicates 
  
  - [ ] the purpose of the project, what the code is for,
  - [ ] installation instructions
  - [ ] example usage
  - [ ] aPI documentation (if this applies)

- [ ] the README should be a text file (and not a binary file like Word)
- [ ] there should be a [LICENSE file](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository). [Help with choosing a license](https://choosealicense.com).
- [ ] there should be a [CITATION file](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-citation-files) that tells users how to site the project, data, and code
- [ ] a `changelog.md` detailing the changes between the releases should be available ([help with changelog](https://keepachangelog.com/en/1.0.0/))
- [ ] there should be clear guidelines for third-parties wishing to: (1) contribute to the software; (2) report issues or problems with the software; (3) seek support


## Organization

- [ ] folders should be used to separate data, code, documentation, and results
- [ ] the files should use a consistent naming scheme that indicates what they contain


## Software

- [ ] there should be releases to package the software ([how to create a release](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases))
- [ ] is a container available to run the proiect (eg [Docker](https://www.docker.com/))?
- [ ] are unit tests available for the code?


## Data

- [ ] if you project has data: are they included or a link is provided?
- [ ] ff data is not included, is this because it is not necessary or generated as part of the project?
- [ ] are your raw data (if any) and processed data files separated?


## Others

- [ ] the code should be well documented
- [ ] Does the repository make use of continuous integration tools to insure internal reproduciblity?



