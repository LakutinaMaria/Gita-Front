import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">GGita</h3>
                    <span className="registerDesc">Connect with friends and start your adventure here</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder="User Name" className="registerInput"></input>
                        <input placeholder="Email" className="registerInput"></input>
                        <input placeholder="Password" className="registerInput"></input>
                        <input placeholder="Repeat Password" className="registerInput"></input>
                        <button className="registerButton">Sing Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}