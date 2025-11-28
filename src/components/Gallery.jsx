import React from 'react'

function Gallery({ projects, onImageClick }) {
  return (
    <main className="gallery">
      {projects.map((project) => (
        <article
          key={project.id}
          className="gallery-item"
          onClick={() => onImageClick(project)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="gallery-image"
          />
          <div className="gallery-item-info">
            <h3>{project.title}</h3>
            <p>{project.student}</p>
          </div>
        </article>
      ))}
    </main>
  )
}

export default Gallery
