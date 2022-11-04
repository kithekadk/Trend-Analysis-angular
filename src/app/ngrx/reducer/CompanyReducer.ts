import { createFeatureSelector, createReducer } from "@ngrx/store";

export interface companyState{
    parcel:any
    parcels: any[]


}

const initialCompanyState: companyState={
    parcel:null,
    parcels:[]
}

const getCompanyFeatureState = createFeatureSelector<companyState>('company')
export const companyReducer= createReducer(
    initialCompanyState
)