### model your data in prisma schema
- in your `shema.prisma` file
```ts
model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime 
  title     String   @db.VarChar(255)
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}
model Profile {
  id     Int     @id @default(autoincrement())
  bio    String?
  user   User    @relation(fields: [userId], references: [id])
  userId Int     @unique
}
model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  posts   Post[]
  profile Profile?
}
```
### connect to your database URL
- in your prisma.schema file
```ts
datasourece db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```
> [!NOTE]
> - databse url format for sql and MariaDB is `"mysql://USER:PASSWORD@HOST:PORT/DATABASE"`
> - for postgres `"postgresql://admin:secret@localhost:5432/mydb?schema=public"`
> - for sqlite `"file:./path-to-your-database.db"`
> - for sqlserver (microsoft) `"sqlserver://USER:PASSWORD@HOST:PORT;database=DATABASE;schema=SCHEMA_NAME"`
> [!NOTE]
> the user of your database should have privileges to create databases

> `grant all privileges on *.* to 'userName'@'host';` this will just give him all pirvileges
## Code Sum
- look at the models above
```ts
datasourece db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```
```sql
grant all privileges on *.* to 'userName'@'host';
```