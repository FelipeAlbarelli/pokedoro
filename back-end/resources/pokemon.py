from flask import Blueprint , request , make_response
from flask_jwt_extended import jwt_required , get_jwt_identity
from database.models import User , Pokemon
from external.poke_api import random_pkm

pokemon = Blueprint('pokemon' , __name__)


# Precisa : Implementar errors direito
#           limitação de posts por energia/pokebolas

@pokemon.route('/api/random_encounter' , methods=['GET'])
@jwt_required
def rand_encounter():
    user = User.objects.get( id = get_jwt_identity())
    pkm = Pokemon(**random_pkm() , owner = user).save()
    user.last_pokemon_encounter = pkm
    user.save()
    return pkm.to_json()

@pokemon.route('/cookie' , methods=['GET'])
def cookie():
    print('-'*15)
    print(request.cookies)
    print('-'*15)
    resp = make_response({ "msg" : 'joia'})
    resp.set_cookie('felipe' , 'show' , httponly=True)
    return resp


@pokemon.route('/api/catch' , methods=["POST"])
@jwt_required
def catch_pkm():
    user = User.objects.get( id = get_jwt_identity())
    pkm = user.last_pokemon_encounter
    pkm_name = request.get_json().get('pokemon_name' , pkm.name)
    pkm.owner = user
    pkm.name = pkm_name
    user.last_pokemon_encounter = None
    user.pokemons.append(pkm)
    user.save()
    pkm.save()
    return {
        'msg' : 'cath!'
    }

@pokemon.route('/api/flee' , methods=["POST"])
@jwt_required
def flee():
    user = User.objects.get( id = get_jwt_identity())
    pkm = user.last_pokemon_encounter
    user.last_pokemon_encounter = None
    pkm.delete()
    return {
        'msg' : 'escapou com sucesso'
    }