import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";


const MyPostsContainer = () => {

    // let state = props.store.getState()


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action)
                    }
                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.posts}
                        newPostText={state.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
