import { FC } from "react";
import { Button } from "react-bootstrap";
import { bg } from "../Components/cssBundled";
import { business, shield, stopwatch, watch } from "ionicons/icons";
import { IonFab, IonIcon } from "@ionic/react";
import { Fade } from "react-awesome-reveal";
import ReactWhatsapp from "react-whatsapp";
const Home: FC = () => {
  const bgImg = bg("https://ellatean.sirv.com/website/images/welcome.webp");
  return (
    <div className="container-fluid">
      <Fade direction="down">
        <div
          className="page row d-flex text-center align-items-center"
          style={bgImg}
        >
          <div className="col-sm">
            <ReactWhatsapp className="btn btn-primary" number="+263782226696" message="Hi, i want to book at your facility. What are the requirements?">Book Now</ReactWhatsapp>
          </div>
        </div>
      </Fade>
      {/* <Fade direction="down">
      <div className="text-center containerratio ratio-21x9">
          <iframe className="rounded " src="https://www.youtube.com/embed/zsa0D23V5_Y" title="Prospect Palms: Virtual walk in" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
          </div>
      </Fade> */}
      <Fade direction="down">
        <div className="container align-items-center  text-center mt-5 mb-5">
          <div>
            <h1 className="display-2">About Us</h1>
            <p>
              Prospect Palms is a visionary maternity hospital that offers a
              range of world class maternity and related services under one
              roof. Our aspirations are based on empathy and compassion when
              delivering holistic care from the moment of entering our premises
              to discharge. We take pride in our high quality infrastructure and
              services
            </p>
          </div>
        
          <div className="row">
            <div className="col-sm">
              <IonIcon icon={business}  size="large" />
              <p>
                Open 7 days
                <br />a week
              </p>
            </div>
            <div className="col-sm">
              <IonIcon icon={shield}  size="large" />
              <p>
                Accepting all major
                <br /> insurance plans
              </p>
            </div>
            <div className="col-sm">
              <IonIcon icon={stopwatch}  size="large" />
              <p>
                Zero waiting
                <br />
                Times
              </p>
            </div>
          </div>
          <br />
          <Button variant="primary"><a href="blog" className="text-white">Read more</a></Button>
        </div>
      </Fade>
      <Fade direction="down">
        <div className="container mt-5 mb-5 text-center">
          <div>
            <h1 className="display-1">Services</h1>
          </div>
          <div className="row">
            <div className="col-sm">
            <img className="Sirv rounded picBorder mb-2" data-src="https://ellatean.sirv.com/website/images/_LD_1716.webp" alt="" />
              <br />
              <p>
                Waterbirth
              </p>
            </div>
            <div className="col-sm">
            <img className="Sirv rounded picBorder mb-2" data-src="https://ellatean.sirv.com/website/images/0T7A7763.webp" alt="" />
            <br/>
              <p>Consultation</p>
            </div>
            <div className="col-sm">
            <img className="Sirv rounded picBorder mb-2" data-src="https://ellatean.sirv.com/website/images/0T7A7733.webp" alt="" />
            <br/>
              <p>Checkups</p>
            </div>
          </div>
          <Button><a href="services" className="text-white">More Services</a></Button>
        </div>
      </Fade>
      <Fade>
        <div className="container text-center bold">
            <div>
                <h1 className="display-1">Medical Aid</h1>
                <p>We accept the following</p>
            </div>
            <div className="row">
                <div className="col-sm">
                    <p>CIMAS</p>
                    <p>MASCA</p>
                    <p>PSMAS</p>
                    <p>FBC Health</p>
                </div>
                <div className="col-sm">
                    <p>FML</p>
                    <p>FLIMAS</p>
                    <p>Alliance</p>
                    <p>Cellmed</p>
                </div>
                <div className="col-sm">
                    <p>Minerva</p>
                    <p>Generation Health</p>
                    <p>Maisha</p>
                    <p>EMF</p>
                </div>
            </div>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
