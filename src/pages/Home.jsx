import NavigationBar from "../components/Navbar";
import { Container, Button } from "react-bootstrap";

export default function Home() {
    return (
        <div>
            <NavigationBar />
            <Container className="text-center mt-5 pt-5">
                <h2 className="display-4">Welcome to Our Nature</h2>
                <p className="lead">Smart plant selection and care guide for a greener world.</p>
                <div className="mt-4">
                    <Button variant="success" size="lg" className="me-3">
                        Start Now
                    </Button>
                    <Button variant="warning" size="lg">
                        Learn More
                    </Button>
                </div>
            </Container>
        </div>
    );
}
