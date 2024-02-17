import Mockman from "mockman-js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { Home } from "./pages/Home/Home";
import { Explore } from "./pages/Explore/Explore";
import { Layout } from "./pages/Layout/Layout";
import { Feed } from "./pages/Feed/Feed";
import { RequireAuth } from "./services/RequireAuth";
import { Bookmark } from "./pages/Bookmark/Bookmark";
import { SinglePost } from "./pages/SinglePost/SinglePost";
import { getToken } from "./backend/utils/getToken";
import { SingleProfile } from "./pages/SingleProfile/SingleProfile";
import { Toaster } from "react-hot-toast";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

function App() {
  const token = getToken();
  return (
    <div className="App">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        containerStyle={{
          bottom: "3rem",
          right: "3rem",
        }}
      />
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route
          path="/"
          element={
            token ? (
              <RequireAuth>
                <Layout>
                  <Feed />
                </Layout>
              </RequireAuth>
            ) : (
              <Home />
            )
          }
        />
        <Route
          path="/explore"
          element={
            <Layout>
              <Explore />
            </Layout>
          }
        />
        <Route
          path="/feed"
          element={
            <RequireAuth>
              <Layout>
                <Feed />
              </Layout>
            </RequireAuth>
          }
        />
        <Route
          path="/bookmark"
          element={
            <RequireAuth>
              <Layout>
                <Bookmark />
              </Layout>
            </RequireAuth>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <Layout>
              <SinglePost />
            </Layout>
          }
        />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile/:username"
          element={
            <Layout>
              <SingleProfile />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
