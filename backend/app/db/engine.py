from sqlalchemy import create_engine

DB_URL = "sqlite:////./app.db" 

Engine = create_engine(
    DB_URL, 
    connect_args={"check_same_thread": False},
    future=True,
    echo=True
)