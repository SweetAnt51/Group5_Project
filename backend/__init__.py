from flask import ( 
    Flask,
    render_template,
    request,
    send_from_directory,
    after_this_request,
    make_response,
    flash,
    jsonify)

app = Flask(__name__)

# This is the main end point the web application will access by default
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get_data", methods=['POST'])
def get_data():
   
    print(request.form['test'])
    
    return jsonify({'test':'test'})

#runs the flask server if called directly.  debug = True allows for hot reloading.
if __name__ == "__main__":
    app.run(host='localhost', port=5000, debug=True)