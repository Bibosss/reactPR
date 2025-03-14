import { useEffect, useState } from "react";
import Select from "react-select";
import css from "./ThemeSwitcher.module.css"

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState("light");

    const options = [
    { value: "light", label: "Світлий" },
    { value: "dark", label: "Темний" },
  ];

    const handleChange = (selectedOption) => {
    setTheme(selectedOption.value);
  };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        document.documentElement.style.setProperty("--bg-color", theme === "dark" ? "#000" : "#fff");
        document.documentElement.style.setProperty("--text-color", theme === "dark" ? "#fff" : "#000");
    }, [theme]);

    return (
        <div
      style={{
        color: theme === "dark" ? "#fff" : "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Select
        options={options}
        onChange={handleChange}
        defaultValue={options[0]}
      />
    </div>
    )
}

export default ThemeSwitcher