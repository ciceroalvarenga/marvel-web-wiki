import React, { useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

import { Button } from './ButtonStyles';

export const ButtonMore = ({ onClick, children, ...rest }) => {
  const debouncedChange = useDebounce(onClick, 500);

  function handleClick(event) {
    debouncedChange(event);
  }

  return (
    <>
      <div>
        <Button {...rest} onClick={handleClick}>
          {children}
        </Button>
      </div>
    </>
  );
};
