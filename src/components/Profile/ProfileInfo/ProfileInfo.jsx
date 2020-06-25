import React from 'react';
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={style.main}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                ava + descriptoin
            </div>
        </div>
    )
}

export default ProfileInfo;
