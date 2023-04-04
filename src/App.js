//import logo from './logo.svg';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';

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
          <Route exact path='/signin' render={() =><SignInForm/>} />
          <Route exact path='/signup' render={() =><SignUpForm />} />
          <Route render={()=> <p>Page Not Found! <i class="fa-solid fa-face-sad-tear"></i></p>}></Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;