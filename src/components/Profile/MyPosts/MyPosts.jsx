import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator)
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text)
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}
                    />
                </div>
                <button onClick={addPost}>Add post
                </button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
