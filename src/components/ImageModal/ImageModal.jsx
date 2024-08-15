import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
}

Modal.setAppElement('#root')

export default function ImageModal({
  isOpen,
  onCloseModal,
  modalUrl,
  modalAlt,
}) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onCloseModal} style={customStyles}>
      <img src={modalUrl} alt={modalAlt} />
    </Modal>
  )
}
