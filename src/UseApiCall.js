import { useState, useEffect } from "react";

function UsehandleApiCall(url, type, body) {
 const [response, setresponse] = useState(null);
 const [error, setError] = useState(null);

 useEffect(() => {
  fetchData();
 }, [url]);

 const fetchData = async () => {
  try {
   const response = await fetch(url, {
    method: type,
    body,
   });
   const result = await response.json();
   setresponse(result);
  } catch (error) {
   setError(error);
  }
 };
 return { response, error };
}
export default UsehandleApiCall;