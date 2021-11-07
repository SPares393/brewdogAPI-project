import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import BeerCard from './components/BeerCard/BeerCard';
import beers from './beers';

const App = () => {

  const createBeerCard = (beer) => {
    return <BeerCard 
      name={beer.name}
      abv={beer.abv}
      image_url={beer.image_url}
      tagline={beer.tagline}
      description={beer.description}
      key={beer.id}
    />
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
