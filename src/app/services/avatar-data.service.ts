import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AvatarLocationData } from '../core/data.model';

@Injectable({
    providedIn: 'root'
})
export class AvatarDataService {
    constructor(private http: HttpClient) { }

    public fetchLocationData(): Observable<AvatarLocationData[]> {
        const mockData: AvatarLocationData[] = [
            { Location: { x: 0.8251, y: 0.4659 }, Level: 1, Class: "None" },
            { Location: { x: 0.8943, y: 0.4303 }, Level: 1, Class: "None" },
            { Location: { x: 0.8698, y: 0.5398 }, Level: 1, Class: "None" },
            { Location: { x: 0.8207, y: 0.2676 }, Level: 1, Class: "None" },
            { Location: { x: 0.7301, y: 0.2250 }, Level: 1, Class: "None" },
            { Location: { x: 0.6580, y: 0.3367 }, Level: 1, Class: "None" },
            { Location: { x: 0.9057, y: 0.0766 }, Level: 1, Class: "None" },
            { Location: { x: 0.9005, y: 0.2149 }, Level: 1, Class: "None" },
            { Location: { x: 0.8189, y: 0.3983 }, Level: 1, Class: "None" },
            { Location: { x: 0.6675, y: 0.3576 }, Level: 1, Class: "None" },
            { Location: { x: 0.8538, y: 0.2119 }, Level: 1, Class: "None" },
            { Location: { x: 0.8558, y: 0.2006 }, Level: 1, Class: "None" },
            { Location: { x: 0.1313, y: 0.4132 }, Level: 1, Class: "None" },
            { Location: { x: 0.8047, y: 0.3209 }, Level: 1, Class: "None" },
            { Location: { x: 0.7247, y: 0.3155 }, Level: 1, Class: "None" },
            { Location: { x: 0.6599, y: 0.3295 }, Level: 1, Class: "None" },
            { Location: { x: 0.7197, y: 0.2031 }, Level: 1, Class: "None" },
            { Location: { x: 0.7859, y: 0.2442 }, Level: 1, Class: "None" },
            { Location: { x: 0.6808, y: 0.3621 }, Level: 1, Class: "None" },
            { Location: { x: 0.7219, y: 0.3156 }, Level: 1, Class: "None" },
            { Location: { x: 0.7601, y: 0.1236 }, Level: 1, Class: "None" },
            { Location: { x: 0.8235, y: 0.3591 }, Level: 1, Class: "None" },
            { Location: { x: 0.7569, y: 0.2586 }, Level: 1, Class: "None" },
            { Location: { x: 0.9242, y: 0.3222 }, Level: 1, Class: "None" },
            { Location: { x: 0.7299, y: 0.4575 }, Level: 1, Class: "None" },
            { Location: { x: 0.8902, y: 0.3822 }, Level: 1, Class: "None" },
            { Location: { x: 0.8002, y: 0.3972 }, Level: 1, Class: "None" },
            { Location: { x: 0.8567, y: 0.2761 }, Level: 1, Class: "None" },
            { Location: { x: 0.8268, y: 0.4223 }, Level: 1, Class: "None" },
            { Location: { x: 0.6765, y: 0.2668 }, Level: 1, Class: "None" },
            { Location: { x: 0.8098, y: 0.4183 }, Level: 1, Class: "None" },
            { Location: { x: 0.9514, y: 0.4078 }, Level: 1, Class: "None" },
            { Location: { x: 0.8873, y: 0.4664 }, Level: 1, Class: "None" },
            { Location: { x: 0.7923, y: 0.3811 }, Level: 1, Class: "None" },
            { Location: { x: 0.2512, y: 0.1101 }, Level: 1, Class: "None" },
            { Location: { x: 0.7809, y: 0.3433 }, Level: 1, Class: "None" },
            { Location: { x: 0.9806, y: 0.4956 }, Level: 1, Class: "None" },
            { Location: { x: 0.7175, y: 0.1759 }, Level: 1, Class: "None" },
            { Location: { x: 0.9294, y: 0.3254 }, Level: 1, Class: "None" },
            { Location: { x: 0.7957, y: 0.4389 }, Level: 1, Class: "None" },
            { Location: { x: 0.5878, y: 0.6083 }, Level: 1, Class: "None" },
            { Location: { x: 0.4718, y: 0.6167 }, Level: 1, Class: "None" },
            { Location: { x: 0.4944, y: 0.7463 }, Level: 1, Class: "None" },
            { Location: { x: 0.3853, y: 0.5705 }, Level: 1, Class: "None" },
            { Location: { x: 0.5963, y: 0.5999 }, Level: 1, Class: "None" },
            { Location: { x: 0.4514, y: 0.7843 }, Level: 1, Class: "None" },
            { Location: { x: 0.4206, y: 0.5098 }, Level: 1, Class: "None" },
            { Location: { x: 0.4786, y: 0.7489 }, Level: 1, Class: "None" },
            { Location: { x: 0.6564, y: 0.7034 }, Level: 1, Class: "None" },
            { Location: { x: 0.4942, y: 0.8359 }, Level: 1, Class: "None" },
            { Location: { x: 0.4851, y: 0.7507 }, Level: 1, Class: "None" },
            { Location: { x: 0.5027, y: 0.5903 }, Level: 1, Class: "None" },
            { Location: { x: 0.3654, y: 0.6864 }, Level: 1, Class: "None" },
            { Location: { x: 0.5262, y: 0.6118 }, Level: 1, Class: "None" },
            { Location: { x: 0.5943, y: 0.6541 }, Level: 1, Class: "None" },
            { Location: { x: 0.6897, y: 0.6640 }, Level: 1, Class: "None" },
            { Location: { x: 0.4038, y: 0.7497 }, Level: 1, Class: "None" },
            { Location: { x: 0.6887, y: 0.7697 }, Level: 1, Class: "None" },
            { Location: { x: 0.3091, y: 0.7616 }, Level: 1, Class: "None" },
            { Location: { x: 0.4073, y: 0.5623 }, Level: 1, Class: "None" },
            { Location: { x: 0.5232, y: 0.6627 }, Level: 1, Class: "None" },
            { Location: { x: 0.5073, y: 0.7737 }, Level: 1, Class: "None" },
            { Location: { x: 0.7419, y: 0.6006 }, Level: 1, Class: "None" },
            { Location: { x: 0.4345, y: 0.6726 }, Level: 1, Class: "None" },
            { Location: { x: 0.5565, y: 0.5397 }, Level: 1, Class: "None" },
            { Location: { x: 0.3398, y: 0.2090 }, Level: 1, Class: "None" },
            { Location: { x: 0.2042, y: 0.2280 }, Level: 1, Class: "None" },
            { Location: { x: 0.0429, y: 0.2256 }, Level: 1, Class: "None" },
            { Location: { x: 0.2822, y: 0.2227 }, Level: 1, Class: "None" },
            { Location: { x: 0.3194, y: 0.1571 }, Level: 1, Class: "None" },
            { Location: { x: 0.2516, y: 0.3218 }, Level: 1, Class: "None" },
            { Location: { x: 0.1323, y: 0.0468 }, Level: 1, Class: "None" },
            { Location: { x: 0.1154, y: 0.1457 }, Level: 1, Class: "None" },
            { Location: { x: 0.3036, y: 0.2595 }, Level: 1, Class: "None" },
            { Location: { x: 0.2549, y: 0.2336 }, Level: 1, Class: "None" },
            { Location: { x: 0.2304, y: 0.2215 }, Level: 1, Class: "None" },
            { Location: { x: 0.3634, y: 0.2804 }, Level: 1, Class: "None" },
            { Location: { x: 0.0948, y: 0.1087 }, Level: 1, Class: "None" },
            { Location: { x: 0.2212, y: 0.2866 }, Level: 1, Class: "None" },
            { Location: { x: 0.1812, y: 0.2012 }, Level: 1, Class: "None" },
            { Location: { x: 0.0733, y: 0.2518 }, Level: 1, Class: "None" },
            { Location: { x: 0.3996, y: 0.3804 }, Level: 1, Class: "None" },
            { Location: { x: 0.4548, y: 0.3903 }, Level: 1, Class: "None" },
            { Location: { x: 0.0101, y: 0.5582 }, Level: 1, Class: "None" },
            { Location: { x: 0.3039, y: 0.1162 }, Level: 1, Class: "None" },
            { Location: { x: 0.1813, y: 0.7207 }, Level: 1, Class: "None" },
            { Location: { x: 0.8358, y: 0.8907 }, Level: 1, Class: "None" },
            { Location: { x: 0.3039, y: 0.5301 }, Level: 1, Class: "None" },
            { Location: { x: 0.9291, y: 0.6993 }, Level: 1, Class: "None" },
            { Location: { x: 0.1475, y: 0.8015 }, Level: 1, Class: "None" },
            { Location: { x: 0.9073, y: 0.3298 }, Level: 1, Class: "None" },
            { Location: { x: 0.1492, y: 0.1251 }, Level: 1, Class: "None" },
            { Location: { x: 0.9349, y: 0.1585 }, Level: 1, Class: "None" },
            { Location: { x: 0.2516, y: 0.8551 }, Level: 1, Class: "None" },
            { Location: { x: 0.3403, y: 0.3154 }, Level: 1, Class: "None" },
            { Location: { x: 0.7258, y: 0.9576 }, Level: 1, Class: "None" },
            { Location: { x: 0.1860, y: 0.7516 }, Level: 1, Class: "None" },
            { Location: { x: 0.8674, y: 0.1316 }, Level: 1, Class: "None" },
            { Location: { x: 0.5573, y: 0.6196 }, Level: 1, Class: "None" },
            { Location: { x: 0.2672, y: 0.7817 }, Level: 1, Class: "None" },
        ];

        return of(mockData);
    }
}
