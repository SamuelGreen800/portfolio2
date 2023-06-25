import Link from "next/link";
import Image from "next/image";
import { Link as Link1, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                <Image
            src='/images/favicon-3.png'
            width={45}
            height={45}
            alt='profile-pic'
            data-aos='fade-left'
            />
                </Link>
            </div>
            <div>
            <a href="#about" className="cta-btn">About</a>
            <a href="#skills" className="cta-btn">Work</a>
            <a href="#contact" className="cta-btn">Contact</a>

            <a href="https://docs.google.com/document/d/1Gxd_tMrhiOV1L4fAj8yt2z5RjUH8E9znbYWBhRTEhrA/edit?usp=sharing" className="cta-btn">Resume</a>
        </div>
        </div>
    )
}

export default Navbar;