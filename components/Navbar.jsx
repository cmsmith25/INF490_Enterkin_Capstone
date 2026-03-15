import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="logo">First Baptist Church</div>
                <div className="nav-links">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/bulletins">Bulletin</Link>
                    <Link href="/prayer">Prayer Request</Link>
                    <Link href="/sermons">Sermons</Link>
                    <Link href="/offerings">Offerings</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
        </nav>
    );
}