import { IonIcon } from "@ionic/react"
import { home, mail, phonePortrait } from "ionicons/icons"
import ReactWhatsapp from "react-whatsapp"

const Footer = () => {
    return (
        <div className="container-fluid footer mt-5">
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
                    <p>                        <button className="link_btn"><a href="https://www.facebook.com/ProspectPalms">Facebook</a></button>
                        &nbsp;|&nbsp;
                        <ReactWhatsapp className="link_btn" number="+263782226696" message="Good day, wanted to enquire about your maternity services?"><a href="">Whatsapp</a></ReactWhatsapp>
                    </p>
                    <p> All rights reserved © ProspectPalms {new Date().getFullYear()}</p>
                </div>
                <div className="col-sm">
                    <p>
                        Designed</p><button className="link_btn"><a href="https://aurorasystems.co.zw" target="blank">@Aurora</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer