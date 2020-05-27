from flask import Flask , render_template , request , Response
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from database.db import init_db
from database.models import Pokemon , User
from resources.auth import auth
from resources.pokemon import pokemon
from random import randint


app = Flask(__name__)
app.config.from_json('env.json')

bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# @jwt.unauthorized_loader
# def my_unauthorized_loader(f):
#     print(f)
#     return {
#         'msg' : str(f)
#     }

# @jwt.invalid_token_loader
# def my_invalid_token_loader_cb():
#     return {
#         'msg' : 'sorry :/'
#     }

app.config["MONGODB_SETTINGS"] = {
    'host' : 'mongodb://localhost/pokedoro-api-alpha'
}

app.register_blueprint(auth)
app.register_blueprint(pokemon)
init_db(app)

@app.route('/')
def index():
    return render_template("index.html" , token=str(19**3))




app.run(debug=True)