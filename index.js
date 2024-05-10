
function formatNumber(num) {
    if (num >= 1e15) {
        return (num / 1e15).toExponential(2)
    }
    if (num >= 1e12) {
        return (num / 1e12).toFixed(2).replace(/\.?0+$/, '') + 'T';
    }
    if (num >= 1e9) {
        return (num / 1e9).toFixed(2).replace(/\.?0+$/, '') + 'G';
    }
    if (num >= 1e6) {
        return (num / 1e6).toFixed(2).replace(/\.?0+$/, '') + 'M';
    }
    if (num >= 1e3) {
        return (num / 1e3).toFixed(2).replace(/\.?0+$/, '') + 'K';
    }
    return num
}

function formatNumberspace(num) {
    if (num >= 1e15) {
        return (num / 1e15).toExponential(2)
    }
    if (num >= 1e12) {
        return (num / 1e12).toFixed(2).replace(/\.?0+$/, '') + 'T';
    }
    if (num >= 1e9) {
        return (num / 1e9).toFixed(2).replace(/\.?0+$/, '') + 'G';
    }
    if (num >= 1e6) {
        return (num / 1e6).toFixed(2).replace(/\.?0+$/, '').replace(/\.?0+$/, '') + 'M';
    }
    if (num >= 1e3) {
        return (num / 1e3).toFixed(3).replace(/\.?0+$/, '') + 'K';
    }
    return num;
}


const tuto = document.querySelector('h2');
const alpha = document.querySelector('h1');
const alphacount = document.querySelector('.alphacounter');
const gen1 = document.querySelector('.btn1');
const gen2 = document.querySelector('.btn2');
const gen3 = document.querySelector('.btn3');
const gen4 = document.querySelector('.btn4');
const gen5 = document.querySelector('.btn5');
const gen6 = document.querySelector('.btn6');

const shop = document.querySelector('.upgrade-shop')
const genmult1 = document.querySelector('.shopbtn1_1')
const genmult2 = document.querySelector('.shopbtn1_2')
const genmult3 = document.querySelector('.shopbtn1_3')
const genmult4 = document.querySelector('.shopbtn1_4')
const genmult5 = document.querySelector('.shopbtn1_5')
const  genmult6 = document.querySelector('.shopbtn1_6')
genmult1.style.display = 'block'
genmult2.style.display = 'block'
genmult3.style.display = 'block'
genmult4.style.display = 'block'
genmult5.style.display = 'block'
genmult6.style.display = 'block'
const clickmult = document.querySelector('.shopbtn2')



const error = document.querySelector('.error')
const gen1CountElement = document.querySelector('.gen1-count');
let gen1Count = 0;

const gen2CountElement = document.querySelector('.gen2-count');
let gen2Count = 0;

const gen3CountElement = document.querySelector('.gen3-count');
let gen3Count = 0;

const gen4CountElement = document.querySelector('.gen4-count');
let gen4Count = 0;

const gen5CountElement = document.querySelector('.gen5-count');
let gen5Count = 0;

const gen6CountElement = document.querySelector('.gen6-count');
let gen6Count = 0;

let count = 0 
let intervalId;
let intervalId2;
let intervalId3;
let intervalId4;
let intervalId5;
let intervalId6;
let intervalMultiplier = 1; 
let interval2Multiplier = 1; 
let interval3Multiplier = 1; 
let interval4Multiplier = 1; 
let interval5Multiplier = 1; 
let interval6Multiplier = 1; 
let unit = 'α'

let hue = ''

// Prix des générateurs
let priceGen1 = 10;
let priceGen2 = 2500;
let priceGen3 = 1000000;
let priceGen4 = 10000000;
let priceGen5 = 1000000000;
let priceGen6 = 100000000000;

//prix du shop
let genmult1price = 50000000
let genmult2price = 750000000
let genmult3price = 1000000000
let genmult4price = 1500000000
let genmult5price = 10000000000
let genmult6price = 100000000000
let gensmultprice = 50000000
let clickmultprice = 10000000

//les switches

const gammaSwitch = document.querySelector('.gammaswitch');
const betaSwitch = document.querySelector('.betaswitch');
const alphaSwitch = document.querySelector('.alphaswitch');
const deltaSwitch = document.querySelector('.deltaswitch');
const epsilonSwitch = document.querySelector('.epsilonswitch');
const psiSwitch = document.querySelector('.psiswitch');

window.addEventListener('load', () => {
    alpha.style.opacity = '1'
    tuto.style.opacity = '1'
})

const switches = document.querySelectorAll('.switches button');


