from pydantic import BaseModel
from datetime import date

class SimulateRequest(BaseModel):
    stock: str
    investment: float
    buy_date: date
    sell_date: date
    reason: str

class SimulateResponse(BaseModel):
    recommendation: str
    confidence: int
    risk: str
    reason: str