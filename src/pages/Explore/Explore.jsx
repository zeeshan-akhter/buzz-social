import { useContext } from "react";
import { DataContext } from "../../context/Data/DataContext";
import { Postcard } from "../../components/PostCard/PostCard";
import { PostCardShimmer } from "../../components/PostCardShimmer/PostCardShimmer";
import { Navbar } from "../../components/Navbar/Navbar";

export const Explore = () => {
  const { postState } = useContext(DataContext);
  return (
    <>
      <Navbar from="Explore" />
      <div style={{ marginTop: "4rem" }}>
        {postState?.loading && <PostCardShimmer />}
        {postState?.posts?.length > 0 && <Postcard data={postState?.posts} />}
      </div>
    </>
  );
};