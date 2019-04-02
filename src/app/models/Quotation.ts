import { IsNotEmpty, IsPositive, validate, IsOptional } from 'class-validator';
import * as Faker from 'faker';

import { Concept } from './Concept';
import { elementClassProp } from '@angular/core/src/render3';

export class Quotation {

    static count: number = 0;

    @IsNotEmpty()
    public id: number;

    @IsNotEmpty()
    public name: string;

    public logo: string;

    @IsOptional()
    @IsPositive()
    public discount: number;

    @IsOptional()
    @IsPositive()
    public shippingCost: number;


    public notes: string;
    public terms: string;

    public userName: string;
    public userPosition: string;
    public userPhone: string;

    public concepts: Concept[];

    createdOn: Date;
    due: Date;

    constructor(name?: string, notes?: string, terms?: string, userName?: string, userPosition?: string, userPhone?: string) {
        this.id = Quotation.count++;
        this.name = name || `Factura #${this.id}`;
        this.notes = notes || Faker.lorem.lines(1);
        this.terms = terms || Faker.lorem.lines(2);
        this.userName = userName || Faker.name.firstName() + ' ' + Faker.name.lastName();
        this.userPosition = userPosition || Faker.name.jobTitle();
        this.userPhone = userPhone || Faker.phone.phoneNumber();
        this.createdOn = new Date();
        this.discount = 0;
        this.concepts = [];
        this.shippingCost = 0;
    }

    /**
     * Add concept to quotation
     */
    public async addConcept(concept: Concept) {
        const errors = await validate(concept);
        if (errors.length > 0) {
            return undefined;
        }
        return this.concepts.push(concept);
    }

    public total = () => {
        const conceptTotal = this.concepts.reduce((acc, elem) => acc + elem.total(), 0);
        return conceptTotal - this.discount - this.shippingCost;
    }
}
