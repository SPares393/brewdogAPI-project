import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import BeerCard from './components/BeerCard/BeerCard';
import BeerCardFull from './components/BeerCardFull/BeerCardFull';
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

  const createBeerCardFull = (beer) => {
    return <BeerCardFull 
      name={beers[0].name}
      abv={beers[0].abv}
      image_url={beers[0].image_url}
      tagline={beers[0].tagline}
      description={beers[0].description}
      first_brewed={beers[0].first_brewed}
      ph={beers[0].ph}
      ibu={beers[0].ibu}
      ebc={beers[0].ebc}
      key={beers[0].id}
    />
  }

  return (
    <>
      <section className={styles.NavBar}>
        <NavBar/>
      </section>
      <section className={styles.BeerContainer}>
        <BeerCardFull 
          name={beers[0].name}
          abv={beers[0].abv}
          image_url={beers[0].image_url}
          tagline={beers[0].tagline}
          description={beers[0].description}
          first_brewed={beers[0].first_brewed}
          ph={beers[0].ph}
          ibu={beers[0].ibu}
          ebc={beers[0].ebc}
          key={beers[0].id}
        />
        {beers.map(createBeerCard)}
      </section>      
    </>
  );
}

export default App;
