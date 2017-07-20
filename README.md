# brackets
A tournament management single page web application that utilizes the MongoDB, Express, React, and Node (MERN) stack.

_WORK IN PROGRESS_

## how to install

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

#### preparing the MongoDB database
Before we get into cloning the repo and trying to run the app, we have to set up the database beforehand. The API server will attempt to connect to the database and if it cannot, it will not work! So this comes first, sorry!
