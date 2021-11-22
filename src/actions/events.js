import { classBody } from "@babel/types";
import { types } from "../types/types";

{/*export const eventStartAddNew = (event) =>{

    try {
        return async(dispatch)=>{
            console.log(event)
        }

        if(body.ok){
            event
            dispatch( eventAddNew( event ))
        }
    } catch (error) {
        
    }
} */}

const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent });

export const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
});


export const eventDeleted = () => ({ type: types.eventDeleted });


