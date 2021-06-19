import React, { useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { Container } from './SearchInputStyle';
import { FaSearch } from 'react-icons/fa';

export const SearchInput = ({ value, onSearch }) => {
  const [displayValue, setDisplayValue] = useState(value);

  const debouncedChange = useDebounce(onSearch, 500);

  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }

  return (
    <>
      <Container>
        <input
          type="input"
          value={displayValue}
          onChange={handleChange}
          placeholder="Search for an hero..."
        />
      </Container>
    </>
  );
};
