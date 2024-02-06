import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../core/vehicle/vehicle.service';
import { VehicleModel } from '../core/vehicle/vehicle.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-overview',
  templateUrl: './vehicle-overview.component.html',
  styleUrls: ['./vehicle-overview.component.scss']
})
export class VehicleOverviewComponent implements OnInit {
  vehicles: VehicleModel[] = [];
  originalVehicles: VehicleModel[] = [];

  constructor(
    private vehicleService: VehicleService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe((data: VehicleModel[]) => {
      this.vehicles = data;
      this.originalVehicles = data;
    });
  }

  onSearch(event: Event): void {
    const element = event.target as HTMLInputElement;
    const searchValue = element.value.toLowerCase();
    this.vehicles = this.originalVehicles.filter(vehicle => {
      const vehicleData = [
        vehicle.name,
        vehicle.manufacturer,
        vehicle.model,
        vehicle.year.toString(),
        vehicle.type,
        vehicle.fuelType,
        vehicle.licensePlate,
        vehicle.active
      ].join(' ').toLowerCase();
      return vehicleData.includes(searchValue);
    });
  }

  onSignOut(): void {
    this.authService.logout();
    this.router.navigate(['/sign-in']);
  }

}
