import { Component, OnInit,ViewChild } from '@angular/core';
import {LoginServiceService} from 'src/app/login-service.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


export interface ApplicationObject {
  name: string;
  position: number;
  versiondev: string;
  datedev : string;
  versionprod: string;
  dateprod : string;
  liendev :string;
  lienprod : string;
  lastcommit : string;
}



const ELEMENT_DATA: ApplicationObject[] = [
  {position: 1, name: 'AppMoteur', versiondev:'V10079', datedev:'12/02/2013', versionprod: 'H',dateprod:'04/12/2020',liendev: 'tutuut', lienprod:'lflfdsl',lastcommit:'12/02/2020'},
  {position: 2, name: 'AppReacteur', versiondev: 'V40026', datedev:'12/02/2013', versionprod: 'He',dateprod:'04/12/2020',liendev: 'tutuut', lienprod:'lflfdsl',lastcommit:'12/02/2020'},
  {position: 3, name: 'AppPaie', versiondev: 'V6941', datedev:'12/02/2013', versionprod: 'Li',dateprod:'04/12/2020',liendev: 'tutuut', lienprod:'lflfdsl',lastcommit:'12/02/2020'},
  {position: 4, name: 'AppData', versiondev: 'V90122', datedev:'12/02/2013', versionprod: 'Be',dateprod:'04/12/2020',liendev: 'tutuut', lienprod:'lflfdsl',lastcommit:'12/02/2020'},
  {position: 5, name: 'AppRh', versiondev: 'V10.811', datedev:'12/02/2013', versionprod: 'B',dateprod:'04/12/2020',liendev: 'tutuut', lienprod:'lflfdsl',lastcommit:'12/02/2020'},
  {position: 6, name: 'AppIdentity', versiondev: 'V12.0107', datedev:'12/02/2013', versionprod: 'C',dateprod:'04/12/2020',liendev: 'tutuut', lienprod:'lflfdsl',lastcommit:'12/02/2020'},
  {position: 7, name: 'AppCustom', versiondev: 'V140067', datedev:'12/02/2013', versionprod: 'N',dateprod:'04/12/2020',liendev: 'tutuut', lienprod:'lflfdsl',lastcommit:'12/02/2020'},
  {position: 8, name: 'AppSandBox', versiondev: 'V159994', datedev:'12/02/2013', versionprod: 'O',dateprod:'04/12/2020',liendev: 'tutuut', lienprod:'lflfdsl',lastcommit:'12/02/2020'},
  {position: 9, name: 'AppSecret', versiondev: 'V18.9984', datedev:'12/02/2013', versionprod: 'F',dateprod:'04/12/2020',liendev: 'tutuut', lienprod:'lflfdsl',lastcommit:'12/02/2020'},
  {position: 10, name: 'AppDumy', versiondev: 'V20.1797', datedev:'12/02/2013', versionprod: 'Ne',dateprod:'04/12/2020',liendev: 'tutuut', lienprod:'lflfdsl',lastcommit:'12/02/2020'},
];



@Component({
  selector: 'app-usine',
  templateUrl: './usine.component.html',
  styleUrls: ['./usine.component.css'],
})


export class UsineComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'developpement','production'];
  displayedColumns2: string[] = ['versiondev','datedev', 'versionprod','dateprod'];
  expandedElement: ApplicationObject | null;
  dataSource = this.BuildDataSource();
  in_app_label :any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public loginService : LoginServiceService) { }

  ngOnInit()
   {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loginService.getData();
   }

   clicTabApp(varia){
      this.in_app_label=varia;
      console.log(varia);
  }

  BuildDataSource()
  {
    return new MatTableDataSource(ELEMENT_DATA);
  }

}
