import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import {DataInterface} from '../interfaces/data';
import { MatSort } from '@angular/material/sort';

import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-studen-info',
  templateUrl: './studen-info.component.html',
  styleUrls: ['./studen-info.component.css']
})
export class StudenInfoComponent implements OnInit,AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor( private firestore: AngularFirestore) { }
  public dataSource = new MatTableDataSource<any>();

  val = [{'admNo':12,
  'name':'pank',
  // 'DOB',
  'fatherName':'fds',
  'aadhar':52212,
  // 'adm_date':,
  'sex':'M'},
  {'admNo':78,
  'name':'adio',
  // 'DOB',
  'fatherName':'fds',
  'aadhar':52212,
  // 'adm_date':,
  'sex':'M'}]
  itemList;
  ngOnInit(): void {

    // this.dataSource.data = this/
    //     this.firestore.collection("studentInfo").snapshotChanges()
    // .subscribe(
    //   res =>(this.dataSource.data = <any>res,
    //     console.log(res)        
    //     )
    //   );

// experiment

// this.dataSource= this.firestore.collection("studentInfo").snapshotChanges().pipe(
//   Map(changes => {
//       return changes.map(doc => {
//           return{
//               id: doc.payload.doc.id,
//               data: doc.payload.doc.data()
//           }
//       })
//   })

this.firestore.collection("studentInfo").snapshotChanges()
    .subscribe(
      item =>{
        this.itemList = [];

        item.forEach(element => {
            let json = element.payload.doc.data();
            let ids = element.payload.doc.id;
            // let ot = JSON.stringify(json);
          let jsonObj = {};
          jsonObj['admNo'] = ids;
            let idArray= [];

            // console.log(json[0].id);
            for ( let k in <any>json){
              jsonObj[k] = json[k];
            }
            // json["$key"] = json.key;
            this.itemList.push(jsonObj);
        });

        this.dataSource = new MatTableDataSource(this.itemList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
      );

  }

  ngAfterViewInit():void{
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }


  public displayedColumns = ['admNo','name','DOB','fatherName','aadhar','adm_date','sex'
  //  ,'details', 'update', 'delete'
  ]; // order of display of components

  
  info;

  // getStudentInfo() { 
  //   return this.firestore.collection("studentInfo").snapshotChanges().subscribe(
  //     res =>(this.info = res));
  // }


  

}
