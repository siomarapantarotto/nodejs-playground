# Node.js Playground

This repo is my playground to tinker around with a few things:

- Node.js
- JavaScript
- Express
- MongoDB, a NoSQL database

<b>Node.js</b> is a tool written in C++, which basically wraps the V8 engine, just like web browsers, and lets us write code in JavaScript and share it between the front end and back end of our projects.

<b>Express</b> is a lightweight and flexible web application framework in JavaScript that simplifies building server-side applications and APIs with Node.js, handling routing and HTTP requests. 

<b>MongoDB</b> is a super flexible NoSQL database that is a great fit for certain types of applications where a traditional, structured database might not be the best choice. 

Node.js features:

- <b>File System Interaction</b>: Node.js enables reading from and writing to files on a computer. It provides convenient APIs for managing file operations, allowing you to manipulate, create, read, and write files seamlessly.
- <b>Database Connectivity</b>: Node.js facilitates connecting to databases. It offers various database drivers and libraries that allow you to interact with popular databases like MySQL, PostgreSQL, MongoDB, and more. This empowers you to perform database operations, such as querying, inserting, updating, and deleting data, directly from your Node.js applications.
- <b>Server Capabilities</b>: Node.js can serve as a powerful server for content delivery. It allows you to create web servers and handle HTTP requests and responses efficiently. You can build web applications, APIs, or serve static files with ease, making Node.js an excellent choice for server-side development.
- <b>Networking</b>: Node.js allows you to create networking applications such as web servers, chat servers, real-time applications, and more. Its event-driven architecture and non-blocking I/O make it well-suited for handling concurrent connections and providing efficient network communication.
- <b>Package Management</b>: Node.js has a robust package ecosystem called npm (Node Package Manager) that allows developers to easily find, install, and manage dependencies for their projects. It provides access to thousands of reusable libraries and modules, accelerating development and fostering code reuse.
- <b>Command-line Tools</b>: Node.js can be used to create command-line tools and scripts, making it a versatile platform for automation, build processes, and system administration tasks. It provides a rich set of APIs and tools to interact with the file system, execute commands, parse command-line arguments, and more.
- <b>Real-time Applications</b>: With the help of libraries like Socket.IO, Node.js excels in building real-time applications such as chat applications, collaboration tools, and multiplayer games. Its event-driven nature enables efficient bidirectional communication between clients and servers.
- <b>Streaming</b>: Node.js supports streaming, which allows for efficient processing of large data sets by consuming and producing data in small chunks. This is especially useful for handling file uploads and downloads, processing large datasets, and working with media content.
- <b>Scalability</b>: Node.js is known for its scalability due to its non-blocking, event-driven architecture. It can handle a large number of concurrent connections with relatively low resource usage, making it suitable for building highly scalable applications that can handle heavy loads.

## Content

- How to install or update Node.js and use it to run JavaScript
- How to check installation or update
- How to start Node on cmd terminal
- How to end Node on cmd terminal
- How to open VSCode directly from Node terminal
- How to run a java script file on VSCode terminal
- How to use Node Gobal object methods

<!--
- How to read and write files on the computer
- How to create a server using Node.js to create a website
- How to create an Express app / website
- How to use the NoSQL database MongoDB
- How to use template engines to create HTML views
- How to put everything together to make a simple blog site
-->

## Install or update Node.js

https://nodejs.org/en

## Check installation or update

C:\Users\me>node -v

v18.16.0

If you updated the version, close cmd, open it again and check if the new version was installed successfully.

## Start Node on cmd terminal

C:\Users\me>node

Welcome to Node.js v18.16.0.

Type ".help" for more information.
>
> 5 + 5
> 
10
>
> var name = 'John'
> 
undefined
> name
> 
'John'

## End Node on cmd terminal

Type ^C twice
>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
>
C:\Users\me>

## Open VS Code directly from the cmd terminal

Open cdm window, cd to the project folder and type 'code .' as follow:

>C:\>D:

D:\>cd Workspace_NodeJS

D:\Workspace_NodeJS>mkdir nodejs-playground

D:\Workspace_NodeJS>dir

<DIR>          .

<DIR>          nodejs-playground

               2 pasta(s)   857.655.164.928 bytes disponíveis

D:\Workspace_NodeJS>cd nodejs-playground

D:\Workspace_NodeJS\nodejs-playground>code .

[main 2023-06-20T21:37:38.339Z] [SharedProcess] using utility process
[main 2023-06-20T21:37:38.454Z] update#setState idle
[main 2023-06-20T21:37:39.271Z] [UtilityProcess id: 1, type: extensionHost, pid: ]: creating new [...]

## Run a java script file on VSCode terminal

Menu: Terminal > New Terminal

Make sure you are in the correct directory where the file exists

D:\Workspace_NodeJS\nodejs-playground>node file-name

## Node.js Gobal object

Open a site inside of a browser

More tools > Developer tools or Ctrl + Shift + I

Type 'window' + ENTER and scroll down to see all the methods available

Inside the browser 'window' is the global object. However, inside Nodejs it is not 'window' but 'global.

<p>
  <img src="https://github.com/siomarapantarotto/nodejs-playground/assets/5893219/d4efc220-73b1-4cb2-a510-fda4c74fccbc" />
</p>


