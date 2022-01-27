import sss from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://image.winudf.com/v2/image/Y29tLm1vdW50YWluc3dhbGxwYXBlci5oZC5tb3VudGFpbnNwaWN0dXJlcy5waG90b3MuYmFja2dyb3VuZC5jdXRlLmNvb2wuYXJ0Lm1vdW50YWluc2ltYWdlcy5oZC5mcmVlX3NjcmVlbl80XzE1MzM5NDQxMDJfMDIx/screen-4.jpg?fakeurl=1&type=.jpg" />
      </div>

      <div className={sss.descriptionBlock}>Ava + description</div>
    </div>
  );
};

export default ProfileInfo;
