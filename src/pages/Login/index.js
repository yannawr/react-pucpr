import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class Login extends Component{

    constructor (props) {
        super(props)
    
        this.state = {
          email: "",
          pwd: "",
          msg: ""
        }

        this.acessar = this.acessar.bind(this)
    }

    async acessar() {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pwd).then(() => {
          window.location.href = "./"
        }).catch((erro) => {
          this.setState({ msg: <div className="text-center alert alert-danger mt-2">Usuário não cadastrado</div>});
        })
    }

    render(){
      return(
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">                 
                  <div className="text-center">
                    <h1>Login</h1>
                  </div>
                    <div className="col-md-4 mt-2">
                        
                            <div className="form-group">
                                <input type="text" className="form-control" name="email" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value})}/>
                            </div>
                            <div className="form-group mt-2">
                                <input type="password" class="form-control" name="pwd" placeholder="Senha" onChange={(e) => this.setState({pwd: e.target.value})}/>
                            </div>
                            <button onClick={this.acessar} className="btn btn-primary w-100 mt-2">Acessar</button>
                        
                        <div className="d-flex justify-content-between mt-2">
                            <span><Link to="/" className="text-decoration-none">Home</Link> </span>
                            <span><Link to="/Register" className="text-decoration-none">Registre-se</Link> </span>
                        </div>
                        { this.state.msg }
                    </div>
                </div>            
            </div> 
            
        </div>
      )
    }
}

export default Login;