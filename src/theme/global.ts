import { css } from "@emotion/core";

export const global = {
    "*, *::before, *::after": {
        boxSizing: "border-box"
    },
    "body": {
        minHeight: "100vh",
        scrollBehavior: "smooth",
        lineHeight: "1.5",
        backgroundColor: "#ccf"
    }
}
//     div::before,
//     div::after {
//         box-sizing: border-box;
//     }

//     /* Remove default margin */
//     body,
//     h1,
//     h2,
//     h3,
//     h4,
//     p,
//     ul[class],
//     ol[class],
//     li,
//     figure,
//     figcaption,
//     blockquote,
//     dl,
//     dd {
//         margin: 0;
//     }

//     /* Set core body defaults */

//     /* A elements that don't have a class get default styles */
//     a:not([class]) {
//     text-decoration-skip-ink: auto;
//     }

//     /* Make images easier to work with */
//     img {
//     max-width: 100%;
//     display: block;
//     }

//     /* Inherit fonts for inputs and buttons */
//     input,
//     button,
//     textarea,
//     select {
//     font: inherit;
//     }
// `