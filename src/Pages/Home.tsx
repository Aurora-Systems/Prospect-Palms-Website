import { FC } from "react";
import { Button } from "react-bootstrap";
import { bg } from "../Components/cssBundled";
import { business, shield, stopwatch, watch } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Fade } from "react-awesome-reveal";
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
            <Button variant="primary">Book Now</Button>
          </div>
        </div>
      </Fade>
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
          <Button variant="primary">Read More</Button>
        </div>
      </Fade>
      <Fade direction="down">
        <div className="container mt-5 mb-5 text-center">
          <div>
            <h1 className="display-1">Services</h1>
          </div>
          <div className="row">
            <div className="col-sm">
            <img className="Sirv rounded" data-src="https://ellatean.sirv.com/website/images/_LD_1716.webp" alt="" />
              <br />
              <p>
                Waterbirth
              </p>
            </div>
            <div className="col-sm">
            <img className="Sirv rounded" data-src="https://ellatean.sirv.com/website/images/0T7A7763.webp" alt="" />
            <br/>
              <p>Consultation</p>
            </div>
            <div className="col-sm">
            <img className="Sirv rounded " data-src="https://ellatean.sirv.com/website/images/0T7A7733.webp" alt="" />
            <br/>
              <p>Checkups</p>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="container text-center bold">
            <div>
                <h1 className="display-1">Insurance</h1>
                <p>We accept the following insurance plans</p>
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
