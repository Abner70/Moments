import { Component, Input, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit{

  @Input() lastImage:string = ''
btnText = "Compartilhar!"
fileText = "image"


constructor(
  private momentService: MomentService, 
  private messagesService:MessagesService,
  private router: Router
  ) {}

ngOnInit():void{}

async createHandler(moment:Moment) {
  const formData = new FormData();

  formData.append('title', moment.title);
  formData.append('description', moment.description);

  if(moment.image){
    formData.append('image', moment.image);
  }
  // this.lastImage= 
    

  //todo

  // enviar para o service
  await this.momentService.createMoment(formData).subscribe();

  // exibir msg
  this.messagesService.add("momento adicionado com sucesso!");

  //redirect
  this.router.navigate(['/']);

  console.log('deu bom');
  
}


}
