import React, { useState } from 'react';
import api from '../../services/api';

export default function NovaFilial ({ history }){
    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    async function cadastrar(e) {
        e.preventDefault();

        const filial = {
            nome: nome,
            cidade: cidade,
            cnpj: cnpj,
            endereco: endereco,
            email: email,
            latitude: latitude,
            longitude: longitude
        }
        
        const token = localStorage.getItem('token');
        const AuthStr = 'Bearer '.concat(token);

        const response = await api.post('/filiais', filial, { headers: { Authorization: AuthStr } });

        history.push('/filiais');
    }

    return (

        <form onSubmit={cadastrar}>
            <label htmlFor="nome">NOME</label>
            <input
                type="text"
                id="nome"
                placeholder="Nome da filial"
                value={nome}
                onChange={event => setNome(event.target.value)}
            />
            <label htmlFor="cidade">CIDADE</label>
            <input
                type="text"
                id="cidade"
                placeholder="Cidade da filial"
                value={cidade}
                onChange={event => setCidade(event.target.value)}
            />
            <label htmlFor="cnpj">CNPJ</label>
            <input
                type="text"
                id="cnpj"
                placeholder="CNPJ da filial"
                value={cnpj}
                onChange={event => setCnpj(event.target.value)}
            />
            <label htmlFor="endereco">ENDEREÇO</label>
            <input
                type="text"
                id="endereco"
                placeholder="Endereço da filial"
                value={endereco}
                onChange={event => setEndereco(event.target.value)}
            />
            <label htmlFor="email">E-MAIL</label>
            <input
                type="email"
                id="email"
                placeholder="E-mail da filial"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <label htmlFor="latitude">LATITUDE</label>
            <input
                type="text"
                id="latitude"
                placeholder="Latitude da Localização da filial"
                value={latitude}
                onChange={event => setLatitude(event.target.value)}
            />
            <label htmlFor="longitude">LONGITUDE</label>
            <input
                type="text"
                id="longitude"
                placeholder="Longitude da Localização da filial"
                value={longitude}
                onChange={event => setLongitude(event.target.value)}
            />
            <button className="btn" type="submit">Cadastrar</button>
        </form>

    );
}