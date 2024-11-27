Both **npx** and **npm** are tools in the Node.js ecosystem, but they serve different purposes. Here's a breakdown of the differences between them:

### 1. **npm (Node Package Manager)**:
- **Primary Function**: It is used to **install**, **manage**, and **run** packages.
- **How it's used**:
  - **Install packages**: You can install packages locally or globally using `npm install` or `npm i`. 
  - **Run installed scripts**: You can run scripts defined in the `package.json` file with `npm run <script-name>`.
  - **Package management**: `npm` manages the `node_modules` folder and `package.json`, where all dependencies for a project are listed.

- **Common Commands**:
  - `npm install` or `npm i`: Install all dependencies listed in `package.json`.
  - `npm install <package-name>`: Install a specific package.
  - `npm uninstall <package-name>`: Remove a specific package.

### 2. **npx (Node Package Executor)**:
- **Primary Function**: It is used to **execute** binaries from **npm packages** without installing them globally.
- **How it's used**:
  - **Run local or temporary commands**: You can use `npx` to execute a package without needing to install it globally, or even without installing it locally beforehand. This is useful for running one-off commands or testing packages without installing them permanently.
  - **Run commands from installed packages**: It can also be used to execute binaries from packages that are installed locally in `node_modules`, without the need for a globally installed version.
  
- **Common Use Cases**:
  - **One-time command execution**: For example, you can run `npx create-react-app my-app` to execute the `create-react-app` package without installing it globally.
  - **Running package binaries**: If a package has a binary and it is installed locally, `npx` can find and run it without the need for you to modify your `PATH`.

### Key Differences:
- **Installation**: 
  - `npm` installs and manages packages.
  - `npx` executes packages without needing to install them globally.
  
- **Global vs Local**:
  - With `npm`, you may need to install some packages globally to run their commands (e.g., `npm install -g <package>`).
  - With `npx`, you don’t need to install the package globally; you can run it directly from the internet or from the local `node_modules`.

- **Use Case**:
  - `npm` is ideal for **managing dependencies** in a project over the long term.
  - `npx` is great for **one-time use** commands or when you don’t want to pollute your global environment with unnecessary packages.

### Example:

1. **Using npm**:
   - `npm install typescript -g`: This installs TypeScript globally, allowing you to run `tsc` commands.
   - After installation, you can use `tsc` from anywhere on your system.

2. **Using npx**:
   - `npx typescript --version`: This will execute the `typescript` package without requiring you to install it globally. If it's not installed locally, it fetches and runs the latest version directly.