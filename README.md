
# 📄 Resume Editor

A full-stack web-based Resume Editor that allows users to:

✅ Upload and edit their resume
✅ Enhance sections using a mock AI backend
✅ Save and retrieve resume data via FastAPI backend
✅ Download the final resume as JSON
## 🚀 About Me
I'm a FrontEnd Developer having strong command on React...


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shivanshu-mishra-98955a24b/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/SM_mishra17)


## 🛠️ Tech Stack


Frontend: React.js

Backend: FastAPI (Python)

Styling: CSS
## 🚀 Features
✔ Upload Resume (.pdf or .docx — mocked parsing with dummy content)
✔ Edit Resume (Name, Summary, Experience, Education, Skills)
✔ Add/Remove Experience, Education, Skills entries
✔ Enhance sections with "Enhance with AI" (mocked AI improvement via FastAPI)
✔ Save Resume to backend (saved as JSON file)
✔ Download final resume as .json
## 📦 Project Structure

resume-editor/
├── frontend/      # React App
├── backend/       # FastAPI Backend
└── README.md

## ⚙️ Setup Instructions
## 🖥️ Frontend (React)

cd frontend
npm install
npm start

Runs on: http://localhost:3000
## 🐍 Backend (FastAPI)

cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Runs on: http://localhost:8000
## 🔗 API Endpoints

POST /ai-enhance
Input: { "section": "summary", "content": "Experienced developer..." }
Output: { "improved_content": "[AI Enhanced] Experienced developer..." }

POST /save-resume
Input: Full resume JSON
Output: Confirmation message
Resume is saved as saved_resume.json in backend folder
## 🎨 Future Improvements

Real AI Integration for content enhancement

Resume export to .pdf format

Authentication for multiple users

Better file parsing for .pdf and .docx


## 👨‍💻 Author

Built as part of an internship assignment.
## 📝 License

This project is for educational/demo purposes.
