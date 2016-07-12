import { Component, AfterViewChecked } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ColumnsComponent } from './columns.component';
import { ColumnsService } from '../services/columns.service';
import { CardsService } from '../services/cards.service';

@Component({
    selector: 'columns-app',
    templateUrl: 'app/templates/app.template.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ColumnsService, CardsService],
    precompile: [ColumnsComponent]
})

export class AppComponent implements AfterViewChecked {
    public title = 'Columns';

    ngAfterViewChecked() {
        // init material design lite elements
        window['componentHandler'].upgradeDom();
    }
}
