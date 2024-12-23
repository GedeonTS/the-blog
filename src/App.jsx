import "./App.css";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import NewPost from "./pages/NewPost";
import Post from "./pages/Post";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/posts/:postId" element={<Post />} />
          <Route exact path="/newpost" element={<NewPost />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={2000} hideProgressBar={true} />
    </Provider>
  );
}

export default App;
