from fastapi import HTTPException, status
from passlib.context import CryptContext
from models import User
from db import session

pwd_context = CryptContext( schemes=["bcrypt"], deprecated="auto" )

def authenticate_user( username: str, password: str, db: session ):
    user = db.query(User).filter(User.username == username).first()
    if not user or not pwd_context.verify(password, user.password_hash):
        return None
    return user

def access_danied():
    return HTTPException(
        status_code = status.HTTP_401,
        detail="Credenciais inválidas",
        headers={"WWW-Authenticate": "Bearer"}
) 
