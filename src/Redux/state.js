let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'My first post', likes: 40},
                {id: 2, message: 'My second post', likes: 2},
            ],
            newPostText: ''
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
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer // Паттерн наблюдатель
    },

    dispatch(action) { // action обьект у которого обезательно свойство type
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    },
}

export default store;
window.store = store;