export class Developer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName() {
        return this.name;
    }
}

export class Estimate {
    private value: number;
    private developer: Developer;

    constructor(value: number, developer: Developer) {
        this.value = value;
        this.developer = developer;
    }

    public getEstimate() {
        return this.value;
    }

    public getDeveloper() {
        return this.developer;
    }
}

export class PlanningPoker {
    private lowerEstimate: Estimate | null;
    private highestEstimate: Estimate | null;

    constructor() {
        this.lowerEstimate = null;
        this.highestEstimate = null;
    }

    public identifyExtremes(estimates: Estimate[] | null) {
        if (estimates === null) {
            throw new Error('No estimates provided');
        }

        if (estimates.length === 0) {
            throw new Error('There has to be at least one estimate provided');
        }

        if (estimates.length === 1) {
            throw new Error('There has to be more than one estimate provided');
        }

        for (let estimate of estimates) {
            if (this.lowerEstimate === null || estimate.getEstimate() < this.lowerEstimate.getEstimate()) {
                this.lowerEstimate = estimate;
            }

            if (this.highestEstimate === null || estimate.getEstimate() > this.highestEstimate.getEstimate()) {
                this.highestEstimate = estimate;
            }
        }

        if (this.lowerEstimate === null || this.highestEstimate === null) {
            throw new Error('No estimates provided');
        }

        return [this.lowerEstimate.getDeveloper(), this.highestEstimate.getDeveloper()];
    }
}