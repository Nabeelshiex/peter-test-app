import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import AllRecipes from "./components/AllRecipes";
import MyRecipe from "./components/MyRecipe";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/all-recipes' component={AllRecipes} />
          <Route path='/my-recipe' component={MyRecipe} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
