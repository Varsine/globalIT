import React from "react"
import AboutBox from "./AboutBox"
import imgOne from "../../image/aboutImgOne.png"
import imgTwo from "../../image/aboutImgTwo.png"
import imgThree from "../../image/aboutImgThree.png"

const pgfOne = `Մեր մասնագետները
ամեն ինչ կանեն որ ձեզ ապահովեն
բարձրորակ կրթությամբ և ծառայություններով։
Երկար տարիների փորձը և բարձորակ
 աշխատանքային մոտեցումը կտա իր արձյունքը։`

const pgfTwo = `Մեր որակյալ աշխատակազմը
    երաշխավորում է բարձրոակ ծառայություների
    մատոցում։ Եթե դուք վստահել եք ձեր աշխատանքը
    մեզ ապա կարող եք վստահ լինել
    որ արձյունքը ձեզ կգոհացնի։`
const pgfThree = `Մենք ունենք ծառայությունների լայն տեսականի 
որոնցում դուք կգտնեք ձեզ համապատասխանող
տարբերակը;`

function AboutBoxes() {
  const boxInfo = [
    {
      img: imgOne,
      header: "Պրոֆեսիոնալ մոտեցում",
      pgf: pgfOne,
      className: "col-4 about-box one-box",
    },
    {
      img: imgTwo,
      header: "Որակյալ աշխատանք",
      pgf: pgfTwo,
      className: "col-4 about-box two-box",
    },
    {
      img: imgThree,
      header: "Բազմաթիվ ծառայություններ",
      pgf: pgfThree,
      className: "col-4 about-box three-box",
    },
  ]
  return (
    <div className="col-12 about-boxes row">
      {boxInfo.map((obj, index) => {
        return (
          <AboutBox
            className={obj.className}
            img={obj.img}
            header={obj.header}
            paragraf={obj.pgf}
          />
        )
      })}
    </div>
  )
}

export default AboutBoxes
