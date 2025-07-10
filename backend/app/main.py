from fastapi import FastAPI
from .routers import auth, delete

app = FastAPI()

app.include_router(auth.router, prefix='/auth', tags=["auth"], responses={404: {"descriprion" : "Not found"}})
app.include_router(delete.router, prefix='/users/delete', tags=["delete"] )
