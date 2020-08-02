import React from 'react';
import style from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={style.main}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.small} alt=""/>
                <span>{props.profile.fullName}</span>
            </div>
        </div>
    )
}

export default ProfileInfo;
