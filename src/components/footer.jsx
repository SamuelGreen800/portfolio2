const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                
                <div className="social_icons">
                    <a
                        href="https://github.com/SamuelGreen800"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/samuel-adam-green/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
                <div className="copyright">
                        <p>
                            &copy; {new Date().getFullYear()} Samuel-Green.com
                        </p>
            </div>

        </>
    )
}

export default Footer;