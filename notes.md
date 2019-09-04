# Notes

## steps

- create repository
- clone repository
- cd into folder
- npm init -y
- npx gitignore node or npm i -g gitignore and then gitignore node.
- git add .
- git commit -m "message"
- git push -u origin master (-u is the same as --set-upstream)

When we do npm i axios, the axios package goes into the node_modules folder.

React applications are broken up into components.

Express APIs are broken up into Express Routers.

## client server architecture

[client] <network (JSON)> [api] <> [data sources]

## request / response cycle

1. client makes a request to a server
2. server produces a response and sends it to the client

[client] > request > [mw > mw > mw] > responds [client]

## Middleware

- can see the request and do something with the information from the request
- can stop the request and produce a response
- can do nothing
- can do the same with the response object
- **can modify the request or response objects**

three types.

- built-in: not need to npm install
- third party: need to install it using yarn or npm
- custom: we build it.

can be used:

- globally with server.use()
- locally at a request handler.
