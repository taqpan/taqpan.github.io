import styled from "@emotion/styled";
import Colors from "../../theme/colors";
import { AppLink } from "../elements/Link";

export const Navigation = () => (
    <Container>
        <AppLink to="/">&#x25c0;</AppLink>
    </Container>
);

const Container = styled.header`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    z-index: 100;

    a {
        display: block;
        text-decoration: none;
        font-size: 20px;
        line-height: 1em;
        padding: 10px;
        text-align: center;
        color: ${Colors.background};
        background-color: ${Colors.text};
        &:hover {
            background-color: lighten(${Colors.text}, 20%);
            color: ${Colors.background};
            text-decoration: none;
        }
    }
`;
