# Udagram REST API

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:

1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
   A basic Ionic client web application which consumes the RestAPI Backend.
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service.
3. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images.

---

## Getting Setup

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:

```bash
npm install
```

> _tip_: **npm i** is shorthand for **npm install**

### Installing useful tools

#### 1. [Postbird](https://github.com/paxa/postbird)

Postbird is a useful client GUI (graphical user interface) to interact with our provisioned Postgres database. We can establish a remote connection and complete actions like viewing data and changing schema (tables, columns, ect).

#### 2. [Postman](https://www.getpostman.com/downloads/)

Postman is a useful tool to issue and save requests. Postman can create GET, PUT, POST, etc. requests complete with bodies. It can also be used to test endpoints automatically. We've included a collection (`./udacity-c2-restapi.postman_collection.json `) which contains example requsts.

---

## Running the Server Locally

To run the server locally in developer mode, open terminal and run:

```bash
npm run dev
```

Developer mode runs off the TypeScript source. Any saves will reset the server and run the latest version of the codebase.

## Hints

- Remember to update launch.json with environment variables, so you can run and debug it locally. Example below. More info at [1]

```
    {
      "version": "0.2.0",
      "configurations": [
        {
          "type": "node",
          "request": "launch",
          "name": "Launch Program",
          "program": "${workspaceFolder}/src/server.ts",
          "outFiles": ["${workspaceFolder}/www/**/*.js"],
          "env": {
            "POSTGRES_USERNAME": "<YOUR_VALUE>",
            "POSTGRES_PASSWORD": "<YOUR_VALUE>",
            "POSTGRES_DATABASE": "<YOUR_VALUE>",
            "POSTGRES_HOST": "<YOUR_VALUE>",
            "AWS_REGION": "<YOUR_VALUE>",
            "AWS_PROFILE": "<YOUR_VALUE>",
            "AWS_MEDIA_BUCKET": "<YOUR_VALUE>",
            "JWT_SECRET": "<YOUR_VALUE>"
          }
        }
      ]
    }
```

## Troubleshooting

1. Sequelize migration does not work, no logs are generated. How to resolve? Update pg version using npm install --save pg@latest. Reference: https://stackoverflow.com/a/65874373/6771132

1. How to make server.app from wwww be executed by default by EB? Use Proffile. Reference: https://stackoverflow.com/a/65773148/6771132

## References

1. [How do I add environment variables to launch.json in VSCode](https://stackoverflow.com/a/45426595/6771132)
