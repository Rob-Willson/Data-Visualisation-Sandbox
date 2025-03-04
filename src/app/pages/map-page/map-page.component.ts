import { Component } from '@angular/core';
import { ChartComponent } from '../../components/map-chart/map-chart.component';
import { AvatarLocationData } from '../../core/data.model';
import { AvatarDataService } from '../../services/avatar-data.service';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'map-page',
  standalone: true,
  imports: [ChartComponent, MatCard, MatCardContent],
  templateUrl: './map-page.component.html',
  styleUrl: './map-page.component.scss'
})
export class MapPageComponent {
    public avatarLocationData: AvatarLocationData[] = []

    constructor(private avatarDataService: AvatarDataService) { }

    public ngOnInit(): void {
        this.avatarDataService.fetchLocationData()
            .subscribe({
                next: (data: AvatarLocationData[]) => {
                    this.avatarLocationData = data;
                },
                error: (error) => console.error('Failed to fetch avatar location data', error),
            });
    }
}
