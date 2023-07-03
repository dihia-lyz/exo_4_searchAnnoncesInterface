import {TypeAnnonce} from '../enum'

export class Annonce{
    constructor( 
        public id: string,
        public titre: string,
        public desciption: string,
        public type: TypeAnnonce,
        public prix: bigint
    ){}
}

