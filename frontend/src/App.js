import './App.css'
import { useState } from 'react'
//Using the built in useState hook inside a function component, you can create a piece of state without switching to class components
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'



//Screens
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

//Composants
import Navbar from './components/Navbar'
import Backdrop from './components/BackDrop'
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      {/* React Router signifie une bibliothèque de routage (routing) standard dans React. 
      Cela rend l'interface de l'application synchrone avec l'URL du navigateur. 
      Le React Router vous permet de router clairement le "flux de données" (data flow) dans votre application. 
      Cela équivaut à une affirmation. 
      Si vous avez cette URL, elle sera équivalente à cette Route et l'interface sera comme suit. */}
      <Navbar click={() => setSideToggle(true)} />
      {/* SideDrawer */}
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      {/* Backdrop */}
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>  
      </main>
    </Router>
  );
}

export default App;
