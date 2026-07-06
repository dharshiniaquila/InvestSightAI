import json
import os
from datetime import datetime

DATA_FOLDER = "data"
FILE_NAME = os.path.join(DATA_FOLDER, "history.json")

if not os.path.exists(DATA_FOLDER):
    os.makedirs(DATA_FOLDER)

if not os.path.exists(FILE_NAME):
    with open(FILE_NAME, "w") as f:
        json.dump([], f)


def save_simulation(data):

    with open(FILE_NAME, "r") as f:
        history = json.load(f)

    data["timestamp"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    history.append(data)

    with open(FILE_NAME, "w") as f:
        json.dump(history, f, indent=4)


def get_history():

    with open(FILE_NAME, "r") as f:
        return json.load(f)