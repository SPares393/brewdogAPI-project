import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <p className={styles.para}>App works</p>
    </>
  );
}

export default App;
