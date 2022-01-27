import sss from "./Post.module.css";

const Post = props => {
  return (
    <div className={sss.item}>
      <img
        src="https://get.wallhere.com/photo/1600x1200-px-action-adventure-alien-aliens-Avatar-fantasy-fi-fighting-futuristic-sci-warrior-1635355.jpg"
        alt=""
      />

      {props.message}
      <div>
        <span>
          {props.likesCount} likesss
        </span>
      </div>
    </div>
  );
};

export default Post;
