import { NavLink } from 'react-router-dom';
import sss from './../Dialogs.module.css'

const DialogItem = (props) => {
    let path = 'dialogs/' + props.id;

    return (
        <div className={sss.dialog}>
            <img src='https://get.wallhere.com/photo/1920x1200-px-animals-tiger-1098861.jpg' alt='' />
            <NavLink to={path}>{props.name}</NavLink>
        </div >
    );
}

export default DialogItem;


