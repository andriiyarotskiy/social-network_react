import {rerenderEntireTree} from "../render";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'My first post', likes: 40},
            {id: 2, message: 'My second post', likes: 2},
        ],
        newPostText: 'react-js'
    },
    dialogsPage: {
        messages: [
            {message: 'Hello', id: 1},
            {message: 'How are you?', id: 2},
            {message: 'Are you hungry?', id: 3},
            {message: 'yo', id: 4},
            {message: 'yo', id: 5}
        ],
        dialogs: [
            {id: 1, name: 'Andriy'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Katia'},
            {id: 4, name: 'Alina'},
            {id: 5, name: 'Vika'},
        ],
    },
}


export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state;