// Variáveis
let nickmane = "Paladino"
let heroXp = 100

//Estrutura de decisão
if (heroXp > 0 && heroXp < 1000) {
    console.log("O Herói de nome " + nickmane + " está no nível de Ferro")
} else if (heroXp > 1000 && heroXp <= 2000){
    console.log("O Herói de nome " + nickmane + " está no nível de Bronze")
} else if (heroXp > 2000 && heroXp <= 5000){
    console.log("O Herói de nome " + nickmane + " está no nível de Prata")
} else if (heroXp > 5000 && heroXp <= 7000){
    console.log("O Herói de nome " + nickmane + " está no nível de Ouro")
} else if (heroXp > 7000 && heroXp <= 8000){
    console.log("O Herói de nome " + nickmane + " está no nível de Platina")
} else if (heroXp > 8000 && heroXp <= 9000){
    console.log("O Herói de nome " + nickmane + " está no nível de Ascendente")
} else if (heroXp > 9000 && heroXp <= 10000){
    console.log("O Herói de nome " + nickmane + " está no nível de Imortal")
} else if (heroXp > 10000){
    console.log("O Herói de nome " + nickmane + " está no nível de Radiante")
} else {
console.log ("Que tipo de herói não tem xp?")
console.log ("Pegue sua espada e escudo e acaba com aquele boneco de treino, " + nickmane + "!")
}