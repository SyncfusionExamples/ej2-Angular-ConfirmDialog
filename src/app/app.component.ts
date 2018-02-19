import { Component, ViewChild, OnInit } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';
import { Element } from '@angular/compiler';

@Component({
    selector: 'my-app',
    template: `
    <br/>
    <br/>
    <span> Do you want to save changes? </span>
    <ej-dropdownlist id='ddlelement' [dataSource]='data' width="200px" (change)="onOpenDialog($event)" placeholder = 'Select your option'></ej-dropdownlist>
    <ej-dialog #ejDialog header="Alert Dialog" [visible] = false [content] = ContainerContent [target]='targetElement' [buttons]='buttons' width='250px'>
    </ej-dialog>`
})

export class AppComponent implements OnInit {
    @ViewChild('ejDialog') ejDialog: DialogComponent;
     // The Dialog shows within the target element.
     public targetElement: HTMLElement = document.getElementById('dialog-container');

         // defined the array of data
    public data: string[] = ['Yes', 'No'];

     //To Load Dialog content from container
     public ContainerContent: HTMLElement = document.getElementById('dialog-content');

     public hideDialog: Function;
     //button template 
     public buttons: Object;

     // Sample level code to handle the button click action
     onOpenDialog(event: any) {
         if (event.value === "Yes") {
            (this.ejDialog.content as HTMLElement).style.display = 'block';
             this.ejDialog.show();
         }
     }

       ngOnInit() {
     this.hideDialog = function(event: any) {
        this.ejDialog.hide();
       };

       this.buttons = [
         {
             'click': this.hideDialog.bind(this),
             // Accessing button component properties by buttonModel property
               buttonModel:{
               content: 'OK',
               //Enables the primary button
               isPrimary: true
             }
         },
         {
             'click': this.hideDialog.bind(this),
             buttonModel:{
               content: 'Cancel',
             }
         }
     ];
     }
 }
