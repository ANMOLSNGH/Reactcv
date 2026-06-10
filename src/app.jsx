import { useState } from "react";
import Generalinfo from '.components/Generalinfo';
import experience from '.components/experience';
import education from '.components/education';

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
            <GeneralInfo info={generalInfo} setInfo={setGeneralInfo} />
            <Education info={education} setInfo={setEducation} />
           <Experience info={experience} setInfo={setExperience} />
        </main>

    </div>
  );

}

export default App;