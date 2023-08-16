
import { StyledFooter, FooterText, FooterLink } from "./AppFooterStyled";
import { BsGithub } from "react-icons/bs";

export function AppFooter() {
    return (
        <StyledFooter>
            <FooterText>
                &copy; {new Date().getFullYear()} Developed by
            </FooterText>
            <FooterLink
                href="https://github.com/Leo007ua"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
                aria-label="Link to Github profile"
            >
                Leo <BsGithub size={18}/>
            </FooterLink>
        </StyledFooter>
    );
}