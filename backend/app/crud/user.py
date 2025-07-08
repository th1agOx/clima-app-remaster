from db.utils.test_get_db_session import get_db_session_control
from db.models.user import User

with get_db_session_control as db:
    user = User(email="testmail@mail.com")
    db.add(user)