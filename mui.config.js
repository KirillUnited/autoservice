import { getCustomCSSProp } from "./src/utils/getCustomCSSProp";
export const themeOptions = {
    palette: {
        primary: {
            main: getCustomCSSProp('--color-primary'),
        },
        secondary: {
            main: getCustomCSSProp('--color-secondary'),
        },
        text: {
            primary: getCustomCSSProp('--color-text'),
        }
    },
    typography: {
        fontFamily: [getCustomCSSProp('--font-primary')].join(','),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 767,
            md: 1024,
            lg: 1200
        },
    },
}