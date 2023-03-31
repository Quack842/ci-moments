import logo from './logo.svg';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      {/* REMEMBER to add to the package.json file, other wise won't run in Heroku:
       "engines": {
          "node": "16.18.0"
        }, */}
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path='/' render={() => <h1>Home Page</h1>}/>
          <Route exact path='/signin' render={() => <h1>Sign In</h1>}/>
          <Route exact path='/signup' render={() => <h1>Sign Up</h1>}/>
          <Route render={()=> <p>Page Not Found! <i class="fa-solid fa-face-sad-tear"></i></p>}></Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;