import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
controlPanelGroup: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.controlPanelGroup = this._fb.group({
      dailyNotifications: [true],
      enablePermissions: [true]
    });

    this.controlPanelGroup.get('enablePermissions').valueChanges.subscribe(data => {
      if(data){
        console.log('Enabled permissions');
        return;
      }
      console.log('disabled permissions ++++');
    });

    this.controlPanelGroup.get('dailyNotifications').valueChanges.subscribe(data => {
      if(data){
        console.log('Enabled daily notifications');
        return;
      }
      console.log('Disabled daily notifications');
    });

  }

  

}
