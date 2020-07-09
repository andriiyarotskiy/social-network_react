import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
        sidebar: {}
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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    },
}

export default store;
window.store = store;