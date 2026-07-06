from fastapi import FastAPI
from models import SimulateRequest
from ai_service import get_ai_recommendation
from memory_service import save_simulation, get_history

app = FastAPI()

@app.get("/")
def home():
    return {"message": "InvestSight AI Backend Running 🚀"}

@app.post("/simulate")
def simulate(request: SimulateRequest):
    try:
        history = get_history()
        ai_response = get_ai_recommendation(
            request.stock,
            request.investment,
            request.buy_date,
            request.sell_date,
            request.reason,
            history
        )

        save_simulation({
            "stock": request.stock,
            "investment": request.investment,
            "buy_date": str(request.buy_date),
            "sell_date": str(request.sell_date),
            "reason": request.reason,
            "ai_result": ai_response
        })

        return {"result": ai_response, "history": get_history()}

    except Exception as e:
        return {"error": str(e)}