import { Router, ActivatedRoute } from '@angular/router';

export class ActionsToolbarConfig {
    constructor(public router: Router = null, public activatedRoute: ActivatedRoute = null){

    }
    public title: string;
    public newButton = new ActionsToolbarButtons('New', false, this.router, this.activatedRoute);
    public editButton = new ActionsToolbarButtons('Edit', false);
    public saveButton = new ActionsToolbarButtons('Save', false);
    public deleteButton = new ActionsToolbarButtons('Delete', false);
    public backButton = new ActionsToolbarButtons('Back', false, this.router, this.activatedRoute);
    public menu = new MenuToolbar();

    public addItemToMenu(item: ActionsToolbarButtons){
        this.menu.items.push(item);
    }
}

export class ActionsToolbarButtons {
    constructor(name: string, isVisible: boolean, public router: Router = null, public activatedRoute: ActivatedRoute = null, icon: string = ""){
        this.name = name;
        this.isVisible = isVisible
        this.icon = icon;
    }
    public name: string;
    public icon: string
    public isVisible: boolean;
    public fn: any;
}

export class MenuToolbar {
    constructor(){
        this.items = [];
    }

    public items : ActionsToolbarButtons[];
    public menuButton = new ActionsToolbarButtons('Actions', false);
}