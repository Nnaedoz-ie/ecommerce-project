


const Bottombanner=({Banner})=>{
    return(
        <div>
            <div className="down-banner-container" style={{background:`url(${Banner.images}) no-repeat center/cover`,marginLeft:"33px",marginRight:"0", marginBottom:"20px", marginTop:"30px", height:"200px", width:"350px"}}>
            {/* <img src={Banner.images} alt="" style={{width:"400px", height:"200px"}}/> */}
            </div>
        </div>
    )
}
export default Bottombanner;