switches.forEach(switchButton => {
    switchButton.addEventListener('click', () => {
        // Supprimer la classe active de tous les boutons de commutation
        switches.forEach(button => {
            button.classList.remove('active');
        });
        
        // Ajouter la classe active uniquement au bouton cliqué
        switchButton.classList.add('active');
    });
});

const head = document.querySelector('header')
head.style.transition='2s'

const start = document.querySelector('.start')

alpha.style.transform = 'translateY(50%)'
const foot = document.querySelector('.footer')
head.style.transform='translate(-50%,-50%)'


alpha.addEventListener('click', () => {
    alphaSwitch.style.display='inline-flex'
    
    setTimeout(() => {
        head.style.transition='.35s'
    }, 1000);
    
    head.style.opacity = '1'
    foot.style.opacity = '1'
    start.style.opacity = '0'
    alpha.style.transform = 'translateY(0px)'
    
    alpha.style.backgroundImage = `${hue}`
    alpha.style.color = 'transparent'
    
    
    alpha.style.filter = `hue-rotate(360deg)`;
    
    setTimeout(() => {
        alpha.style.filter = `hue-rotate(0deg)`;
    }, 250);
    
    
    
    tuto.style.opacity= '0'
    tuto.style.fontSize= '450%'
    
    alphacount.style.opacity= '1'
    setTimeout(() => {
        tuto.style.display= 'none'
    }, 2000);
    
    count++
    
    
    
    const genshop = document.querySelector('.generators')
    setInterval(() => {
        
        genmult1.textContent = `Upgrade generator 1 multiplier [x ${formatNumber(genmulted1)} -> x ${formatNumber(genmulted1 * 2)}] (${formatNumber(genmult1price)} ${unit})`

        genmult2.textContent = `Upgrade generator 2 multiplier [x ${formatNumber(genmulted2)} -> x ${formatNumber(genmulted2 * 2)}] (${formatNumber(genmult2price)} ${unit})`

        genmult3.textContent = `Upgrade generator 3 multiplier [x ${formatNumber(genmulted3)} -> x ${formatNumber(genmulted3 * 2)}] (${formatNumber(genmult3price)} ${unit})`

        genmult4.textContent = `Upgrade generator 4 multiplier [x ${formatNumber(genmulted4)} -> x ${formatNumber(genmulted4 * 2)}] (${formatNumber(genmult4price)} ${unit})`

        genmult5.textContent = `Upgrade generator 5 multiplier [x ${formatNumber(genmulted5)} -> x ${formatNumber(genmulted5 * 2)}] (${formatNumber(genmult5price)} ${unit})`

        genmult6.textContent = `Upgrade generator 6 multiplier [x ${formatNumber(genmulted6)} -> x ${formatNumber(genmulted6 * 2)}] (${formatNumber(genmult6price)} ${unit})`
        
        // clickmult.textContent = `Upgrade clicker multiplier (${formatNumber(clickmultprice)} ${unit})`
        
        if (count >= priceGen1) {
            gen1.style.opacity = '1';
            gen1.style.display = 'block';
            genshop.style.opacity = '1'
        }
        if (count >= priceGen2) {
            gen2.style.opacity = '1';
            gen2.style.display = 'block';
            const elementbtn = document.querySelector('.newelement')
        }
        
        if (count >= priceGen3) {
            gen3.style.opacity = '1';
            gen3.style.display = 'block';
            
        }
        if (count >= priceGen4) {
            gen4.style.opacity = '1';
            gen4.style.display = 'block';
            
        }
        if (count >= priceGen5) {
            gen5.style.opacity = '1';
            gen5.style.display = 'block';
            
        }
        if (count >= priceGen6) {
            gen6.style.opacity = '1';
            gen6.style.display = 'block';
            
        }
        if (count >= genmult1price) {
            shop.style.opacity = '1'
            shop.style.display = 'flex'
            genmult1.style.display = 'block'
        }

        if (count >= priceGen2) {
            genmult2.style.display = 'block'
        }

        if (count >= priceGen3) {
            genmult3.style.display = 'block'
        }
        
        if (count >= priceGen4) {
            genmult4.style.display = 'block'
        }
        
        if (count >= priceGen5) {
            genmult5.style.display = 'block'
        }
        
        if (count >= priceGen6) {
            genmult6.style.display = 'block'
        }
        
        if (count >= clickmultprice) {
            clickmult.style.opacity = '1'
        }
        
        alphacount.textContent = `${formatNumberspace(Math.floor(count))} ${unit}`;
        
        // Prix sur les boutons
        gen1.textContent = `Buy Generator 1 (${formatNumber(priceGen1)} ${unit})`;
        gen2.textContent = `Buy Generator 2 (${formatNumber(priceGen2)} ${unit})`;
        gen3.textContent = `Buy Generator 3 (${formatNumber(priceGen3)} ${unit})`;
        gen4.textContent = `Buy Generator 4 (${formatNumber(priceGen4)} ${unit})`;
        gen5.textContent = `Buy Generator 5 (${formatNumber(priceGen5)} ${unit})`;
        gen6.textContent = `Buy Generator 6 (${formatNumber(priceGen6)} ${unit})`;
        
    }, 1);
    
    alpha.classList.add('shake');
    
    setTimeout(() => {
        alpha.classList.remove('shake');
    }, 750);
});

