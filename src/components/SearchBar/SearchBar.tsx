import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';

const SearchBar: React.FC = () => {
  return (
    <Form>
      <FormGroup>
        <Form.Label as="h4">Search</Form.Label>
        <Form.Control type="text" placeholder="Search for repositories" />
      </FormGroup>
    </Form>
  );
};

export default SearchBar;
