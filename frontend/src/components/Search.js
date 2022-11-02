import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// Accept handleSearchSubmit() and store it in handleSubmit
const Search = ({ handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={4}>
          {/* Call handleSearchSubmit() function that  already stored in handleSubmit */}
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col xs={9}>
                <Form.Control placeholder="Search for new images..." />
              </Col>
              <Col>
                <Button type="submit" variant="warning">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
