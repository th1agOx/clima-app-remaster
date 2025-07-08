from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker 

DB_URL = "sqlite:////./app.db" 

engine = create_engine(
    DB_URL, 
    connect_args={"check_same_thread": False},
    future=True,
    echo=True
)

SessionLocal = sessionmaker(bind=engine, automatic=False, autoflush=False)

# Apontar para servidor 