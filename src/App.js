import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Layout from "./components/Layout";
import "@fortawesome/fontawesome-free/css/all.css";
import Buscador from "./components/Buscador";
import ListaResultados from "./components/ListaResultados";
import Descripcion from "./components/Descripcion";


const App = () => {
 
  return (
    <BrowserRouter basename={"/ML"}>
     
      <Layout>
        <Switch>
          <Route exact path="/" component={Buscador}/>
          <Route exact path='/items' component={ListaResultados}/>
          <Route exact path="/items/:id" component={Descripcion} />
               
        </Switch>
      </Layout>
      
    </BrowserRouter>
  );
};

export default App;
