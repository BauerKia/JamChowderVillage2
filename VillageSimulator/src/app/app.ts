import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { CommonModule }   from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  

}
