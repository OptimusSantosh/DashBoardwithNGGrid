import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';


@Component({
  selector: 'app-parent-table',
  templateUrl: './parent-table.component.html',
  styleUrls: ['./parent-table.component.scss']
})
export class ParentTableComponent implements OnInit {

  insuranceData: any;
  insuranceDataHeaders: any[];
  insuranceDataValue: any[];

  selectedData: any[];

  constructor(private DataServiceRetriever: DataService) { }

  ngOnInit() {
    this.DataServiceRetriever.getJSON().subscribe(data => {
      console.log(data);
      this.insuranceData = data;
      this.insuranceDataHeaders = this.insuranceData.cols;
      this.insuranceDataValue = this.insuranceData.data;
    });
  }

  onRowSelect(event) {
    this.DataServiceRetriever.selectedValue(event.data);
    console.log(event);
  }

}
