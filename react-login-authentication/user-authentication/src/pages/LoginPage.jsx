import InputField from '../components/InputField';
import './LoginPage.css'
function LoginPage() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <InputField type='email' label='Email' />

                <InputField type='password' label='Password' />

                <button type='submit' className='login-btn'>login</button>

                <div className="extra-links">
                    <p><a href="#">Forgot Password?</a></p>
                    <p>Don't have an account? <a href="/">Register</a></p>
                </div>

            </form>
        </div>
    )
}

export default LoginPage;