import './RegisterPage.css'

function RegisterPage(){
    return(
        <>

        <div className="register-container">
            <h2>Register</h2>
            <form action="">
                <div className="input-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="fullName" placeholder='Enter the full Name' required />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter the email' required />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter the password' required />
                </div>


                <button type='submit'>Register</button>

                <div className="extra-links">
                    <p><a href="#">Forgot Password?</a></p>
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </form>
        </div>
        </>
    );
}

export default RegisterPage;