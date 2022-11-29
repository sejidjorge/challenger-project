import { DefaultTheme } from "styled-components";
import { breakpoints } from "./breakpoints";

export const defaultTheme: DefaultTheme = {
    colors: {
        background: "#0D1117",
        text: {
            primary: "#F1F1F1",
            secondary: "#95a0c1"
        },
        buttonActive: "#58A6FF",
        warning: "#FCD34D",
        error: "#CE2704",
        sucess: "#00A75D",
    },
};

const theme = { ...defaultTheme, ...breakpoints };

export { theme };