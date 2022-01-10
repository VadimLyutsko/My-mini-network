import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer.js';
import sss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let messageElement = props.state.dialogsPage.messages.map(m => <Message message={m.message} />);
    let dialogElement = props.state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);


    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
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
                        value={props.state.dialogsPage.newMessageText} />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Нажми меня!</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;


