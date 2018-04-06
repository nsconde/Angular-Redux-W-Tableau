// Implementing SimulationNodeDatum interface into our custom Node class
// import * as d3 from 'd3';
export class Node extends d3.SimulationNodeDatum {
    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;

    id: string;

    constructor(id) {
        this.id = id;
    }
}