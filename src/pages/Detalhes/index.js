import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';
import SimpleMap from '../../components/SimpleMap';

const Detalhes = () => {
    const[filial, setFilial] = useState('');

    useEffect(() => {
        async function carregaFilial() {
            const token = localStorage.getItem('token');
            const id = localStorage.getItem('filialEscolhida');
            const AuthStr = 'Bearer '.concat(token);
            const response = await api.get('/filiais/'.concat(id), { headers: { Authorization: AuthStr } });
            setFilial(response.data);
            localStorage.setItem('latFilial', filial.latitude);
            localStorage.setItem('lngFilial', filial.longitude);
        }
        carregaFilial();
    }, []);

    
    return (
        <>
            <div className="detalhesFilial">
                <label>Nome: {filial.nome}</label>
                <label>Cidade: {filial.cidade}</label>
                <label>CNPJ: {filial.cnpj}</label>
                <label>Endereço: {filial.endereco}</label>
                <label>E-mail: {filial.email}</label>
            </div>
            <SimpleMap/>
        </>
    );
}
export default Detalhes;