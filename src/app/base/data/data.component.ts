import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../service/user-login.service';

import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community'; // Column Definition Type Interface
import 'ag-grid-enterprise';
@Component({
  selector: 'app-data',
 templateUrl: './data.component.html',
  styleUrl: './data.component.css'  
})
export class DataComponent implements OnInit {
  private gridApi!:GridApi<any>;
  inptext!: string;  
  cRNSearchList:any[]=[];
  // rowData = [
  //   { id:"1",make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //   { id:"2", make: "Ford", model: "F-Series", price: 33850, electric: false },
  //   {  id:"3",make: "Toyota", model: "Corolla", price: 29600, electric: false },
  // ];
 
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    {field: "id",headerName:"Id",
      cellRenderer:(item:any)=>{ return "CRN-"+item.value}},
    { field: "mprn",headerName:"MPRN",filter:true },
    { field: "postalCode",headerName:"PostalCode" },
    { field: "ssc",headerName:"SSC" },
    { field: "crn",headerName:"CRN"},
      { field: "confirmationNumber",headerName:"ConfirmationNumber" },
    { field: "ced",headerName:"CED" },
    { field: "priority",headerName:"Priority" },
    { field: "contactHandler",headerName:"ContactHandler" },
    { field: "sosDays",headerName:"SOSDays" },
    { field: "eventDate",headerName:"EventDate" }     
  ];
  defaultColDef={
    flex:1,
minWidth:100
  }
  constructor(private userLoginService:UserLoginService){      
    }
  ngOnInit(): void {
    this.userDisplayName = localStorage.getItem('userName');   
    this.getAllCRNSearch();   
  }
  userDisplayName?:any | string;
  onGridReadyEvent = (event: GridReadyEvent<any>) => {
    this.gridApi=event.api;
   
}
onbtExport()
{
  this.gridApi.exportDataAsExcel();
}
  clkFind()
  {
    this.userLoginService.getCRNSerach(this.inptext).subscribe(data=>{data});
  }
  getAllCRNSearch()
  {
    this.userLoginService.getAllCRNSerach().subscribe(data=>{this.cRNSearchList=data});
  }
}
