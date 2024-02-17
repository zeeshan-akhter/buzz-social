import { useContext, useState } from "react";
import { DataContext } from "../../context/Data/DataContext";
import "./EditPost.css";
import { editPostUtil } from "../../backend/utils/editPostUtil";
import { toast } from "react-hot-toast";

export const EditPost = ({ editId, setShowEditModal }) => {
  const { postState, dispatchPost } = useContext(DataContext);
  const [editPost, setEditPost] = useState({
    content: postState?.posts?.find(({ _id }) => _id === editId)?.content,
    postImage: () => {
      let newPostImage = [];
      const initialPostImage = postState?.posts?.find(
        ({ _id }) => _id === editId
      )?.postImage;
      for (let img of initialPostImage) {
        newPostImage = [...newPostImage, { id: Math.random(), image: img }];
      }
      return newPostImage;
    },
    userImage: [],
  });
  return (
    <div className="show-following-container-layout">
      <div className="modal-content">
        <div>
          <textarea
            rows={5}
            name="content"
            value={editPost.content}
            onChange={(e) =>
              setEditPost((editPost) => ({
                ...editPost,
                content: e.target.value,
              }))
            }
            className="edit-post-edit-content"
          />
          {editPost.postImage().length > 0 &&
            editPost?.postImage()?.map((img) => {
              return (
                <div key={img.id} style={{ position: "relative" }}>
                  {img?.image?.split("/")[4] === "video" ? (
                    <video
                      controls
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    >
                      <source src={img.image} />
                    </video>
                  ) : (
                    <img
                      src={img.image}
                      alt="postimg"
                      className="user-input-image "
                    />
                  )}

                  <span
                    className="image-xmark"
                    onClick={() => {
                      console.log(editPost?.postImage());

                      setEditPost((editPost) => ({
                        ...editPost,
                        postImage: () => {
                          return editPost
                            ?.postImage()
                            ?.filter(({ image }) => image !== img.image);
                        },
                      }));
                    }}
                  >
                    <i className="fa-solid fa-circle-xmark"></i>
                  </span>
                </div>
              );
            })}
          {editPost?.userImage?.length > 0 &&
            editPost?.userImage?.map((img) => {
              console.log(img?.image?.type.split("/")[0]);
              return (
                <div style={{ position: "relative" }} key={img.id}>
                  {img?.image?.type.split("/")[0] === "image" && (
                    <img
                      src={URL.createObjectURL(img.image)}
                      alt="userimage"
                      className="user-input-image"
                    />
                  )}
                  {img?.image?.type.split("/")[0] === "video" && (
                    <video
                      controls
                      className="user-input-image"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    >
                      <source src={URL.createObjectURL(img.image)} />
                    </video>
                  )}

                  <span
                    className="image-xmark"
                    onClick={() =>
                      setEditPost((editPost) => ({
                        ...editPost,
                        userImage: editPost?.userImage?.filter(
                          ({ id }) => id !== img.id
                        ),
                      }))
                    }
                  >
                    <i className="fa-solid fa-circle-xmark"></i>
                  </span>
                </div>
              );
            })}
          <label>
            <i
              className="fa-solid fa-image"
              style={{
                cursor:
                  Number(editPost?.userImage?.length) +
                    Number(editPost?.postImage()?.length) ===
                    2 && "not-allowed",
                color:
                  Number(editPost?.userImage?.length) +
                    Number(editPost?.postImage()?.length) ===
                    2 && "#f87171",
              }}
            ></i>
            <input
              disabled={
                Number(editPost?.userImage?.length) +
                  Number(editPost?.postImage()?.length) ===
                2
              }
              type="file"
              accept="image/*"
              className="create-post-image-input"
              onChange={(e) => {
                if (
                  Number(editPost?.userImage?.length) +
                    Number(editPost?.postImage()?.length) ===
                  2
                ) {
                  toast.error("Max 2 items can be uploaded");
                } else {
                  setEditPost((editPost) => ({
                    ...editPost,
                    userImage: [
                      ...editPost?.userImage,
                      { id: Math.random(), image: e.target.files[0] },
                    ],
                  }));
                }
              }}
            />
          </label>
          <label>
            <span
              className="gif-icon"
              style={{
                cursor:
                  Number(editPost?.userImage?.length) +
                    Number(editPost?.postImage()?.length) ===
                    2 && "not-allowed",
                color:
                  Number(editPost?.userImage?.length) +
                    Number(editPost?.postImage()?.length) ===
                    2 && "#f87171",
              }}
            >
              GIF
            </span>
            <input
              disabled={
                Number(editPost?.userImage?.length) +
                  Number(editPost?.postImage()?.length) ===
                2
              }
              type="file"
              accept="image/*"
              className="create-post-image-input"
              onChange={(e) => {
                if (
                  Number(editPost?.userImage?.length) +
                    Number(editPost?.postImage()?.length) ===
                  2
                ) {
                  toast.error("Max 2 items can be uploaded");
                } else {
                  setEditPost((editPost) => ({
                    ...editPost,
                    userImage: [
                      ...editPost?.userImage,
                      { id: Math.random(), image: e.target.files[0] },
                    ],
                  }));
                }
              }}
            />
          </label>
          <label>
            <i
              className="fa-solid fa-video"
              style={{
                cursor:
                  Number(editPost?.userImage?.length) +
                    Number(editPost?.postImage()?.length) ===
                    2 && "not-allowed",
                color:
                  Number(editPost?.userImage?.length) +
                    Number(editPost?.postImage()?.length) ===
                    2 && "#f87171",
              }}
            ></i>
            <input
              type="file"
              disabled={
                Number(editPost?.userImage?.length) +
                  Number(editPost?.postImage()?.length) ===
                2
              }
              accept="video/*"
              className="create-post-image-input"
              onChange={(e) => {
                if (
                  Number(editPost?.userImage?.length) +
                    Number(editPost?.postImage()?.length) ===
                  2
                ) {
                  toast.error("Max 2 items can be uploaded");
                } else {
                  if (e.target.files[0]?.size / 10240000 > 1) {
                    toast.error("Video should not be more than 10mb");
                  } else {
                    setEditPost((editPost) => ({
                      ...editPost,
                      userImage: [
                        ...editPost?.userImage,
                        { id: Math.random(), image: e.target.files[0] },
                      ],
                    }));
                  }
                }
              }}
            />
          </label>
          <button
            className="update-btn"
            onClick={() => {
              toast.promise(editPostUtil(editId, editPost, dispatchPost), {
                loading: "Updating your Post",
                success: <b>Post Updated Successfully</b>,
                error: <b>Could not update post.</b>,
              });
              setShowEditModal((showEditModal) => ({
                ...showEditModal,
                show: false,
              }));
            }}
          >
            Save
          </button>
          <button
            className="update-btn-secondary"
            onClick={() => {
              setShowEditModal((showEditModal) => ({
                ...showEditModal,
                show: false,
              }));
            }}
          >
            Discard
          </button>
        </div>
      </div>
    </div>
  );
};
