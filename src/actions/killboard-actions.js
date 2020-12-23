import axios from 'axios'

export const getMatches = () => {
    const params = {
        range: 'week', 
        limit: 4,
        offset: 0,
        sort: 'totalFame' 
    }

    return dispatch => {

        axios.get('https://gameinfo.albiononline.com/api/gameinfo/battles', params)
            .then(response => {
                console.log(response)
                dispatch(getMatchesSuccess(response.data))
            })
    }
}

const getMatchesSuccess = (response) => {
    return {
        type: 'MATCHES_SUCCESS',
        payload: response
    }
}