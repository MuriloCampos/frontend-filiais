import React, { useState } from 'react';
import api from '../../services/api';

export default function Cadastro({ history }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function cadastrar(e) {
        e.preventDefault();

        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        }

        const response = await api.post('/usuarios', usuario)

        history.push('/');
    }

    return (

        <form onSubmit={cadastrar}>
            <label htmlFor="nome">NOME</label>
            <input
                type="text"
                id="nome"
                placeholder="Seu nome"
                value={nome}
                onChange={event => setNome(event.target.value)}
            />
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
            <button className="btn" type="submit">Cadastrar</button>
        </form>

    );
}