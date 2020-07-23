import React from "react"
import logo from "../../image/logo.png"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className="col-12 footer">
      <div className="footer-top">
        <div className="col-3 one-box">
          <div className="footer-logo">
            <img src={logo} alt="" />
            <span>global</span>
            <span>it</span>
          </div>
          <p>
            ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի
            կողմից: Մենք առաջարկում ենք ծրագրային տարատեսակ լուծումներ, որոնց
            նպատակն է մեծացնել Ձեր բիզնեսի շահութաբերությունը և նպաստել աճին:
            Մեր ստեղծարար թիմը համատեղ ուժերով տալիս Է նորարարական լուծումներ,
            որոնք նպաստում են Ձեր բիզնեսի թիրախային լսարանի ներգրավմանը:
          </p>
        </div>
        <div className="col-2 ">
          <h2>Դասընթացներ</h2>
          <Link className="footer-link" to="">
            Վեբ ծրագրավորում
          </Link>
          <Link className="footer-link" to="">
            Ծրագրավորում
          </Link>
          <Link to="" className="footer-link">
            Մուլտիմեդիա
          </Link>
          <Link className="footer-link" to="">
            Նախագծեր
          </Link>
          <Link to="" className="footer-link">
            Անվճար դասընթացներ
          </Link>
          <Link className="footer-link" to="">
            Այլ Դասընթացներ
          </Link>
          <Link className="footer-link" to="">
            Անվճար Դպրոց 1-4 դասարան
          </Link>
          <Link className="footer-link" to="">
            Անվճար Դպրոց 5-9 դասարան
          </Link>
        </div>
        <div className="col-2 sayt-map">
          <h2>Կայքի Քարտեզ</h2>
          <Link className="footer-link" to="">
            Դասընթացներ
          </Link>
          <Link to="" className="footer-link">
            Մեր մասին
          </Link>
          <Link className="footer-link" to="">
            Վեբ կայքերի պատրաստում
          </Link>
          <Link className="footer-link" to="">
            Հեռախոսային և Դեսքթոփ հավելվածներ
          </Link>
        </div>
        <div className="col-2">
          <h2>Հետադարձ Կապ</h2>
          <p>ք. Երևան Պ. Սևակ 15/1</p>
          <p>ք. Աբովյան գ. Արամուս </p>
          <p className="footer-contact">
            Մշակույթի տուն <br /> +374 55 560 590 <br /> +374 95 355 255 <br />
            +374 94 806 714 <br />
            +374 41 806 714 <br /> +374 43 960 950 <br /> +374 98 960 950 <br />{" "}
            gitedu@bk.ru
            <br /> globalit@gitedu.am
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <p>
            Copyright ©2020 Բոլոր հեղինակային իրավունքները պաշտպանված են: |
            Կայքը պատրաստված է <br />
            "ԳԼՈԲԱԼ ԻՏ" (ՍՊԸ)-ի կողմից, որը հանդիսանում է ընկերության Պաշտոնական
            կայքէջը: Կայքից
            <br /> նույթ տեղադրելիս հղումը gitedu.am-ին պարտադիր է:
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
