# brackets
A tournament management single page web application that utilizes the MongoDB, Express, React, and Node (MERN) stack.

_WORK IN PROGRESS_

## how to install

**NOTE** _In order to work with the API you will need MongoDB installed and set up beforehand which is explained below._

## Step One
### before cloning the repository:

#### Node and NPM
Node is a Javascript runtime that is built on Google's V8 JS engine and NPM is Node's package manager ecosystem.

These are the versions of Node and NPM I am using:

`node -v` // 8.1.3

`npm -v` // 5.3.0

_should be the latest versions_

If you don't have Node and NPM installed, please visit [the official download page](https://nodejs.org/en/download/).

Or if you're on MacOS and have Homebrew set up:
`brew install node` (if not, you should visit this article on [Treehouse](http://blog.teamtreehouse.com/install-node-js-npm-mac))

Run `node -v` and `npm -v` to double check if both were installed after running `brew install node`.

#### MongoDB
MongoDB is the most widely used document database, otherwise referred to as a NoSQL or non-relational database.

MongoDB can be installed easily via Homebrew with:

`brew install mongodb`

For non Mac/Homebrew users, please visit [their installation instruction page for your appropriate OS](https://docs.mongodb.com/manual/administration/install-community/).

To make sure MongoDB installed correctly, try running

`mongo --version`

You should get output similar to
```
MongoDB shell version v3.4.3
git version: f07437fb5a6cca07c10bafa78365456eb1d6d5e1
OpenSSL version: OpenSSL 1.0.2k  26 Jan 2017
allocator: system
modules: none
build environment:
    distarch: x86_64
    target_arch: x86_64
```
And to make sure the daemon installed correctly, try running

`mongod --version`

Which should output something like:
```
db version v3.4.3
git version: f07437fb5a6cca07c10bafa78365456eb1d6d5e1
OpenSSL version: OpenSSL 1.0.2k  26 Jan 2017
allocator: system
modules: none
build environment:
    distarch: x86_64
    target_arch: x86_64
```

#### test connection to mongod
Open two new terminal windows. In the first window run the command `mongod`.

Once that process has started and you see `[thread1] waiting for connections on port 27017`, go in your second terminal window and enter the command `mongo`.

This will launch the [mongo shell](https://docs.mongodb.com/manual/mongo/) and connect it to your `mongod` process. You may see warnings such as `** WARNING: Access control is not enabled for the database.` and `** Read and write access to data and configuration is unrestricted.` but don't worry we will be fixing that.

#### preparing the MongoDB database
Now that we can connect to mongod via the mongo shell, we can prepare our database!

Before we create our Brackets database, we'll need to create our Admin database so that you can control read/write access.
