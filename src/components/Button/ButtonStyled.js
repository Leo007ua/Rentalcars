import styled from 'styled-components';

export const StyledButton = styled.button`
  /* border-radius: 8px; */
  /* background-color: azure; */
  padding: 12px 99px;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  /* gap: 12px; */

  cursor: pointer;

  transition: box-shadow 0.3s ease, background-color 0.3s ease;
  &:hover,
  &:focus {
    box-shadow: 0px 2px 47px -18px rgba(0, 0, 0, 0.75);
    background-color: rgba(240, 255, 255, 0.8);
  }

  &.no-border {
    border-radius: 0;
    border: none;
  }
  &.primary {
    /* display: flex; 
    width: 274px;
    height: 44px; */
    padding: 12px 99px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: #3470ff;
    border: none;
    color: var(--white, #fff);
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
    margin-top: 31px;
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
      background-color: rgba(255, 158, 31, 0.9);
    }
  }
`;
