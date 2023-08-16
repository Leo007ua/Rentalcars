import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    gap: 6px;
    justify-content: center;
    align-items: center;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border: 2px solid white;
    background-color: aquamarine;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
`;
export const FooterText = styled.p`
    font-weight: 500;
    color: black;
`;

export const FooterLink = styled.a`
    text-decoration: none;
    font-weight: 500;
    color: black;

    &:hover {
        color: blueviolet;
    }
`;