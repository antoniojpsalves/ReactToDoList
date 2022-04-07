import React from "react";
import Item from "./item";
import style from './Lista.module.scss';

function Lista() {

    let tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00',
    },{
        tarefa: 'Node',
        tempo: '02:00:00'
    },{
        tarefa: 'Typescript',
        tempo: '02:30:00'
    },{
        tarefa: 'Javascript',
        tempo: '03:00:00'
    }]

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia: </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;