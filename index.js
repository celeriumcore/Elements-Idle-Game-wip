
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

const genshop = document.querySelector('.generators')

setInterval(() => {
    console.log(genshouldstay)
},500)

const tuto = document.querySelector('h2');
let genshouldstay = localStorage.getItem('stay') ? localStorage.getItem('stay') : false
let upgradeshouldstay = localStorage.getItem('upgrade') ? localStorage.getItem('upgrade') : false
let gen1shouldstay = localStorage.getItem('gen1stay') ? localStorage.getItem('gen1stay') : false
let gen2shouldstay = localStorage.getItem('gen2stay') ? localStorage.getItem('gen2stay') : false
let gen3shouldstay = localStorage.getItem('gen3stay') ? localStorage.getItem('gen3stay') : false
let gen4shouldstay = localStorage.getItem('gen4stay') ? localStorage.getItem('gen4stay') : false
let gen5shouldstay = localStorage.getItem('gen5stay') ? localStorage.getItem('gen5stay') : false
let gen6shouldstay = localStorage.getItem('gen6stay') ? localStorage.getItem('gen6stay') : false


const alpha = document.querySelector('h1');
let alphaclicked = false

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
const genmult6 = document.querySelector('.shopbtn1_6')
genmult1.style.display = 'block'
genmult2.style.display = 'block'
genmult3.style.display = 'block'
genmult4.style.display = 'block'
genmult5.style.display = 'block'
genmult6.style.display = 'block'
const clickmult = document.querySelector('.shopbtn2')



const error = document.querySelector('.error')

const gen1CountElement = document.querySelector('.gen1-count');
let gen1Count = localStorage.getItem('gen1count') ? localStorage.getItem('gen1count') : 0

const gen2CountElement = document.querySelector('.gen2-count');
let gen2Count = localStorage.getItem('gen2count') ? localStorage.getItem('gen2count') : 0

const gen3CountElement = document.querySelector('.gen3-count');
let gen3Count = localStorage.getItem('gen3count') ? localStorage.getItem('gen3count') : 0

const gen4CountElement = document.querySelector('.gen4-count');
let gen4Count = localStorage.getItem('gen4count') ? localStorage.getItem('gen4count') : 0

const gen5CountElement = document.querySelector('.gen5-count');
let gen5Count = localStorage.getItem('gen5count') ? localStorage.getItem('gen5count') : 0

const gen6CountElement = document.querySelector('.gen6-count');
let gen6Count = localStorage.getItem('gen6count') ? localStorage.getItem('gen6count') : 0

let count = localStorage.getItem('count')

let intervalId
let intervalId2
let intervalId3
let intervalId4
let intervalId5
let intervalId6
let intervalMultiplier = localStorage.getItem('intermult1') ? localStorage.getItem('intermult1') : 1
let interval2Multiplier = localStorage.getItem('intermult2') ? localStorage.getItem('intermult2') : 1
let interval3Multiplier = localStorage.getItem('intermult3') ? localStorage.getItem('intermult3') : 1
let interval4Multiplier = localStorage.getItem('intermult4') ? localStorage.getItem('intermult4') : 1
let interval5Multiplier = localStorage.getItem('intermult5') ? localStorage.getItem('intermult5') : 1
let interval6Multiplier = localStorage.getItem('intermult6') ? localStorage.getItem('intermult6') : 1
let unit = 'α'

let hue = ''

// // Prix des générateurs
// let priceGen1 = 25
// let priceGen2 = 5000
// let priceGen3 = 1000000
// let priceGen4 = 10000000
// let priceGen5 = 1000000000
// let priceGen6 = 100000000000
// Prix des générateurs
let priceGen1 = localStorage.getItem('gen1price') ? localStorage.getItem('gen1price') : 25
let priceGen2 = localStorage.getItem('gen2price') ? localStorage.getItem('gen2price') : 5000
let priceGen3 = localStorage.getItem('gen3price') ? localStorage.getItem('gen3price') : 1000000
let priceGen4 = localStorage.getItem('gen4price') ? localStorage.getItem('gen4price') : 10000000
let priceGen5 = localStorage.getItem('gen5price') ? localStorage.getItem('gen5price') : 1000000000
let priceGen6 = localStorage.getItem('gen6price') ? localStorage.getItem('gen6price') : 100000000000
//prix du shop
// let genmult1price = 50000000
// let genmult2price = 750000000
// let genmult3price = 1000000000
// let genmult4price = 1500000000
// let genmult5price = 10000000000
// let genmult6price = 100000000000
// let clickmultprice = 10000000
let genmult1price = localStorage.getItem('genmult1price') ? localStorage.getItem('genmult1price') : 5
let genmult2price = localStorage.getItem('genmult2price') ? localStorage.getItem('genmult2price') : 750000000
let genmult3price = localStorage.getItem('genmult3price') ? localStorage.getItem('genmult3price') : 1000000000
let genmult4price = localStorage.getItem('genmult4price') ? localStorage.getItem('genmult4price') : 1500000000
let genmult5price = localStorage.getItem('genmult5price') ? localStorage.getItem('genmult5price') : 10000000000
let genmult6price = localStorage.getItem('genmult6price') ? localStorage.getItem('genmult6price') : 100000000000
// let clickmultprice = 10000000

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


