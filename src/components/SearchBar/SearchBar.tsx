import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';

interface ISearchBarProps {
  searchQuery: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({ searchQuery, onChange }) => {
  return (
    <Form>
      <FormGroup>
        <Form.Label as="h4">Search</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search for repositories"
          value={searchQuery}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" ? e.preventDefault(): ""}
        />
      </FormGroup>
    </Form>
  );
};

export default SearchBar;
