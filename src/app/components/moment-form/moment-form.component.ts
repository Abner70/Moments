import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Moment>()
  @Input() btnText!: string
  // @Input() valorFil?: string
  @Input() momentData: Moment | null = null;
  ultimaImagem?: string

  momentForm!: FormGroup

  constructor(){}

  ngOnInit(): void{
    this.ultimaImagem = this.momentData?.image
    // colocando If ternário como parâmetro para recuperar os dados das edição
    this.momentForm = new FormGroup({
      id: new FormControl(this.momentData ? this.momentData.id : ''),
      title: new FormControl(this.momentData ? this.momentData.title : '', [Validators.required]),
      description: new FormControl(this.momentData ? this.momentData.description : '', [Validators.required]),
      image: new FormControl(this.momentData ? this.momentData.image : '')

    });
    // console.log("///////");
    // console.log(this.ultimaImagem);
  }

  get title(){
    return this.momentForm.get('title')! //exclamação pq eles de fato vão existir
  }
  get description(){
    return this.momentForm.get('description')!
  }
  get image(){
    return this.momentForm.get('image')!
  }

  submit(){
    if(this.momentForm.invalid){ //// retorna antes de terminar a submissão
      return;
    }

    console.log(this.momentForm.value);
    this.onSubmit.emit(this.momentForm.value)
  }

  onFileSelected(event: any){
    const file: File = event.target.files[0]
    this.momentForm.patchValue({image: file})

    // this.valorFil = this.momentForm.value.image.name;

    // console.log("evento");
    // console.log(this.valorFil);
  }
}
