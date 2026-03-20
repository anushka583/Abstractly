import sys 
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from fastapi import FastAPI
from app.api.routes import router
app = FastAPI()
app.include_router(router)