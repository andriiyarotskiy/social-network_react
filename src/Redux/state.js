const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


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
            newMessageBody: ''
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({message: body, id: 6});
            this._callSubscriber(this._state)
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;
window.store = store;