from fastapi import FastAPI
from backend.models import SimulateRequest
from backend.ai_service import get_ai_recommendation, save_memory, get_memory

app = FastAPI()


@app.get("/")
def home():
    return {"status": "ok"}


@app.post("/simulate")
def simulate(request: SimulateRequest):

    try:
        # 1. Get past memory from Hindsight
        past_memory = get_memory(request.stock)

        # 2. Save current request into Hindsight memory
        save_memory(
            f"{request.stock} | {request.investment} | {request.buy_date} | {request.sell_date} | {request.reason}"
        )

        print("Saved to Hindsight memory")

        # 3. AI response using memory
        ai_response = get_ai_recommendation(
            request.stock,
            request.investment,
            request.buy_date,
            request.sell_date,
            request.reason,
            past_memory
        )

        return {
            "result": ai_response,
            "memory": past_memory
        }

    except Exception as e:
        return {"error": str(e)}