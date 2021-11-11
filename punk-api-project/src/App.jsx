import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import BeerCard from './components/BeerCard/BeerCard';
import BeerFilters from './components/BeerFilters/BeerFilters';
import CardEnd from './components/CardEnd/CardEnd';
import Footer from "./components/Footer/Footer";

const App = () => {
  const [ listedBeers, setListedBeers ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState("")

  const createBeerCard = (beer) => {
    return <BeerCard beer={beer} key={beer.id} />
  }

  const getBeers = (filter) => {
    fetch(`https://api.punkapi.com/v2/beers${filter}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setListedBeers(jsonResponse);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getBeers("")
  }, [])

  const filterAllBeers = () => {
    setListedBeers(getBeers(""))
  }

  const filterHighABV = () => {
    setListedBeers(getBeers("?abv_gt=7.5"))
  }

  const filterDarkBeers = () => {
    setListedBeers(getBeers("?ebc_gt=100"))
  }

  const filterClassicRange = () => {
    setListedBeers(getBeers("?brewed_before=01-2010"))
  }

  const filterBySearch = (e) => {
    const searchQuery = async () => {
      const query = await e.target.value;
      setSearchTerm(query);
      setListedBeers(
          query ? getBeers(`?beer_name=${query}`) : getBeers("")
      )
      console.log(query);
    };
    searchQuery();
  }

  return (
    <div className={styles.Body}>
      <section className={styles.NavBar}>
        <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterBySearch={filterBySearch}/>
      </section>
      {/* <section className={styles.blur}></section> */}
      <section className={styles.BeerContainer}>
        <BeerFilters clicked={[ filterAllBeers, filterHighABV, filterDarkBeers, filterClassicRange ]}/>
        {listedBeers && listedBeers.map(createBeerCard)}
        <CardEnd />
      </section>    
      <section className={styles.Footer}>
        <Footer />
      </section>  
    </div>
  );
}

export default App;
