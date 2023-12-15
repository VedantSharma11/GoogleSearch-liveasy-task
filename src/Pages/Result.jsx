import React from 'react'
import axios from 'axios';
import { useEffect ,useState} from 'react';
import {useLocation,useNavigate} from 'react-router-dom';
import Card from '../components/Card'

const Result = () => {
  const location = useLocation();
  const navigate= useNavigate();
  const  query  = location?.state?.query;
 
  const [searchResults, setSearchResults] = useState([]);

  const handleButtonClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
          params: {
            cx: process.env.REACT_APP_CX,
            key: process.env.REACT_APP_API_KEY,
            q: query,
          },
        });

        const responseData = response.data;

        setSearchResults(responseData.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className='res-container'>
      <div className='back'>
        <h3>Search Results for <span className='query'>{query}</span> ...</h3>
        <button onClick={handleButtonClick}>Go Back</button>
      </div>
      <div className='res-inner'>
      {searchResults.map((result, index) => (
          <Card
            key={index}
            title={result.title}
            link={result.link}
            snippet={result.snippet}
            url={result.formattedUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Result