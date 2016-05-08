import {Component, AfterViewChecked} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {ColumnsComponent} from './columns.component';
import {ColumnsService} from '../services/columns.service';
import {CardsService} from '../services/cards.service';

@Component({
    selector: 'columns-app',
    templateUrl: 'app/templates/app.template.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, ColumnsService, CardsService]
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
