import { Itarefa } from '../../../types/tarefa';
import style from '../Lista.module.scss';


interface Props extends Itarefa {
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void,

}

export default function Item(
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa
    }: Props) {
    console.log('item atual', {tarefa, tempo, selecionado, completado, id});
    return (
        <li
        className={style.item}
        onClick={()=> selecionaTarefa({
            tarefa,
            tempo,
            completado,
            selecionado,
            id
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}