const geninfo = document.querySelector('.gen-number')
const gen1infos = document.querySelector('.gen1count')
const gen2infos = document.querySelector('.gen2count')
const gen3infos = document.querySelector('.gen3count')
const gen4infos = document.querySelector('.gen4count')
const gen5infos = document.querySelector('.gen5count')
const gen6infos = document.querySelector('.gen6count')

//event du shop
let genmulted1 = 1
genmult1.addEventListener('click', () => {
    if (count >= genmult1price) {
        count -= genmult1price;
        genmult1price *= 1.75; // Augmente le prix pour le prochain achat
        genmult1price = Math.round(genmult1price);

        genmulted1 *= 2;
        
    } else {
        displayError();
    }
})

let genmulted2 = 1;
genmult2.addEventListener('click', () => {
    if (count >= genmult2price) {
        count -= genmult2price;
        genmult2price *= 2; // Augmente le prix pour le prochain achat
        genmult2price = Math.round(genmult2price);

        genmulted2 *= 2;
        
    } else {
        displayError();
    }
});

let genmulted3 = 1;
genmult3.addEventListener('click', () => {
    if (count >= genmult3price) {
        count -= genmult3price;
        genmult3price *= 2.5; // Augmente le prix pour le prochain achat
        genmult3price = Math.round(genmult3price);

        genmulted3 *= 2;
        
    } else {
        displayError();
    }
});

let genmulted4 = 1;
genmult4.addEventListener('click', () => {
    if (count >= genmult4price) {
        count -= genmult4price;
        genmult4price *= 3; // Augmente le prix pour le prochain achat
        genmult4price = Math.round(genmult4price);

        genmulted4 *= 2;
        
    } else {
        displayError();
    }
});

let genmulted5 = 1;
genmult5.addEventListener('click', () => {
    if (count >= genmult5price) {
        count -= genmult5price;
        genmult5price *= 3.5; // Augmente le prix pour le prochain achat
        genmult5price = Math.round(genmult5price);

        genmulted5 *= 2;
        
    } else {
        displayError();
    }
});

let genmulted6 = 1;
genmult6.addEventListener('click', () => {
    if (count >= genmult6price) {
        count -= genmult6price;
        genmult6price *= 4; // Augmente le prix pour le prochain achat
        genmult6price = Math.round(genmult6price);

        genmulted6 *= 2;
        
    } else {
        displayError();
    }
});



//event des generateurs
gen1.addEventListener('click', (e) => {
    
    if (count >= priceGen1) {
        geninfo.style.opacity ='1';
        gen1infos.style.opacity ='1';
        clearInterval(intervalId);
        e.preventDefault();
        
        count -= priceGen1;
        alphacount.textContent = count.toString(); // Utilisation de Math.floor() pour arrondir vers le bas

        priceGen1 *= 1.25;
        priceGen1 = Math.round(priceGen1);

        gen1Count++;
        gen1CountElement.textContent = gen1Count;
        let intercount1 = 1;

        intervalMultiplier *= 0.80

        intercount1 *= 1 + gen1Count * 0.01

        intervalId = setInterval(() => {
            count += Math.round(intercount1 * genmulted1)
        }, intervalMultiplier / gen1Count  * 1000)

    } else {
        displayError();
    }
});

gen2.addEventListener('click', (e) => {
    
    if (count >= priceGen2) {
        gen2infos.style.opacity ='1';
        clearInterval(intervalId2);
        e.preventDefault();
        
        count -= priceGen2;
        alphacount.textContent = count.toString(); // Utilisation de Math.floor() pour arrondir vers le bas

        priceGen2 *= 1.35;
        priceGen2 = Math.round(priceGen2);

        gen2Count++;
        gen2CountElement.textContent = gen2Count;
        let intercount2 = 1 + gen1Count + gen2Count * 0.01;

        interval2Multiplier *= 0.70

        intercount2 *= 4.125 + gen2Count * 5

        intervalId2 = setInterval(() => {
            count += Math.round(intercount2 * genmulted2)
        }, interval2Multiplier / gen2Count  * 1000 - gen1Count)

    } else {
        displayError();
    }
});



