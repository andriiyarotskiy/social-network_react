import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div className={classes.mainImage}>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt=""/>
        </div>
        <div>
            ava + descriptoin
        </div>
        <MyPosts/>
    </div>
}

export default Profile;
