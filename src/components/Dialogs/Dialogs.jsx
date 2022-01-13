import sss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let messageElement = state.messages.map(m => <Message message={m.message} />);
    let dialogElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);


    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (

        <div className={sss.dialogs}>
            <div className={sss.dialogsItem}>
                {dialogElement}
            </div>
            <div className={sss.messages}>
                {messageElement}
            </div>
            <div>
                <div>
                    <textarea
                        placeholder='Введи что-нибудь'

                        onChange={onNewMessageChange}
                        value={state.newMessageText} />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Нажми меня!</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;


