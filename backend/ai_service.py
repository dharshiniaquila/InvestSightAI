import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")

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

Give a short investment recommendation in plain text with:
Recommendation, Confidence, Risk, and Explanation.
"""
    response = model.generate_content(prompt)
    return response.text