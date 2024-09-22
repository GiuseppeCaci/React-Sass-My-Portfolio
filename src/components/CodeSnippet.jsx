import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";


const CodeSnippet = ({ code, language, bgColor}) => {

  return (
    <>
      <SyntaxHighlighter language={language} style={bgColor === "dark-mode"? atomDark : solarizedlight}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeSnippet;
