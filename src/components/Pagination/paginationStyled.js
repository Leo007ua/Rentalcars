import styled from 'styled-components';

export const PaginationWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationItem = styled.li`
  margin: 0 5px;
`;

export const PaginationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;

  ${({ $active }) =>
    $active &&
    `
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
  `}
`;