/** 
  AgenciesComponents
  To render the list of agencies  
**/

import React from 'react';

function AgenciesComponent(props) {
  return (
    <ul>
      {
        ( props.newsAgencies.length > 0 ) 
        ?
          props.newsAgencies.map((agency, index) => <li key={index}><a href={agency.url}>{agency.name}</a></li>)
        :
          <li>There is no news agency available at this moment!</li>
      }
    </ul>
  );
}

export default AgenciesComponent;
