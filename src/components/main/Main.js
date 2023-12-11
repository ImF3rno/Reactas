import Article from "../article/Article";
// import PostsData from "../../data/Posts";
import { useState } from "react";
import AddArticle from "../addArticle/AddArticle";

const Main=()=>{
    const [clicked,setClicked]=useState(false)
    const [posts,setPosts]=useState([]);
    const handleClick=()=>{
        setClicked(true)
    }

    const handleFormData=(data)=>{
        setPosts((prevData)=>{
            setClicked(false)
            return[data,...prevData]
        })
    }
    console.log("is main komponento",posts)
    
    return(
        <main>
            <div className="container">
                {posts.map((post)=>
                    <Article key={post.id} title={post.title} description={post.description}/>
                )}
                <button onClick={handleClick}>Spausti norint prideti naujiena</button>
                {clicked ? <AddArticle onSave={handleFormData}/>:<div></div>}
                <h1>Prideti naujiena</h1>
            </div>
        </main>
    );
}

export default Main;