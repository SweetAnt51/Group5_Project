# CEN6030 Group 5 Project

## Description
This is a flask web application that allows potential graduate students to apply for graduate school and allows faculty members to review and approve/deny the application.  Frontend is created/compiled in react and served through the flask server.

## Authors
Dan Snyder  
Jean Faustin  
Raymond Valdez   
Anthony Sweet  

## Backend Setup
To run the backend only:

### Install python requirements with:

***Note: you can avoid installing the dependencies by activating the included virtual environment***  

To activate the virtual environment:  
1. `cd backend`  
2. For Mac or Linux `source venv/bin/activate`    
For Windows: `.\venv\Scripts\activate`  

The virtual enviroment is now active and includes the required python packages.  

To deactivate type `deactivate` into the terminal/console.  

***If you do not want to use the virtual environment, you can install the dependencies with the steps below***  

From Home Directory:  
1. `cd backend`  
2. `pip install -r requirements.txt`  

## Running the Application

### Run Server:

From the backend directory:  
`python __init__.py`  

This will start the application and it will be available on your local machine at 127.0.0.1:5000 in your browser.  

## Dealing with the Frontend

### To install frontend requirements (only needed if developing the frontend):

From the Home Directory:  
1. `cd frontend`  
2. `npm install`  

This will install all the required node modules.

### Compile frontend and include in backend application:

The frontend folder is only for developing the frontend.  The application serves the frontend through the flask application in the backend folder. You will need to compile the frontend with npm and then move the files to appropriate folder.  

1. From the frontend directory:  
`npm run build`  

2. This will compile the frontend into the build folder.  Once complete move the following files and folders.  

3. Move "build/index.html" into "backend/templates" (replace the existing file if applicable)  

4. Move the "css", "js", and "media" folders from "build/static" to "backend/static". (replace the existing folders if applicable)  

Once this is complete you can restart the backend server and the new front end will be available.  


## Sample Data

Sample data is generated from the generateData.py file located in the backend directory.  Running this script will create 2 files in the "backend/sampleData" folder. The amount of records created can be changed by changing the numberOfRecords variable at the top of the script.  These resulting json files could also be used to populate the inital data base with test records.  

