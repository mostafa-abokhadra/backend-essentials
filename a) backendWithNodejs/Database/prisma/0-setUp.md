### prisma
- is a next-generation Node.js and TypeScript ORM 
- It covers data **modeling**, **migrations** and **querying** a database.
1. **initialize typescript project**
```bash
npm init -y
npm install typescript ts-node @types/node --save-dev
```
- **@types/node**: This package provides TypeScript definitions for Node.js, helping TypeScript understand Node.js' built-in modules like `fs`, `http`, `path`, etc.
- **ts-node**: This is a TypeScript execution engine for Node.js, allowing you to run TypeScript directly without needing to compile it into JavaScript first. 
- **typescript**: The TypeScript compiler itself.
2. **initialize typescript**
```bash
npx tsc --init
```
### **install prisma**
```bash
npm install prisma --save-dev
```
4. **set up Prisma ORM with the init command of the Prisma CLI**
```bash
npx prisma init 
```
- this command creates a new directory called prisma that contains a file called schema.prisma, which contains the Prisma schema with your database connection variable and schema models
- also creates the `.env` file in the root directory of the project, which is used for defining environment variables (such as your database connection)
## Code Sum
```bash
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init
npm install prisma --save-dev
npx prisma init
```