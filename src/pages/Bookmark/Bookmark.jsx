import { useContext } from "react";
import { DataContext } from "../../context/Data/DataContext";
import { Postcard } from "../../components/PostCard/PostCard";
import { getBookmarkArray } from "../../backend/utils/getBookmarkArray";
import { Navbar } from "../../components/Navbar/Navbar";
import { PostCardShimmer } from "../../components/PostCardShimmer/PostCardShimmer";

export const Bookmark = () => {
  const { postState } = useContext(DataContext);
  const bookmarkArray =
    postState?.bookmarks?.length > 0 &&
    getBookmarkArray(postState?.posts, postState?.bookmarks);
  return (
    <>
      <Navbar from="Bookmark" />

      <div style={{ marginTop: "4rem" }}>
        {postState?.loading && <PostCardShimmer />}
        {postState?.bookmarks?.length === 0 && (
          <h2 style={{ textAlign: "center", color: "#00A9FF" }}>
            No post added to bookmarks
          </h2>
        )}
        {postState?.bookmarks?.length > 0 && <Postcard data={bookmarkArray} />}
      </div>
    </>
  );
};
