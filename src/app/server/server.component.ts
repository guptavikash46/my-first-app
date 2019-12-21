import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})

export class ServerComponent implements OnInit{
    
    name = "Vikas";
    department= "Computer Science";
    allowServers = false;
    serverString = "Server is not created";
    serverNameInput = "hello";
    serverCheck = false;
    servers = ['Test-server 1', 'Test-server 2'];

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
    getServerString(){
        this.servers.push(this.serverNameInput);
        this.serverCheck = true;
        return this.serverString = this.serverNameInput;
    }
    showText($event){
        this.serverNameInput = (<HTMLInputElement>event.target).value;
    }
    getServerColor(){
        return this.serverCheck === true ? 'green': 'red';
    }
    ngOnInit(): void {
        $(document).ready(function () {
            $('#addBtn').click(function(){
                //$('#addBtn').after("<div class="+"bg-primary"+">  <h2>this is the server page</h2>  <p>We have been working alot on this. Thanks to "+{{ getName() }} +"from the department of {{getDepartment()}}</p> </div> <hr>");
                //alert("Add button is clicked.");
            });
        });
    }

}