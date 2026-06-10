import { useState } from "react";
import Generalinfo from './components/generalinfo';
import Experience from './components/experience';
import Education from './components/education';
import './style/CV.css';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: 'Anmol Singh',
    email: 'anmol@example.com',
    phone: '123-456-7890'
  });

  const [education, setEducation] = useState({
    school: 'NIT Jalandhar',
    title: 'B.Tech Computer Science and Engineering',
    date: '2023 - 2027'
  });

  const [experience, setExperience] = useState({
    company: 'Tech Solutions Inc.',
    position: 'Full Stack Developer Intern',
    responsibilities: 'Built real-time tracking dashboards using React and Node.js.',
    dateFrom: 'May 2025',
    dateUntil: 'Aug 2025'
  });
  return (
    <div className="app-container">
        <h1>CV Builder</h1>
        <main className="CV-layout ">
            <Generalinfo info={generalInfo} setinfo={setGeneralInfo} />
            <Education info={education} setinfo={setEducation} />
           <Experience info={experience} setinfo={setExperience} />
        </main>

    </div>
  );

}

export default App;