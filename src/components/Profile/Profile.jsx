import MyPosts from './MyPosts/MyPosts';
import sss from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';





const Profile = (props) => {



    return (
        <div className={sss.content}>

            <ProfileInfo />
            <MyPosts
                dispatch={props.dispatch}
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
            />

        </div>
    );
}

export default Profile;


