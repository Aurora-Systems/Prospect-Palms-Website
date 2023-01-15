import { Fade } from "react-awesome-reveal"


const Virtual=()=>{
    return(
        <div className="container text-center">
            <h1 className="display-1">Virtual Tour</h1>
            <p>Take a sneek peak!</p>
            <Fade direction="down">
      <div className="text-center container ratio ratio-16x9">
          <iframe className="rounded " src="https://www.youtube.com/embed/zsa0D23V5_Y" title="Prospect Palms: Virtual walk in" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
          </div>
      </Fade>
        </div>
    )
}

export default Virtual