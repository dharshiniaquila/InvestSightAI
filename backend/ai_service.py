import os
import requests
from dotenv import load_dotenv
import google.generativeai as genai

# LOAD ENV FIRST
load_dotenv()

HINDSIGHT_API_KEY = os.getenv("HINDSIGHT_API_KEY")
HINDSIGHT_BANK_ID = os.getenv("HINDSIGHT_BANK_ID")
HINDSIGHT_BASE_URL = os.getenv("HINDSIGHT_BASE_URL", "https://api.hindsight.vectorize.io")


# -------------------------
# HINDSIGHT MEMORY FUNCTIONS
# -------------------------

def save_memory(text):
    url = f"{HINDSIGHT_BASE_URL}/memory"

    headers = {
        "Authorization": f"Bearer {HINDSIGHT_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "bank_id": HINDSIGHT_BANK_ID,
        "text": text
    }

    return requests.post(url, json=payload, headers=headers).json()


def get_memory(query):
    url = f"{HINDSIGHT_BASE_URL}/search"

    headers = {
        "Authorization": f"Bearer {HINDSIGHT_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "bank_id": HINDSIGHT_BANK_ID,
        "query": query
    }

    return requests.post(url, json=payload, headers=headers).json()


# -------------------------
# GEMINI SETUP
# -------------------------

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-2.5-flash")


# -------------------------
# AI FUNCTION
# -------------------------

def get_ai_recommendation(stock, investment, buy_date, sell_date, reason, history):

    prompt = f"""
You are an expert financial investment advisor.

User Details:
- Stock Name: {stock}
- Investment Amount: ₹{investment}
- Buy Date: {buy_date}
- Sell Date: {sell_date}
- Reason for Investment: {reason}

Previous Investment History:
{history}

Give a short investment recommendation with:
- Recommendation
- Confidence
- Risk
- Explanation
"""

    response = model.generate_content(prompt)
    return response.text