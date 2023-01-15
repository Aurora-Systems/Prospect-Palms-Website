import ReactWhatsapp from "react-whatsapp"

const Contact = () => {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-sm text-center">
                    <h1 className="display-1 ">Contact Us</h1>
                    <ReactWhatsapp className="rounded me-2" number="+26782226696" message="Good day, wanted to enquire about your facilities"><img className="Sirv m-2" width="50" data-src="https://ellatean.sirv.com/website/images/whatsapp%20(1).png" alt="" /></ReactWhatsapp>
                    <button className="rounded"><a href="https://www.facebook.com/ProspectPalms" target="_blank"><img className="Sirv m-2" width="50" data-src="https://ellatean.sirv.com/website/images/facebook.png" alt="" /></a></button>
                    <br/>
                    <br/>
                    <a href="mailto:enquiries@prospectpalms.org">enquiries@prospectpalms.org</a>
                    <br/>
                    <a href="tel:+263782226696">+263 78 222 6696 : Admin</a>
                    <br/>
                    <a href="tel:+263714774881">+263 71 477 4881 : Reception</a>
                    <br/>
                    <a href="tel:+263771389248">+263 77 138 9248 : Midwives</a>

                    
                </div>
                <div className="col-sm">
                    <iframe height="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.094871914437!2d31.04863631432043!3d-17.88101688248103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a36bf7b3431d%3A0x7d6e1c43d42f835a!2sProspect%20Palms%20Private%20Maternity%20Hospital!5e0!3m2!1sen!2szw!4v1673783203760!5m2!1sen!2szw" className="rounded ratio ratio-16x9" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact