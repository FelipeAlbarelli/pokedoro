from flask import Blueprint , request , Response
from database.models import User
from flask_jwt_extended import create_access_token
import datetime

auth = Blueprint('auth' , __name__)


@auth.route('/api/auth/login' , methods=["POST"])
def login():
    body = request.get_json()
    user = User.objects.get(email = body.get('email'))
    authorized = user.check_password(body.get('password'))
    if not authorized:
        return {'error' : "Email or password invalid"} , 401
    expires = datetime.timedelta(days = 7)
    acces_token = create_access_token(identity=str(user.id) , expires_delta=expires)
    return {'token' : acces_token} , 200




@auth.route('/api/auth/singup' , methods=['POST'])
def singup():
    body = request.get_json()
    user = User(**body)
    user.hash_password()
    user.save()
    id = user.id 
    return {'id' : str(id)} , 200