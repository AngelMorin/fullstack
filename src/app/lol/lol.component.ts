import { Component } from '@angular/core';
import {LolService} from '../lol.service';

@Component({
  selector: 'app-lol',
  standalone: true,
  imports: [],
  templateUrl: './lol.component.html',
  styleUrl: './lol.component.css'
})
export class LolComponent {
  name: string = 'lol';
  constructor(private lolService: LolService){}
  inlol() {
    this.lolService.lol(this.name)
    .subscribe((response)=>{
      console.log('lol work',response);
    }, (error)=>{
      console.log('err',error);
    });
  }
}
