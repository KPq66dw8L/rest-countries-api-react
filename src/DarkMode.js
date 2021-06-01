import React from "react"
import "./css/DarkMode.css";
import moonIconBlack from "./assets/icon-moon-black.svg"

const DarkMode = () => {
    let clickedClass = "clicked"
    const body = document.body
    const lightTheme = "light"
    const darkTheme = "dark"
    let theme

    // Get desired elements
    var element = document.body.getElementsByClassName('subCard');

    // Iterate through the retrieved elements and add the necessary class names.
    // for(var i = 0; i < element.length; i++)
    // {
    //     element[i].classList.add('anotherClass');
    //     console.log(element[i].className);
    // }
    

    console.log(element)

    if (localStorage) {
        theme = localStorage.getItem("theme")
    }
    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
        for(var i = 0; i < element.length; i++)
        {
            element[i].classList.add(theme);
        }
    } else {
        body.classList.add(lightTheme)
        for(var i = 0; i < element.length; i++)
        {
            element[i].classList.add(lightTheme);
        }
    }

    const switchTheme = e => {
        if (theme === darkTheme) {
          body.classList.replace(darkTheme, lightTheme)
          for(var i = 0; i < element.length; i++)
            {
                element[i].classList.replace(darkTheme, lightTheme);
            }
          e.target.classList.remove(clickedClass)
          localStorage.setItem("theme", "light")
          theme = lightTheme
        } else {
          body.classList.replace(lightTheme, darkTheme)
          for(var i = 0; i < element.length; i++)
            {
                element[i].classList.replace(lightTheme, darkTheme)
            }
          e.target.classList.add(clickedClass)
          localStorage.setItem("theme", "dark")
          theme = darkTheme
        }
      }

  return <>
  <img src={moonIconBlack}></img>
  <a href='#' className={theme === "dark" ? clickedClass : ""}
  id="darkMode"
  onClick={e => switchTheme(e)}>Dark Mode</a>
  </>
}

export default DarkMode