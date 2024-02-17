import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePostService } from "../../services/getSinglePostService";
import { getToken } from "../../backend/utils/getToken";
import { getUser } from "../../backend/utils/getUser";
import { addToBookmarkHandler } from "../../services/addToBookmarkHandler";
import { removeFromBookmarkHandler } from "../../services/removeFromBookmarkHandler";
import { postDislikeHandler } from "../../services/postDislikeHandler";
import { postLikeHandler } from "../../services/postLikeHandler";
import { isPostLiked } from "../../backend/utils/isPostLiked";
import { DataContext } from "../../context/Data/DataContext";
import { getPostDate } from "../../backend/utils/getPostDate";
import { Navbar } from "../../components/Navbar/Navbar";
import { ShowFollowing } from "../../components/ShowFollowing/ShowFollowing";
import { PostCardShimmer } from "../../components/PostCardShimmer/PostCardShimmer";
import Linkify from "react-linkify";
import { componentDecorator } from "../../backend/utils/componentDecorator";
import { EditPost } from "../../components/EditPost/EditPost";
import { DelModal } from "../../components/DelModal/DelModal";
import { isUserFollowed } from "../../backend/utils/isUserFollowed";
import { unFollowUser } from "../../backend/utils/unFollowUser";
import { followUser } from "../../backend/utils/followUser";
import { ShowComments } from "../../components/ShowComments/ShowComments";
import { AddComment } from "../../components/AddComment/AddComment";
import { ShareModal } from "../../components/ShareModal/ShareModal";
import ModalImage from "react-modal-image";
import { toast } from "react-hot-toast";

