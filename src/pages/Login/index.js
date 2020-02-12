import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Login({ history }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function autenticar(e) {
        e.preventDefault();

        const credentials = {
            email: email,
            senha: senha
        }

        const response = await api.post('/login', credentials)
        const token = response.data.access_token

        localStorage.setItem('token', token);

        history.push('/filiais');
    }

    async function cadastrar(e) {
        e.preventDefault();

        history.push('/cadastro');
    }

    return (
        <form onSubmit={autenticar}>
            <label htmlFor="email">E-MAIL</label>
            <input
                type="email"
                id="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <label htmlFor="email">SENHA</label>
            <input
                type="password"
                id="email"
                placeholder="Sua senha"
                value={senha}
                onChange={event => setSenha(event.target.value)}
            />
            <button className="btn" type="submit">Entrar</button>
            <button className="btn" onClick={cadastrar}>Cadastrar Novo Usuário</button>
        </form>
    );
}