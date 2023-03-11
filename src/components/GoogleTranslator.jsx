import { useEffect } from "react";
const GoogleTranslator = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <><h1>This Translation is done using automatic Google Translate</h1>
      <div id="google_translate_element"></div>
      <h4>Start building your app. Happy Coding!</h4>
      <hr />
    </>
  );
};

export default GoogleTranslator;
