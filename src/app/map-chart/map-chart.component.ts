import { Component, Input, ElementRef, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, SimpleChanges } from '@angular/core';
import { select } from 'd3';
import { AvatarLocationData } from '../core/data.model';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule, MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
    selector: 'map-chart',
    standalone: true,
    imports: [MatCardModule, MatSlideToggleModule],
    templateUrl: './map-chart.component.html',
    styleUrl: './map-chart.component.scss',
    host: { 'style': 'display: block' },    // Ensure the component behaves as a block element so that it can be styled correctly
                                            //    without relying on the parent (required due to encapsulation)
    encapsulation: ViewEncapsulation.None,  // Required for styles to affect svg
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent {
    @ViewChild('chartContainer', { static: false })
    public chartContainerElement!: ElementRef;

    @Input({ required: true })
    public data!: AvatarLocationData[];

    public gooeyMode: boolean = true;

    private width: number = 600;
    private height: number = 400;
    private pointRadius: number = 12;

    private svg!: any;
    private inner!: any;
    private points!: any;

    private resizeObserver!: ResizeObserver;

    constructor(private elementRef: ElementRef) { }

    public ngAfterViewInit(): void {
        this.resizeObserver = new ResizeObserver(() => this.resizeChart())
        this.resizeObserver.observe(this.elementRef.nativeElement);
        this.resizeChart();
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

    public ngOnDestroy(): void {
        this.resizeObserver.disconnect();
    }

    public onGooeyModeToggle(event: MatSlideToggleChange): void {
        this.gooeyMode = event.checked;
        this.setFilters();
    }

    private resizeChart(): void {
        if (this.elementRef.nativeElement) {
            const heightAsRatioOfWidth: number = 0.75;
            this.width = this.elementRef.nativeElement.clientWidth;
            this.height = this.elementRef.nativeElement.clientWidth * heightAsRatioOfWidth;
            this.plot();
        }
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

        this.generateFilters();
        this.setFilters();
    }

    private generateFilters(): void {
        const defs = this.svg.append("defs");

        const filter = defs.append("filter")
            .attr("id", "gooey")
            .attr("x", "-20%")
            .attr("y", "-20%")
            .attr("width", "140%")
            .attr("height", "140%");

        filter.append("feGaussianBlur")
            .attr("in", "SourceGraphic")
            .attr("stdDeviation", "8")
            .attr("result", "blur");

        filter.append("feColorMatrix")
            .attr("in", "blur")
            .attr("mode", "matrix")
            .attr("values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15")
            .attr("result", "gooey");
    }

    private setFilters(): void {
        if (this.gooeyMode) {
            this.addGooeyFilter();
        } else {
            this.removeGooeryFilter();
        }
    }

    private addGooeyFilter(): void {
        this.inner.attr("filter", "url(#gooey)")
    }

    private removeGooeryFilter(): void {
        this.inner.attr("filter", null)
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
