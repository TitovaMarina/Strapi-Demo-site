import React from 'react';
import './App.css';
import { Products } from './components/Products';



export const App: React.FC = () => {
  // const [products,setProducts] = React.useState([]);
  // React.useEffect(()=>{
  //   const prods:Product[] = [];
  // })


  return (
    <div className="App">
      <header className="App-header">
        <Products />
      </header>
    </div>
  );
}
