### package.json
- it is npm's configuration file
- it is a json file that typically lives in the root directory of your package and holds various metadata relevant to the package
- it is the central place to configure and describe how to interact with and run you package
- primarily used by the npm cli

### create your own custom package
```bash
mkdir my-custom-package
touch index.js # code is here
touch package.json
```
```json
// package.json
{
    // name and version fields are mandatory
    // it must be one word, in lower case and may contains hyphen or underscore
    "name": "package-name",
    // version fromat X.X.X
    "version": "1.0.0",
    // use to search and describe packages in npm registry
    "description": "mostafaAbokhadra package",
    // keywords helps to find your package when someone is searching for them
    "keywords": [
        "mostafa",
        "abokhadra",
        "abokhadraPackage"
    ],
    // the entry point of the project
    "main": "index.js"
}
```
- you don't have to create package.json manually, instead use npm to initialize a project with package.json
```bash
npm init
# or
npm init --yes # to use default setting
```