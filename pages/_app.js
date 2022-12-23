
import { useState } from 'react';
import AppContext from '../src/utilities/Functions/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [searchValue, setSearchValue] = useState("");
  const [IsSearch, setIsSearch] = useState(false);


  return <AppContext.Provider value={{ searchValue, setSearchValue, IsSearch, setIsSearch }}>
    <Component {...pageProps} />
  </AppContext.Provider>
}

export default MyApp
