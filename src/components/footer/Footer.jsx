import "./footer.css"

export default function Footer() {
    let fullYear = new Date().getFullYear();
    return (
        <nav className="footerContainer">
            <div className="footerCenter">
                <span className="copyrights">2021 - {fullYear} All Rights Reserved by Maria Lakutina</span>
            </div>
        </nav>
    );
}