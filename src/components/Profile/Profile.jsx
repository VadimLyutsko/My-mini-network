import MyPostsContainer from './MyPosts/MyPostsContainer';
import sss from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';





const Profile = (props) => {
    debugger;


    return (
        <div className={sss.content}>

            <ProfileInfo />
            <MyPostsContainer
                store={props.store}
            />

        </div>
    );
}

export default Profile;


