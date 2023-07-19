# Node.js Playground

This repo is my playground to tinker around with a few things:

- Node.js
- JavaScript
<!--
- Express
- MongoDB, a NoSQL database
-->

<b>Node.js</b> is a tool written in C++, which basically wraps the V8 engine, just like web browsers, and lets us write code in JavaScript and share it between the front end and back end of our projects.

<!--
<b>Express</b> is a lightweight and flexible web application framework in JavaScript that simplifies building server-side applications and APIs with Node.js, handling routing and HTTP requests. 

<b>MongoDB</b> is a super flexible NoSQL database that is a great fit for certain types of applications where a traditional, structured database might not be the best choice. 
-->
## Node.js features

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

- Install or update Node.js and use it to run JavaScript
- Check Node installation or update
- Start & End Node on cmd terminal
- Open VSCode directly from Node terminal
- Run a java script file on VSCode terminal
- Node Gobal Object with properties, functions, and objects
- Modules and require to import files
- File System module to work with files and directories
- Streams & Buffers to consume data before it has finished loading
- Clients & Servers
- NPM - Node Package Manager

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

## Start & End Node on cmd terminal

### Start
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

### End

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

## Node Gobal Object with properties, functions, and objects

The Global object refers to the <b>global scope object that represents the top-level scope of a Node.js module or application</b>. It serves as the <b>container for various global properties, functions, and objects that are available throughout the entire runtime of a Node.js application</b>.

The global object in Node.js provides access to several important properties and functions, including: 

- <b>global.console</b>: Provides access to the console object for logging and debugging purposes. It includes methods like log(), error(), warn(), etc.

- <b>global.process</b>: Represents the Node.js process and provides information and control over the current process. It includes properties and methods like argv (command-line arguments), env (environment variables), cwd() (current working directory), exit() (exit the process), etc.

- <b>global.setTimeout and global.setInterval</b>: Functions used for scheduling tasks to be executed after a specified delay or at regular intervals, respectively.

- <b>global.require</b>: A function used to import and use modules in Node.js. It is similar to the require function available within individual modules.

- <b>global.Buffer</b>: A constructor function provided by Node.js to create and manipulate binary data buffers.

- <b>global.__filename and global.__dirname</b>: Constants that provide the path and directory name of the current module.
  
The properties and functions available on the global object in Node.js are <b>accessible without explicitly referencing 'global.'</b> because they are automatically added to the global scope by Node.js.

It's considered <b>good practice to avoid using the global object extensively</b>. Instead use the appropriate module system and local variables within individual modules. Using the global scope excessively <b>can lead to potential conflicts and make code harder to maintain and test</b>.

Unlike the browser environment, where the global scope is represented by the <b>window object</b>, Node.js uses the <b>global object</b> to provide a similar functionality.

- Open any site inside of a browser
- On the 3 dots, choose More tools > Developer tools or Ctrl + Shift + I
- Type 'window' + ENTER and scroll down to see all that is available

<p>
  <img src="https://github.com/siomarapantarotto/nodejs-playground/assets/5893219/d4efc220-73b1-4cb2-a510-fda4c74fccbc" />
</p>

## Modules and require to import files

TODO
## File System module to work with files and directories

TODO
## Streams & Buffers to consume data before it has finished loading
TODO

## Clients & Servers
TODO

## NPM - Node Package Manager

https://npmjs.com

It is automatically installed when Node is installed. It is a tool to install,
update and remove Node packages onto the computer directly or to individual projects.

### Installing globally:

npm install -g <package-name>

- nodemon: automatically restarts the node application when file changes in the directory are detected. Does not require any additional changes to the code or method of development. It is a replacement wrapper for node. Usage: replace the word node on the command line when executing the script.

package.json File - keeps track of any packages that are added to the projectand other things too.

D:\Workspace_NodeJS\nodejs-playground\nodejs-server> npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejs-server)
version: (1.0.0)                                                                                                                                                  
description:                                                                                                                                                   
entry point: (server.js)                                                                                                                                          
test command:                                                                                                                                                     
git repository:                                                                                                                                                   
keywords:                                                                                                                                                       
author:                                                                                                                                                         
license: (ISC)                                                                                                                                                    
About to write to D:\Workspace_NodeJS\nodejs-playground\nodejs-server\package.json:

{
  "name": "nodejs-server",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "",
  "license": "ISC"
}

Is this OK? (yes)

### Installing packages locally

node_modules folder is created with all local packages

.gitignore file avoid uploading to GitHub all the local packages

When cloning this repo, don't forget to run '' to create node_modules folder and avoid enpm installrror
