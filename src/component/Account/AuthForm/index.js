import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin";

const AuthForm = ({ title, linkText, linkPath, children }) => {
    return (
        <div className="account">
            <div className="login-container">
                <div className="row">
                    <div className="col-md-6 welcome-section">
                        <div className="text-left">
                            <h1>{title === 'Sign up' ? 'Join Us!' : 'Welcome Back!'}</h1>
                            <p>{title === 'Sign up'
                                ? 'Create your account by entering the required details. If you already have an account, click the button below to sign in.'
                                : 'Enter your personal information to sign in to your account. If you don’t have an account yet, click the button below to sign up.'
                            }
                            </p>
                            <Link to={linkPath} className="btn btn-light">{linkText}</Link>
                        </div>
                    </div>

                    <div className="col-md-6 auth-form-section">
                        <div className="auth-form p-5">
                            <h2 className="text-center">{title}</h2>
                            <SocialLogin />
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
