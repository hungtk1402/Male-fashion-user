import { useNavigate } from 'react-router-dom';
import './PromptModal.css'

const PromptModal = ({ show, onClose }) => {
    const navigate = useNavigate()

    if (!show) return null

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h5>Please Log In or Sign Up</h5>
                <p>You need to log in or sign up to use this feature.</p>
                <div className="modal-actions">
                    <button className="btn btn-primary" onClick={() => navigate('/signin')}>Log In</button>
                    <button className="btn btn-secondary" onClick={() => navigate('/signup')}>Sign Up</button>
                    <button className="btn btn-light" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default PromptModal
