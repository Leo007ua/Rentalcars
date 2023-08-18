import styled from 'styled-components';

export const ModalStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  .modal-content {
    background-color: white;
    border-radius: 24px;
    width: 541px;
    height: 752px;
    padding: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;

    img {
      width: 469px;
      height: 314px;
      object-fit: cover;
      border-radius: 12px;
      margin: 15px 36px;
    }

    h2 {
        margin: 15px 40px;
    }

    p {
        margin: 15px 40px;
    }
    span {
      margin: 15px 40px;
      
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
`;