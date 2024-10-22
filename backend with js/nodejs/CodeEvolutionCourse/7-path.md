# path
- it provide utilitis for working with file and directory paths
```js
const path = require("node:path");
```
### path.basename
- will print only the last portion of the file path (current file name only)
```js
console.log(path.basename(__filename)) 
path.basename(__dirname)
```
### path.extname
- returns the extension name e:g <mark>.js</mark>
```js
path.extname(__filename)
```
### path.parse
- returns object who's properities represents significant elements of the path
```js
path.parse(__filename)
// output
// {
//     root: 
//     dir:
//     base:
//     ext:
//     name:
// }
```

### path.format
- it takes 1 object parameter (the path as in path.parse output) and convert it to a string path
```js
path.format(path.parse(__filename))
```

### path.isAbosolute
- returns if a path is absolute or not
```js
path.isAbsolute(__filename)
```

### path.join
- joins all path segements together using the platform specific separatro as a delimiter and normalizing the resulting path
- accept one or more strings as arguments
```js
path.join("folder1", "folder2", "index.html")
// folder1/folder2/index.html
path.join("/folder1", "folder2", "index.html")
// /folder1/folder2/index.html (it normalizes the results)
path.join("/folder1", "//folder2", "index.html")
// folder1/folder2/index.html (it normalizes the results)
path.join("/folder1", "folder2", "../index.html")
// folder1/index.html (it normalizes the results)
```
> [!TIP]
> `path.join(__dirname, "filename")`
> this will get you the absolute pathname of a file

### path.resolve
- not that important (read about it)
