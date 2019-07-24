import LocallStore from "./Store";

export const USER_TOKEN_HEADERS= {            
        'headers': {
         'content-type': 'application/json',
         Authorization:"Bearer "+ LocallStore.getToken()
       }
}
export const USER_HEADERS={
    'headers': {
        'content-type': 'application/json'
    }
}