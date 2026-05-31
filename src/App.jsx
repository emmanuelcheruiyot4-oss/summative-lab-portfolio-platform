import React, { useState } from 'react'
import ProjectForm from './components/ProjectForm.jsx'
import ProjectList from './components/ProjectList.jsx'
import './App.css'


const startingProjects = [
  { id: 1, title: 'Project 1', description: 'Description of the project' },
  { id: 2, title: 'Project 2', description: 'Description of the project' },
  { id: 3, title: 'Project 3', description: 'Description of the project' }
]

function App() {
 
  const [projects, setProjects] = useState(startingProjects)
  
 
  const [searchTerm, setSearchTerm] = useState('')

  
  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject])
  }

  const filteredProjects = projects.filter((project) => {
    return project.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="app-wrapper">
      <header className="main-header">
        <h1>Personal Project Showcase App</h1>
      </header>

      <main className="main-content">
        
        <ProjectForm onAddProject={handleAddProject} />

        <div className="showcase-container">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search Projects"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <ProjectList projects={filteredProjects} />
        </div>
      </main>
    </div>
  )
}

export default App;