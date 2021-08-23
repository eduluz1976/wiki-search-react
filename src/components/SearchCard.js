
import './SearchCard.css';


export default function SearchCard(props) {
    
    const searchTopic = props.searchTopic;
    const changeTopicHandler = props.changeTopicHandler;
    const submitSearch = props.submitSearch;

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            submitSearch();
        }
      }


    return (
        <div className='search-card-container'>
            <input id='searchTopic' value={searchTopic} 
                className='search-card-input-text'
                onChange={changeTopicHandler} placeholder="Search for pages containing [x]..." 
                onKeyDown={handleKeyDown}
                /> <br/>
            <span className="search-card-info">Press <i>Enter</i> to submit your query...</span>
        </div>  
    );
}