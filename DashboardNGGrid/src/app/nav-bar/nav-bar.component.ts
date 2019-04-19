import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  subscription: Subscription;

  navData: any;

  constructor(private DataServiceRetriever: DataService) {
  }

  ngOnInit() {
    this.subscription = this.DataServiceRetriever.broadcastData$
       .subscribe(navData => this.navData = navData[0]);
  }

}
