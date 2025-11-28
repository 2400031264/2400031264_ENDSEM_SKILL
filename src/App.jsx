import React, { useState } from 'react'
import Gallery from './components/Gallery.jsx'
import Modal from './components/Modal.jsx'
import projects from './data/projects.json'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleImageClick = (project) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Student Project Gallery</h1>
        <p>Browse featured student projects. Click any image to view it larger.</p>
      </header>

      <Gallery projects={projects} onImageClick={handleImageClick} />

      <Modal isOpen={!!selectedProject} onClose={handleCloseModal}>
        {selectedProject && (
          <div className="modal-content-inner">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <h2>{selectedProject.title}</h2>
            <p className="modal-student">By: {selectedProject.student}</p>
            <p className="modal-description">{selectedProject.description}</p>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default App
