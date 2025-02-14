const PIDController = require('node-pid-controller');


const pid = new PIDController({
  kp: 0.5,  
  ki: 0.1,  
  kd: 0.2,  
  dt: 20   
});

// 设置目标值
pid.setTarget(23);


let currentValue = 18;
// for (let i = 0; i < 1000; i++) {
//   const output = pid.update(currentValue); 
//   currentValue += output * 0.01; 
//   console.log(`Step ${i}: Output = ${output}, Current Value = ${currentValue}`);
// }

let a ='123123'
console.log( typeof Number(a))