import { Fade } from "react-awesome-reveal";

const Services = () => {
    return (
        <div className="container ">

            <div className="row page d-flex align-items-center">
                <div className="col-sm">
                    <Fade direction="down" cascade={true}>
                    <h1 className="display-1">
                        Our Services
                    </h1>
                    <ul>
                        <li>Normal Vaginal Delivery - (NVD)</li>
                        <li>Caesarean Section</li>
                        <li>Parent Craft Education And Ante-natal Classes</li>
                        <li>Pre-Pregnancy counselling</li>
                        <li>Post-Natal Checkups</li>
                        <li>Ultrasound Scan</li>
                        <li>Water birth</li>
                    </ul>
                    </Fade>
                </div>
                <div className="col-sm">
                    <Fade direction="right" cascade={true}>
                    <img className="Sirv rounded picBorder " data-src="https://ellatean.sirv.com/website/images/0T7A7733.webp" alt="" />
                    </Fade>
                </div>
            </div>
            <div className="row page d-flex align-items-centre">
                <div className="col-sm">
                    <Fade direction="right">
                    <img className="Sirv picBorder rounded" data-src="https://ellatean.sirv.com/website/images/me.webp" alt="" />
                    </Fade>
                </div>
                <div className="col-sm">
                    <Fade direction="down" cascade={true}>
                    <h1 className="display-1">Coming Soon</h1>
                    <ul>
                        <li>Free Syphllis testing for pregnant mothers</li>
                        <li>Free HIV test for pregnant mothers</li>
                        <li>Family Planning</li>
                        <li>Pharmacy Service</li>
                        <li>VIAC</li>
                    </ul>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Services;