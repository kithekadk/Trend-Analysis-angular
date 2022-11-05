import { createAction, props } from "@ngrx/store";
import { companyInterface } from "src/app/interfaces/companyInterface";

// LOAD COMPANIES
export const loadCompany = createAction('loadCompany');

export const loadCompanySuccess = createAction(
    'loadCompanySuccess',
    props<{ companies: companyInterface[] }>()
);

export const loadCompanyFailure = createAction(
    'loadCompanyFailure',
    props<{ error: string }>()
);

// LOAD A COMPANY DATA
export const loadCompanyData = createAction('loadACompanyData');

export const LoadCompanyDataSuccess = createAction(
    'LoadCompanyDataSuccess',
    props<{ data: any[] }>()
);

export const LoadCompanyDataFailure = createAction(
    'LoadCompanyDataFailure',
    props <{ error: string }>()
);