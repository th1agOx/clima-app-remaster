from contextlib import contextmanager
from db.engine import SessionLocal

@contextmanager
def get_db_session_control(): 
    db = SessionLocal()
    try:
        yield db
        db.commit()
    except:
        db.rollback()
    finally:
        db.close()