# DevBlogs-Recorem-
A basic blogging application where one could create their own accounts, post articles and like other people's articles. 
![image](https://user-images.githubusercontent.com/89394181/184876512-e03f1f4b-9bab-4098-a2c8-cced183ebba2.png)
![image](https://user-images.githubusercontent.com/89394181/184876000-60cf97fa-f336-4583-9135-0a6d565d5b6d.png)
![image](https://user-images.githubusercontent.com/89394181/184876102-2ab3a742-5482-4581-8ecf-3b4f5caa6d88.png)
![image](https://user-images.githubusercontent.com/89394181/184876185-79d483bb-2a80-4d36-862f-8bfd7df4bf1c.png)
![image](https://user-images.githubusercontent.com/89394181/184876266-98b40f9e-081d-482c-b967-e6b86c11bf59.png)

# How to install and run this project
* Clone the entire project to your local repository.
* There are two folders names 'client' and 'server' for the front-end and back-end respectively.
* Inside both of the directories enter the command 'npm install' to install all the required modules.
* You have to set environment variable files inside both the 'client' and 'server' folder. 
* First create a .env file inside 'client' and pass the following values.

  NEXT_PUBLIC_API_ENDPOINT=http://localhost:4000 OR THE API ENDPOINT YOU'RE USING.
  CLOUDINARY_URL=YOUR_CLOUDINARY_API_ENDPOINT
  
* Similarly create a .env file inside 'server' and pass the following values.

  PORT=4000 OR PORT IN WHICH YOU WANT TO RUN YOUR BACKEND IN
  CORS_ORIGIN=http://localhost:3000 OR THE PORT IN WHICH YOUR CLIENT IN RUNNING.
  JWT_SECRET=JSON_WEB_TOKEN_SECRET
  EXPIRES_IN=JSON_WEB_TOKEN_EXPIRY
  DB_CONNECTION_STRING=MONGO_DB_CONNECTION_URL
    
