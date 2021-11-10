import React, { useState } from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import BeerCard from './components/BeerCard/BeerCard';
import BeerFilters from './components/BeerFilters/BeerFilters';
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

  const filterAllBeers = () => {
    setListedBeers(getBeers(""))
  }

  const filterHighABV = () => {
    setListedBeers(getBeers("?abv_gt=6"))
  }

  const filterHighAcidity = () => {
    // setListedBeers(beers.filter(beer => beer.ph < 4))
    setListedBeers(getBeers("?ph_lt=4"))
  }

  const filterClassicRange = () => {
    setListedBeers(getBeers("?brewed_before=01-2010"))
  }

  const filterBySearch = (e) => {
    const searchQuery = async () => {
      const query = await e.target.value;
      setSearchTerm(query);
      setListedBeers(
          getBeers("").filter((beer) =>
              beer.name.toLowerCase().includes(query.toLowerCase())
          )
      );
      console.log(query);
    };
    searchQuery();
  }

  return (
    <div className={styles.Body}>
      <section className={styles.NavBar}>
        <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterBySearch={filterBySearch}/>
      </section>
      <section className={styles.BeerContainer}>
        <BeerFilters clicked={[ filterAllBeers, filterHighABV, filterHighAcidity, filterClassicRange ]}/>
        {listedBeers && listedBeers.map(createBeerCard)}
      </section>    
      <section className={styles.Footer}>
        <Footer />
      </section>  
    </div>
  );
}

export default App;
