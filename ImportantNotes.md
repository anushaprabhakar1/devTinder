* In package.json:
--In versions, ~ means, update the any 4.19.x version but not any minor or major versions.
--In versions, ^ means, update the any 4.x.x version but not any major versions.
--In scripts, mentioned start and dev go through it:
  - in start I kept "node src/app.js" means in terminal i can run "npm run start", but need to stop and run whenever new changes are done.
  - in dev I kept "nodemon src/app.js" means in terminal i can run "npm run dev", no need to stop and run whenever new changes are done, it'll update automatically, but install "npm i -g nodemon" to use it.

* package-lock.json:
--package-lock.json contains actual versions of dependencies, because in package.json versions may change.

* node_modules
--These contains the whatever libraries we install from npm and its dependies also.
--Whenever we install any library, as per it's package.json its dependencies also downloaded and kept inside it.

* .gitignore
-- Whatever the paths mentioned in this file will be ignored from the uploading that folder or file to git repo.

* Routes
-- While creating the routes, order is very important.
-- If you send "/" first and send any route like "/test", "/login" those will not work, only "/" will be considered.

* * * * * * * * 
* Creating server, connecting to DB and creating schema and model:

* Create server using Express and connect to DB using mongoose library.
  >> create config folder inside src, then create database.js in config folder.
  >> go through the code in that file.

* Always listen to server only after connecting to DB, otherwise user may hit API but if DB not connected it'll throw error.

* Creating schema and model
  >> create models inside scr, then create user.js (schema for user collection)
  >> export model and use it in API to post, get or put, delete operations.
  >> In MongoDB always follows like Cluster >> Database >> Collection >> Documents