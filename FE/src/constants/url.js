export const URL = {
    PROD: {
        GET_CATEGORY_API: 'http://15.165.223.140:8080/api/category',
        DELETE_NOTE_API: 'http://15.165.223.140:80/api/notes?id=',
        CREATE_NOTE_API: 'http://15.165.223.140:80/api/notes',
        GET_SPECIFIC_CATEGORY_NOTE_API: 'http://15.165.223.140:8080/api/notes/category?categoryId='
    },

    DEV: {
        GET_ALL_NOTES_API: 'http://15.165.223.140:8080/dev-api/note'
        // GET_ALL_NOTES_API: 'http://15.165.223.140:8080/api/notes/category?categoryName=%ED%95%B4%EC%95%BC%ED%95%A0%EC%9D%BC'
        // GET_ALL_NOTES_API: 'http://15.165.223.140:8080/api/notes/category?categoryName=해야할일'
    }
}