import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
controlPanelGroup: FormGroup;
  constructor(private _fb: FormBuilder, private service: MainService) { }

  ngOnInit(): void {
    this.controlPanelGroup = this._fb.group({
      dailyNotifications: [this.service.weeklyNotifications],
      enablePermissions: [this.service.allowedPermissions]
    });

    this.controlPanelGroup.get('enablePermissions').valueChanges.subscribe(data => {
      if(data){
        this.service.setPermissions(true);
        return;
      }
      this.service.setPermissions(false);
    });

    this.controlPanelGroup.get('dailyNotifications').valueChanges.subscribe(data => {
      if(data){
        this.service.setWeeklyNotifications(true);
        return;
      }
      this.service.setWeeklyNotifications(false);
    });

  }

  

}
