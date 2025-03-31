
import './RulesModal.css';

const RulesModal = ({onClose}) => {
  return (
  <div className='rules-modal'>
    <div className="modal-container">
      <div className='modal-header'>
        <div className='title'>Rules</div>
        <div className='close' onClick={onClose}></div>
      </div>
      <div className="rules"></div>
    </div>
    <div className='modal-background'></div>
  </div>
  )
}

export default RulesModal;
