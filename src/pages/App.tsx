import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import { Itarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {

  const [tarefas, setTarefas] = useState <Itarefa[]> ([]);

  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setSelecionado(tarefaSelecionada);
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro />
    </div>
  );
}

export default App;
