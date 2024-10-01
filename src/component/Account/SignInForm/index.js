import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import AuthForm from "../AuthForm";
import InputField from "../InputField";

const SignInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')

    const { login } = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email || !password) {
            setMessage('Vui lòng nhập thông tin tài khoản')
            setMessageType('error')
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || []
        const user = users.find(u => u.email === email && u.password === password)

        if (user) {
            login(user)
            navigate('/')
        } else {
            setMessage('Tài khoản hoặc mật khẩu không đúng')
            setMessageType('error')
        }
    }

    return (
        <AuthForm title="Sign in" linkText="Sign up" linkPath="/signup">
            {message && <p className={messageType}>{message}</p>}
            <form onSubmit={handleSubmit}>
                <InputField
                    label="Email"
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <a href="/signin" className="forgot-link">Forgot your password?</a>
                <div className="btn-submit">
                    <button type="submit" className="btn btn-block mt-3">Sign in</button>
                </div>
            </form>
        </AuthForm>
    );
};

export default SignInForm;
