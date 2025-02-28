import { Component, Input, ElementRef, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, SimpleChanges } from '@angular/core';
import { select } from 'd3';
import { AvatarLocationData } from '../core/data.model';

@Component({
    selector: 'map-chart',
    imports: [],
    templateUrl: './map-chart.component.html',
    styleUrl: './map-chart.component.scss',
    encapsulation: ViewEncapsulation.None,  // Required for styles to affect svg
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent {
    @ViewChild('chartContainer', { static: false })
    public chartContainerElement!: ElementRef;

    @Input({ required: true })
    public data!: AvatarLocationData[];

    private width: number = 600;
    private height: number = 400;
    private pointRadius: number = 16;

    private svg!: any;
    private inner!: any;
    private points!: any;

    public ngAfterViewInit(): void {
        this.plot();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (!changes['data'] || changes['data'].firstChange) {
            return;
        }

        if (this.width === 0 || this.height === 0) {
            return;
        }

        this.plot();
    }

    private plot(): void {
        const chartInnerWidth = this.getChartInnerWidth();
        const chartInnerHeight = this.getChartInnerHeight();

        if (!this.svg) {
            this.generateSvg();
        }

        this.svg
            .attr('width', this.width)
            .attr('height', this.height);

        this.inner
            .attr('width', chartInnerWidth)
            .attr('height', chartInnerHeight)
            .attr('transform', `translate(${this.getChartInnerPadding()},${this.getChartInnerPadding()})`);

        this.points = this.inner.selectAll('circle')
            .data(this.data);

        this.points
            .attr('cx', (d: AvatarLocationData) => d.Location.x * chartInnerWidth)
            .attr('cy', (d: AvatarLocationData) => d.Location.y * chartInnerHeight);

        this.points
            .enter()
            .append('circle')
            .attr('class', 'datum')
            .attr('r', this.pointRadius)
            .attr('cx', (d: AvatarLocationData) => d.Location.x * chartInnerWidth)
            .attr('cy', (d: AvatarLocationData) => d.Location.y * chartInnerHeight);

        this.points.exit()
            .remove();
    }

    private generateSvg(): void {
        this.svg = select(this.chartContainerElement.nativeElement)
            .append('svg');

        this.inner = this.svg.append('g')
            .attr('class', 'inner');
    }

    private getChartInnerPadding(): number {
        return this.pointRadius * 3;
    }

    private getChartInnerWidth(): number {
        return this.width - (this.getChartInnerPadding() * 2);
    }

    private getChartInnerHeight(): number {
        return this.height - (this.getChartInnerPadding() * 2);
    }
}
