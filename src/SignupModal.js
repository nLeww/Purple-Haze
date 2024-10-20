import React, { useState } from 'react';

const SignupModal = ({ onClose, onLogin }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (email && username && password.length >= 8) {
            const user = { email, username, password };
            localStorage.setItem('user', JSON.stringify(user));
            onLogin(user);
            onClose();
        } else {
            alert('Please fill in all fields correctly.');
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Sign Up</h2>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSubmit}>Sign Up</button>
            </div>
        </div>
    );
};

export default SignupModal;
