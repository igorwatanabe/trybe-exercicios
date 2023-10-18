// // ./FuturisticCar.ts
// import { IVehicle } from './interfaces';

import { IFuturisticCar } from "./interfaces";

// export default class FuturisticCar implements IVehicle {
//   drive(): void { console.log('Drive a futuristic car'); }

//   fly(): void { console.log('Flying a futuristic car'); }
// }


// import { IVehicle } from './interfaces';

// export default class AirPlane implements IVehicle {
//   drive(): void {
//     throw new Error('I don\'t drive');
//   }

//   fly(): void {
//     console.log('Fly a airplane');
//   }
// }

export default class FuturisticCar implements IFuturisticCar {
    drive(): void { console.log('Drive a futuristic car'); }
  
    fly(): void { console.log('Flying a futuristic car'); }
  }