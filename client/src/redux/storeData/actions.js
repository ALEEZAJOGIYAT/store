import {STORE_DATA} from './actionType'


export const storeData=(storeDetails)=>{
    return{
        type:STORE_DATA,
        payload:{
            data:storeDetails
        }
    }
}