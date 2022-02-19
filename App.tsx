import React, {useEffect} from 'react';
import AppNavigation from "./src/navigate/AppNavigation";
import {getData} from "./src/actions/template";

const App = () => {
  useEffect(() => {
    getData();
  }, [])
  return (
      <AppNavigation />
  )
}

export default App;
