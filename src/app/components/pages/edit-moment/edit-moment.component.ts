import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moment';
import {Router, ActivatedRoute} from '@angular/router'
import { environment } from 'src/environments/environment';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent {
  moment!:Moment;
  btnText: string = 'editar';
  // ultimaImagem?: string

  constructor(
    private momentService: MomentService, 
    private route: ActivatedRoute,
    private router: Router,
    private messagesService: MessagesService
    
    ){}

  ngOnInit():void{
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.momentService.getMoment(id).subscribe((item)=> {
      this.moment =  item.data;
    })
  }

  async editHandler(momentData: Moment){
    const id = this.moment.id;

    const formData = new FormData();

    formData.append('title', momentData.title);
    formData.append('description', momentData.description);

    if(momentData.image){
      formData.append('image', momentData.image);
    }
    
    await this.momentService.updateMoment(id!, formData).subscribe()

    this.messagesService.add(`Moment "${this.moment.title}" foi atualizado com sucesso!`)

    this.router.navigate(['/'])
  }
}