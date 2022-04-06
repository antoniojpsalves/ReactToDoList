import React from "react";
import Botao from "../button";
import style from './Formulario.module.scss';

class Formulario extends React.Component {
    render() {
        return(
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um item para estudar: </label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar hoje?" required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo de estudo: </label>
                    <input type="time" name="tempo" id="tempo" step="1" min="00:00:00" max="01:30:00" required />
                </div>
                <Botao />
            </form>
        )
    }
}

export default Formulario;