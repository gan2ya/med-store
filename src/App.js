import React,{useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './style.css';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import {GlobalProvider} from './context/GlobalState';


function App() {
  const [search, setSearch]=useState('');
  function changeSearch(search){
    setSearch(search)  
  }

  return (
    <GlobalProvider>
    <Router>
      <div className="App">
     
     
      
        <Route path='/medicines' render={props=>(
           <React.Fragment>
           <Header changeSearch={changeSearch} search={search} />
          <Main option={'medicines'} search={search}/>
          </React.Fragment>
          )}
        />
        <Route path='/kit' render={props=>(
           <React.Fragment>
           <Header changeSearch={changeSearch} search={search}/>
          <Main option={'kit'} search={search}/>
          </React.Fragment>
          )}
        />
        <Route  exact path='/emergency' render={props=>(
           <React.Fragment>
           <Header changeSearch={changeSearch} search={search}/>
          <Main option={'emergency'} search={search} />
          </React.Fragment>
          )}
        />
        <Route exact path='/doctors' render={props=>(
          <React.Fragment>
          <Header changeSearch={changeSearch} search={search} />
          <Main option={'doctors'} search={search}/>
          </React.Fragment>
          )}
        />
        <Route exact path='/' render={props=>(
        <React.Fragment>
        <Header changeSearch={changeSearch} search={search}/>
        <Main option={'all'} search={search}/>
        </React.Fragment>
        )}/>
        
        <Route exact path='/cart' render={props=>( <Cart /> )} />
         
        
      </div>
     </Router>
     
    </GlobalProvider> 
    
  );
}

export default App;
