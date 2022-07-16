import { Component,Input,OnInit} from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  loginForm= new FormGroup({
    title: new FormControl('',[Validators.required]),
    desc: new FormControl('',[Validators.required])
  })

  login(){

  }

todo!:any
title!:string
desc!:string
 todos:any
localitem:any;
isforupdate!:boolean;

  ptn: any;

constructor(){
  this.localitem=localStorage.getItem("todos");
  if(this.localitem==null){
    this.todos=[];
  }
  else{
    
    this.todos=JSON.parse(this.localitem);
  }
}

 addtodo(){
  const todo={
    title:this.title,
    desc:this.desc
  }
  this.todos.push(todo)
  localStorage.setItem("todos", JSON.stringify(this.todos));
  this.title='';
  this.desc=''
}
deletetodo(i:number){
this.todos.splice(i,1);
localStorage.setItem("todos", JSON.stringify(this.todos));
}
i!:number

update(i:number){
let todo={
  title:this.title,
  desc:this.desc,
}
this.todos.splice(this.ptn,1,todo);
this.title=''
this.desc=''
this.isforupdate=false
}
edit(i:number){
  this.isforupdate=true
  this.ptn=i
  console.log(this.isforupdate);
this.title=this.todos[i].title
  this.desc=this.todos[i].desc
  }
  

  // done="Pending"

  // check(e:any,i:number){
  //   if(e.checked==true ){
  //     this.done="completed"
  //   }
  //   else{
  //      this.done="pending" 
  //   }
  // }

  toggle(i:number){
    this.ptn=i;
    this.todos[i].active =!this.todos[i].active
    this.todos[i].done="completed"
  }
}






