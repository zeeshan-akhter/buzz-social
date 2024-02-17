import { CreatePost } from "../CreatePost/CreatePost";
export const CreatePostModal = ({ setCreatePost }) => {
  return (
    <div className="show-following-container-layout">
      <div className="modal-content">
        <CreatePost setCreatePost={setCreatePost} fromModal />
        <div
          className="modal-cross"
          onClick={() => {
            setCreatePost(() => false);
          }}
        >
          X
        </div>
      </div>
    </div>
  );
};