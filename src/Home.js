import { useState } from "react";
import BlogList from "./BlogList.js";
const Home = () => {

    const [name, setName] = useState('josh');

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);

    const handleClick= (e) =>{
        console.log("hello, hi");
    }
    const handleClickagain= (name) =>{
        console.log("hello, hi" +name );
    }

    const handleClickstate= () =>{
       setName("jessie");
    }
    return (
      <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}> Click ME</button>
        <button onClick= {() => handleClickagain('josh')}> Click ME Again</button>
        <p>{ name } </p>
        <button onClick={handleClickstate}> Click ME For State</button>
        <p>All Blogs</p>
        <BlogList blogs={blogs} />
        <p>filter Blogs</p>
        <BlogList blogs= {blogs.filter((blog) => blog.author === 'mario')} />

      </div>
    );
  }
   
  export default Home; 