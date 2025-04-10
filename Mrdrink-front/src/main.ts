import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { importProvidersFrom } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { provideAntIcons } from '@ant-design/icons-angular';
import { UserOutline, LockOutline } from '@ant-design/icons-angular/icons';
import { NzMessageModule} from 'ng-zorro-antd/message'
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; 

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideToastr(),
    importProvidersFrom(NzIconModule, NzMessageModule),
    provideAntIcons([UserOutline, LockOutline])
  ]
});
