function Card(props) {
    const {image, description} = props;

    return (
        <div className="card">

            <div className="card-box">
                <img src={image} className="card-image" alt={"test"}/>
            </div>

            <div className="card-description">
                {description}
            </div>
        </div>
    );
}

export default Card;
