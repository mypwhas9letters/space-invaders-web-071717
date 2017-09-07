class CrewMember{
 constructor(position){
   this.position = position
   this.currentShip = 'Looking for a Rig'
  }
  engageWarpDrive() {
    if (this.position === 'Pilot' && this.currentShip !== "Looking for a Rig"){
      this.currentShip.warpDrive = "engaged!"
    }else{
    return "had no effect"
  }
}
  setsInvisibility(){
    if (this.position === 'Defender' && this.currentShip !== "Looking for a Rig"){
     this.currentShip.cloaked = true
   }else{
    return "had no effect"
  }
}
  chargePhasers(){
    if (this.position === 'Gunner' && this.currentShip !== "Looking for a Rig"){
    this.currentShip.phasersCharge = "charged!"
  }else{
    return "had no effect"
  }
}
}

class Spaceship{
  constructor(name, crewMembers, phasers, shields){
    this.name = name
    this.phasers = phasers
    this.phasersCharge = "uncharged"
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.crewMembers = crewMembers
    this.docked = true
    if(this.crewMembers.length > 0){
      this.docked = false
    for (let i = 0; i<this.crewMembers.length; i++){
      crewMembers[i].currentShip = this
    }

    }
  }

}
