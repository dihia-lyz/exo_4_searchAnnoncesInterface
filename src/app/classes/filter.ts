import {TypeAnnonce} from '../enum'

export class Filter{
    constructor(
        public titre:string,
        public prixMin: bigint | null,
        public prixMax : bigint | null,
        public type: TypeAnnonce | null
    ){}
}