import { Link } from "react-router-dom";
export default function Nav() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact us</Link>
                <Link to="book">Book a trip</Link>
                <Link to="prices">Prices</Link>
            </nav>
        </>
    );
}