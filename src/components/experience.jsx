import { useState } from 'react';
import '../style/CV.css';

function Experience({ info, setinfo }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinfo({ ...info, [name]: value });
  };

  if (isEditing) {
    return (
      <form className="section-container" onSubmit={(e) => { e.preventDefault(); setIsEditing(false); }}>
        <h2>Practical Experience</h2>
        <input type="text" name="company" value={info.company} onChange={handleChange} placeholder="Company Name" required />
        <input type="text" name="position" value={info.position} onChange={handleChange} placeholder="Position Title" required />
        <textarea name="responsibilities" value={info.responsibilities} onChange={handleChange} placeholder="Main Responsibilities" rows="4" required />
        <div className="date-inputs">
          <input type="text" name="dateFrom" value={info.dateFrom} onChange={handleChange} placeholder="Start Date" required />
          <input type="text" name="dateUntil" value={info.dateUntil} onChange={handleChange} placeholder="End Date" required />
        </div>
        <button type="submit" className="submit-btn">Save</button>
      </form>
    );
  }

  return (
    <div className="section-container display-mode">
      <h2>Experience</h2>
      <h3>{info.position} at {info.company}</h3>
      <p><strong>Dates:</strong> {info.dateFrom} - {info.dateUntil}</p>
      <p><strong>Responsibilities:</strong> {info.responsibilities}</p>
      <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
    </div>
  );
}

export default Experience;