gen3.addEventListener('click', (e) => {
    
    if (count >= priceGen3) {
        gen3infos.style.opacity ='1';
        clearInterval(intervalId3);
        e.preventDefault();
        
        count -= priceGen3;
        alphacount.textContent = count.toString(); // Utilisation de Math.floor() pour arrondir vers le bas

        priceGen3 *= 1.45;
        priceGen3 = Math.round(priceGen3);

        gen3Count++;
        gen3CountElement.textContent = gen3Count;
        let intercount3 = 1;

        interval3Multiplier *= 0.25

        intercount3 *= 1 * 8.25 + gen1Count + gen2Count + gen3Count * 0.01

        intervalId3 = setInterval(() => {
            count += Math.round(intercount3 * genmulted3)
        }, interval3Multiplier / gen3Count  * 1000 - gen1Count + gen2Count)

    } else {
        displayError();
    }
});

gen4.addEventListener('click', (e) => {
    
    if (count >= priceGen4) {
        gen4infos.style.opacity ='1';
        clearInterval(intervalId4);
        e.preventDefault();
        
        count -= priceGen4;
        alphacount.textContent = count.toString(); // Utilisation de Math.floor() pour arrondir vers le bas

        priceGen4 *= 1.55;
        priceGen4 = Math.round(priceGen4);

        gen4Count++;
        gen4CountElement.textContent = gen4Count;
        let intercount4 = 1;

        interval4Multiplier *= 0.10

        intercount4 *= 1 * 17.5 + gen1Count + gen2Count + gen3Count + gen4Count * 0.01

        intervalId4 = setInterval(() => {
            count += Math.round(intercount4 * genmulted4)
        }, interval4Multiplier / gen4Count  * 250 - gen1Count + gen2Count + gen3Count)

    } else {
        displayError();
    }
});

gen5.addEventListener('click', (e) => {
    
    if (count >= priceGen5) {
        gen5infos.style.opacity ='1';

        clearInterval(intervalId5);
        e.preventDefault();
        
        count -= priceGen5;
        alphacount.textContent = count.toString(); // Utilisation de Math.floor() pour arrondir vers le bas

        priceGen5 *= 1.65;
        priceGen5 = Math.round(priceGen5);

        gen5Count++;
        gen5CountElement.textContent = gen5Count;

        interval5Multiplier *= 0.05 / gen5Count;

        let intercount5 = 1;
        intercount5 *= 1 * 25 + gen1Count + gen2Count + gen3Count + gen4Count + gen5Count * 0.01
        
        // Mettre à jour l'intervalle de génération
        intervalId5 = setInterval(() => {
            count += Math.round(intercount5 * genmulted5);
        }, interval5Multiplier / gen5Count * 1000 - gen1Count + gen2Count + gen3Count + gen4Count);

    } else {
        displayError();
    }
});

gen6.addEventListener('click', (e) => {
    
    if (count >= priceGen6) {
    gen6infos.style.opacity ='1';

        clearInterval(intervalId6);
        e.preventDefault();
        
        count -= priceGen6;

        priceGen6 *= 1.75;
        priceGen6 = Math.round(priceGen6);

        gen6Count++;
        gen6CountElement.textContent = gen6Count;

        interval6Multiplier *= 0.005 / gen6Count;

        let intercount6 = 1;
        intercount6 *= 1 * 50 + gen1Count + gen2Count + gen3Count + gen4Count + gen5Count + gen6Count * 0.01
        
        // Mettre à jour l'intervalle de génération
        intervalId6 = setInterval(() => {
            count += Math.round(intercount6 * genmulted6);
        }, interval6Multiplier / gen6Count * 1000 - gen1Count + gen2Count + gen3Count + gen4Count + gen5Count);

    } else {
        displayError();
    }
});

//fonction afficher erreur
function displayError() {
    error.style.display = 'flex';
    setTimeout(() => {
        error.style.opacity = '1';
    }, 0);
    setTimeout(() => {
        error.style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        error.style.display = 'none';
    }, 2250);
}























