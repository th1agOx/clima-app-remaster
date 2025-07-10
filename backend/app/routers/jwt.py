from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer

# def token_response(token: str):
#     return {"token" : token} 


def access_danied():
    return HTTPException(
        status_code = status.HTTP_401,
        detail="Credenciais inválidas",
        headers={"WWW-Authenticate": "Bearer"}
    ) 