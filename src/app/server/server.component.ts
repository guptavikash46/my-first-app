import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})

export class ServerComponent implements OnInit{
    ngOnInit(): void {
        $(document).ready(function () {
            $("#addBtn").click(function(){
                alert("Add button is clicked.");
            });
        });
    }
    name: String = "Vikas";
    department: String = "Computer Science";
    allowServers: boolean = false;
    
    constructor(){
        setTimeout(() => {
            this.allowServers = true;
        }, 2000);
    }

    getName(){
        return this.name;
    }
    getDepartment(){
        return this.department;
        }
}