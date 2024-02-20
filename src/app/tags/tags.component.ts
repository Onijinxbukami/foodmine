import { Component, Input } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf, CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent implements OnInit {


  // @Input()
  // foodPageTags?: string[];
  // tags?: Tag[];
  // constructor(private foodService: FoodService) { }


  @Input()
  foodPageTags?: string[];

  @Input()
  justifyContent: string = 'center';

  tags?: Tag[];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    if (!this.foodPageTags)
      this.tags = this.foodService.getAllTags();
  }
}
