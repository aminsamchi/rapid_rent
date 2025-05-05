import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: any = [];

  constructor(private carService: CarsService) {}

  ngOnInit(): void {
    this.carService.getAll().subscribe(
      (result: any) => {
        console.log('API Response:', result);
        this.cars = result;
        console.log('Cars Array:', this.cars);
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }
}
