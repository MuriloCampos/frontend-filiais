import React, { useEffect, useState,  } from 'react';
import api from '../../services/api';

import './styles.css';

import deletar from '../../assets/deletar.png'
import detalhes from '../../assets/detalhes.png'
import editar from '../../assets/editar.png'

export default function Lista({ history }) {  
    const[filiais, setFiliais] = useState([]);
    const[list, setList] = useState([]);
    const[search, setSearch] = useState('');

    const filterList = (event) => {
        let items = filiais;
        items = items.filter((item) => {
          return item.nome.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        setList(items);
        setSearch(event.target.value);
    }

    useEffect(() => {
        async function carregaLista() {
            const token = localStorage.getItem('token');
            const AuthStr = 'Bearer '.concat(token);
            const response = await api.get('/filiais', { headers: { Authorization: AuthStr } });
            setFiliais(response.data);
            setList(response.data);
        }

        carregaLista();
    }, []);

    const cadastrarFilial = event => {
        history.push('/novafilial');
    }

    const detalhesFilial = event => {
        const idFilial = event.currentTarget.value;        
        localStorage.setItem('filialEscolhida', idFilial);
        history.push('/detalhes');
    }

     const editarFilial = event => {
        const idFilial = event.currentTarget.value;        
        localStorage.setItem('filialEscolhida', idFilial);
         history.push('/atualizar');
     }

     const removerFilial = event => {
        async function removeFilial() {
            const idFilial = event.currentTarget.value;
            const token = localStorage.getItem('token');
            const AuthStr = 'Bearer '.concat(token);
            const response = await api.delete('/filiais/'.concat(idFilial), { headers: { Authorization: AuthStr} });
            history.push('/filiais');
        }

        removeFilial();
     }



return (
        <>
            <form>
                <input type="text" placeholder="Buscar filial" value={search} onChange={filterList}/>
            </form>
            <button className="btn" onClick={ cadastrarFilial }>Nova filial</button>
            <ul className="lista-filiais">
                {list.map(list => (
                    <li key={list.id}>
                        <strong>{list.nome}</strong>
                        <div>
                            <button className="btnLista" onClick={detalhesFilial} value={list.id}><img className="imgLista" src={detalhes}/></button>
                            <button className="btnLista" onClick={editarFilial} value={list.id}><img className="imgLista" src={editar}/></button>
                            <button className="btnLista" onClick={removerFilial} value={list.id}><img className="imgLista" src={deletar}/></button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}