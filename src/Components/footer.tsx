import { IonIcon } from "@ionic/react"
import { home, mail, phonePortrait } from "ionicons/icons"
import ReactWhatsapp from "react-whatsapp"

const Footer = () => {
    return (
        <div className="container  mt-5">
            <div className="row text-center">
                <div className="col-sm">
                    <p>
                        <IonIcon icon={phonePortrait} /> +263 78 222 6696
                    </p>
                    <p>
                        <IonIcon icon={mail} /> enquiries@prospectpalms.org
                    </p>
                    <p>
                        <IonIcon icon={home} /> 258 Smuts Rd, Waterfalls, Harare, Zimbabwe
                    </p>
                </div>
                <div className="col-sm ">
                    <p>Visit us on</p>
    <p>                        <a href="https://www.facebook.com/ProspectPalms">Facebook</a>
                        &nbsp;|&nbsp;
                        <ReactWhatsapp number="+263782226696" message="Good day, wanted to enquire about your maternity services?"><a href="">Whatsapp</a></ReactWhatsapp>
                    </p>
                    <p> All rights reserved © ProspectPalms {new Date().getFullYear()}</p>
                </div>
                <div className="col-sm">
                    <p>
                    Designed</p> <a href="https://aurorasystems.cf" target="blank">@Aurora</a>
                </div>
            </div>
        </div>
    )
}

export default Footer