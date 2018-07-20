# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.2.7] - 2018-07-20
### Changed
- IIPNET-93: Adjust gradient on featured image to fade more gradually

## [2.2.6] - 2018-07-16
### Added
- IIPNET-100: Display the category(ies) under the course title

### Changed
- Add/adjust conditions for rendering of lesson resources
- Adjust styling of instructors list

## [2.2.5] - 2018-06-15
### Changed
- Adjust glossary styling for better compatibility with YLAI

## [2.2.4] - 2018-06-14
### Changed
- Revert refactor certificate exit link

### Removed
- Unused variables

## [2.2.3] - 2018-06-14
### Changed
- Refactor certificate exit link

## [2.2.2] - 2018-06-11
### Changed
- Display the link for a transcript file only if it's available

### Fixed
- IIPNET-107: Add YouTube option to display correct language subtitle 

## [2.2.1] - 2018-05-31
### Fixed
- Add trailing `/` to webpack `output.publicPath`

## [2.2.0] - 2018-05-31
### Added
- Code splitting
- CSS modules

### Changed
- Update webpack configurations & build process
- Update all dependencies
- Refactor to ES6 `class` syntax

### Fixed
- Glossary bug where incorrect definition would display
- Course certificate bug where users were able to submit a quiz without checking the certify checkbox
