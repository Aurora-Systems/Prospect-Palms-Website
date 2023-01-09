import { IonIcon } from "@ionic/react"
import { home, mail, phonePortrait } from "ionicons/icons"

const Footer=()=>{
    return(
        <div className="container  mt-5">
            <div className="row">
                <div className="col-sm">
                    <p>
                        <IonIcon icon={phonePortrait}  /> +263 78 222 6696
                    </p>
                    <p>
                        <IonIcon icon={mail} /> enquiries@prospectpalms.org
                    </p>
                    <p>
                        <IonIcon icon={home} /> 258 Smuts Rd, Waterfalls, Harare, Zimbabwe
                    </p>
                </div>
                <div className="col-sm">
                    
                </div>
                <div className="col-sm">
                    
                </div>
            </div>
        </div>
    )
}

export default Footer