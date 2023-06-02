const PI = 3.14159 ;


const sphereVolume = function (radius) {
  // Code here
  let v = PI * ((4/3) * (Math.pow(radius, 3)))
  
  //https://www.wikihow.com/Calculate-the-Volume-of-a-Sphere
  //calculate radius to the power of 3
  //multiple that by 3/4
  //multiply the whole thing by PI
  return v
}
console.log("----sphere volume----")
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
console.log(" ")

const coneVolume = function (radius, height) {
  // And here!
  //https://www.varsitytutors.com/hotmath/hotmath_help/topics/volume-of-a-cone
  //let base = Math.pow(radius, 2)
  //let bh = base * height
  //let volume = .33 * bh
  let heightDivThird = height/3
  let rad2 = Math.pow(radius, 2)
  let volume = PI * (rad2 * heightDivThird)
  //console.log("cone volume: " + volume)
  return volume

}
console.log("---cone volume----")
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(" ")

const prismVolume = function (height, width, depth) {
  // Probably here too!
  let base = width * depth
  let volume = base * height
  return volume
}
console.log("---prism volume---")
console.log(prismVolume(3, 4, 5) === 60);
console.log(" ")

//MAIN FUNCTION
console.log("---main function call---")
const totalVolume = function (solids) {
  //totalVolume(duck)
  // Code here? Yup!
  let volume = 0
  if(solids === duck){
    let x = sphereVolume(largeSphere.radius)
    let y = sphereVolume(smallSphere.radius)
    let z = coneVolume(cone.radius, cone.height)
    volume = x+y+z

  }
return volume

}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

//I guess this is the main call?
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);