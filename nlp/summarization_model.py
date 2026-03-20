from transformers import pipeline

summarizer = pipeline(
    "summarization",
    model="sshleifer/distilbart-xsum-12-6"
)

def summarize_text(text: str):
    result = summarizer(
        text,
        max_length=80,
        min_length=20,
        do_sample=False
    )

    return result[0]["summary_text"]