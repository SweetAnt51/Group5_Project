import json
import random

numberOfRecords = 150

icons = ["📬", "📝", "❌", "✅"]
status = ["submitted", "in review", "rejected", "accepted"]
first = ["Michael", "Dwight", "Angela", "Kevin", "Pam", "Meridth", "Jim", "Oscar", "Gabe", "Erin"]
last = ["Scott", "Schrute", "Martin", "Halpert", "Palmer", "Martinez", "Lewis"]
major = ["Computer Science", "English", "Math", "Art", "Sports Marketing", "Culinary Arts", "Computer Engineering", "Accounting"]
submitDate = ["2020-02-01", "2020-02-08", "2020-02-15", "2020-02-20", "2020-02-05", "2020-02-22", "2020-02-28", "2020-02-18", "2020-02-03", "2020-02-12"]

applications = []
id = 0
for i in range(0,numberOfRecords):
    stat = random.randint(0, len(status) - 1)
    line = {
        "id": str(id),
        "status": status[stat],
        "title": first[random.randint(0, len(first) - 1)] + " " + last[random.randint(0, len(last) - 1)],
        "app_id": "Application Number " + str(id),
        "major" : major[random.randint(0, len(major) - 1)],
        "submit_date" : submitDate[random.randint(0, len(submitDate) - 1)]
    }
    id += 1
    applications.append(line)

with open('sampleData/applications.json', 'w') as outfile:
    json.dump(applications, outfile)

comments = {}
users = ['anthony', 'raymond', 'jean', 'dan']
sampleComment = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
for i in applications:
    commentArray = []
    for j in range(0, random.randint(1, 5)):
        comment = sampleComment[0: random.randint(20, 100)]
        commentArray.append({ 'comment' : comment,
                               'commenter' :  users[random.randint(0, len(users) - 1)]})    
    comments[i['id']] = commentArray

with open('sampleData/comments.json', 'w') as outfile:
    json.dump(comments, outfile)

