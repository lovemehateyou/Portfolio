import Cookies from "js-cookie";

const setGlobalTheme = (theme) => {
  document.documentElement.style.setProperty(
    "--theme",
    theme === "Dark" ? "linear-gradient(90deg, rgba(5,2,33,1) 100%, rgba(106,5,128,0.7401085434173669) 100%)" : "E8F9FF"
  );
  document.documentElement.style.setProperty(
    "--textTheme",
    theme === "Dark" ? "#fff" : "#1D1616"
  );

  Cookies.set("theme", theme);
};

export default setGlobalTheme;
