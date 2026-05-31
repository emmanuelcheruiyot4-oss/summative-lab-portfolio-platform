import React, { useState } from 'react'

function ProjectForm({ onAddProject }) {
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

 
  const handleSubmit = (event) => {
    
    event.preventDefault()

    
    if (title.trim() === '' || description.trim() === '') {
      alert('Please fill out both the title and description fields.')
      return;
    }

    
    const newProject = {
      id: Date.now(), 
      title: title,
      description: description
    };

    
    onAddProject(newProject)

    
    setTitle('');
    setDescription('')
  };

  return (
    <div className="form-container">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-add">Add</button>
      </form>
    </div>
  );
}

export default ProjectForm