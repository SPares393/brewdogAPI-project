import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import BeerCard from './components/BeerCard/BeerCard';

const App = () => {
  return (
    <>
      <NavBar />
      <section>
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
