import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child-table',
  templateUrl: './child-table.component.html',
  styleUrls: ['./child-table.component.scss']
})
export class ChildTableComponent implements OnInit {

  underWriterData: any;
  subscription: Subscription;

  constructor(private DataServiceRetriever: DataService) {
  }


  ngOnInit() {
    this.subscription = this.DataServiceRetriever.broadcastData$
       .subscribe(underWriterData => this.underWriterData = underWriterData[1]);
  }

}
