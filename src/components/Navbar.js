//Reantaso
// This code builds a simple navigation bar for a React app using React Bootstrap and React Router.
import React from 'react';
// We import components from React Bootstrap to easily design a nice-looking navigation bar.
import { Navbar, Nav, Container } from 'react-bootstrap';
// Link comes from React Router, and it lets us move between pages without refreshing the site.
import { Link } from 'react-router-dom';

// This is a functional component called NavigationBar.
const NavigationBar = () => {
  return (
    // Navbar is the main navigation container. 
    // "bg='dark'" and "variant='dark'" make the navbar black with white text.
    // "expand='lg'" means the navbar expands fully on large screens.
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        {/* Navbar.Brand is like the logo or name of our website. 
            When clicked, it redirects to the home page ("/"). */}
        <Navbar.Brand as={Link} to="/">
          Task-Flow
        </Navbar.Brand>

        {/* This button appears on smaller screens to toggle the menu. */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* This part holds all the links inside the navbar. */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* These are navigation links that route to different pages. */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/add-task">Add Task</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Finally, we export the component so it can be used in other parts of the project.
export default NavigationBar;
