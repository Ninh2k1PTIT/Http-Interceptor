import { Component, OnInit, VERSION } from '@angular/core';
import { ServiceComponent } from './app.service';
import { ErrorInterceptor } from './error.interceptor';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public data: any;
  constructor(
    private _interceptor: ErrorInterceptor,
    private _service: ServiceComponent
  ) {}
  name = 'Angular ' + VERSION.major;
  code = this._interceptor.codeError;
  ngOnInit(): void {}
  test1() {
    this._service.getData().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }
  test2() {
    this._service.demo404error().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }
}
