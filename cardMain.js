let dopInfoAudio = document.getElementById('dopInfoAudio');
let dopInfoUnit = document.getElementById('dopInfoUnit');
let dopInfoBattery = document.getElementById('dopInfoBattery');
let dopInfoControl = document.getElementById('dopInfoControl');
let dopInfoComp = document.getElementById('dopInfoComp');
let dopInfoBox = document.getElementById('dopInfoBox');
let audioStr = document.getElementById('audioStr');
let batteryStr = document.getElementById('batteryStr');
let controlStr = document.getElementById('controlStr');
let compStr = document.getElementById('compStr');
let unitStr = document.getElementById('unitStr');
let boxStr = document.getElementById('boxStr');
let isPlus = true;
let strDiv = document.getElementById('strDiv');
let strDivLA = document.getElementById('strDivLA');
let botLeft = document.getElementById('botLeft');
let botRight = document.getElementById('botRight');
let isSpisok = true;
let isSpisokLA = true;
let lStr1 = document.getElementById('lStr1').innerText;
let lStr2 = document.getElementById('lStr2').innerText;
let lStr3 = document.getElementById('lStr3').innerText;
let lStr4 = document.getElementById('lStr4').innerText;
let lStr5 = document.getElementById('lStr5').innerText;
let lStr6 = document.getElementById('lStr6').innerText;


const texts = [];
const elements = document.querySelectorAll('#dopInfoAudio > div');

for (let i = 0; i < elements.length; i += 2) {
    const label = elements[i].textContent;
    const value = elements[i + 1] ? elements[i + 1].textContent : '';
    texts.push({ label: label, value: value });
}

const textsBattery = [];
const elementsBattery = document.querySelectorAll('#dopInfoBattery > div');

for (let i = 0; i < elementsBattery.length; i += 2) {
    const label = elementsBattery[i].textContent;
    const value = elementsBattery[i + 1] ? elementsBattery[i + 1].textContent : '';
    textsBattery.push({ label: label, value: value });
}

const textsControl = [];
const elementsControl = document.querySelectorAll('#dopInfoControl > div');

for (let i = 0; i < elementsControl.length; i += 2) {
    const label = elementsControl[i].textContent;
    const value = elementsControl[i + 1] ? elementsControl[i + 1].textContent : '';
    textsControl.push({ label: label, value: value });
}

const textsComp = [];
const elementsComp = document.querySelectorAll('#dopInfoComp > div');

for (let i = 0; i < elementsComp.length; i += 2) {
    const label = elementsComp[i].textContent;
    const value = elementsComp[i + 1] ? elementsComp[i + 1].textContent : '';
    textsComp.push({ label: label, value: value });
}

const textsUnit = [];
const elementsUnit = document.querySelectorAll('#dopInfoUnit > div');

for (let i = 0; i < elementsUnit.length; i += 2) {
    const label = elementsUnit[i].textContent;
    const value = elementsUnit[i + 1] ? elementsUnit[i + 1].textContent : '';
    textsUnit.push({ label: label, value: value });
}

const textsBox = [];
const elementsBox = document.querySelectorAll('#dopInfoBox > div');

for (let i = 0; i < elementsBox.length; i += 2) {
    const label = elementsBox[i].textContent;
    const value = elementsBox[i + 1] ? elementsBox[i + 1].textContent : '';
    textsBox.push({ label: label, value: value });
}




function aye(mass, nameStr, nameStrDiv) {
    if (isPlus == true) {
    isPlus = false;
    console.log(isPlus);
    const infoContent = mass.map(item => 
        `<div class="p">
        <div class="infA">${item.label}</div>
        <div class="infB">${item.value}</div>
        </div>`
    ).join('');
    
    nameStrDiv.style.display = `block`;
    nameStrDiv.innerHTML = `
    <div class="sstr">
    <div class="lStr">${nameStr}</div>
    <div class="audioPlDiv" id="audioPlDiv"><img class="Pl" src="./minus_ynu9uh0vhkm1.svg"></div>
    </div>
    <div class="infoDiv" id="infoDiv">
    ${infoContent}
    </div>
    `
    const infoDiv = document.getElementById('infoDiv');
        
    const contentHeight = infoDiv.scrollHeight + "px"; 
    infoDiv.style.height = contentHeight; 

    setTimeout(() => {
        infoDiv.classList.add('show');
        infoDiv.style.opacity = "1"; 
    }, 10);
    }
    else if(isPlus == false) {
        console.log(isPlus);
        infoDiv.classList.remove('show');
        
        const currentHeight = infoDiv.scrollHeight + "px";
        infoDiv.style.height = currentHeight;
        
        setTimeout(() => {
            infoDiv.style.height = "0"; 
            infoDiv.style.opacity = "0"; 
        }, 10);

        setTimeout(() => {
            nameStrDiv.style.display = `flex`;
            nameStrDiv.innerHTML = 
                `<div class="lStr">${nameStr}</div>
                <div class="audioPlDiv" id="audioPlDiv"><img class="Pl" src="./plus_dvllyy5bb0hs.svg"></div>`;
            isPlus = true;
        }, 500); 
        
    }
}

audioStr.onclick = function() {
    aye(texts, lStr1, audioStr);
}

batteryStr.onclick = function() {
    aye(textsBattery, lStr2, batteryStr);
}

controlStr.onclick = function() {
    aye(textsControl, lStr3, controlStr);
}

compStr.onclick = function() {
    aye(textsComp, lStr4, compStr);
}

unitStr.onclick = function() {
    aye(textsUnit, lStr5, unitStr);
}

boxStr.onclick = function() {
    aye(textsBox, lStr6, boxStr);
}




strDiv.onclick = function() {
    if( isSpisok == true) {
        botLeft.innerHTML = `
        <div class="qw">New York City</div>
        <div class="qw">Chicago</div>
        <div class="qw">Houston</div>
        <div class="qw">Miami</div>
        <div class="qw">San Francisco</div>`
        botLeft.className = `spisok`;
        strDiv.style.transform = `rotate(3.142rad)`;
        isSpisok = false;
    } else if (isSpisok == false) {
        botLeft.innerHTML = `
        <div class="qwe">BEST BUY</div>
        <div class="qwe">JGL SPEAKERS IN MORE</div>
        <div class="qwe">TARGET</div>`
        botLeft.className = `botLeft`;
        strDiv.style.transform = `rotate(0)`;
        isSpisok = true;
    }
}

strDivLA.onclick = function() {
    if( isSpisokLA == true) {
        botRight.innerHTML = `
        <div class="qw">Westwood Blvd, Los Angeles, CA 90024</div>
        <div class="qw">Sunset Blvd, Los Angeles, CA 90028</div>
        <div class="qw">Central Ave, Los Angeles, CA 90059</div>
        <div class="qw">Sepulveda Blvd, Culver City, CA 90230</div>
        <div class="qw">Figueroa St, Los Angeles, CA 90015</div>`
        botRight.className = `spisok`;
        strDivLA.style.transform = `rotate(3.142rad)`;
        isSpisokLA = false;
    } else if (isSpisokLA == false) {
        botRight.innerHTML = `
        <div class="qwe">BAND</div>
            <div class="qwe">SAN ASH Musik STORES</div>`
        botRight.className = `botRight`;
        strDivLA.style.transform = `rotate(0)`;
        isSpisokLA = true;
    }
}