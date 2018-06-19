import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-photo-content',
  templateUrl: './photo-content.component.html',
  styleUrls: ['./photo-content.component.css']
})
export class PhotoContentComponent implements OnInit {

  @Input()
  imgSrc:string;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('drop', ['$event']) onDrop(event) {   
    event.stopPropagation();
    event.preventDefault();
    let file = event.dataTransfer.files[0];
    if(file.type.match('image.*')){
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e:any) =>{
          this.imgSrc = e.target.result;
      };
    }

}

@HostListener('dragover', ['$event']) onDragOver(event) {   
  event.stopPropagation();
  event.preventDefault();

}
@HostListener('dragleave', ['$event']) onDragEnter(event) {   
  event.stopPropagation();
  event.preventDefault();
}
}
