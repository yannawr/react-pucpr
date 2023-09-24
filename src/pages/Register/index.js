import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class Register extends Component{
    constructor(props){
      super(props);
      this.state = { 
        nome: "",
        sobrenome: "",
        data: "",
        email: "",
        pwd: ""
      }

      this.criarUsuario = this.criarUsuario.bind(this)

    }

    async criarUsuario() {
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pwd).then( (retorno) => {
            firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                data: this.state.data
            })
        })
      }

    render(){
      return(
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="text-center">
                        <h1>Cadastro</h1>
                    </div>
                    <div className="col-md-4 mt-2">
                            <div className="form-group">           
                                <input type="text" className="form-control" name="nome" placeholder="Nome" onChange={(e) => this.setState({nome: e.target.value})}/>
                            </div>
                            <div className="form-group mt-2">                              
                                <input type="text" className="form-control" name="sobrenome" placeholder="Sobrenome" onChange={(e) => this.setState({sobrenome: e.target.value})}/>
                            </div>
                            <div className="form-group mt-2">                              
                                <input type="date" className="form-control" name="data" placeholder="Data de Nascimento" onChange={(e) => this.setState({data: e.target.value})}/>
                            </div>
                            <div className="form-group mt-2">                           
                                <input type="email" className="form-control" name="email" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value})}/>
                            </div>
                            <div className="form-group mt-2">
                                <input type="password" className="form-control" name="pwd" placeholder="Senha" onChange={(e) => this.setState({pwd: e.target.value})}/>
                            </div>
                            <button onClick={this.criarUsuario} className="btn btn-primary w-100 mt-2">Registrar</button>
                        <div className="d-flex justify-content-between mt-2">
                            <span><Link to="/" className="text-decoration-none">Home</Link></span>
                            <span><Link to="/Login" className="text-decoration-none">Login</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
    }
}

export default Register;