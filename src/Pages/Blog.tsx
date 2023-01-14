import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import  { medium_url } from "../utils/medium";

const Blog=()=>{
    const [data,setData]=useState([])
    let htmlString = "<h1><b>test</b></h1>";
    
    useEffect(()=>{
        axios.get(medium_url).then(res=>{
            setData(res.data.items)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    function getText(html:any){
        var divContainer= document.createElement("div");
        divContainer.innerHTML = html;
        return divContainer.textContent || divContainer.innerText || "";
    }

    return(
        <div className="container page text-center">
            <div>
                <h1 className="display-1">Blog</h1>
            </div>
                <div className=" row d-flex justify-content-center align-items-center">
                {
                    data.map((item:any,index) =>{
                      
                        return(
                            <div className="col-sm text-start"  key={index}>
                                <div className="card card-deck cardW">
                                    <img className="sirv" src={item.thumbnail}/>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                           <b>{item.title}</b> 
                                        </h5>
                                        <p>{getText(item.description.substring(0,240))}...</p>
                                    </div>
                                    <div className="card-footer">
                                        <Button><a href={item.link} className="text-white" target="_blank">Read more</a></Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
        </div>
    )
}

export default Blog;