import styled from 'styled-components';

export const CardStyled = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;  
`;

export const CardListStyled = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 274px;
  
  justify-content: space-between;

  span {
    color: #3470ff;
  }
`;

export const HeartButton = styled.button`
background: none;
border: none;
cursor: pointer;
font-size: 20px;
color: ${({ isfavorite }) => (isfavorite === "true" ? "red" : "black")};
`;