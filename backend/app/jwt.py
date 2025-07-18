from jose import jwt
from datetime import datetime, timedelta
from ..config import ACCES_TOKEN_EXPIRE_MINUTES

def generates_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    expire = datetime() + (expires_delta or timedelta(minutes=ACCES_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp":expire})
    return jwt.encode(to_encode)