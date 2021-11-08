import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import BeerCard from './components/BeerCard/BeerCard';
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
        {beers.map(createBeerCard)}
      </section>      
    </>
  );
}

export default App;
