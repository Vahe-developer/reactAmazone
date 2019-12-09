import React, {useState} from 'react'
import './App.css';
import Header from './header/Header'
import Layout from './layout/Layout'
import Basket from './basket/Basket'
import SelectedProduct from './SelectedProduct/SelectedProduct'
import {UserContext} from "./userContext/userContext"

import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'
//
// type ProductT = {
//     id: string,
//     name: string,
//     quantity: number
// }

const App: React.FC = () => {
    const [myProducts, setProducts] = useState([])
    const context:any = {
        myProducts,
        setProducts
    }
    return (
    <div className="App">
        <UserContext.Provider value={context}>
        <Router>
            <Header/>
            <Switch>
                 <Route exact path={"/"} component={Layout}/>
                 <Route path={"/product:id"} component={SelectedProduct}/>
                 <Route path={"/basket"} component={Basket}/>
            </Switch>
        </Router>
        </UserContext.Provider>
    </div>
  );
}
export default App;
