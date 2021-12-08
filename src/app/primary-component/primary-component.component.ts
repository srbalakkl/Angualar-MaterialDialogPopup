import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogDataExampleDialogComponent} from "../dialog-data-example-dialog/dialog-data-example-dialog.component";

@Component({
    selector: 'app-primary-component',
    templateUrl: './primary-component.component.html',
    styleUrls: ['./primary-component.component.css']
})
export class PrimaryComponentComponent implements OnInit {

    constructor(public dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    openDialog() {
        console.log("asdf");
        this.dialog.open(DialogDataExampleDialogComponent);
    }
}
