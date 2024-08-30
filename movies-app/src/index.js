import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './StarRating';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} color='red' size='50' message={['Terrible' , 'Bad' , 'Okay' , 'Good' , 'Excelent']}/> */}
  </React.StrictMode>
);


// MOUNT - INITIAL RENDER - componenta este randata pentru prima data(faza de nastere). De asemenea props si state-urile sunt create
//RE-RENDER - OPTIONALA - props sau state sunt modificate/updatate
//UNMOUNT - cand componenta este distrusa. 


