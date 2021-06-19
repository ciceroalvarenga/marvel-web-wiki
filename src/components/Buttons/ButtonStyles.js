import styled from 'styled-components';
import { shade } from 'polished';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #40a9ff;
  height: 40px;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  color: #ffffff;
  width: 150px;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#40a9ff')};
  }
`;
