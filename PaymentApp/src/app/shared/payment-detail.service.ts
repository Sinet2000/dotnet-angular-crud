import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor() { }

  readonly baseUrl = 'http://localhost:44311/api/PaymentDetail';
  formData: PaymentDetail = new PaymentDetail();
}
