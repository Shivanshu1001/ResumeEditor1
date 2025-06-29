from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow frontend
    allow_methods=["*"],
    allow_headers=["*"],
)

class EnhanceRequest(BaseModel):
    section: str
    content: str

class Resume(BaseModel):
    name: str
    summary: str
    experience: list
    education: list
    skills: list

@app.post("/ai-enhance")
async def ai_enhance(req: EnhanceRequest):
    improved = f"[AI Enhanced] {req.content}"
    return {"improved_content": improved}

@app.post("/save-resume")
async def save_resume(resume: Resume):
    with open("saved_resume.json", "w") as f:
        json.dump(resume.dict(), f, indent=2)
    return {"message": "Resume saved successfully"}
