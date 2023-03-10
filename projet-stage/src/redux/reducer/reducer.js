import { HANDL_A_PLAIN, HANDL_COMMENT_PLAIN, HANDL_DE_PLAIN, HANDL_ID_PLAIN, HANDL_REPONSE_PALIN, HANDL_SUJET_PALIN } from "../actions/types"

const intialstate = {
    idplain:0,
    deplain:"",
    aplain:"",
    sujetplain:"",
    reponseplain:"",
    commentplain:"",
    allplaintes:[],
    plaintesfini:[],
    plaintesnofini:[]
}

export default function reducer(state=intialstate,action){
    switch(action.type){
        case HANDL_ID_PLAIN:
            return {...state,idplain:action.value}
        case HANDL_DE_PLAIN:
            return {...state,deplain:action.value}
        case HANDL_A_PLAIN:
            return {...state,aplain:action.value}
        case HANDL_SUJET_PALIN:
            return {...state,sujetplain:action.value}
        case HANDL_REPONSE_PALIN:
            return{...state,reponseplain:action.value}
        case HANDL_COMMENT_PLAIN:
            return {...state,commentplain:action.value}
        default:
            return state
    }
}
