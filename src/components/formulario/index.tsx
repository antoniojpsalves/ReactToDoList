import React from "react";
import Botao from "../button";

class Formulario extends React.Component {
    render() {
        return(
            <form>
                <div>
                    <label htmlFor="tarefa">Adicione um novo item para estudar: </label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar hoje?" required />
                </div>
                <div>
                    <label htmlFor="tempo">Tempo de estudo: </label>
                    <input type="time" name="tempo" id="tempo" step="1" min="00:00:00" max="01:30:00" required />
                </div>
                <Botao />
            </form>
        )
    }
}

export default Formulario;