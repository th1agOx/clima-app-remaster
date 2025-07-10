from fastapi import APIRouter
from sqlalchemy.orm import Session
from db.session import get_db

router = APIRouter

# @router.post("/login", response_model='...')
#  def login(request: , db: Session = Depends(get_db)):
#      user = db.