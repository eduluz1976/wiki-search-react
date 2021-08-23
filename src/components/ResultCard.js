import Image from "./Image";

import './ResultCard.css';


export default function ResultCard(props) {

    const item = props.item;

    if (!item.thumbnail || !item.thumbnail.url) {
        item.thumbnail = {url: '/placeholder.jpeg'};
    }

    if (!item.description) {
        item.description = '';
    }

    


    return (
        <div className="result-card-container">
            <div className="result-card-thumbnail">
                <Image   src={item.thumbnail.url }/>
            </div>
            <div className="result-card-body">
                <h2>{item.title}</h2>
                {item.description}
            </div>
            
            
            
            
        </div>
    );
}