export const Header = () => {
  return (
    <h1
      className="center-text"
      style={{
        fontSize: "3.5rem",
        paddingTop: "2rem",
      }}
    >
      <span style={{ color: "#ff3b30" }}>BUZZ</span>
      SOCIAL
    </h1>
  );
};

export const shareHandler = async (postId) => {
  try {
    await navigator.share({
      title: "BuzzSocial",
      text: "Check out this post",
      url: `https://buzz-social.vercel.app/post/${postId}`,
    });
  } catch (error) {
    console.error("Error sharing:", error);
  }
};
