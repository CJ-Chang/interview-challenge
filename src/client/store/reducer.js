const initialState = {
    preview: []
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDPREVIEW":
            let index = state.preview.findIndex(dup => dup.id == action.payload.id);
            return {
                ...state,
                preview: index == -1 ? [...state.preview, action.payload] : [...state.preview]
            };
        case "DELETEPREVIEW":
            return {
                ...state,
                preview: [...state.preview].filter((item) => item.id !== action.payload.id)
            };
        default:
            return {
                ...state
            }
    }
}

export default Reducer;
