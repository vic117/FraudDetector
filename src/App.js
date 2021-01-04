import React from 'react';
import './App.css';
//import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
//import {Navbar, Icon, NavItem} from 'react-materialize';
class Nav extends React.Component{
  render(){
    return(
      <Navbar
      alignLinks="right"
      brand={<a className="brand-logo" href="#">Fraud</a>}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavItem href="">
        Getting started
      </NavItem>
      <NavItem href="components.html">
        Components
      </NavItem>
    </Navbar>
    )
  }
}



class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>          
          <div>
            <label>  Id_transaccion: </label>
            <input type="text" value={this.state.value} name="Id_transaction"  required/>
          </div>
          
          <div>
            <label> Sexo: </label>
            <input type="text" value={this.state.value} name="sexo"  required/>
          </div>

          <div>
            <label>Estado_Civil </label>
            <input type="text" value={this.state.value} name="estado_civil"  required/>
          </div>
          <div>          
            <label> Hijos </label>
            <input type="text" value={this.state.value} name=""  required/>
          </div>
          <div>
            <label>Monto_Compra </label>
            <input type="text" value={this.state.value} name=""  required/>
          </div>
          <div>
            <label> Establecimiento </label>
            <input type="text" value={this.state.value} name=""  required/>
          </div>
          <div>
            <label>Tipo_compra </label>
            <input type="text" value={this.state.value} name=""  required/>
          </div>
          <div>
            <label> Metodo_pago</label>
            <input type="text" value={this.state.value} name=""  required/>
          </div>
          <div>
            <label> Hora</label>
            <input type="text" value={this.state.value} name=""  required/>
          </div>
  
          <div>
           <input type="submit" value="Submit" />
          </div>

      </form>

    );
  }
}
//___________________________________


function App() {
  return (
    <div className="App">
      <Nav/>
      <NameForm/>
    </div>
  );
}

export default App;
