// App.jsx

import React, { useState } from 'react';
import UploadSection from './Components/UploadSection';
import ResumeEditor from './Components/ResumeEditor';
import axios from 'axios';

const App = () => {
  const [resume, setResume] = useState(null);

  const handleSave = async () => {
    await axios.post('http://localhost:8000/save-resume', resume);
    alert("Resume saved!");
  };

  const handleDownload = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resume, null, 2));
    const link = document.createElement('a');
    link.href = dataStr;
    link.download = "resume.json";
    link.click();
  };

  return (
    <div className="container">
      <h1>Resume Editor</h1>
      <UploadSection onUpload={setResume} />
      {resume && (
        <>
          <ResumeEditor resume={resume} setResume={setResume} />
          <button onClick={handleSave}>Save Resume</button>
          <button onClick={handleDownload}>Download Resume</button>
        </>
      )}
    </div>
  );
};

export default App;


// Components
// ResumeEditor

import React from 'react';
import axios from 'axios';

const ResumeEditor = ({ resume, setResume }) => {

  const handleChange = (section, index, key, value) => {
    const updated = { ...resume };
    if (Array.isArray(updated[section])) {
      updated[section][index][key] = value;
    } else {
      updated[section] = value;
    }
    setResume(updated);
  };

  const enhanceSection = async (section, content, index = null) => {
    const res = await axios.post('http://localhost:8000/ai-enhance', {
      section,
      content
    });
    const updated = { ...resume };
    if (Array.isArray(updated[section])) {
      updated[section][index] = res.data.improved_content;
    } else {
      updated[section] = res.data.improved_content;
    }
    setResume(updated);
  };

  return (
    <div>
      <h2>Edit Resume</h2>

      <div>
        <label>Name:</label>
        <input value={resume.name} onChange={e => handleChange('name', null, null, e.target.value)} />
      </div>

      <div>
        <label>Summary:</label>
        <textarea value={resume.summary} onChange={e => handleChange('summary', null, null, e.target.value)} />
        <button onClick={() => enhanceSection('summary', resume.summary)}>Enhance with AI</button>
      </div>

      <h3>Experience:</h3>
      {resume.experience.map((exp, idx) => (
        <div key={idx}>
          <input value={exp.company} onChange={e => handleChange('experience', idx, 'company', e.target.value)} />
          <input value={exp.role} onChange={e => handleChange('experience', idx, 'role', e.target.value)} />
          <button onClick={() => enhanceSection('experience', exp, idx)}>Enhance with AI</button>
        </div>
      ))}

      <h3>Education:</h3>
      {resume.education.map((edu, idx) => (
        <div key={idx}>
          <input value={edu.institution} onChange={e => handleChange('education', idx, 'institution', e.target.value)} />
          <input value={edu.degree} onChange={e => handleChange('education', idx, 'degree', e.target.value)} />
          <button onClick={() => enhanceSection('education', edu, idx)}>Enhance with AI</button>
        </div>
      ))}

      <h3>Skills:</h3>
      {resume.skills.map((skill, idx) => (
        <div key={idx}>
          <input value={skill} onChange={e => {
            const updated = { ...resume };
            updated.skills[idx] = e.target.value;
            setResume(updated);
          }} />
          <button onClick={() => enhanceSection('skills', skill, idx)}>Enhance with AI</button>
        </div>
      ))}
    </div>
  );
};

export default ResumeEditor;



