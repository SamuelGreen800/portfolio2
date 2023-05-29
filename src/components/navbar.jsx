import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                <Image
            src='/images/favicon.ico'
            width={45}
            height={45}
            alt='profile-pic'
            data-aos='fade-left'
            />
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/1Gxd_tMrhiOV1L4fAj8yt2z5RjUH8E9znbYWBhRTEhrA/edit?usp=sharing" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;