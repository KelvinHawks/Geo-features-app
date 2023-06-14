export default function Content(props){
    
    return(
    <div className="container-div-content">
        <div className="container-img">
            <img src={props.feature.img} alt="Fuji"/>
        </div>
        <div className="container-content">
            <div className="header-top">
                <i class="fa-solid fa-star"></i><p>{props.feature.timing}</p>
            </div>
            <h2>{props.feature.header}</h2>
            <h5>{props.feature.date}</h5>
            <p className="container-p">{props.feature.desc}</p>
        </div>
    </div>
)
}