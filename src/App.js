import { Layout } from "./Pages/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostDetails } from "./Pages/PostDetails/PostDetails";
import JSON from '../src/Components/Assets/JSON'
import { Article } from "./Pages/Article/Article";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/post/:id" element={<PostDetails posts={JSON} />} />
        <Route path="/articles"element={<Article posts={JSON} />} />
        <Route path="/login"element={<Login />} />
        <Route path="/signup"element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
