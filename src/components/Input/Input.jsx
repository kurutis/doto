import { useState } from 'react'
import s from './Input.module.css'
import { randomId } from '../../utils'

export function Input({ setItems }) {
    let [title, setTitle] = useState('')

    let func2 = () => {
        let a = {
            id: randomId(24),
            title: title,
            isEdit: false,
            isChecked: false,
        }
        setItems(a)
    }

    return (
        <div className={s.inpContainer}>
            <input placeholder='Создать новую заметку...' className={s.input} type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <button className={s.btn} onClick={() => func2()}>Создать</button>
        </div>
    )
}