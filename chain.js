


const user = {
     id:5001,
     name:'thomas',
     address:{
        street:{
            first:'35/A red road',
            second:'third floor',
            third:'right side'
        },
        postOffice:'Cantonment',
        city:'Dhaka'
     }
    }

    // const userFloor = user.address.street.second;
    const userFloor = user.address.postOffice;
    console.log(userFloor);
