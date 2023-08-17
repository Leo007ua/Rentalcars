import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  background-image: url(${props => props.$urlimg});
  background-color: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 0%, rgba(18, 20, 23, 0.00) 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
