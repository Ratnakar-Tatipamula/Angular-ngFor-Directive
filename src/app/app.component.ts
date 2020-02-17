import { Component } from '@angular/core';
import { Player } from './model/player.component';
import { Employee } from './model/employee.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

heroes: string[]= [
  'Williams', 'Robert'
]

//any Object 
  students: any[]= [
    { name: 'Watson', grade: 98 },
    { name: 'Finch', grade: 95 }
  ]

//Movie Class is Writeen inside this component
  movies: Movie[] = [
    
   {title:'Zodia',director:'David Fincher'},
   {title:'avatar',director:'James Camerron'}

  ]

//Plyer Class is imported from model folder
  players: Player[]= [
    { name: 'Virat', rank: '1' },
    { name: 'Rohit', rank: '2' }
  ]
  
//Retrived Employee are details are placed in Table format
  employees: Employee[]= [
    { name:'John', email:'john@gmail.com', job:'Senior Developer' },
    { name:'David', email:'david@gmail.com', job:'Junior Developer'}
  ]
 
}

class Movie {
    title : string;
    director : string;
    
}