export const SinglePost = () => {
  const [singlePost, setSinglePost] = useState({});
  const [showEllipsisContent, setShowEllipsisContent] = useState({ id: false });
  const [showEditModal, setShowEditModal] = useState({ show: false, id: "" });
  const [showDelModal, setShowDelModal] = useState({ show: false, id: "" });
  const [showShare, setShowShare] = useState({ id: "", show: false });
  const [showModal, setShowModal] = useState({
    show: false,
    type: "",
  });
  const { postState, dispatchPost } = useContext(DataContext);
  const { postId } = useParams();
  const getSinglePost = async () => {
    try {
      const response = await getSinglePostService(postId);
      if (response?.status === 200) {
        setSinglePost(response?.data?.post);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getSinglePost();
    // eslint-disable-next-line
  }, [postId, postState?.posts]);
  useEffect(() => {
    document.addEventListener("click", () => {
      setShowEllipsisContent(() => ({ id: false }));
    });
  }, []);
  const token = getToken();
  const user = getUser();
  // console.log(singlePost);

  return (
    <>
      <Navbar from="Post" />
      <div style={{ marginBottom: "4rem" }}></div>
      {postState?.loading && <PostCardShimmer />}

      {showModal.show && (
        <ShowFollowing
          arr={singlePost?.likes?.likedBy}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
      {showShare?.show && (
        <ShareModal setShowShare={setShowShare} id={showShare?.id} />
      )}
      {showEditModal.show && (
        <EditPost
          editId={showEditModal.id}
          setShowEditModal={setShowEditModal}
        />
      )}
      {showDelModal.show && (
        <DelModal
          setShowModal={setShowDelModal}
          postId={showDelModal?.id}
          fromSinglePostPage
        />
      )}

      <div style={{ marginBottom: "4rem" }}></div>
      {Object.keys(singlePost)?.length > 0 && (
        <div className="postcard-layout">
          <div className="postcard-header-layout">
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <img
                className="user-avatar-img"
                src={
                  postState?.users?.find(
                    ({ username }) => username === singlePost?.username
                  ).profileAvatar
                }
                alt="avatar"
              />
              <span style={{ alignSelf: "center" }}>
                <span className="post-fullname">
                  {
                    postState?.users?.find(
                      (user) => user.username === singlePost?.username
                    )?.firstName
                  }{" "}
                  {
                    postState?.users?.find(
                      (user) => user.username === singlePost?.username
                    )?.lastName
                  }
                </span>{" "}
                . {getPostDate(singlePost?.createdAt)}
                <p>@{singlePost?.username}</p>
              </span>
            </div>
            {!showEllipsisContent[singlePost?._id] && token && (
              <i
                className="fa-solid fa-ellipsis"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowEllipsisContent(() => ({ [singlePost?._id]: true }));
                }}
              ></i>
            )}
            {showEllipsisContent[singlePost?._id] && (
              <div className="post-ellipsis-layout">
                {token && user.username === singlePost?.username && (
                  <div className="post-ellipsis-container">
                    <div
                      onClick={() => {
                        setShowEditModal((showEditModal) => ({
                          ...showEditModal,
                          show: true,
                          id: singlePost?._id,
                        }));
                      }}
                      className="post-ellipsis-container-pill"
                    >
                      Edit
                    </div>
                    <div
                      className="post-ellipsis-container-pill"
                      onClick={() => {
                        setShowDelModal((showDelModal) => ({
                          ...showDelModal,
                          show: true,
                          id: singlePost?._id,
                        }));
                      }}
                    >
                      Delete
                    </div>
                  </div>
                )}
                {token && user?.username !== singlePost?.username && (
                  <div className="post-ellipsis-container">
                    <div
                      className="post-ellipsis-container-pill"
                      onClick={() => {
                        if (
                          isUserFollowed(
                            postState?.users,
                            postState?.users?.find(
                              (user) => user?.username === singlePost?.username
                            )._id
                          )
                        ) {
                          unFollowUser(
                            token,
                            postState?.users?.find(
                              (user) => user?.username === singlePost?.username
                            )._id,
                            dispatchPost
                          );
                          console.log("unfollow");
                        } else {
                          followUser(
                            postState?.users?.find(
                              (user) => user?.username === singlePost?.username
                            )._id,
                            token,
                            dispatchPost
                          );
                          console.log("follow");
                        }
                      }}
                    >
                      {isUserFollowed(
                        postState?.users,
                        postState?.users?.find(
                          (user) => user?.username === singlePost?.username
                        )._id
                      )
                        ? "Unfollow"
                        : "Follow"}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="postcard-content">
            <Linkify componentDecorator={componentDecorator}>
              {singlePost?.content}
            </Linkify>
          </div>
          {singlePost?.postImage.length > 0 &&
            singlePost?.postImage.map((img, id) => {
              return (
                <div key={id}>
                  {img.split("/")[4] === "video" ? (
                    <video
                      controls
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    >
                      <source src={img} />
                    </video>
                  ) : (
                    <ModalImage
                      small={img}
                      medium={img}
                      large={img}
                      showRotate={true}
                      imageBackgroundColor={"rgba(255, 0, 0, 0)"}
                      className="postcard-content-img"
                      alt={`Posted by ${
                        postState?.users?.find(
                          (u) => u.username === singlePost?.username
                        )?.firstName
                      }`}
                    />
                  )}
                </div>
              );
            })}
          <hr />
          <div
            style={{
              display: "flex",
              gap: `${singlePost?.likes?.likeCount > 0 ? "0.5rem" : "0rem"}`,
            }}
          >
            <div>
              {singlePost?.likes?.likeCount > 0 && (
                <>
                  <p
                    style={{
                      margin: "0.5rem 0",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setShowModal((showModal) => ({
                        ...showModal,
                        show: true,
                        type: "LIKED BY",
                      }));
                    }}
                  >
                    <span
                      style={{
                        color: "#00A9FF",
                        fontWeight: "bold",
                        marginRight: "0.3rem",
                      }}
                    >
                      {singlePost?.likes?.likeCount}
                    </span>
                    Like{singlePost?.likes?.likeCount > 1 ? "s" : ""}
                  </p>
                </>
              )}
            </div>
            <div>
              {singlePost?.comments?.length > 0 && (
                <>
                  <p
                    style={{
                      margin: "0.5rem 0",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        color: "#00A9FF",
                        fontWeight: "bold",
                        marginRight: "0.3rem",
                      }}
                    >
                      {singlePost?.comments?.length}
                    </span>
                    Comment{singlePost?.comments?.length > 1 ? "s" : ""}
                  </p>
                </>
              )}
            </div>
          </div>
          <hr />

          <div className="card-action-buttons">
            <i
              className={`${
                isPostLiked(singlePost?.likes, user) ? "fa solid" : "fa-regular"
              } fa-heart`}
              onClick={() => {
                if (!token) {
                  toast.error("please login to continue");
                } else {
                  if (!isPostLiked(singlePost?.likes, user)) {
                    postLikeHandler(token, singlePost?._id, dispatchPost);
                  } else {
                    postDislikeHandler(token, singlePost?._id, dispatchPost);
                  }
                }
              }}
            ></i>
            <i className="fa-regular fa-comment"></i>
            <i
              className={`${
                postState.bookmarks.includes(singlePost?._id)
                  ? "fa-solid"
                  : "fa-regular"
              } fa-bookmark`}
              onClick={() => {
                if (!token) {
                  toast.error("please login to continue");
                } else {
                  if (postState.bookmarks.includes(singlePost?._id)) {
                    removeFromBookmarkHandler(
                      token,
                      singlePost?._id,
                      dispatchPost
                    );
                  } else {
                    addToBookmarkHandler(token, singlePost?._id, dispatchPost);
                  }
                }
              }}
            ></i>
            <i
              className="fas fa-share"
              onClick={() => {
                setShowShare((showShare) => ({
                  ...showShare,
                  id: singlePost?._id,
                  show: true,
                }));
              }}
            ></i>
          </div>
        </div>
      )}
      {token && Object.keys(singlePost)?.length > 0 && (
        <AddComment postId={singlePost?._id} />
      )}
      {singlePost?.comments?.length > 0 &&
        Object.keys(singlePost)?.length > 0 && (
          <ShowComments postId={singlePost?._id} />
        )}
    </>
  );
};
