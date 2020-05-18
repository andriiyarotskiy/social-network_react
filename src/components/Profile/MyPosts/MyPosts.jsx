import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post message='My first post' like=' 0'/>
                <Post message='My second post' like=' 42'/>
            </div>
        </div>
    )
}

export default MyPosts;
