import React, {useState} from "react"
import boxGroupOne from "./AboutBoxes"
import boxGroupThree from "./AboutBoxes"
import boxGroupTwo from "./AboutBoxes"
import AboutInfoNumeber from "./AboutInfoNumeber"

function About() {
  const [currentBox, setcurrentBox] = useState(boxGroupOne)

  return (
    <div className="col-12 about">
      <div> {currentBox}</div>
      <div className="col-12 dots">
        <span
          onClick={() => {
            console.log(1)
            setcurrentBox(boxGroupOne)
          }}
        ></span>
        <span
          onClick={() => {
            console.log(2)
            setcurrentBox(boxGroupTwo)
          }}
        ></span>
        <span
          onClick={() => {
            setcurrentBox(boxGroupThree)
          }}
        ></span>
      </div>
      <h1 className="header">Մեր մասին</h1>
      <div className="col-12 about-info-number row">
        <AboutInfoNumeber
          className="rol rol-one"
          number="200"
          info=" 200 հաջող 
մեկնարկված 
պռոեկտներ"
        />
        <AboutInfoNumeber
          className="rol rol-two"
          number="2017"
          info=" Մենք շուկայում 
ենք 2017թ -ից"
        />
        <AboutInfoNumeber
          className="rol rol-three"
          number="250"
          info=" Ավելի քան 250
գոհ հաճախորդ"
        />
        <AboutInfoNumeber
          className="rol rol-four"
          number="124"
          info=" Մենաք ունենք 124 
ավարտած աշակերներ "
        />
      </div>
    </div>
  )
}

export default About
