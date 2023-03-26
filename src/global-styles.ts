import { css } from "@emotion/react";
import colors from "./theme/colors";
import fonts from "./theme/fonts";

export default css`
    body {
        color: ${colors.text};
        font-family: ${fonts.sansSerif};
    }

    div, p, ul, li {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        vertical-align: baseline;
        background: transparent;
    }

    ul, li {
        list-style: none;
    }
`;