const footswitches = document.querySelectorAll('.footerbtns button');
const genmobile = document.querySelector('.gamegenerators')
const gamemobile = document.querySelector('.game')
const shopmobile = document.querySelector('.gameshop')
const elementmobile = document.querySelector('.elementsmobile')
const filter = document.querySelector('.filter')
const mobiletuto = document.querySelector('.mobile_tuto')
const mobiletuto2 = document.querySelector('.mobile_tuto_2')
const mobiletutostatus = localStorage.getItem('mobiletuto') ?  localStorage.getItem('mobiletuto') : false
const mobiletutostatus2 = localStorage.getItem('mobiletuto2') ?  localStorage.getItem('mobiletuto2') : false

genmobile.addEventListener('click', (e) => {
    if(!genmobile.classList.contains('click'))
        {genshop.style.display = 'grid',geninfo.style.display = 'grid', filter.style.opacity = '1', shop.style.display = 'none',  headswitches.style.display = 'none', mobiletuto.style.display = 'none'}
    
    
    
    if(count >= priceGen1){mobiletutostatus2 = true
        localStorage.setItem('mobiletuto2')}
        mobiletuto2.style.display = 'none'
        
        if(count < priceGen1){
            mobiletuto2.style.display = 'flex'
            mobiletuto2.textContent = `Get ${formatNumber(priceGen1)} ${unit} to unlock your first generator`
            }
            if(mobiletutostatus2){mobiletuto2.style.display = 'none'}
            })
            
shopmobile.addEventListener('click', (e) => {
        if(!shopmobile.classList.contains('click'))
            {genshop.style.display = 'none',geninfo.style.display = 'none', filter.style.opacity = '1', shop.style.display = 'grid',  headswitches.style.display = 'none', mobiletuto2.style.display = 'none'}
                
                

    if(count >= genmult1price){
                mobiletutostatus = true
        localStorage.setItem('mobiletuto')
    }

    if(count < genmult1price){

        mobiletuto.style.display = 'flex'
        mobiletuto.textContent = `Get ${formatNumber(genmult1price)} ${unit} to unlock your first upgrade`
    }if (mobiletutostatus){mobiletuto.style.display = 'none'}
}
)

    
    elementmobile.addEventListener('click', (e) => {
        if(!elementmobile.classList.contains('click'))
            {genshop.style.display = 'none', geninfo.style.display = 'none', filter.style.opacity = '1', shop.style.display = 'none',  headswitches.style.display = 'grid', mobiletuto.style.display = 'none',mobiletuto2.style.display = 'none'}
    })

    gamemobile.addEventListener('click', (e) => {
        if(!gamemobile.classList.contains('click'))
    {genshop.style.display = 'none', geninfo.style.display = 'none', filter.style.opacity = '0', shop.style.display = 'none',  headswitches.style.display = 'none',  mobiletuto.style.display = 'none',mobiletuto2.style.display = 'none'}})

    
function mobilemode(x) {
    if (x.matches)
        {genshop.style.display = 'none', geninfo.style.display = 'none', filter.style.opacity = '0', shop.style.display = 'none', headswitches.style.display = 'none',
            footswitches.forEach(footbtn => {
            footbtn.classList.remove('click')})
        gamemobile.classList.add('click')
        }
    else
        {genshop.style.display = 'grid', geninfo.style.display = 'grid', filter.style.opacity = '1', shop.style.display = 'grid',  headswitches.style.display = 'inline-flex'}
}

var x = window.matchMedia("(max-width: 800px)")

x.addEventListener("change", function() {
    mobilemode(x)
})

footswitches.forEach(footbtns => {
    footbtns.addEventListener('click', () => {
        // Supprimer la classe active de tous les boutons de commutation
        footswitches.forEach(footbtn => {
            footbtn.classList.remove('click')
        })
        // Ajouter la classe active uniquement au bouton cliqué
        footbtns.classList.add('click')
    });
});


