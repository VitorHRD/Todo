import React, { useEffect, useState } from 'react'
import './Todo.css'
import Item from './components/item'
import List from './components/List';
import TodoForm from './components/TodoForm';
import Modal from './components/modal';

const SAVED_ITEMS = "savedItems";


function Todo() {
    const [showModal, setShowModal] = useState(false)
    const [items, setItems] = useState([])
    const date = new Date();
    const months = ["Jan", "Fev", "mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const formatedDate = `
    ${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()} 
    ${months[(date.getMonth())]}  
    ${date.getFullYear()}`;
    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if (savedItems) {
            setItems(savedItems)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])

    function onAddItem(text) {
        let item = new Item(text)
        setItems([...items, item])
        onhideModal();
    }
    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id)
        setItems(filteredItems)

    }
    function onDone(item) {
        let updateItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done
            }
            return it
        })
        setItems(updateItems)
    }
    function onhideModal() {
        setShowModal(false)
    }

    return (
        <div className='container'>
            <header className='header'><h1 className='title'>Todo</h1><button className='addButton' onClick={() => {
                setShowModal(true)
            }}>+</button></header>
            <h1 className='Date'>{formatedDate.toString()}</h1>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            <Modal show={showModal} onHideModal={onhideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
        </div>
    )
}

export default Todo