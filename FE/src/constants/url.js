export const URL = {
    DEV: {
        GET_COLUMNS_API: 'http://15.165.223.140:80/api/columns',
        DELETE_NOTE_API: 'http://15.165.223.140:80/api/notes?id=',
        CREATE_NOTE_API: 'http://15.165.223.140:80/api/notes',
        GET_SPECIFIC_COLUMN_NOTES_API: 'http://15.165.223.140:80/api/notes/column?columnName='
    },

    MOCKUP: {
        GET_ALL_NOTES_API: 'http://15.165.223.140:80/api/notes'
        // GET_ALL_NOTES_API: 'http://15.165.223.140:8080/api/notes/column?columnName=%ED%95%B4%EC%95%BC%ED%95%A0%EC%9D%BC'
        // GET_ALL_NOTES_API: 'http://15.165.223.140:8080/api/notes/column?columnName=해야할일'
    }
}