import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Search = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={4}>
          <Form>
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
