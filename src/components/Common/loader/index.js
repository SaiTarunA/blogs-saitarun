import { useEffect } from "react";
import { CONFIG } from "../../../config";
import "./index.css";
import { LoaderBackground, LoaderText } from "./styles";

/**
 * This is the default loader used in all the places.
 *
 * You can change the Loading... text in
 * @example ../../../config.js
 *
 * You can add this to all the places where you need to show loader.
 * Ex: While calling API
 */
const DefaultLoader = () => {
  const textToShow = CONFIG.LoaderText;
  const animationTime = 2.5; // In seconds
  const caretBlinkTime = 1.25; // In seconds

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  }, []);

  return (
    <LoaderBackground
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <LoaderText
        variant="h3"
        styleProps={{
          animationTime: animationTime,
          textLength: textToShow.length,
          caretBlinkTime: caretBlinkTime,
        }}
      >
        {textToShow}
      </LoaderText>
    </LoaderBackground>
  );
};

export default DefaultLoader;
