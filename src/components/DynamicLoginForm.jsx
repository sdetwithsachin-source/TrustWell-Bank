import { useMemo } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { generateRandomId } from "../utils/randomId";
import "../pages/Login.css";

function DynamicLoginForm() {

    const userId = useMemo(
        () => generateRandomId("user"),
        []
    );

    const passId = useMemo(
        () => generateRandomId("pass"),
        []
    );

    return (
        <div className="login-card">

            <div className="login-header">
                <div className="lock-icon">🔐</div>
                <h2>Welcome Back</h2>
                <p>Sign in to access your account</p>
            </div>

            <div className="input-group">

                <label>Username</label>

                <div className="input-wrapper">

                    <FaUser />

                    <input
                        id={userId}
                        data-heal-id="userName4"
                        placeholder="Enter your username"
                    />

                </div>

            </div>

            <div className="input-group">

                <label>Password</label>

                <div className="input-wrapper">

                    <FaLock />

                    <input
                        id={passId}
                        data-heal-id="password4"
                        type="password"
                        placeholder="Enter your password"
                    />

                </div>

            </div>

            <a href="#" className="forgot-link">
                Forgot Password?
            </a>

            <button
                className="login-btn"
                data-heal-id="loginButton3"
            >
                Sign In
            </button>

            <div className="divider">
                or continue with
            </div>

            <div className="alt-login">

                <button>
                    Fingerprint Login
                </button>

                <button>
                    Mobile OTP
                </button>

            </div>

        </div>
    );
}

export default DynamicLoginForm;