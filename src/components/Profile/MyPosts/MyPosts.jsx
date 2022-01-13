import react from 'react';
import sss from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = react.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let onAddPost = () => {
        props.addPost();
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
                    <button onClick={onAddPost}>Нажми меня!!!</button>
                </div>
            </div>
            <div className={sss.posts}>
                {postElement}
            </div>
        </div>

    );
}

export default MyPosts;












