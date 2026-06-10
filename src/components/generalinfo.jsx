import { useState } from "react";


function Generalinfo({info,setinfo}) {
    const [isediting,setIsediting]  = useState(false);
    const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const toggleEdit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

 if (isEditing) {
    return (
      <form className="section-container" onSubmit={toggleEdit}>
        <h2>General Information</h2>
        <input type="text" name="name" value={info.name} onChange={handleChange} placeholder="Full Name" required />
        <input type="email" name="email" value={info.email} onChange={handleChange} placeholder="Email" required />
        <input type="tel" name="phone" value={info.phone} onChange={handleChange} placeholder="Phone Number" required />
        <button type="submit" className="submit-btn">Save</button>
      </form>
    );
  }
    
}