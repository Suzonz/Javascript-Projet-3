const prompt = require("prompt-sync")()

function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function minMax(value, min, max) {
    if (value < min) {
        value = min
    } else if (value > max) {
        value = max
    }
    return value
}

let hooman = 100
let cat = 0
let play = 0
let watchCatVideo = 0
let pet = 0
let giveCatFood = 0
let catAction = 0
let ignore = 0
let clean = 0
let hiss = 0
let griffe = 0

console.log("==> https://www.youtube.com/watch?v=LgK2f47q8cU&list=PLNVA15CuezfM-AZLt6IM9Xwk3VGySwn8R&index=1");
let text = prompt("Lancez ce lien pour plus d'immersion ! ")
text = prompt("")
text = prompt("Vous êtes en train de vous promener dans la forêt lorsque... ")
text = prompt("Un PotiChat apparait ! ")

while (true) {
    text = prompt("")
    text = prompt("Choisissez une action : ")
    let choice = prompt(" (1) Jouer   -   (2) Regarder des vidéos de chats   -   (3) Caresser   -   (4) Donner des friandises ")

    while (choice != 1 || choice != 2 || choice != 3 || choice != 4) {

        if (choice == 1) {
            text = prompt("")
            text = prompt("Vous ramassez une branche par terre et l'agitez devant PotiChat ")
            play = randomize(1, 2)

            if (play == 1) {
                text = prompt("// ฅ(=Φ ω Φ = )⟆")
                text = prompt("PotiChat commence à jouer avec le baton ")
                text = prompt("PotiChat gagne 10 d'affection ")
                cat = minMax((cat + 10), 0, 100)
                text = prompt("")
                console.log("Affection PotiChat " + cat + "/100");
                console.log("Santé mentale " + hooman + "/100");
                break
            } else {
                text = prompt("Mais échouez ! ")
                text = prompt("(=🝦 ﻌ 🝦 = )⟆ ")
                text = prompt("PotiChat n'est pas impressionné ")
                text = prompt("")
                console.log("Affection PotiChat " + cat + "/100");
                console.log("Santé mentale " + hooman + "/100");
                break
            }

        } else if (choice == 2) {
            text = prompt("")
            text = prompt("Vous décidez de regarder des vidéos de chats ")
            watchCatVideo = randomize(1, 3)

            if (watchCatVideo == 1) {
                text = prompt("( ︶◡ ︶ ❀ ) ")
                text = prompt("Les vidéos soulagent votre coeur meurtri ")
                text = prompt("Vous gagnez 15 de santé mentale ")
                text = prompt("")
                hooman = minMax((hooman + 15), 0, 100)
                text = prompt("")
                console.log("Affection PotiChat " + cat + "/100");
                console.log("Santé mentale " + hooman + "/100");
                break
            } else {
                text = prompt("Mais échouez ! ")
                text = prompt("Votre n'avez pas de connexion... ")
                text = prompt("(╥﹏╥)")
                text = prompt("")
                console.log("Affection PotiChat " + cat + "/100");
                console.log("Santé mentale " + hooman + "/100");
                break
            }

        } else if (choice == 3) {
            text = prompt("")
            text = prompt("Vous tenter de caresser PotiChat ")
            pet = randomize(1, 3)

            if (pet == 1) {
                text = prompt("ヽ(o♡ o)/ ")
                text = prompt("PotiChat se laisse faire ")
                text = prompt("Des larmes apparaissent dans vos yeux ")
                text = prompt("(=🝦 ﻌ 🝦 = )⟆ ")
                text = prompt("PotiChat vous regarde d'un air méprisant puis s'éloigne ")
                text = prompt("PotiChat gagne 20 d'affection ")
                text = prompt("")
                cat = minMax((cat + 20), 0, 100)
                console.log("Affection PotiChat " + cat + "/100");
                console.log("Santé mentale " + hooman + "/100");
                break
            } else {
                text = prompt("Mais échouez ! ")
                text = prompt("ε=(= ◣ ﻌ ◢ =) ")
                text = prompt("PotiChat vous lance un regard noir ")
                text = prompt("Vous décidez d'épargner votre main ")
                text = prompt("")
                console.log("Affection PotiChat " + cat + "/100");
                console.log("Santé mentale " + hooman + "/100"); break
            }

        } else if (choice == 4) {
            text = prompt("")
            text = prompt("Vous tendez une friandise à PotiChat ")
            giveCatFood = randomize(1, 4)

            if (giveCatFood == 1) {
                text = prompt("๑(=Φ０Φ= ๑)⟆ ")
                text = prompt("C'est très efficace ! ")
                text = prompt("PotiChat mange la friandise ")
                text = prompt("PotiChat gagne 30 d'affection ")
                cat = minMax((cat + 30), 0, 100)
                text = prompt("")
                console.log("Affection PotiChat " + cat + "/100");
                console.log("Santé mentale " + hooman + "/100");
                break
            } else if (giveCatFood == 4) {
                text = prompt("PotiChat donne un coup de patte dans la friandise qui tombe sur le sol ")
                text = prompt("(╥﹏╥)")
                text = prompt("")
                console.log("Affection PotiChat " + cat + "/100");
                console.log("Santé mentale " + hooman + "/100");
                break
            } else {
                text = prompt("Mais échouez ! ")
                text = prompt("ε=(= ◣ ﻌ ◢ =) ")
                text = prompt("PotiChat vous lance un regard noir ")
                text = prompt("Vous récupérez votre friandise ")
                text = prompt("")
                console.log("Affection PotiChat " + cat + "/100");
                console.log("Santé mentale " + hooman + "/100");
                break
            }

        } else {
            text = prompt("Erreur de saisie ")
            text = prompt("Choisissez une action : ")
            choice = prompt(" (1) Jouer   -   (2) Regarder des vidéos de chats   -   (3) Caresser   -   (4) Donner des friandises ")
        }

    }

    if (cat == 100) {
        text = prompt("")
        text = prompt("Vous avez charmé PotiChat ! ")
        text = prompt("Il vous suit jusque chez vous et vous laisse le servir jusqu'à la fin de sa vie ")
        text = prompt("Vous devenez le serviteur de PotiChat et votre maison devient sa maison ")
        text = prompt("Vous ne pourriez être plus heureux. ")
        text = prompt("⸝( ///◞ꈍ ∇ ꈍ///)⸝♡  ᓚ(  =  🝦 ﻌ 🝦 =) ")
        break
    }
    text = prompt("")
    text = prompt("PotiChat passe à l'action ! ")
    text = prompt("")
    catAction = randomize(1, 4)

    if (catAction == 1) {
        text = prompt("PotiChat utilise ignore ! ")
        let ignore = randomize(1, 2)

        if (ignore == 1) {
            text = prompt("=/ᐠ--ᐟ\\= ")
            text = prompt("PotiChat se tourne et vous ignore ")
            text = prompt("Il n'a que faire de vos supplications ")
            text = prompt("Votre coeur se brise ")
            text = prompt("Vous perdez 10 de santé mentale ")
            hooman = minMax((hooman - 10), 0, 100)
            text = prompt("")
            console.log("Affection PotiChat " + cat + "/100");
            console.log("Santé mentale " + hooman + "/100");
        } else {
            text = prompt("Mais échoue !")
            text = prompt("( ﻌ 🝦 =)⟆")
            text = prompt("PotiChat ne peut s'empêcher d'être intrigué ")
            text = prompt("Il tourne la tête mais garde un oeil curieux sur vous ")
            text = prompt("")
            console.log("Affection PotiChat " + cat + "/100");
            console.log("Santé mentale " + hooman + "/100");
        }
    } else if (catAction == 2) {
        text = prompt("PotiChat utilise toilette ! ")
        clean = randomize(1, 3)

        if (clean == 1) {
            text = prompt("ᓚ(=︶ ﻌ ︶=) ")
            text = prompt("PotiChat commence à faire sa toilette ")
            text = prompt("Une fois terminée, il se sent propre et indépendant ")
            text = prompt("PotiChat perd 15 d'affection ")
            cat = minMax((cat - 15), 0, 100)
            text = prompt("")
            console.log("Affection PotiChat " + cat + "/100");
            console.log("Santé mentale " + hooman + "/100");
        } else {
            text = prompt("Mais échoue !")
            text = prompt("(=◡ ﻌ 🝦 = )⟆ ")
            text = prompt("PotiChat ne vous lâche pas d'un oeil ")
            text = prompt("Il ne peut pas réaliser toilette correctement ")
            text = prompt("")
            console.log("Affection PotiChat " + cat + "/100");
            console.log("Santé mentale " + hooman + "/100");
        }

    } else if (catAction == 3) {
        text = prompt("PotiChat utilise hiss ! ")
        hiss = randomize(1, 3)

        if (hiss == 1) {
            text = prompt("(=Φ Ⱉ Φ = )⟆ ")
            text = prompt("PotiChat se met à feuler ")
            text = prompt("Vous êtes effrayé par PotiChat ")
            text = prompt("Vous perdez 20 de santé mentale")
            hooman = minMax((hooman - 20), 0, 100)
            text = prompt("")
            console.log("Affection PotiChat " + cat + "/100");
            console.log("Santé mentale " + hooman + "/100");
        } else {
            text = prompt("Mais échoue !")
            text = prompt("ᓚ( =Ф ﻌ Ф= )?")
            text = prompt("PotiChat vous observe d'un oeil intrigué ")
            text = prompt("")
            console.log("Affection PotiChat " + cat + "/100");
            console.log("Santé mentale " + hooman + "/100");
        }

    } else if (catAction == 4) {
        text = prompt("PotiChat utilise feinte ! ")
        text = prompt("Il s'approche doucement... ")
        griffe = randomize(1, 4)

        if (griffe == 1) {
            text = prompt("PotiChat est près de vous... ")
            text = prompt("(=✧ Ⱉ ✧ =)ฅ ᵐᵉᵒʷˎˊ˗")
            text = prompt("PotiChat envoi la patte et vous griffe ! ")
            text = prompt("C'est très efficace ! ")
            text = prompt("Vous saignez, mais votre coeur souffre d'avantage ")
            text = prompt("Vous perdez 30 de santé mentale")
            hooman = minMax((hooman - 30), 0, 100)
            text = prompt("")
            console.log("Affection PotiChat " + cat + "/100");
            console.log("Santé mentale " + hooman + "/100");
        } else {
            text = prompt("Mais échoue !")
            text = prompt("(=🝦 ﻌ 🝦 = )⟆")
            text = prompt("Face à votre grand sourire, il préfère faire demi-tour ")
            text = prompt("")
            console.log("Affection PotiChat " + cat + "/100");
            console.log("Santé mentale " + hooman + "/100");
        }
    }

    if (hooman == 0) {
        text = prompt("")
        text = prompt("A bout de force, vous tombez ")
        text = prompt("PotiChat vous lance un regard méprisant avant de partir ")
        text = prompt("Vous passez la nuit recroquevillé sur le sol à pleurer. ")
        text = prompt("_(:°з」∠)_ ")
        break
    }
}