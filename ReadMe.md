# README FOR CLASS PROJECT

## Authors
Dan Snyder  
Jean Faustin  
Raymond Valdez   
Anthony Sweet  

## Installation
To run the backend only:

### Install python requirements with:

From Home Directory:
`cd backend`  
`pip install -r requirements.txt`  

## Running the Application

### Run Server:
`python __init__.py`  

This will start the application and it will be available on your local machine at 127.0.0.1:5000 in your browser.  

## Dealing with the Frontend

### To install frontend requirements (only needed if developing the frontend):

From the Home Directory:
`cd frontend`  
`npm install`  

This will install all the required node modules.

### Compile frontend and include in backend application:

The frontend folder is only for developing the frontend.  The application serves the frontend through the flask application in the backend folder. You will need to compile the frontend with npm and then move the files to appropriate folder.  

From the frontend directory:  
`npm run build`  

This will compile the frontend into the build folder.  Once complete move the following files and folders.  

Move "build/index.html" into "backend/templates" (replace the existing file if applicable)  

Move the "css", "js", and "media" folders from "build/static" to "backend/static". (replace the existing folders if applicable)  

Once this is complete you can restart the backend server and the new front end will be available.  


## Sample Data

Sample data is generated from the generateData.py file located in the backend directory.  Running this script will create 2 files in the "backend/sampleData" folder. The amount of records created can be changed by changing the numberOfRecords variable at the top of the script.  These resulting json files could also be used to populate the inital data base with test records.  

