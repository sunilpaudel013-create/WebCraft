
import './LoginPage.css'
function LoginPage() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter the email' required />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter the password' required />
                </div>

                <button type='submit' className='login-btn'>login</button>

                <div className="extra-links">
                    <p><a href="#">Forgot Password?</a></p>
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>

            </form>
        </div>
    )
}

export default LoginPage;