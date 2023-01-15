import { Accordion, Button } from "react-bootstrap"
import ReactWhatsapp from "react-whatsapp"

const FAQS=()=>{
    return(
        <div className="container">
            <div>
                <h1 className="display-1">Frequently Asked Questions</h1>
            </div>
            <Accordion className="container">
            <Accordion.Item eventKey="5">
                    <Accordion.Header>Any important information I should know before coming to book?</Accordion.Header>
                    <Accordion.Body>
                        <p>Booking days are only on Sunday, Monday, Wednesday and Fridays. You are required to have booked an appointment before hand. Please bring a scan and a minimum of $15 to start your booking process. Our initial consultation is an hour long so make sure you have time to spare. We recommend coming with your partner/Next of kin!</p>
                        <ReactWhatsapp className="btn btn-primary" number="+263782226696" message="Hi, i want to book at your facility. What are the requirements?">Book Now</ReactWhatsapp>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Where are you located?</Accordion.Header>
                    <Accordion.Body>
                        <p>We are located in Waterfalls at number 258 Smuts Road, Harare , Zimbabwe. If coming from the CBD head straight down Seke road till you get to Caledon, turn right at Zuva Service station and follow the road till you get to our road signs.</p>
                        <Button>Take me there</Button>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Can I have a normal delivery after C/section?</Accordion.Header>
                    <Accordion.Body>
                        <p>Yes, we perfom VBACs. A consultation is needed to asses whether its possible for the patient.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Can I transmit HIV to my unborn child?</Accordion.Header>
                    <Accordion.Body>
                        <p>You can but there are measures which you can take to prevent that. Preventative measures can be discussed during your ante-natal visits. </p>
                        <Button>Learn more</Button>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How much is it to give birth at your facility?</Accordion.Header>
                    <Accordion.Body>
                        <p>Click the button below to get our latest price guide!</p>
                        <Button>Price Guide</Button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default FAQS