alphaSwitch.addEventListener('click', () => {
    // Remplacer le contenu des éléments alpha par gamma
    alpha.textContent = 'α';
    tuto.textContent = `cliquez sur l'alpha.`;
    unit = 'α'
    hue = 'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,125,194,1) 48%, rgba(255,142,115,1) 100%)'
    alpha.style.backgroundImage = 'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,125,194,1) 48%, rgba(255,142,115,1) 100%)'
    
    // Supprimer les autres classes et ajouter la classe alpha
    alpha.classList.remove('gamma', 'beta', 'delta', 'epsilon', 'psi');
    alpha.classList.add('alpha');
});

betaSwitch.addEventListener('click', () => {
    // Remplacer le contenu des éléments alpha par gamma
    alpha.textContent = 'β';
    tuto.textContent = 'cliquez sur la beta.';
    unit = 'β'
    hue = 'linear-gradient(90deg, rgba(0,255,175,1) 0%, rgba(0,0,255,1) 50%, rgba(255,0,254,1) 100%)'
    alpha.style.backgroundImage = 'linear-gradient(90deg, rgba(0,255,175,1) 0%, rgba(0,0,255,1) 50%, rgba(255,0,254,1) 100%)'
    
    // Supprimer les autres classes et ajouter la classe beta
    alpha.classList.remove('gamma', 'alpha', 'delta', 'epsilon', 'psi');
    alpha.classList.add('beta');
});

gammaSwitch.addEventListener('click', () => {
    // Remplacer le contenu des éléments alpha par gamma
    alpha.textContent = 'γ';
    tuto.textContent = 'cliquez sur le gamma.';
    unit = 'γ'
    hue = 'linear-gradient(90deg, rgba(52,255,0,1) 0%, rgba(255,231,39,1) 50%, rgba(0,142,255,1) 100%)'
    alpha.style.backgroundImage = 'linear-gradient(90deg, rgba(52,255,0,1) 0%, rgba(255,231,39,1) 50%, rgba(0,142,255,1) 100%)'
    
    // Supprimer les autres classes et ajouter la classe gamma
    alpha.classList.remove('beta', 'alpha', 'epsilon', 'delta', 'psi');
    alpha.classList.add('gamma');
});

deltaSwitch.addEventListener('click', () => {
    // Remplacer le contenu des éléments alpha par gamma
    alpha.textContent = 'δ';
    tuto.textContent = `cliquez sur la Delta.`;
    unit = 'δ'
    hue = 'linear-gradient(180deg, rgba(255,158,0,1) 0%, rgba(255,39,199,1) 35%, rgba(246,255,21,1) 65%, rgba(255,0,0,1) 100%)'
    alpha.style.backgroundImage = 'linear-gradient(25deg, rgba(255,158,0,1) 0%, rgba(255,39,199,1) 35%, rgba(246,255,21,1) 65%, rgba(255,0,0,1) 100%)'
    
    // Supprimer les autres classes et ajouter la classe alpha
    alpha.classList.remove('gamma', 'beta', 'alpha', 'epsilon', 'psi');
    alpha.classList.add('delta');
});

epsilonSwitch.addEventListener('click', () => {
    // Remplacer le contenu des éléments alpha par gamma
    alpha.textContent = 'ε';
    tuto.textContent = `cliquez sur l'epsilon.`;
    unit = 'ε'
    hue = 'linear-gradient(45deg, rgba(255,0,0,1) 27%, rgba(219,0,217,1) 45%, rgba(85,94,255,1) 73%, rgba(255,255,255,1) 85%)'
    alpha.style.backgroundImage = 'linear-gradient(45deg, rgba(255,0,0,1) 27%, rgba(219,0,217,1) 45%, rgba(85,94,255,1) 73%, rgba(255,255,255,1) 85%)'
    
    // Supprimer les autres classes et ajouter la classe alpha
    alpha.classList.remove('gamma', 'beta', 'alpha', 'psi', 'delta');
    alpha.classList.add('epsilon');
});

psiSwitch.addEventListener('click', () => {
    // Remplacer le contenu des éléments alpha par gamma
    alpha.textContent = 'Ψ';
    tuto.textContent = `cliquez sur le psi.`;
    unit = 'Ψ'
    hue = 'linear-gradient(332deg, rgba(85,188,255,1) 29%, rgba(177,49,176,1) 49%, rgba(255,179,0,1) 69%)'
    alpha.style.backgroundImage = 'linear-gradient(332deg, rgba(85,188,255,1) 29%, rgba(177,49,176,1) 49%, rgba(255,179,0,1) 69%)'
    
    // Supprimer les autres classes et ajouter la classe alpha
    alpha.classList.remove('gamma', 'beta', 'alpha', 'delta', 'epsilon');
    alpha.classList.add('psi');
});