import React, { useEffect, useState } from 'react';

const App = () => {
  const [data , setData] = useState([])
  useEffect(() => {
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setData(data))
  },[])
 
  return (
    <div>
      {
         data.map(product => <img src={product.Company_Logo} />)
      }
    </div>
  );
};

export default App;