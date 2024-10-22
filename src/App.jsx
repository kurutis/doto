import { useState } from 'react'
import s from './App.module.css'
import { Input } from './components/Input/Input'
import { List } from './components/List/List'

let arr

if(localStorage.getItem('ToDo')){
  arr = JSON.parse(localStorage.getItem('ToDo'))
} else {
  arr = []
}

export function App() {
  let [items, setItems] = useState(arr)
  console.log(items);

  let toLocal = (copy) => {
    localStorage.setItem('ToDo', JSON.stringify(copy))
    setItems(copy)
  }

  let func = el => {
    let copy = [...items, el]
    toLocal(copy)
  }

  let toogler = (id, field) => {
    let copy = items.map(el => {
      if(el.id === id){
        el[field] = !el[field]
      }
      return el
    })
    toLocal(copy)
  }

  let editMode = (e, id, field) => {
    let copy = items.map(el => {
      if(el.id === id){
        el[field] = e.target.value
      }
      return el
    })
    toLocal(copy)
  }

  let deleteItem = id => {
    let copy = items.filter(el => el.id !== id)
    toLocal(copy)
  }
  
  return (
    <div className={s.appContainer}>
      <h1 className={s.h1}>TODO LIST</h1>
      <Input setItems={func}/>
      <List items={items} toogler={toogler} editMode={editMode} deleteItem={deleteItem}/>
    </div>
  )
}


export default App

