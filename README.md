# Node.js Playground

This repo is my playground to tinker around with a few things:

- Node.js
- JavaScript
- Express
- MongoDB, a NoSQL database

<b>Node.js</b> is a tool written in C++, which basically wraps the V8 engine, just like web browsers, and lets us write code in JavaScript and share it between the front end and back end of our projects.

<b>Express</b> is a lightweight and flexible web application framework in JavaScript that simplifies building server-side applications and APIs with Node.js, handling routing and HTTP requests. 

<b>MongoDB</b> is a super flexible NoSQL database that is a great fit for certain types of applications where a traditional, structured database might not be the best choice. 

Node.js adds more features:

-  Read & write files on a computer
-  Connect to a database
-  Act as a server for content
-  Etc

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


