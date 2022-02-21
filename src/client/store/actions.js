const AddPreview = (data) => {
    return {
        type: "ADDPREVIEW",
        payload: data
    }
}

const DeletePreview = (data) => {
    return {
        type: "DELETEPREVIEW",
        payload: data
    }
}

export default { AddPreview, DeletePreview };
