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

@app.route("/get_data", methods=['POST'])
def get_data():
    
    print(request.form['test'])
    
    return jsonify({'test':'test'})

#this route will be called when a faculty member opens the dashboard.  It returns all applications in the database.
@app.route("/get_applications", methods=['GET'])
def get_application():
    
    #pulls sample data.  Will be replaced by call to backend.
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