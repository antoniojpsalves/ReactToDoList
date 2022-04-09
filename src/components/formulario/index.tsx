import React from "react";
import { Itarefa } from "../../types/tarefa";
import Botao from "../button";
import style from './Formulario.module.scss';
import {v4 as uuidv4 } from 'uuid';

class Formulario extends React.Component <{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}> {

    state = {
        tarefa: '',
        tempo: '00:00'
    }

    adicionarTarefa(evento : React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                { 
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]);
        // console.log('state', this.state);
        this.setState({
            tarefa: '',
            tempo: '00:00'
        });
    }

    render() {
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um item para estudar: </label>
                    <input 
                    type="text" 
                    name="tarefa" 
                    value= {this.state.tarefa}
                    onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                    id="tarefa" 
                    placeholder="O que você quer estudar hoje?" 
                    required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo de estudo: </label>
                    <input 
                    type="time"
                    name="tempo"
                    id="tempo"
                    step="1"
                    value = {this.state.tempo}
                    onChange ={evento => this.setState({...this.state, tempo: evento.target.value})}
                    min="00:00:00" 
                    max="01:30:00"
                    required />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
        )
    }
}

export default Formulario;