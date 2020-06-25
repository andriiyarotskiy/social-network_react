import React, {createRef} from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/MessageItem";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newTextMessage = createRef() // создали ссылку на Текст ареа

    let sendNewMessage = () => {
        let textAreaMessage = newTextMessage.current.value
        alert(textAreaMessage)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                    {messagesElements}
                    <textarea ref={newTextMessage}></textarea>
                    <button onClick={sendNewMessage}>Send Message</button>
            </div>
        </div>
    )
}

export default Dialogs;