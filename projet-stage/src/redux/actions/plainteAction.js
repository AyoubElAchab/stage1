import { HANDL_ALL_PLAINTES, HANDL_A_PLAIN, HANDL_COMMENT_PLAIN, HANDL_DE_PLAIN, HANDL_ID_PLAIN, HANDL_REPONSE_PALIN, HANDL_SUJET_PALIN } from "./types";
import { useSelector } from "react-redux";

export function handlIdPlain(e){
    return{
        type:HANDL_ID_PLAIN,
        value:e
    }
}

export function handlDePlain(e){
    return{
        type:HANDL_DE_PLAIN,
        value:e
    }
}

export function handlAPlain(e){
    return {
        type:HANDL_A_PLAIN,
        value:e
    }
}

export function handlSujetPlain(e){
    return{
        type:HANDL_SUJET_PALIN,
        value:e
    }
}

export function handlReponsePlain(e){
    return{
        type:HANDL_REPONSE_PALIN,
        value:e
    }
}

export function handlCommentPlain(e){
    return{
        type:HANDL_COMMENT_PLAIN,
        value:e
    }
}

export function handleAllPlaintes(e){
    return {
        type:HANDL_ALL_PLAINTES,
        value:e
    }
}






