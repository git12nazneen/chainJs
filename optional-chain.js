// noor er basa ber koro

const Noor ={
    id:1001,
    name:'noorani',
    addres:{
        street:{
            road:'jamalpur',
            side:'left',
            bulding:'third floor'
        },
        postOffice:'dhaka uttor',
        city:'badda'
    }
}

const NoorHouse = Noor.addres.city;
console.log(NoorHouse);
