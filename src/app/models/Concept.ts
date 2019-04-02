import { IsNotEmpty, IsInt, IsPositive } from 'class-validator';
import * as Faker from 'faker';


export class Concept {

    static count: number = 0;

    @IsNotEmpty()
    public id: number;

    @IsNotEmpty()
    public name: string;

    @IsInt()
    public quantity: number;

    @IsPositive()
    public price: number;

    @IsNotEmpty()
    public tax: boolean;

    constructor(name?: string, price?: number, quantity?: number, tax?: boolean) {
        this.id = Concept.count++;
        this.name = name || `Concepto #${this.id}`;
        this.price = price || Faker.random.number({ min: 100, max: 999});
        this.quantity = quantity || 0;
        this.tax = tax || false;
    }

    public total = (): number => {
        return (this.quantity * this.price) * (this.tax ? 1.16 : 1);
    }
}
