import React from 'react';

const UploadSection = ({ onUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Mock parsing: create dummy resume
      const dummyResume = {
        name: "John Doe",
        summary: "Experienced developer with strong frontend skills.",
        experience: [{ company: "ABC Corp", role: "Frontend Developer" }],
        education: [{ institution: "XYZ University", degree: "B.Tech" }],
        skills: ["React", "JavaScript", "CSS"]
      };
      onUpload(dummyResume);
    }
  };

  return (
    <div className="mb-4">
      <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
    </div>
  );
};

export default UploadSection;
