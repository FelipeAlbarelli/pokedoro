from .db import db
from flask_bcrypt import generate_password_hash , check_password_hash

class Pokemon(db.Document):
    name         = db.StringField(required=True)
    owner        = db.ReferenceField('User')
    sprite_front = db.URLField(required = True)
    sprite_back  = db.URLField(required = True)
    species_name = db.StringField(required = True)
    species_id   = db.IntField(required = True)
    poke_types   = db.ListField(db.StringField() , required = True)
    level        = db.IntField(required = True)

class User(db.Document):
    user_name = db.StringField(unique = True , max_length = 15)
    email     = db.EmailField(unique  = True , required = True)
    password  = db.StringField( required = True)
    pokemons  = db.ListField(db.ReferenceField(Pokemon) , default = [])
    last_pokemon_encounter = db.ReferenceField(Pokemon)
    pokebols = db.IntField(default = 5)
    energy   = db.IntField(defualt = 7)


    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')
    
    def check_password(self , password):
        return check_password_hash(self.password , password)