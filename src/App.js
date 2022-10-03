import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./App.css";
import cat from "./cat.webp";
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-bootstrap/Carousel';



function App() {
	return (
		<div className='App'>
			<header>
				<Navbar bg="dark" expand="lg" variant='dark'>
					<Container>
						<Navbar.Brand href="#home">DevBlog</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="#home">Home</Nav.Link>
								<Nav.Link href="#link">Forum</Nav.Link>
								<Nav.Link href="#link">Tasks</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
			<main>
				<Container>
					<Row className="justify-content-md-center">
						<Col lg="8" className='contentArea'>
							<h4>Blog</h4>
							<Alert key='success' variant='success'>
								This site have been updated!
							</Alert>
							<Carousel>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={cat}
										alt="First slide"
									/>
									<Carousel.Caption>
										<h3>First slide label</h3>
										<p>lorem lorem lorem</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={cat}
										alt="Second slide"
									/>

									<Carousel.Caption>
										<h3>Second slide label</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={cat}
										alt="Third slide"
									/>
									<Carousel.Caption>
										<h3>Third slide label</h3>
										<p>
											Praesent commodo cursus magna, vel scelerisque nisl consectetur.
										</p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>

							<Card className='blogEntry'>
								<Card.Img variant="top" src={cat} />
								<Card.Body>
									<Card.Title>Lorem ipsum</Card.Title>
									<Card.Text>
										This blog is about web development: bootstrap 5 and react js.
									</Card.Text>
									<Button variant="success">Read</Button>
								</Card.Body>
							</Card>


						</Col>
						<Col lg="3" className='newBlock'>
							<h4>News</h4>
							<Card>
								<Card.Img variant="top" src={cat} />
								<Card.Body>
									<Card.Title>News block</Card.Title>
									<Card.Text>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</Card.Text>
									<Button variant="primary">Show more</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</main>
		</div>
	);
}

export default App;
