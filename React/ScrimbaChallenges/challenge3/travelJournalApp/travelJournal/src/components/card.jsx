    function Card({...props}) {
    return (
        <div className='card-container'>
        <article className="journal-entry">
                <div className="main-image-container">
                    <img 
                        className="main-image"
                        src={props.img} 
                        alt={props.alt} 
                    />
                </div>
                <div className="info-container">
                    <img 
                        className="marker"
                        src="./marker.png" 
                        alt="map marker icon"
                    />
                    <span className="country">{props.country}</span>
                    <a href={props.href}>View on Google Maps</a>
                    <h2 className="entry-title">{props.entryTitle}</h2>
                    <p className="trip-dates">{props.tripDates}</p>
                    <p className="entry-text">{props.entryText}</p>
                </div>
                
            </article>
        </div>
    );
    }

    export default Card;
