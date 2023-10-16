import { Switch, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from './pages/Main'
import Products from './pages/Product';
import Create from './pages/Create';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';

import './assets/css/app.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/products/listar" component={Products} />
        <Route exact path="/products/crear" component={Create} />
        <Route  path="/products/:id" component={Detail} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
