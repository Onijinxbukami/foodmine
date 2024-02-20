import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = "Nothing Found!";
  @Input() resetLinkText: string = "Reset";
  @Input() resetLinkRoute: string = "/";

  constructor() { }
  ngOnInit(): void {

  }

}
