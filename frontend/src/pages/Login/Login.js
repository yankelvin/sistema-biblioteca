import React, { useState } from 'react';
import api from '../../services/api';
import logo from '../../assets/user.png'
// import './style.css';




export default function Login() {
    // const [email, setEmail] = useState('');


    async function handleSubmit() {
        //   event.preventDefault();

        //   const response = await api.post('/sessions/',{ email })

        //   const { _id } = response.data;

        //   localStorage.setItem('user', _id);

    }
    const containerStyle = {
        margin: '30px auto 0',
        maxWidth: '350px',
        width: '100%',
        display: 'flex',
        flexDirection: ' column',
        alignItems: 'center'
    };
    const contentStyle = {
        width: '100%',
        backgroundImage: 'linear-gradient(to right,  #2980b9, #2c3e50)',
        marginTop: '20px',
        borderRadius: '8px',
        padding: '30px',
        boxShadow: '0.6em 0.6em rgba(148, 169, 236, 0.37)'


    };
    const contentLabelStyle = {
        fontSize: '14px',
        color: '#fff',
        fontWeight: 'normal',
        marginBottom: '8px',
        fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
    };
    const formStyle = {
        display: 'flex',
        flexDirection: 'column'
    };

    const inputStyle = {
        marginBottom: '20px',
        border: '1px solid rgb(52, 68, 163)',
        borderRadius: ' 6px',
        height: '45px',
        padding: '0px 15px',
        fontSize: '16px'
    };
    const buttonStyle = {
        border: 0,
        borderRadius: '4px',
        width: '100%',
        height: '42px',
        padding: ' 0 20px',
        fontSize: '16px',
        fontWeight: ' bold',
        background: 'rgb(32, 39, 88)',
        color: 'white',
        cursor: 'pointer'
    };
    const img = {
        maxWidth: '30%'
    }

    return (


        <>

            <div className="container" style={containerStyle}>
                <img src={logo} style={img} alt="Bibilioteca Toth " />
                <div className="content" style={contentStyle}>
                    <form style={formStyle} action='/home'>
                        <label style={contentLabelStyle} htmlFor="email"> E-MAIL</label>
                        <input
                            style={inputStyle}
                            type="email"
                            id="email"
                            placeholder="Digite o seu Email"
                        // value={senha}
                        // onChange={event => setEmail(event.target.value)}
                        />
                        <label style={contentLabelStyle} htmlFor="senha"> SENHA</label>
                        <input
                            style={inputStyle}
                            type="password"
                            id="senha"
                            placeholder="Digite a sua Senha"
                        // value={senha}
                        // onChange={event => setEmail(event.target.value)}
                        />
                        <button
                            style={buttonStyle}
                            href="/home"
                            // type="submit"
                            align="right">
                            Entrar
                        </button>
                    </form>

                </div>
            </div>



        </>
    )
}