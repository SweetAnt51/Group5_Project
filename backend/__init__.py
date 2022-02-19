from flask import ( 
    Flask,
    render_template,
    request,
    send_from_directory,
    after_this_request,
    make_response,
    flash,
    jsonify)
import json

app = Flask(__name__)

# This is the main end point the web application will access by default
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register", methods=['POST'])
def register():
    registrationData = request.form

    fName = registrationData['fname']
    lName = registrationData['lname']
    email = registrationData['email']
    userName = registrationData['userName']
    password= registrationData['pw1']

    #validate values

    #Salt/Hash password here

    #Save to database

    returnObject = {
        'success' : True,
        'error' : None #if success is false, put error message to user here
    }

    return jsonify(returnObject)

@app.route("/login", methods=['POST'])
def login():
    username = request.form['username']
    pw = request.form['password']
    
    #call to database will go here to authenticate the user.
    
    #return this object to frontend with the correct fields.
    
    logInObject = {
        "authorized" : True, #should be false for failed login
        "role" : 'applicant', #should either be applicant, faculty, or chair
        "department" : None, #should be None for a applicant
        "approvedFaculty" : True, #once someone has approved the faculty members role this flag will be true in the database. Set to true for all applicants.
        "username" : username
    } 

    return jsonify(logInObject)

#this route will be called when a faculty member opens the dashboard.  It returns all applications in the database.
@app.route("/get_applications", methods=['GET'])
def get_application():
    
    #pulls sample data.  Will be replaced by call to database.
    with open('sampleData/applications.json') as json_file:
        apps = json.load(json_file)
    
    return jsonify(apps)

#this route will retrieve the comments for a specific applicant id number.
@app.route("/get_comments", methods=['POST'])
def get_comments():
    
    id_num = request.form['id']
    #pulls sample data.  Will be replaced by call to backend.
    with open('sampleData/comments.json') as json_file:
        comments = json.load(json_file)
        
    return jsonify(comments[id_num])

#runs the flask server if called directly.  debug = True allows for hot reloading.
if __name__ == "__main__":
    app.run(host='localhost', port=5000, debug=True)