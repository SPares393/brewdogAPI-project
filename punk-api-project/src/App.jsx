import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import BeerCard from './components/BeerCard/BeerCard';
import BeerFilters from './components/BeerFilters/BeerFilters';
import beers from './beers';

const App = () => {

  const createBeerCard = (beer) => {
    return <BeerCard beer={beer}/>
  }

  return (
    <>
      <section className={styles.NavBar}>
        <NavBar/>
      </section>
      <section className={styles.BeerContainer}>
        <BeerFilters />
        {beers.map(createBeerCard)}
      </section>      
    </>
  );
}

export default App;
