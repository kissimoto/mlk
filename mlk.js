
function mlkprocess(){
    const weight = document.getElementById('weight').value
    const fluidRate = document.getElementById('fluidRate').value
    const morphine = document.getElementById('morphDose').value
    const lidocaine = document.getElementById('lidoDose').value
    const ketamine = document.getElementById('ketaDose').value
    const bagSize = document.getElementById('bagSize')
    const morphCon = document.getElementById('morphCon')
    const lidoCon = document.getElementById('lidoCon')
    const ketaConVal = 100
    
    // 1. Calculate fluid rate administration rate per hour 
 
    const fluidRateWeight = fluidRate * weight
    console.log(fluidRateWeight)

    // 2. Morphine calculation

   const morphMlFluid = morphine / fluidRate
   console.log(morphMlFluid)

   const bagSizeVal = bagSize.value
   const morphToDrug = morphMlFluid * bagSizeVal
   console.log(morphToDrug)

    const morphConVal = morphCon.value
   
    const morphDrugVol = morphToDrug / morphConVal
    console.log(morphDrugVol)
    
    // 3. Lidocaine calculation

    const lidoMlFluid = lidocaine / fluidRate
    console.log (lidoMlFluid)
  
    const lidoToDrug = lidoMlFluid * bagSizeVal
    console.log (lidoToDrug)
  
    const lidoConVal = lidoCon.value
    const lidoDrugVol = lidoToDrug / lidoConVal
    console.log(lidoDrugVol)

    // 4. Ketamine calculation

    const ketaMlFluid = ketamine / fluidRate
    console.log(ketaMlFluid)
 
    ketaToDrug = ketaMlFluid * bagSizeVal
    console.log(ketaToDrug)

    const ketaDrugVol = ketaToDrug / ketaConVal
    console.log(ketaDrugVol)

    const alldrugs = (morphDrugVol + ketaDrugVol + lidoDrugVol)
    console.log(alldrugs)

    //Result

    document.getElementById('result').innerHTML = "Fluid rate = " + fluidRateWeight +" ml/hour <br> Morphine = "  + (Math.round(morphDrugVol * 100) / 100).toFixed(2) + " ml <br> Lidocaine = " 
    + (Math.round(lidoDrugVol * 100) / 100).toFixed(2) + " ml <br> Ketamine = " + (Math.round(ketaDrugVol * 100) / 100).toFixed(2) + " ml <br> Remove " +
    (Math.round(alldrugs * 100) / 100).toFixed(2) + " ml from IV bag <br> and replace fluid with the drugs."
}
