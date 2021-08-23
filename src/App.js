import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import ResultCard from './components/ResultCard';
import SearchCard from './components/SearchCard';

const URL_FETCH = 'https://en.wikipedia.org/w/rest.php/v1/search/title?limit=10&q=';

function App() {
  const [itemsList, setItemsList] = useState([]);
  const [searchTopic, setSearchTopic] = useState('Wikimedia');
  useEffect(() => {    
    getWikiResults(searchTopic);
  }, []);

  async function getWikiResults(query) {
    const rawResponse = await fetch(URL_FETCH + query);
    const results = await rawResponse.json();
    const pages = results.pages;

    setItemsList(pages);
  }


  function changeTopicHandler(e) {
    setSearchTopic(e.target.value);
  }

  function submitSearch() {
    getWikiResults(searchTopic);
  }


  return (
    <main>
      <h1>Hello Wiki!</h1>
      
      <div className="result-list">
      { itemsList.map(item => {
        return (
          <ResultCard item={item} key={item.key} />
        );
        
      }) }
      <SearchCard searchTopic={searchTopic}  changeTopicHandler={changeTopicHandler}  submitSearch={submitSearch} />
      </div>
      
    </main>
  );
}

export default App;
