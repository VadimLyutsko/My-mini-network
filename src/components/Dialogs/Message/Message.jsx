import sss from './../Dialogs.module.css'

const Message = (props) => {



    return (
        <div>

            < div className={sss.message} >
                {props.message}

            </div >


        </div >

    );
}

export default Message;


