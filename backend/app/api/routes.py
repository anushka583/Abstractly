from fastapi import APIRouter
from app.models.request_models import SummaryRequest
from app.services.summarizer import get_summary
from app.services.beginner_mode import simplify_text

router = APIRouter()

@router.get("/")
def health():
    return {"status": "API working"}

@router.post("/summarize")
def summarize(request: SummaryRequest):

    if request.mode == "beginner":
        result = simplify_text(request.text)
    else:
        result = get_summary(request.text)

    return {"result": result}