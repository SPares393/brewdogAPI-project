import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import BeerCard from './components/BeerCard/BeerCard';
import beers from './beers';

const App = () => {
  return (
    <>
      <section className={styles.NavBar}>
        <NavBar/>
      </section>
      <section className={styles.BeerContainer}>
        <BeerCard 
          name={beers[0].name}
          abv={beers[0].abv}
          image_url={beers[0].image_url}
          tagline={beers[0].tagline}
          description={beers[0].description}
        />
                <BeerCard 
          name={beers[1].name}
          abv={beers[1].abv}
          image_url={beers[1].image_url}
          tagline={beers[1].tagline}
          description={beers[1].description}
        />
                <BeerCard 
          name={beers[2].name}
          abv={beers[2].abv}
          image_url={beers[2].image_url}
          tagline={beers[2].tagline}
          description={beers[2].description}
        />
      </section>      
    </>
  );
}

export default App;
