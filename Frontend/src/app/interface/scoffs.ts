import { TaxiDetails } from "./taxi-details";

export interface Scoffs {
    id: number;
    date: Date;
    taxiDetails?:TaxiDetails[];
}
