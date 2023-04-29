const headers = ["h1", "h2", "h3", "h4", "h5", "h6"];
const bodyVariants = ["body1", "body2"];
const subtitleVariants = ["subtitle1", "subtitle2"];

const getStyleObject = (arrayOfKeys, objToAdd) => {
  return {
    ...arrayOfKeys.reduce((keyName, value) => {
      return {
        ...keyName,
        [value]: objToAdd,
      };
    }, {}),
  };
};

export const typography = (palette) => {
  return {
    fontFamily: [
      '"Lato"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    ...getStyleObject(headers, {
      fontFamily: "'Red Hat Display', sans-serif",
    }),
    button: {
      fontFamily: "'Red Rose', cursive",
      fontWeight: 600,
    },
    ...getStyleObject(bodyVariants, {
      lineHeight: "2em",
    }),
    ...getStyleObject(subtitleVariants, {
      lineHeight: "2.25em",
    }),
    h4: {
      cursor: "pointer",
      fontFamily: `'Barlow Condensed', sans-serif`,
      ...(palette.mode === "light"
        ? {
            "&:hover": {
              transform: "translate(-2px,-2px)",
              textShadow: `2px 2px ${palette.primary.main}`,
            },
            "&:active": {
              transform: "translate(0px,0px)",
              textShadow: `none`,
            },
          }
        : {
            color: palette.primary.main,
            "&:hover": {
              transform: "translate(-2px,-2px)",
              textShadow: `2px 2px ${palette.text.primary}`,
            },
            "&:active": {
              transform: "translate(0px,0px)",
              textShadow: `none`,
            },
          }),
    },
  };
};
