from fastapi import FastAPI
from .routers import delete, login

app = FastAPI()

app.include_router(login.router, prefix='/auth', tags=["auth"], responses={404: {"descriprion" : "Not found"}})
app.include_router(delete.router, prefix='/users/delete', tags=["delete"] )
