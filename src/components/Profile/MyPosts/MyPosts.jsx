import react from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer.js';
import sss from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = react.createRef();

    let onPostChange = () => {
        // props.updateNewPostText(text);
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator());
    }

    return (

        <div className={sss.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Нажми меня!!!</button>
                </div>
            </div>
            <div className={sss.posts}>
                {postElement}
            </div>
        </div>

    );
}

export default MyPosts;












