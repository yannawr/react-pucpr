import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class Home extends Component{
    constructor(props){
      super(props);
      this.state = {
        nome: "",
        sobrenome: "",
        data: ""
      }
    }

    async componentDidMount() {
      await firebase.auth().onAuthStateChanged(async (usuario) => {
        if(usuario) {
          var uid = usuario.uid

          await firebase.firestore().collection("usuario").doc(uid).get().then((retorno) => {
            this.setState({
              nome: retorno.data().nome,
              sobrenome: retorno.data().sobrenome,
              data: retorno.data().data
            })
          })
        }
      })
    }
    
    async logout() {
      await firebase.auth().signOut().then(() => {
            window.location.href = "./"    
        }).catch((erro) => {
        console.error('Erro ao logar:', erro);
      })
  }

    render(){
      return(
        <div>
            <div className="container text-center mt-5">
                <h1>Bem-vindo(a) { this.state.nome } { this.state.sobrenome }</h1>
                {this.state.nome === "" && (
                  <p><Link to="/Register" className="text-decoration-none">Registre-se</Link> ou faça <Link to="/Login" className="text-decoration-none">Login</Link></p>
                )}

                {this.state.nome && (
                  <>
                    <p>Sua data de nascimento é { this.state.data } </p>
                    <button onClick={this.logout} className="btn btn-primary mt-2">Logout</button>
                  </>
                )}
                
            </div>
        </div>
      )
    }
}

export default Home;