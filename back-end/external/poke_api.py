import requests
from database.models import Pokemon
from random import randint

POKEDEX_API_URL = "https://pokeapi.co/api/v2/pokemon/"


def random_pkm():
    pkm_id = str(randint(1,151))
    pkm_json = requests.get(POKEDEX_API_URL + pkm_id).json()
    return {
        "level" : 1,
        "poke_types" : [t["type"]["name"] for t in pkm_json['types']],
        "species_id" : pkm_id,
        "species_name" : pkm_json["name"],
        "sprite_back" : pkm_json["sprites"]["back_default"],
        "sprite_front" : pkm_json["sprites"]["front_default"],
        "name" : pkm_json["name"]
    }