import React from "react";
import { NavStyled, StyledLink } from "./NavigationStyled";

export const Nav = () => {
  return (
    <NavStyled>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/catalog">Cars catalog</StyledLink>
      <StyledLink to="/favorites">Favorites</StyledLink>
    </NavStyled>
  );
};
