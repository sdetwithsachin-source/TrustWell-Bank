import DynamicLoginForm from "../components/DynamicLoginForm";
import "./Login.css";

function Login() {
    return (
        <div className="login-container">

            <div className="left-panel">

                <div className="bank-logo">
                    <h1>TrustWell Bank</h1>
                    <h3>Your Trust. Our Commitment.</h3>
                </div>

                <div className="features">

                    <div className="feature-card">
                        <h3>🔒 Secure Banking</h3>
                        <p>Your security is our priority</p>
                    </div>

                    <div className="feature-card">
                        <h3>⚡ Fast & Reliable</h3>
                        <p>Banking anytime, anywhere</p>
                    </div>

                    <div className="feature-card">
                        <h3>👥 Customer First</h3>
                        <p>Dedicated support always</p>
                    </div>

                </div>

            </div>

            <div className="right-panel">
                <DynamicLoginForm />
            </div>

        </div>
    );
}

export default Login;