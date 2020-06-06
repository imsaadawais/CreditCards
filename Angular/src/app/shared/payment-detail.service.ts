import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData : PaymentDetail;
  faCoffee = faCoffee;
  readonly  rootUrl = "http://localhost:53547/api";
  list : PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail ()
  {
    return this.http.post(this.rootUrl+'/PaymentDetails',this.formData);
  }
  putPaymentDetail ()
  {
    return this.http.put(this.rootUrl+'/PaymentDetails/'+this.formData.PMId, this.formData);
  }
 
  deletePaymentDetail (id)
  {
    return this.http.delete(this.rootUrl+'/PaymentDetails/'+id);
  }
 
  refreshList()
  {
    this.http.get(this.rootUrl+'/PaymentDetails')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
