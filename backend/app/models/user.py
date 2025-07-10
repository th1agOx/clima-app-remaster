from sqlalchemy import Column, Integer, String, DateTime, Boolean
from datetime import datetime, timezone 
from sqlalchemy.orm import Session, relationship ;
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, unique=True)      # config
    user_name = Column(String, unique=True, index=True, nullable=False)

    is_active = Column(Boolean, default=True)
    is_admin = Column(Boolean, default=True)         

    created_at = Column(DateTime(timezone=True) , default=lambda: datetime.now(timezone.utc))
    deleted_at = Column(DateTime(timezone=True) , nullable=True)
    last_login = Column(DateTime(timezone=True) , nullable=True)


# adicionar event log 