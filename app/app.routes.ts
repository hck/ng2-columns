import { provideRouter, RouterConfig } from '@angular/router';

import { ColumnsComponent } from './components/columns.component';

export const routes: RouterConfig = [
    {path: '', component: ColumnsComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
