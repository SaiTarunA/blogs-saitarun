import { Box, Typography } from "@mui/material";
import moment from "moment/moment";
import React from "react";

const About = () => {
  const a = moment("2022-04-04T10:00:00.000Z");
  const b = moment(new Date());

  const getNonZeroValue = (value, name) => {
    if (value === 0) {
      return "";
    }
    return ` ${String(value).concat(value !== 1 ? ` ${name}s` : ` ${name}`)}`;
  };
  const diffDuration = moment.duration(b.diff(a));
  let experience = `${getNonZeroValue(
    diffDuration.years(),
    "Year"
  )}${getNonZeroValue(diffDuration.months(), "Month")}${getNonZeroValue(
    diffDuration.days(),
    "Day"
  )}`;

  return (
    <Box>
      <Typography variant="h5" marginBottom={3}>
        Hey Reader, Want to know about me?
      </Typography>
      <Typography variant="h6" marginBottom={1}>
        I am{" "}
        <Typography
          fontFamily={`"Barlow Condensed", sans-serif`}
          display="inline"
          fontSize={34}
          fontWeight={600}
        >
          SAI TARUN AVADHOOTHA
        </Typography>
        .
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: ({ palette }) => palette.text.secondary }}
      >
        I am a Full stack Developer(Intern) in a company called AI Palette based
        in Bangalore, India.
        <br />I have<b>{experience}</b> of experience in web development.
      </Typography>
    </Box>
  );
};

export default About;
