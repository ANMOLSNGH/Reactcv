import { useState } from "react";
import '../style/CV.css';

function Education({info,setinfo}) {
    const [isediting,setisediting] = useState(false);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setinfo({...info,[name]:value});
    };

    const toggleEdit = (e)=> {
         e.preventDefault();
         setisediting(!isediting);
    };

    if(isediting) {
        return (
            <form className = "section-container" onSubmit={toggleEdit}>
           <h2>Educational Experience</h2>
        <input type="text" name="school" value={info.school} onChange={handleChange} placeholder="School Name" required />
        <input type="text" name="title" value={info.title} onChange={handleChange} placeholder="Title of Study" required />
        <input type="text" name="date" value={info.date} onChange={handleChange} placeholder="Dates of Study" required />
        <button type="submit" className="submit-btn">Save</button>
      </form>
    );
  }
  return (
    <div className="section-container display-mode">
      <h2>Education</h2>
      <h3>{info.school}</h3>
      <p><strong>Degree:</strong> {info.title}</p>
      <p><strong>Dates:</strong> {info.date}</p>
      <button onClick={toggleEdit} className="edit-btn">Edit</button>
    </div>
  );
}

export default Education;