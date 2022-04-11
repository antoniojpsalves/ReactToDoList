import React, { useState } from "react";
import { Itarefa } from "../../types/tarefa";
import Botao from "../button";
import style from './Formulario.module.scss';
import {v4 as uuidv4 } from 'uuid';


interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}


function Formulario({setTarefas}: Props) {

    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(evento : React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                { 
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]);
        // console.log('state', this.state);
        setTarefa("");
        setTempo("00:00");
    }

    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione o item de estudo: </label>
                    <input 
                    type="text" 
                    name="tarefa" 
                    value= {tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
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
                    value = {tempo}
                    onChange ={evento => setTempo(evento.target.value)}
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

// class Formulario2 extends React.Component <{
//     setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
// }> {

//     state = {
//         tarefa: '',
//         tempo: '00:00'
//     }

//     adicionarTarefa(evento : React.FormEvent<HTMLFormElement>) {
//         evento.preventDefault();
//         this.props.setTarefas(tarefasAntigas => 
//             [
//                 ...tarefasAntigas, 
//                 { 
//                     ...this.state,
//                     selecionado: false,
//                     completado: false,
//                     id: uuidv4()
//                 }
//             ]);
//         // console.log('state', this.state);
//         this.setState({
//             tarefa: '',
//             tempo: '00:00'
//         });
//     }

//     render() {
//         return(
//             <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
//                 <div className={style.inputContainer}>
//                     <label htmlFor="tarefa">Adicione o item de estudo: </label>
//                     <input 
//                     type="text" 
//                     name="tarefa" 
//                     value= {this.state.tarefa}
//                     onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
//                     id="tarefa" 
//                     placeholder="O que você quer estudar hoje?" 
//                     required />
//                 </div>
//                 <div className={style.inputContainer}>
//                     <label htmlFor="tempo">Tempo de estudo: </label>
//                     <input 
//                     type="time"
//                     name="tempo"
//                     id="tempo"
//                     step="1"
//                     value = {this.state.tempo}
//                     onChange ={evento => this.setState({...this.state, tempo: evento.target.value})}
//                     min="00:00:00" 
//                     max="01:30:00"
//                     required />
//                 </div>
//                 <Botao type="submit">
//                     Adicionar
//                 </Botao>
//             </form>
//         )
//     }
// }

export default Formulario;