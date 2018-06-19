import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-editable-content',
  templateUrl: './editable-content.component.html',
  styleUrls: ['./editable-content.component.css']
})
export class EditableContentComponent implements OnInit,AfterViewInit {
  imageSrc: string;
  ngAfterViewInit(): void {
  }

  @ViewChild("imgInput", {read: ElementRef}) imgInput: ElementRef;
  @ViewChild("editView", {read: ElementRef}) editView: ElementRef;


  contenteditable:boolean = true;
  boldStyle:boolean = false;
  italicStyle:boolean = false;
  uderlineStyle:boolean = false;
  previewMode:boolean = false;


  constructor(private eleRef : ElementRef) { }

  ngOnInit() {
  }
  toggleBold(){
    this.boldStyle = !this.boldStyle;
    let selectedText = document.getSelection();
    if(!selectedText.isCollapsed){
      if(document.queryCommandState("bold") !== this.boldStyle){
        document.execCommand('bold',false,null);
      }
    }else{
      document.execCommand('bold',false,null);
    }
  }

  toggleItalic(){
    this.italicStyle = !this.italicStyle;
    let selectedText = document.getSelection();
    if(!selectedText.isCollapsed){
      if(document.queryCommandState("italic") !== this.italicStyle){
        document.execCommand('italic',false,null);
      }
    }else{
      document.execCommand('italic',false,null);
    }
  }

  toggleUnderline(){
    this.uderlineStyle = !this.uderlineStyle;
    let selectedText = document.getSelection();
    if(!selectedText.isCollapsed){
      if(document.queryCommandState("underline") !== this.uderlineStyle){
        document.execCommand('underline',false,null);
      }
    }else{
      document.execCommand('underline',false,null);
    }
  }
  createLink(){
    let selectedText = document.getSelection();
    if(!selectedText.isCollapsed){
      console.log(selectedText);
      let Url = prompt("Enter a URL: ","");
      if(Url){
        document.execCommand('insertHTML',false,"<a href='" + Url + "'>" + selectedText + "</a>");
      }
    }
  }
  removeLink(){
    document.execCommand('unlink',false,null);
  }

  addImage(){
    this.imgInput.nativeElement.click();
  }
  displayImage(event){
    let file:File = event.target.files[0];
    if(file.type.match('image.*')){
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e:any) =>{
          this.imageSrc = e.target.result;
      };
    }    
  }

  previewPost(){
   this.previewMode = !this.previewMode;
   this.contenteditable = !this.contenteditable;
  }
}
