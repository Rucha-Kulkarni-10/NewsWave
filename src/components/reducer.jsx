

function reducer(state, action) {
    switch (action.type) {
        case 'SET_STORIES':
            return {
                ...state,
                isLoading: true,
            };
        case 'GET_STORIES':
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
            };

        case 'REMOVE_POST':
            return {
                ...state,
                hits: state.hits.filter((curelem) => curelem.objectID !== action.payload)
            };

        case 'SEARCH_POST':
            return {
                ...state,
                query: action.payload,
            };

        case 'NEXT_PAGE':
            let pagenumInc = state.page + 1;

            if (pagenumInc >= state.nbPages) {
                pagenumInc = 0;
            }
            return {
                ...state,
                page: pagenumInc,
            };

        case 'PREV_PAGE':
            let pagenum = state.page - 1;

            if (pagenum <= 0) {
                pagenum = 0;
            }
            return {
                ...state,
                page: pagenum,
            };
    }

    return state;
}

export default reducer;