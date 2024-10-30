import { useState } from "react";
import AuthForm from "../AuthForm";
import InputField from "../InputField";


const formFields = [
    { label: "First Name", type: "text", placeholder: "Enter first name", name: "firstName" },
    { label: "Last Name", type: "text", placeholder: "Enter last name", name: "lastName" },
    { label: "Date of Birth", type: "date", placeholder: "", name: "dob" },
    { label: "Email", type: "email", placeholder: "Enter email", name: "email" },
    { label: "Phone Number", type: "tel", placeholder: "Enter phone number", name: "phoneNumber" },
    { label: "Password", type: "password", placeholder: "Enter password", name: "password" },
    { label: "Confirm Password", type: "password", placeholder: "Re-enter password", name: "confirmPassword" },
];

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });

    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { firstName, lastName, dob, email, phoneNumber, password, confirmPassword } = formData

        if (!firstName || !lastName || !dob || !email || !phoneNumber || !password || !confirmPassword) {
            setMessage('Vui lòng điền đầy đủ thông tin')
            setMessageType('error')
            return;
        }
        if (password.length < 8) {
            setMessage('Mật khẩu tối thiểu 8 ký tự')
            setMessage('error')
            return;
        }
        if (password !== confirmPassword) {
            setMessage('Mật khẩu và xác nhận mật khẩu không khớp')
            setMessageType('error')
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || []
        const emailExists = users.find(user => user.email === email)
        const phoneExists = users.find(user => user.phoneNumber === phoneNumber)

        if (emailExists) {
            setMessage('Email đã được đăng ký')
            setMessageType('error')
        } else if (phoneExists) {
            setMessage('Số điện thoại đã được đăng ký')
            setMessageType('error')
        } else {
            const newUser = { firstName, lastName, dob, email, phoneNumber, password }
            users.push(newUser)
            localStorage.setItem('users', JSON.stringify(users))
            setMessage('Đăng ký thành công!')
            setMessageType('success')
        }
    }

    return (
        <AuthForm title="Sign up" linkText="Sign in" linkPath="/signin">
            {message && <p className={messageType}>{message}</p>}
            <form onSubmit={handleSubmit}>
                {formFields.map((field, index) => (
                    <InputField
                        key={index}
                        label={field.label}
                        type={field.type}
                        placeholder={field.placeholder}
                        name={field.name}
                        onChange={handleChange}
                    />
                ))}
                <div className="btn-submit">
                    <button type="submit" className="btn btn-block mt-3">Sign up</button>
                </div>
            </form>
        </AuthForm>
    );
};

export default SignUpForm;
