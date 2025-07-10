from sqlalchemy.orm import sessionmaker 
from db.engine import Engine

get_db = sessionmaker(bind=Engine, automatic=False, autoflush=False)