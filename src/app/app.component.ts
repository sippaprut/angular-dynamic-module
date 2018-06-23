import {
  Component,
  NgModuleFactoryLoader,
  Injector,
  NgModuleRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private moduleRef: NgModuleRef<any>;

  constructor(
    private loader: NgModuleFactoryLoader,
    private injector: Injector
  ) {}

  loadModule() {
    const path = 'src/app/core/core.module#CoreModule';
    this.loader
      .load(path)
      .then(moduleFactory => {
        this.moduleRef = moduleFactory.create(this.injector);
        console.log('moduleRef', this.moduleRef);
      })
      .catch(err => {
        console.log('error loading module', err);
      });
  }
}
