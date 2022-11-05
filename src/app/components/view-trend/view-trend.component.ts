import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { companyInterface } from 'src/app/interfaces/companyInterface';
import { Chart, CategoryScale,registerables } from 'chart.js';
import { Store } from '@ngrx/store';
import { companyState, getCompanies } from 'src/app/ngrx/reducer/CompanyReducer';
import * as Actions from "../../ngrx/actions/CompanyActions";
import { map } from 'rxjs';

Chart.register(CategoryScale);
Chart.register(...registerables);

interface startStop{
  start:string
  end:string
}
@Component({
  selector: 'app-view-trend',
  templateUrl: './view-trend.component.html',
  styleUrls: ['./view-trend.component.css']
})
export class ViewTrendComponent implements OnInit {
  Companies$ =this.store.select(getCompanies).pipe(
    map((res)=>{
      return res
    },(err:Error)=>{
      console.log(err.message)
    }
    )
  )
  filter=''
  startdate=''
  enddate=''
  chart:any
  constructor(private api:ApiserviceService, private store: Store<companyState>) { }

  ngOnInit(): void {
    this.store.dispatch(Actions.loadCompany())
  }

  getValues(data:startStop){
    this.startdate=data.start;
    this.enddate=data.end
    console.log(this.startdate)
    console.log(this.enddate)
    this.getOneCompanyGraph()
  }

  getOneCompanyGraph(){
    this.api.getOneCompany().subscribe(res=>{

      let dates = res[1].map((el:any)=>el[0])
      let end_of_day_price = res[1].map((el:any)=>el[1])

      // console.log(dates);
      let first_Selected_date = dates.findIndex((el:any)=> el===this.startdate)
      let last_Selected_date = dates.findIndex((el:any)=> el===this.enddate)
      console.log(first_Selected_date)
      console.log(last_Selected_date)

      let date_range = dates.slice(first_Selected_date, last_Selected_date)
      let price_range = end_of_day_price.slice(first_Selected_date, last_Selected_date)
      this.chart = new Chart('mychart',{
        type:'line',
        data:{
          labels:date_range,
          datasets:[
            {
              label: 'End of day Price',
              data:price_range,
              borderColor: '#3cba9f',
              backgroundColor: 'black',
              fill:false,
              borderWidth:1,
              tension:0.4
            }
          ]
        },
        options:{
          scales:{
            x:{
              display:true
            },
            y:{
              display:true
            }
          }
        }
      })

      return res
    }
    )
    this.chart.destroy();
  }
}
