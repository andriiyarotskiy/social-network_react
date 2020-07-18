const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {message: body, id: 6}]
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;