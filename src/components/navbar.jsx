import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Sam's Portfolio
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/1Gxd_tMrhiOV1L4fAj8yt2z5RjUH8E9znbYWBhRTEhrA/edit?usp=sharing" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;