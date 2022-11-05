import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { companyInterface } from "src/app/interfaces/companyInterface";
import * as Action from "../actions/CompanyActions"

export interface companyState{
    parcel:any
    parcels: any[]

    LoadCompanySuccess : companyInterface[]
    LoadCompanyFailure : string

    LoadCompanyDataSuccess : any[]
    LoadCompanyDataFailure : string
}

const initialCompanyState: companyState={
    parcel: null,
    parcels: [],

    LoadCompanySuccess: [],
    LoadCompanyFailure: "",

    LoadCompanyDataSuccess: [],
    LoadCompanyDataFailure: "",
}

const getCompanyFeatureState = createFeatureSelector<companyState>('company');

export const getCompanies = createSelector(
    getCompanyFeatureState,
    state=>state.LoadCompanySuccess
)

export const getCompanyData = createSelector(
    getCompanyFeatureState,
    state=>state.LoadCompanyDataSuccess
)

export const companyReducer= createReducer(
    initialCompanyState,
    on(Action.loadCompanySuccess ,(state, action):companyState=>{
        return {...state, LoadCompanySuccess: action.companies}
    }),
    on(Action.loadCompanyFailure ,(state, action):companyState=>{
        return {...state, LoadCompanyFailure: action.error}
    })
)