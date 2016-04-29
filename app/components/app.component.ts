import {Component, AfterViewChecked} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ColumnsComponent} from './columns.component';
import {ColumnsService} from '../services/columns.service';

@Component({
    selector: 'columns-app',
    templateUrl: 'app/templates/app.template.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ColumnsService]
})

@RouteConfig([
    {path: '/', name: 'Columns', component: ColumnsComponent}
])

export class AppComponent implements AfterViewChecked {
    public title = 'Columns';

    ngAfterViewChecked() {
        // init material design lite elements
        window['componentHandler'].upgradeDom();
    }
}
