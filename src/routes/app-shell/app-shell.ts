import {Component} from "angular2/core";
import {CardComponent} from "../../components/card/card";

@Component({
    selector: 'app-shell',
    template: require('./app-shell.html'),
    directives: [CardComponent]
})
export class AppShell {

}