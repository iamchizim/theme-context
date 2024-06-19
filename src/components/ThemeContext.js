import React from "react";
import { useContext, useState, createContext } from "react";

const ThemeContext = createContext()

function ThemeProvider ({children}){
   const [theme, setTheme] = useState("light")
   function changeTheme() {
    setTheme((prevTheme) => {
      if (prevTheme === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  }

    return(
        <ThemeContext.Provider value= {{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export{ThemeContext, ThemeProvider} ;