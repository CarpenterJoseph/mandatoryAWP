import React, {useEffect, useState} from 'react';
const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState("No data :(");
  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/hello`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data.msg);
    }
    getData();
  }, []); 

  return (
    <>
      <h1>MERN App!</h1>
      <p>Data from server: {data}</p>

      <form>
        <label for="fname">Name</label>
        <input type="text" id="fname" name="fname"/>
        <label htmlFor="fcontent">Content</label>
        <input type="text" id="fcontent" name="fcontent"/>
      </form>

    </>
  );
}

export default App;
