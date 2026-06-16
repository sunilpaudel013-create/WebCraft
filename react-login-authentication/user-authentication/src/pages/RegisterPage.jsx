import './RegisterPage.css'
import InputField from '../components/InputField';

function RegisterPage(){
    return(
        <>

        <div className="register-container">
            <h2>Register</h2>
            <form action="">

                <InputField type='text' label='Name' />
                

                <InputField type='email' label='Email' />

                <InputField type='password' label='Password' />

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