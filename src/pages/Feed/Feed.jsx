import { useContext } from "react";
import { DataContext } from "../../context/Data/DataContext";
import { getUserFeed } from "../../backend/utils/getUserFeed";
import { Postcard } from "../../components/PostCard/PostCard";
import { PostCardShimmer } from "../../components/PostCardShimmer/PostCardShimmer";
import { Navbar } from "../../components/Navbar/Navbar";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { Filters } from "../../components/Filters/Filters";

export const Feed = () => {
  const { postState } = useContext(DataContext);
  const userFeed = getUserFeed(postState);

  return (
    <>
      <Navbar from="Home" />
      <div style={{ marginTop: "4rem" }}>
        {!postState?.loading && <CreatePost />}
        {!postState?.loading && <Filters />}
        {postState?.loading && <PostCardShimmer />}
        {userFeed?.length > 0 && <Postcard data={userFeed} />}
      </div>
    </>
  );
};
