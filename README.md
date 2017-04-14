# brackets
Manage a tournament with a straightforward UI that aims to remove all the tediousness of managing such a thing.

# how?
Firstly, by using MongoDB to store data. Data can be summed up in two collections, users and brackets.

Node+Express to serve it up, making use of Express' advantages for SPAs and interaction with Mongoose and implementing a RESTful API.

React will be the front. No Redux yet!

Webpack to bundle it up. Trying to take advantage of it's "get-your-bundle-as-small-as-physically-possible" abilities.

NPM scripts are used as the build processes, check those out to see what I'm doing.

I'm using the Standard linting rules for esLint with the addition of the react ruleset. But word on the street is that Prettier is very promising and it's on my backlog to migrate (it has a --no-semi flag now).

Still early in development!
