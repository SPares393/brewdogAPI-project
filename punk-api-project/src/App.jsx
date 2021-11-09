import React, { useState } from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import BeerCard from './components/BeerCard/BeerCard';
import BeerFilters from './components/BeerFilters/BeerFilters';
import beers from './beers';

const App = () => {
  const [ listedBeers, setListedBeers ] = useState(beers)
  const [ searchTerm, setSearchTerm ] = useState("")

  const createBeerCard = (beer) => {
    return <BeerCard beer={beer} />
  }

  const filterAllBeers = () => {
    setListedBeers(beers)
  }

  const filterHighABV = () => {
    setListedBeers(beers.filter(beer => beer.abv > 6))
  }

  const filterHighAcidity = () => {
    setListedBeers(beers.filter(beer => beer.ph < 4))
  }

  const filterClassicRange = () => {
    setListedBeers(beers.filter(beer => beer.first_brewed.split("/")[1] <= 2010))
  }

  const filterBySearch = (e) => {
    const searchQuery = e.target.value;
    setSearchTerm(searchQuery);
    console.log(searchTerm);
    setListedBeers(beers.filter(beer => beer.name.toLowerCase().includes(searchTerm.toLowerCase())))
  }

  return (
    <>
      <section className={styles.NavBar}>
        <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterBySearch={filterBySearch}/>
      </section>
      <section className={styles.BeerContainer}>
        <BeerFilters clicked={[ filterAllBeers, filterHighABV, filterHighAcidity, filterClassicRange ]}/>
        {listedBeers.map(createBeerCard)}
      </section>      
    </>
  );
}

export default App;
