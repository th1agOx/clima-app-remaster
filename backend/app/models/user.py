from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base ;
from sqlalchemy.orm import Session, relationship ;

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, unique=True)
    creat_at = Column(DateTime, default=datetime.utcnow)




# Flags Futuras ( user admin e ativo, para autenticação avançada )