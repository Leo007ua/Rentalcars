import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 12px 99px;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: box-shadow 0.3s ease, background-color 0.3s ease;
  &:hover,
  &:focus {
    box-shadow: 0px 2px 47px -18px rgba(0, 0, 0, 0.75);
    background-color: rgba(240, 255, 255, 0.8);
  }

  &.no-border {
    margin-top: 5px;
    border-radius: 12px;
    background-color: #fff;
    border: none;
    cursor: pointer;
    /* font-size: 20px; */
    color: ${({ isfavorite }) => (isfavorite === 'true' ? 'red' : 'black')};
  }
  &.primary {
    padding: 12px 99px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: #3470ff;
    border: none;
    color: #fff;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    &:hover,
    &:focus {
      background-color: #0b44cd;
    }
  }
  &.secondary {
    width: 168px;
    margin-top: 20px;
    border: none;
    padding: 12px 50px;
    background-color: #ff9e1f;
    border-radius: 12px;
    background-color: #3470ff;
    color: var(--white, #fff);
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    margin-left: 40px;
    &:hover,
    &:focus {
      background-color: #0b44cd;
    }
  }
`;
