## Branch `main`

### Introduction

This is a branch for all codes in the Graduation Thesis for Tuan Anh Bui Le, a senior student from the Faculty of
Information Technology - Vietnam National University of Ho Chi Minh City, University of Science.

### Project Structure

```
.
└── anthony2708/
    ├── .github/
    │   ├── ISSUE_TEMPLATE/ # All templates for issues
    │   ├── workflows/ # All workflows for Github Actions
    │   └── bitbucket-pipelines.yml # Bitbucket Pipelines configuration file for the Graduation Thesis
    │   └── CODE_OF_CONDUCT.md # Code of Conduct file
    │   └── CONTRIBUTING.md # Contributing file
    │   └── dependabot.yml # Dependabot configuration file
    ├── app/ # All files for the Graduation Thesis
    │   ├── aws/ # All files for the webapp
    │   ├── includes/ # All files for the states management
    │   └── scripts/ # All files for the automation scripts
    │   └── Readme.md/ # This file
    ├── assets/ # All files for references (not used for Graduation Thesis)
    │   ├── else/
    │   ├── THPTQG/
    ├── .gitignore # Git ignore file
    ├── web/ # All files for the official webapp
    ├── docs/ # All files for the development webapp (formerly built as a part of the Graduation Thesis)
    ├── LICENSE # License file
    └── Readme.md # The introduction file
```

### Notices

Before working with this repository, please make sure that you have installed all the
dependencies with latest versions. To check if anything is not working,
run this script **at the root folder of this repository**:

```bash
bash app/scripts/dependencies.sh
```
