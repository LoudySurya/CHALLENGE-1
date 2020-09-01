function bmi(berat, tinggi) {
    let total =berat/Math.pow(tinggi, 2)
if(total < 18.5)
return("KEKURANGAN BERAT BADAN ="+total)
if(total >= 18.5 && total <= 24.9)
return("IDEAL ="+ total)
if(total >= 25 && totsl <= 29)
return ("KELEBIHAN= "+total)
if (total >= 30)
return("KEGEMUKAN ="+total)
}
console.log("Tinggi =  170 cm")
console.log("Berat = 90 kg")
console.log(bmi(90,1.7))