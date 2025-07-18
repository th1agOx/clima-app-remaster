from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from jose import jwt
from db.session import get_db
from ..schema import AuthSuccessResponse, AuthErrorResponse, LoginRequest
from ..auth import auth_service, access_danied
from ..jwt import generates_token

router = APIRouter

@router.post("/login", response_model=AuthSuccessResponse, responses={401: {"model" : AuthErrorResponse}})
def login(payload:LoginRequest, db: Session = Depends(get_db)):
    user = auth_service.authenticate_user(payload.username, payload.password, db)
    if not user:
        return auth_service.access_danied
    
    token = jwt.generates_token(data={"sub": user.username})
    return {
        "token": {"token": token},
        "user": {
            "id": user.id,
            "username": user.username,
            "email": user.email
        }
}