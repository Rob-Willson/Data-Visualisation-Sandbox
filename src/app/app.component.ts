import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartComponent } from "./map-chart/map-chart.component";
import { AvatarLocationData } from './core/data.model';
import { AvatarDataService } from './services/avatar-data.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ChartComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    public readonly title = 'Data Visualisation';

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
