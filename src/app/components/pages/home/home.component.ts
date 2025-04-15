import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moment';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allMoments: Moment[] = []
  moments: Moment[] = []
  baseApiUrl = environment.baseApiUrl

  faSearch = faSearch
  searchTerm =""

  constructor(private momentService: MomentService, public dialog: MatDialog){}

  ngOnInit():void{
    this.momentService.getMoments().subscribe((items)=> {

      const data = items.data;

      data.map((item)=> {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-br');
      })
      this.allMoments = data;
      this.moments = data;
    });
    // console.log(`this.baseApiUrl/images/${moment.image}`);
  }

  search(e: Event):void{
    const target = e.target as HTMLInputElement
    const value = target.value

    // console.log(target);
    // console.log(value);

    this.moments = this.allMoments.filter((moment)=>moment.title.toLowerCase().includes(value))  ////removendo as chaves "{}" da função FILTER para que o return fique implicito e automatico
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogComponent, {width: '800px', height: '400px'});


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog success`);
    });
    console.log('abre dialog');
  }

}
