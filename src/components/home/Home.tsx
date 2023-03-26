import styled from "@emotion/styled";
import { AppLink } from "../elements/Link";

export const Home = () => (
    <Container>
        <Heading>taqpan.github.io</Heading>
        <Caption>my sandbox playground &#x1f603;</Caption>
        <NavList>
            <Nav>
                <AppLink to="/border-radius">Border Radius Manipulator</AppLink>
            </Nav>
            <Nav>
                <AppLink to="/mhw-clock">MHW Clock</AppLink>
            </Nav>
        </NavList>
    </Container>
);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
`;

const Caption = styled.p`
    margin: 1em 0;
`;

const Heading = styled.h1`
    text-align: center;
    font-size: max(14px, 4vh);
    margin: 0 auto 1em;
    padding: 0;
`;

const NavList = styled.ul`
    font-size: max(12px, 2.5vh);
    text-align: center;
`;

const Nav = styled.li`
    padding: 0.4em;
    margin: 0.4em auto;
`;
