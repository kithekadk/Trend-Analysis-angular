import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import * as CompanyActions from '../actions/CompanyActions';

@Injectable({
  providedIn: 'root',
})
export class companyEffects {
  constructor(
    private api: ApiserviceService,
    private actions: Actions,
  ) {}
  loadCompanies = createEffect(() => {
    return this.actions.pipe(
      ofType(CompanyActions.loadCompany),
      mergeMap(() =>
        this.api.getCompanies().pipe(
          map((companies) => CompanyActions.loadCompanySuccess({ companies })),
          catchError((error) =>
            of(CompanyActions.loadCompanyFailure({ error }))
          )
        )
      )
    );
  });

  loadCompanyData = createEffect(() => {
    return this.actions.pipe(
      ofType(CompanyActions.loadCompanyData),
      mergeMap(() =>
        this.api.getOneCompany().pipe(
          map((data) => CompanyActions.LoadCompanyDataSuccess({ data })),
          catchError((error) =>
            of(CompanyActions.LoadCompanyDataFailure({ error }))
          )
        )
      )
    );
  });
}