const switches = document.querySelectorAll('.switches button');
const headswitches = document.querySelector('header .switches');

switches.forEach(headbtn => {
    headbtn.addEventListener('click', (e) => {
        footswitches.forEach(footbtn => {
            footbtn.classList.remove('click')})
        if (x.matches){gamemobile.classList.add('click'), headswitches.style.display = 'none', filter.style.opacity = '0'}
    })
})

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
// const footswitch = document.querySelector('.footer-switch')


alpha.addEventListener('click', () => {

    alphaclicked = true
    genstayed()

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

    
    
    
    setInterval(() => {

        
        genmult1.innerHTML = `Upgrade generator 1 multiplier <br> [x ${formatNumber(genmulted1)} -> x ${formatNumber(genmulted1 * 2)}] (${formatNumber(genmult1price)} ${unit})`
        
        genmult2.innerHTML = `Upgrade generator 2 multiplier <br> [x ${formatNumber(genmulted2)} -> x ${formatNumber(genmulted2 * 2)}] (${formatNumber(genmult2price)} ${unit})`

        genmult3.innerHTML = `Upgrade generator 3 multiplier <br> [x ${formatNumber(genmulted3)} -> x ${formatNumber(genmulted3 * 2)}] (${formatNumber(genmult3price)} ${unit})`
        
        genmult4.innerHTML = `Upgrade generator 4 multiplier <br> [x ${formatNumber(genmulted4)} -> x ${formatNumber(genmulted4 * 2)}] (${formatNumber(genmult4price)} ${unit})`
        
        genmult5.innerHTML = `Upgrade generator 5 multiplier <br> [x ${formatNumber(genmulted5)} -> x ${formatNumber(genmulted5 * 2)}] (${formatNumber(genmult5price)} ${unit})`
        
        genmult6.innerHTML = `Upgrade generator 6 multiplier <br> [x ${formatNumber(genmulted6)} -> x ${formatNumber(genmulted6 * 2)}] (${formatNumber(genmult6price)} ${unit})`
        
        // clickmult.textContent = `Upgrade clicker multiplier (${formatNumber(clickmultprice)} ${unit})`
        
        if (count >= priceGen1) {
            genshouldstay = true
            gen1shouldstay = true
            localStorage.setItem('gen1stay', gen1shouldstay)
            localStorage.setItem('stay', genshouldstay)
        }
        
        if (count >= priceGen2) {
            gen2shouldstay = true
            localStorage.setItem('gen2stay', gen2shouldstay)


            // const elementbtn = document.querySelector('.newelement')
        }
        
        if (count >= priceGen3) {
            gen3shouldstay = true
            localStorage.setItem('gen3stay', gen3shouldstay)


        }
        if (count >= priceGen4) {
            gen4.style.opacity = '1';
            gen4.style.display = 'block';
            gen4shouldstay = true
            localStorage.setItem('gen4stay', gen4shouldstay)

            
        }
        if (count >= priceGen5) {
            gen5shouldstay = true
            localStorage.setItem('gen5stay', gen5shouldstay)

            
        }
        if (count >= priceGen6) {
            gen6shouldstay = true
            localStorage.setItem('gen6stay', gen6shouldstay)

            
        }
        if (count >= genmult1price) {
            upgradeshouldstay = true
            localStorage.setItem('upgrade', upgradeshouldstay)
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
        
        // if (count >= clickmultprice) {
            //     clickmult.style.opacity = '1'
            // }
            
            if (gen1Count >= 1) {
                geninfo.style.opacity ='1';
                gen1infos.style.opacity ='1';
            }
            if (gen2Count >= 1) {
                gen2infos.style.opacity ='1';
            }
            if (gen3Count >= 1) {
                gen3infos.style.opacity ='1';
            }
            if (gen4Count >= 1) {
                gen4infos.style.opacity ='1';
            }
            if (gen5Count >= 1) {
                gen5infos.style.opacity ='1';
            }
        if (gen6Count >= 1) {
            gen6infos.style.opacity ='1';
        }

        
        localStorage.setItem('count', count)
        localStorage.setItem('gen1count', gen1Count)
        localStorage.setItem('gen2count', gen2Count)
        localStorage.setItem('gen3count', gen3Count)
        localStorage.setItem('gen4count', gen4Count)
        localStorage.setItem('gen5count', gen5Count)
        localStorage.setItem('gen6count', gen6Count)
        alphacount.textContent = `${formatNumberspace(Math.floor(localStorage.getItem("count")))} ${unit}`
        gen1CountElement.textContent = localStorage.getItem('gen1count');
        gen2CountElement.textContent = localStorage.getItem('gen2count');
        gen3CountElement.textContent = localStorage.getItem('gen3count');
        gen4CountElement.textContent = localStorage.getItem('gen4count');
        gen5CountElement.textContent = localStorage.getItem('gen5count');
        gen6CountElement.textContent = localStorage.getItem('gen6count');
        
        
        // Prix sur les boutons
        gen1.textContent = `Buy Generator 1 (${formatNumber(priceGen1)} ${unit})`
        gen2.textContent = `Buy Generator 2 (${formatNumber(priceGen2)} ${unit})`
        gen3.textContent = `Buy Generator 3 (${formatNumber(priceGen3)} ${unit})`
        gen4.textContent = `Buy Generator 4 (${formatNumber(priceGen4)} ${unit})`
        gen5.textContent = `Buy Generator 5 (${formatNumber(priceGen5)} ${unit})`
        gen6.textContent = `Buy Generator 6 (${formatNumber(priceGen6)} ${unit})`
        
        
    }, 1);
    
    alpha.classList.add('shake');
    
    setTimeout(() => {
        alpha.classList.remove('shake');
    }, 750);
    
});

// infos compteurs gens //

const geninfo = document.querySelector('.gen-number')
const gen1infos = document.querySelector('.gen1count')
const gen2infos = document.querySelector('.gen2count')
const gen3infos = document.querySelector('.gen3count')
const gen4infos = document.querySelector('.gen4count')
const gen5infos = document.querySelector('.gen5count')
const gen6infos = document.querySelector('.gen6count')

//event du shop //
let genmulted1 = localStorage.getItem('genmult1') ? localStorage.getItem('genmult1') : 1
genmult1.addEventListener('click', () => {
    if (count >= genmult1price) {
        localStorage.setItem('genmult1price', genmult1price)
        count -= genmult1price;
        genmult1price *= 1.75; // Augmente le prix pour le prochain achat
        genmult1price = Math.round(genmult1price);
        localStorage.setItem('genmult1price', genmult1price)
        
        genmulted1 *= 2;
        localStorage.setItem('genmult1', genmulted1)
        
    } else {
        displayError();
    }
})

let genmulted2 = localStorage.getItem('genmult2') ? localStorage.getItem('genmult2') : 1;

genmult2.addEventListener('click', () => {
    if (count >= genmult2price) {
        localStorage.setItem('genmult2price', genmult2price)
        count -= genmult2price;
        genmult2price *= 2; // Augmente le prix pour le prochain achat
        genmult2price = Math.round(genmult2price);
        localStorage.setItem('genmult2price', genmult2price)
        
        genmulted2 *= 2;
        localStorage.setItem('genmult2', genmulted2)
        
    } else {
        displayError();
    }
});

let genmulted3 = localStorage.getItem('genmult2') ? localStorage.getItem('genmult2') : 1;
genmult3.addEventListener('click', () => {
    if (count >= genmult3price) {
        localStorage.setItem('genmult3price', genmult3price)
        count -= genmult3price;
        genmult3price *= 2.5; // Augmente le prix pour le prochain achat
        genmult3price = Math.round(genmult3price);
        localStorage.setItem('genmult3price', genmult3price)
        
        genmulted3 *= 2;
        localStorage.setItem('genmult3', genmulted3)
        
    } else {
        displayError();
    }
});

let genmulted4 = localStorage.getItem('genmult4') ? localStorage.getItem('genmult4') : 1;
genmult4.addEventListener('click', () => {
    if (count >= genmult4price) {
        localStorage.setItem('genmult4price', genmult4price)
        count -= genmult4price;
        genmult4price *= 3; // Augmente le prix pour le prochain achat
        genmult4price = Math.round(genmult4price);
        localStorage.setItem('genmult4price', genmult4price)
        
        genmulted4 *= 2;
        localStorage.setItem('genmult4', genmulted4)
        
    } else {
        displayError();
    }
});

let genmulted5 = localStorage.getItem('genmult5') ? localStorage.getItem('genmult5') : 1;
genmult5.addEventListener('click', () => {
    if (count >= genmult5price) {
        localStorage.setItem('genmult5price', genmult5price)
        count -= genmult5price;
        genmult5price *= 3.5; // Augmente le prix pour le prochain achat
        genmult5price = Math.round(genmult5price);
        localStorage.setItem('genmult5price', genmult5price)
        
        genmulted5 *= 2;
        localStorage.setItem('genmult5', genmulted5)
        
    } else {
        displayError();
    }
});

let genmulted6 = localStorage.getItem('genmult2') ? localStorage.getItem('genmult2') : 1;
genmult6.addEventListener('click', () => {
    localStorage.setItem('genmult6price', genmult6price)
    if (count >= genmult6price) {
        count -= genmult6price;
        genmult6price *= 4; // Augmente le prix pour le prochain achat
        genmult6price = Math.round(genmult6price);
        localStorage.setItem('genmult6price', genmult6price)
        
        genmulted6 *= 2;
        localStorage.setItem('genmult6', genmulted6)
        
    } else {
        displayError();
    }
});



//event des generateurs
gen1.addEventListener('click', (e) => {
    
    
    if (count >= priceGen1) {
        geninfo.style.opacity ='1';
        gen1infos.style.opacity ='1';
        e.preventDefault();
        
        count -= priceGen1;
        alphacount.textContent = count.toString(); // Utilisation de Math.floor() pour arrondir vers le bas
        
        localStorage.getItem('gen1price')
        priceGen1 *= 1.25;
        priceGen1 = Math.round(priceGen1);
        localStorage.setItem('gen1price', priceGen1)
        
        gen1Count++;
        localStorage.setItem('gen1count', gen1Count)
        
        localStorage.setItem('intermult1', intervalMultiplier)
        intervalMultiplier *= 0.80
        localStorage.setItem('intermult1', intervalMultiplier)
        
        let intercount1 = localStorage.getItem('inter1') ? localStorage.getItem('inter1') : 1
        localStorage.setItem('inter1', intercount1)
        intercount1 = localStorage.getItem('inter1')
        intercount1 *= 1 + 1 * 0.01 + (localStorage.getItem('gen1count') * 0.0001)
        localStorage.setItem('inter1', intercount1)
        intercount1 = localStorage.getItem('inter1')
} else {
    displayError();
}
})


gen2.addEventListener('click', (e) => {

    if (count >= priceGen2) {
        gen2infos.style.opacity ='1';
        e.preventDefault();
        
        count -= priceGen2;
        alphacount.textContent = count.toString(); // Utilisation de Math.floor() pour arrondir vers le bas
        
        localStorage.getItem('gen2price')
        priceGen2 *= 1.35;
        priceGen2 = Math.round(priceGen2);
        localStorage.setItem('gen2price', priceGen2)
        
        gen2Count++;
        localStorage.setItem('gen2count', gen2Count)
        
        
        localStorage.setItem('intermult2', interval2Multiplier)
        interval2Multiplier *= 0.65
        localStorage.setItem('intermult2', interval2Multiplier)

        let intercount2 = localStorage.getItem('inter2') ? localStorage.getItem('inter2') : 1
        localStorage.setItem('inter2', intercount2)
        intercount2 = localStorage.getItem('inter2')
        intercount2 *= 1 + 1 * 0.01 + (localStorage.getItem('gen1count') + localStorage.getItem('gen2count')) * 0.0001
        localStorage.setItem('inter2', intercount2)
        intercount2 = localStorage.getItem('inter2')
        
    } else {
        displayError();
    }
});

gen3.addEventListener('click', (e) => {
    
    if (count >= priceGen3) {
        gen3infos.style.opacity ='1';
        e.preventDefault();
        
        count -= priceGen3;
        alphacount.textContent = count.toString(); // Utilisation de Math.floor() pour arrondir vers le bas
        
        localStorage.getItem('gen3price')
        priceGen3 *= 1.45;
        priceGen3 = Math.round(priceGen3);
        localStorage.setItem('gen3price', priceGen3)
        
        gen3Count++;
        localStorage.setItem('gen3count', gen3Count)
        
        
        localStorage.setItem('intermult3', interval3Multiplier)
        interval3Multiplier *= 0.25
        localStorage.setItem('intermult3', interval3Multiplier)

        let intercount3 = localStorage.getItem('inter3') ? localStorage.getItem('inter3') : 1
        localStorage.setItem('inter3', intercount3)
        intercount3 = localStorage.getItem('inter3')
        intercount3 *= 1 + 1 * 0.01 + (localStorage.getItem('gen1count') + localStorage.getItem('gen2count') + localStorage.getItem('gen3count')) * 0.0001
        localStorage.setItem('inter3', intercount3)
        intercount3 = localStorage.getItem('inter3')
        
    } else {
        displayError();
    }
});

gen4.addEventListener('click', (e) => {
    
    if (count >= priceGen4) {
        gen4infos.style.opacity ='1';
        e.preventDefault();
        
        count -= priceGen4;
        alphacount.textContent = count.toString(); // Utilisation de Math.floor() pour arrondir vers le bas
        
        localStorage.getItem('gen4price')
        priceGen4 *= 1.55;
        priceGen4 = Math.round(priceGen4);
        localStorage.setItem('gen4price', priceGen4)
        
        gen4Count++;
        localStorage.setItem('gen4count', gen4Count)
        
        
        localStorage.setItem('intermult4', interval4Multiplier)
        interval4Multiplier *= 0.10
        localStorage.setItem('intermult4', interval4Multiplier)

        let intercount4 = localStorage.getItem('inter4') ? localStorage.getItem('inter4') : 1
        localStorage.setItem('inter4', intercount4)
        intercount4 = localStorage.getItem('inter4')
        intercount4 *= 1 + 1 * 0.01 + (localStorage.getItem('gen1count') + localStorage.getItem('gen2count') + localStorage.getItem('gen3count') + localStorage.getItem('gen4count')) * 0.0001
        localStorage.setItem('inter4', intercount4)
        intercount4 = localStorage.getItem('inter4')
        
    } else {
        displayError();
    }
});

gen5.addEventListener('click', (e) => {
    
    if (count >= priceGen5) {
        gen5infos.style.opacity ='1';
        e.preventDefault();
        
        count -= priceGen5;
        alphacount.textContent = count.toString(); // Utilisation de Math.floor() pour arrondir vers le bas
        
        localStorage.getItem('gen5price')
        priceGen5 *= 1.65;
        priceGen5 = Math.round(priceGen5);
        localStorage.setItem('gen5price', priceGen5)
        
        gen5Count++;
        localStorage.setItem('gen5count', gen5Count)
        
        
        localStorage.setItem('intermult5', interval5Multiplier)
        interval5Multiplier *= 0.05
        localStorage.setItem('intermult5', interval5Multiplier)

        let intercount5 = localStorage.getItem('inter5') ? localStorage.getItem('inter5') : 1
        localStorage.setItem('inter5', intercount5)
        intercount5 = localStorage.getItem('inter5')
        intercount5 *= 1 + 1 * 0.01 + (localStorage.getItem('gen1count') + localStorage.getItem('gen2count') + localStorage.getItem('gen3count') + localStorage.getItem('gen4count') + localStorage.getItem('gen5count')) * 0.0001
        localStorage.setItem('inter5', intercount5)
        intercount5 = localStorage.getItem('inter5')
        
    } else {
        displayError();
    }
});

gen6.addEventListener('click', (e) => {

    if (count >= priceGen6) {
        gen6infos.style.opacity ='1';
        e.preventDefault();
        
        count -= priceGen6;
        alphacount.textContent = count.toString(); // Utilisation de Math.floor() pour arrondir vers le bas
        
        localStorage.getItem('gen6price')
        priceGen6 *= 1.65;
        priceGen6 = Math.round(priceGen6);
        localStorage.setItem('gen6price', priceGen6)
        
        gen6Count++;
        localStorage.setItem('gen6count', gen6Count)
        
        
        localStorage.setItem('intermult6', interval6Multiplier)
        interval6Multiplier *= 0.05
        localStorage.setItem('intermult6', interval6Multiplier)

        let intercount6 = localStorage.getItem('inter6') ? localStorage.getItem('inter6') : 1
        localStorage.setItem('inter6', intercount6)
        intercount6 = localStorage.getItem('inter6')
        intercount6 *= 1 + 1 * 0.01 + (localStorage.getItem('gen1count') + localStorage.getItem('gen2count') + localStorage.getItem('gen3count') + localStorage.getItem('gen4count') + localStorage.getItem('gen5count') + localStorage.getItem('gen6count')) * 0.0001
        localStorage.setItem('inter6', intercount6)
        intercount6 = localStorage.getItem('inter6')
        
    } else {
        displayError();
    }
});


// fonctions Genslogic

function gen1logic() {
    clearInterval(alphachecker);
    if (localStorage.getItem('gen1count') >= 1 ) {
        clearInterval(intervalId);
        
        intervalId = setInterval(() => {
            count += Math.round(localStorage.getItem('inter1') * genmulted1)
            
            
        }, localStorage.getItem('intermult1') / localStorage.getItem('gen1count') * 1000)
        alphachecker = setInterval(() => {
            alphacheck()
        },localStorage.getItem('intermult1') / localStorage.getItem('gen1count') * 1000)
    } else {
        clearInterval(alphachecker);
        gen1.addEventListener('click', (e) => {
            clearInterval(intervalId);
            
            intervalId = setInterval(() => {
                count += Math.round(localStorage.getItem('inter1') * genmulted1)
                
                
            }, localStorage.getItem('intermult1') / localStorage.getItem('gen1count') * 1000) })
            alphachecker = setInterval(() => {
                alphacheck()
            },localStorage.getItem('intermult1') / localStorage.getItem('gen1count') * 1000)
}}
// 
function gen2logic() {
        clearInterval(alphachecker2);
        if (localStorage.getItem('gen2count') >= 1 ) {
            clearInterval(intervalId2);
            
            intervalId2 = setInterval(() => {
                count += Math.round(localStorage.getItem('inter2') * genmulted2)
                
                
            }, localStorage.getItem('intermult2') / localStorage.getItem('gen2count') * 1000)
            alphachecker2 = setInterval(() => {
                alphacheck2()
            },localStorage.getItem('intermult2') / localStorage.getItem('gen2count') * 1000)
        } else {
            clearInterval(alphachecker2);
            gen2.addEventListener('click', (e) => {
                clearInterval(intervalId2);
                
                intervalId2 = setInterval(() => {
                    count += Math.round(localStorage.getItem('inter2') * genmulted2)
                    
                    
                }, localStorage.getItem('intermult2') / localStorage.getItem('gen2count') * 1000) })
                alphachecker2 = setInterval(() => {
                    alphacheck2()
                },localStorage.getItem('intermult2') / localStorage.getItem('gen2count') * 1000)
}}
// 
        function gen3logic() {
    clearInterval(alphachecker3);
    if (localStorage.getItem('gen3count') >= 1 ) {
        clearInterval(intervalId3);
        
        intervalId3 = setInterval(() => {
            count += Math.round(localStorage.getItem('inter3') * genmulted3)
            
            
        }, localStorage.getItem('intermult3') / localStorage.getItem('gen3count') * 1000)
        alphachecker3 = setInterval(() => {
            alphacheck3()
        },localStorage.getItem('intermult3') / localStorage.getItem('gen3count') * 1000)
    } else {
        clearInterval(alphachecker3);
        gen3.addEventListener('click', (e) => {
            clearInterval(intervalId3);
            
            intervalId3 = setInterval(() => {
                count += Math.round(localStorage.getItem('inter3') * genmulted3)
                
                
            }, localStorage.getItem('intermult3') / localStorage.getItem('gen3count') * 1000) })
            alphachecker3 = setInterval(() => {
                alphacheck3()
            },localStorage.getItem('intermult3') / localStorage.getItem('gen3count') * 1000)
}}
// 
function gen4logic() {
    clearInterval(alphachecker4);
    if (localStorage.getItem('gen4count') >= 1 ) {
        clearInterval(intervalId4);
        
        intervalId4 = setInterval(() => {
            count += Math.round(localStorage.getItem('inter4') * genmulted4)
            
            
        }, localStorage.getItem('intermult4') / localStorage.getItem('gen4count') * 1000)
        alphachecker4 = setInterval(() => {
            alphacheck4()
        },localStorage.getItem('intermult4') / localStorage.getItem('gen4count') * 1000)
    } else {
        clearInterval(alphachecker4);
        gen4.addEventListener('click', (e) => {
            clearInterval(intervalId4);
            
            intervalId4 = setInterval(() => {
                count += Math.round(localStorage.getItem('inter4') * genmulted4)
                
                
            }, localStorage.getItem('intermult4') / localStorage.getItem('gen4count') * 1000) })
            alphachecker4 = setInterval(() => {
                alphacheck4()
            },localStorage.getItem('intermult4') / localStorage.getItem('gen4count') * 1000)
}}
// 
function gen5logic() {
    clearInterval(alphachecker5);
    if (localStorage.getItem('gen5count') >= 1 ) {
        clearInterval(intervalId5);
        
        intervalId5 = setInterval(() => {
            count += Math.round(localStorage.getItem('inter5') * genmulted5)
            
            
        }, localStorage.getItem('intermult5') / localStorage.getItem('gen5count') * 1000)
        alphachecker5 = setInterval(() => {
            alphacheck5()
        },localStorage.getItem('intermult5') / localStorage.getItem('gen5count') * 1000)
    } else {
        clearInterval(alphachecker5);
        gen5.addEventListener('click', (e) => {
            clearInterval(intervalId5);
            
            intervalId5 = setInterval(() => {
                count += Math.round(localStorage.getItem('inter5') * genmulted5)
                
                
            }, localStorage.getItem('intermult5') / localStorage.getItem('gen5count') * 1000) })
            alphachecker5 = setInterval(() => {
                alphacheck5()
            },localStorage.getItem('intermult5') / localStorage.getItem('gen5count') * 1000)
}}
// 
function gen6logic() {
    clearInterval(alphachecker6);
    if (localStorage.getItem('gen6count') >= 1 ) {
        clearInterval(intervalId6);
        
        intervalId6 = setInterval(() => {
            count += Math.round(localStorage.getItem('inter6') * genmulted6)
            
            
        }, localStorage.getItem('intermult6') / localStorage.getItem('gen6count') * 1000)
        alphachecker6 = setInterval(() => {
            alphacheck6()
        },localStorage.getItem('intermult6') / localStorage.getItem('gen6count') * 1000)
    } else {
        clearInterval(alphachecker6);
        gen6.addEventListener('click', (e) => {
            clearInterval(intervalId6);
            
            intervalId6 = setInterval(() => {
                count += Math.round(localStorage.getItem('inter6') * genmulted6)
                
                
            }, localStorage.getItem('intermult6') / localStorage.getItem('gen6count') * 1000) })
            alphachecker6 = setInterval(() => {
                alphacheck6()
            },localStorage.getItem('intermult6') / localStorage.getItem('gen6count') * 1000)
}}
// 






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


// fonctions alphachecks
function alphacheck() {
if (alphaclicked) {
    gen1logic()
}}

function alphacheck2() {
if (alphaclicked) {
    gen2logic()
}}

function alphacheck3() {
if (alphaclicked) {
    gen3logic()
}}

function alphacheck4() {
if (alphaclicked) {
    gen4logic()
}}

function alphacheck5() {
if (alphaclicked) {
    gen5logic()
}}

function alphacheck6() {
if (alphaclicked) {
    gen6logic()
}}


// alphacheckers
let alphachecker = setInterval(() => {
    alphacheck()
},localStorage.getItem('intermult1') / localStorage.getItem('gen1count') * 1000)

let alphachecker2 = setInterval(() => {
    alphacheck2()
},localStorage.getItem('intermult2') / localStorage.getItem('gen2count') * 1000)
    
let alphachecker3 = setInterval(() => {
    alphacheck3()
},localStorage.getItem('intermult3') / localStorage.getItem('gen3count') * 1000)

let alphachecker4 = setInterval(() => {
    alphacheck4()
},localStorage.getItem('intermult4') / localStorage.getItem('gen4count') * 1000)

let alphachecker5 = setInterval(() => {
    alphacheck5()
},localStorage.getItem('intermult5') / localStorage.getItem('gen5count') * 1000)

let alphachecker6 = setInterval(() => {
    alphacheck6()
},localStorage.getItem('intermult6') / localStorage.getItem('gen6count') * 1000)

// Systeme qu'il reste une fois débloqué //
function genstayed(){
    setInterval(() => {
if (genshouldstay){
    genshop.style.opacity = '1'
    }

if (upgradeshouldstay){
    shop.style.opacity = '1'
    }

if (gen1shouldstay){
        gen1.style.opacity = '1';
        gen1.style.display = 'block';
}else{
    gen1.style.opacity = '0';
    gen1.style.display = 'none';
}

if (gen2shouldstay){
        gen2.style.opacity = '1';
        gen2.style.display = 'block';
}else{
    gen2.style.opacity = '0';
    gen2.style.display = 'none';
}

if (gen3shouldstay){
        gen3.style.opacity = '1';
        gen3.style.display = 'block';
}else{
    gen3.style.opacity = '0';
    gen3.style.display = 'none';
}

if (gen4shouldstay){
        gen4.style.opacity = '1';
        gen4.style.display = 'block';
    }else{
    gen4.style.opacity = '0';
    gen4.style.display = 'none';
}

if (gen5shouldstay){
        gen5.style.opacity = '1';
        gen5.style.display = 'block';
}else{
    gen5.style.opacity = '0';
    gen5.style.display = 'none';
}

if (gen6shouldstay){
        gen6.style.opacity = '1';
        gen6.style.display = 'block';
}else{
    gen6.style.opacity = '0';
    gen6.style.display = 'none';
}
},1)
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
})