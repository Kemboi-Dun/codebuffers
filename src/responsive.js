import { css } from "styled-components";

export const mobile = (props) => {
    return css`
    @media only screen and (min-device-width: 220px)
    and (max-device-width: 650px) {
     ${props}
    }
    `;
};
export const tablet = (props) => {
    return css`
    @media only screen and (min-device-width: 650px)
    and (max-device-width: 1024px) {
     ${props}
    }
    `;
};