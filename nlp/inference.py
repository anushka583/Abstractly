from .summarization_model import summarize_text

def split_text(text, max_words=100):
    words = text.split()
    chunks = []

    for i in range(0, len(words), max_words):
        chunk = " ".join(words[i:i + max_words])
        chunks.append(chunk)

    return chunks


def summarize_document(text):
    chunks = split_text(text)

    summaries = []
    for chunk in chunks:
        summary = summarize_text(chunk)
        summaries.append(summary)

    final_summary = " ".join(summaries)

    refined = summarize_text(final_summary)

    return refined