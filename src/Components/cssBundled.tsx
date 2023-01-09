export const bg=(image:any)=>{

    const imagePro:{}={
        backgroundImage:`url('${image}')`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center"
    }
    return imagePro
}