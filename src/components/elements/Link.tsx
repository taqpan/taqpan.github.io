import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";
import Colors from "../../theme/colors";

export const AppLink = styled(RouterLink)`
    color: ${Colors.link};
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
`;
