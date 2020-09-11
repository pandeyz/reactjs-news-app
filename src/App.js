import React, { useState, useEffect } from 'react';
import AgenciesComponent from './components/AgenciesComponent';
import {APIKEY} from './config/config';
import axios from 'axios';
import './App.css';
function App() {

  // To handle loader / loading indicator 
  const [isLoading, setLoading] = useState(false);

  // To hold the list of agencies
  const [agencies, setAgencies] = useState([]);

  useEffect(() => {
    fetchAgencies();
  }, []);

  // To fetch the list of news agencies
  const fetchAgencies = () => {

    // Show loader
    setLoading(true);

    axios.get(`https://newsapi.org/v2/sources?apiKey=${APIKEY}`)
      .then(res => {
        if (res.data.status === 'ok') {
          const agencies = res.data.sources;
          setAgencies(agencies);
        }

        // Hide loader
        setLoading(false);
      });
  }

  return (
    <div className="container">
      <div className="app-heading"><h3>News Agencies</h3></div>
      {
        ( isLoading )
        ?
          <div className="txt-center">Loading...</div>
        :
          <AgenciesComponent newsAgencies={agencies} />
      }
    </div>
  );
}

export default App;
