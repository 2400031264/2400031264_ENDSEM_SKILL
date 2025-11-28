import React from 'react'

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null

  const handleBackdropClick = (event) => {
    if (event.target.classList.contains('modal-backdrop')) {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-body">
        <button className="modal-close-button" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
