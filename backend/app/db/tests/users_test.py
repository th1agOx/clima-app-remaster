from session_test import get_db_session_control
from models.user import User

with get_db_session_control as db:
    user = User(email="testmail@mail.com")
    db.add(user)