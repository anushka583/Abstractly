from pydantic import BaseModel
class SummaryRequest(BaseModel):
    text: str 
    mode: str = "summary"
