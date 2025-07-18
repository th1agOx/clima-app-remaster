from pydantic import BaseModel, EmailStr

class LoginRequest(BaseModel):
    username: str
    password: str


class TokenResponse(BaseModel):
    token: str


class UserResponse(BaseModel):
    id: int
    username: str
    email: EmailStr 


class AuthSuccessResponse(BaseModel):
    token: TokenResponse
    user: UserResponse


class AuthErrorResponse(BaseModel):
    detail: str


class UserRecoveryRequest(BaseModel):
    email: EmailStr


class UserRecreateRequest(BaseModel):
    username: str

    
class PasswordResetRequest(BaseModel):
    new_password: str
    recovery_code: str