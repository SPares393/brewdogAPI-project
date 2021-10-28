import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import BeerCard from './components/BeerCard/BeerCard';

const App = () => {
  return (
    <>
      <section className={styles.NavBar}>
        <NavBar/>
      </section>
      <section className={styles.BeerContainer}>
        <BeerCard />
        <BeerCard />
        <BeerCard />
        <BeerCard />
        <BeerCard />
        <BeerCard />
      </section>
      
    </>
  );
}

export default App;
