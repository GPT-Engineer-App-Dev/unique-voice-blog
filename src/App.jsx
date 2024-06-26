import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { useState } from "react";
import { useColorMode, Button } from "@chakra-ui/react";

function App() {
  const [posts, setPosts] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Button onClick={toggleColorMode} position="fixed" top="1rem" right="1rem">
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
      <Routes>
        <Route exact path="/" element={<Index posts={posts} deletePost={deletePost} />} />
        <Route exact path="/add-post" element={<AddPost addPost={addPost} />} />
      </Routes>
    </Router>
  );
}

export default App;