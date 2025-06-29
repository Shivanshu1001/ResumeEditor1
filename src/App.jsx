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

