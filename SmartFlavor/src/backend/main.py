from flask import Flask, jsonify, request, redirect
from flask_pymongo import PyMongo


app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/SmartFlavor"
mongo = PyMongo(app)

@app.route('/')
def root():
    return  "root"

@app.route('/create_post', methods = ["POST"])
def create_post():
    data = request.get_json()
    description = data.get('description')
    id_post = data.get('id_post')
    id_user = data.get('id_user')
    ingredients = data.get('ingredients')
    num_likes = data.get('num_likes', 0)
    url_post = data.get('url_post')
    post_date = data.get('post_date')
    new_post = {
            "description": description,
            "id_post": id_post,
            "id_user": id_user,
            "ingredients": ingredients,
            "num_likes": int(num_likes),
            "url_post": url_post,
            "post_date": post_date,
        }
    mongo.db.Posts.insert_one(new_post)
    return jsonify(data)

@app.route('/posts', methods =["GET"])
def posts():
    posts = mongo.db.Posts.find()
    results = []
    for post in posts:
        results.append({'id_post':post['id_post'], 'url_post': post['url_post'], 'description': post['description'], 'ingredients': post['ingredients'], 'post_date': post['post_date'], 'id_user': post['id_user'], 'num_likes': post['num_likes']})
    return jsonify(results)

@app.route('/posts/<id_post>', methods = ["DELETE"])
def delete_post(id_post):
    mongo.db.Posts.find_one_and_delete({'id_post': id_post})
    return redirect("/posts")

@app.route("/posts/<id_post>", methods = ['GET'])
def get_post(id_post):
    post = mongo.db.Posts.find_one({'id_post': id_post})
    result = []
    if post:
        result.append({'id_post':post['id_post'], 'url_post': post['url_post'], 'description': post['description'], 'ingredients': post['ingredients'], 'post_date': post['post_date'], 'id_user': post['id_user'], 'num_likes': post['num_likes']})

        return jsonify(result)
    else:
        return jsonify(message="No encontrado")
    

@app.route("/users", methods = ["GET"])
def users():
    users = mongo.db.Users.find()
    results = []
    for user in users:
        results.append({'id_user': user['id_user'], 'name': user['name'], 'description': user['description'], 'email': user['email']}) 
    return jsonify(results)

@app.route("/users/<id_user>", methods = ['GET'])
def get_user(id_user):
    user = mongo.db.Users.find_one({'id_user': id_user})
    result = []
    if user:
        result.append({'id_user':user['id_user'], 'name': user['name'], 'description': user['description'] ,'phone_number': user['phone_number'], 'saved_post': user['saved_post'], 'upload_posts': user['upload_posts']})

        return jsonify(result)
    else:
        return jsonify(message="No encontrado")

@app.route("/users/create_user", methods = ["POST"])
def create_user():
    data = request.get_json()
    id_user = data.get('id_user')
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    phone_number = data.get('phone_number')
    description = data.get('description')
    new_user = {
            "description": description,
            "id_user": id_user,
            "name": name,
            "email": email,
            "password": password,
            "phone_number": phone_number,
            "saved_post": [],
            "upload_posts": [],
            "followers": [],
            "following": []
        }
    mongo.db.Users.insert_one(new_user)
    return jsonify(data)

@app.route("/comments", methods = ["GET"])
def comments():
    comments = mongo.db.Comments.find()
    results = []
    for comment in comments:
        results.append({'id_comment': comment['id_comment'], 'description': comment['description'],  'date': comment['date']}) 
    return jsonify(results)

@app.route('/posts/<id_post>/comments', methods = ['GET'])
def post_comments(id_post):
    comments = mongo.db.Comments.find({'id_post': id_post})
    results= []
    if comments:
        for comment in comments:
            results.append({'id_comment': comment['id_comment'], 'description': comment['description'],  'date': comment['date']}) 
        return jsonify(results)
    else:
        return jsonify(message="No encontrado")
    
@app.route('/posts/<id_post>/comments', methods = ["POST"])
def create_comment(id_post):
    data = request.get_json()
    comment_description = data.get('description')
    comment_user = data.get('id_user')
    comment_date = data.get('date')
    comment_id = data.get('id_comment')
    new_comment = {
            "description": comment_description,
            "id_comment": comment_id,
            "id_user": comment_user,
            "id_post": id_post,
            "num_likes": 0,
            "date": comment_date
        }
    mongo.db.Comments.insert_one(new_comment)
    return jsonify(data)
    
@app.route("/reports", methods = ["GET"])
def reports():
    reports = mongo.db.Reports.find()
    results = []
    for report in reports:
        results.append({'id_report': report['id_report'], 'description': report['description'], 'id_user': report['id_user'], 'id_post': report['id_post']}) 
    return jsonify(results)

@app.route("/reports/<id_report>", methods = ["GET"])
def get_report(id_report):
    report = mongo.db.Reports.find_one({'id_report': id_report})
    result = []
    if report:
        result.append({
                'id_report': report['id_report'],
                'description': report['description'], 
                'id_user': report['id_user'], 
                'id_post': report['id_post'], 
                'date': report['date'], 
                'status':report['status']
            })

        return jsonify(result)
    else:
        return jsonify(message="No encontrado")
    
@app.route("/reports/<id_report>", methods = ["PUT"])
def update_report(id_report):
    data = request.get_json()
    status = data.get('status')
    updated_report = mongo.db.Reports.find_one_and_update(
            {"id_report": id_report},  # Filtro para encontrar el documento
            {
                "$set": {
                    "status": status,
                    
                }
            },
            return_document=True  # Devuelve el documento actualizado
        )
    if updated_report is None:
            return jsonify({"error": "Post no encontrado"}), 404

    # Convertir ObjectId a string para el JSON de respuesta
    updated_report['_id'] = str(updated_report['_id'])

    return jsonify({"message": "Post actualizado con éxito", "post": updated_report}), 200

 



if __name__ == "__main__":
    app.run(debug = True)