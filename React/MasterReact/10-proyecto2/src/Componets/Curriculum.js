import React from 'react'

export const Curriculum = () => {
    const experience = [
      { role: 'Experienced Tester - HT', company: 'NEORIS México', duration: '2022-2023' },
      { role: 'Especialista de pruebas Automatizado', company: 'Skandia México', duration: '2021-2022' },
      { role: 'Ingeniero de automatización', company: 'GNP Seguros', duration: '2017-2021' }
    ];
  
    const education = [
      { degree: 'Ingeniería en Sistemas computacionales', institution: 'Tecnológico de Estudios Superiores de Ecatepec', year: '2013-1 a 2017-1' },
    ];

    const knowledge = [
       'Java Development','JavaScript','Python', 'React','Eclipse','Visual Sutdio Code','Selenium Webdriver','Cypress','Jenkis','Pipeline','Appium','Postman',
        'Micro Focus Silk', 'Node.js','Maven','Robot Framework basico','Scrum Methodology','DB Sql Server  MySQL','MongoDB','Oracle','Jira, Azure Devops','Git/Gitlab','Source Tree Sistemas computacionales'];
  
  
    return (
      <div className='page'>
        <div className="cv-header">
          <h1 className='heading'>Curriculum</h1>
          <p>Desarrollar Web - QA Automatizador</p>
        </div>
        
        <div className="cv-content">
          <h2>Experiencia</h2>
          <ul>
            {experience.map((item, index) => (
              <li key={index}>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <p>{item.duration}</p>
              </li>
            ))}
          </ul>

          <h2>Educación</h2>
          <ul>
            {education.map((item, index) => (
              <li key={index}>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <p>{item.year}</p>
              </li>
            ))}
          </ul>
          
          <h2>Habilidades</h2>
          <ul>
            {knowledge.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

        </div>

      </div>
    )
}
