from pydantic import BaseModel, EmailStr
from .jwt import token_response, access_danied

class AuthRequest(BaseModel):
    username: str
    password: str


class TokenResponse(BaseModel):
    token: token_response


class UserResponse(BaseModel):
    id: int
    username: str
    email: EmailStr


class AuthSuccessResponse(BaseModel):
    token: TokenResponse
    user: UserResponse


class AuthErrorResponse(BaseModel):
    detail: access_danied