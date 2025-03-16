let all = document.getElementById('all');
let portable = document.getElementById('portable');
let home = document.getElementById('home');
let gridSpeakers = document.getElementById('gridSpeakers');
let grid2Speakers = document.getElementById('grid2Speakers');
let txtBottom = document.getElementById('txtBottom');

portable.onclick = function() {
    portable.className = 'catCheck';
    all.className = 'cat';
    home.className = 'cat';

    gridSpeakers.innerHTML = `
    <div class="gridHBlock1">
            <div class="block1ImgDiv"><img class="block1Img" src="./imgspeakers/middleton-black-plp.jpg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/middleton/indexMIddleton.html">MIDDLETON</a></div>
        </div>
        <div class="gridHBlock2">
            <div class="block2ImgDiv"><img class="block2Img" src="./imgspeakers/emberton-black-steel-front-plp.jpg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/emberton_ii/indexEmbertonII.html">EMBERTON II</a></div>
        </div>
        <div class="gridHBlock3">
            <div class="block3ImgDiv"><img class="block3Img" src="./imgspeakers/stanmore_iii-full-width-05.jpeg"></div>
            <div class="blockTxtBig">TAKE THE BIG STAGE WITH YOU.</div>
            <div class="blockTxtSmall">In a world that moves at the speed of life, your music should keep up. Our portable Bluetooth speakers redefine the way you experience sound. Compact, powerful, and designed for those who refuse to compromise on sound quality, these speakers let you take your music wherever the adventure leads.</div>
        </div>`;

    grid2Speakers.innerHTML = `
    <div class="grid2Block1Spek">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/tufton-pitch-hero-desktop-1.jpeg"></div>
        </div>
        <div class="grid2Block2">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/willen-ii-black-and-brass-front-desktop.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/willen_ii/indexWillenII.html">WILLEN II</a></div>
        </div>
        <div class="grid2Block11">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/stockwell-ii-black-and-brass-plp.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/stockwell/indexStockwell.html">STOCKWELL</a></div>
        </div>
        <div class="grid2Block5">

        </div>
        <div class="grid2Block5">

        </div>
        <div class="grid2Block5">

        </div>
        <div class="grid2Block3">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/kilburn-ii-black-plp.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/kilburn_ii/indexKilburnII.html">KILBURN II</a></div>
        </div>
        <div class="grid2Block4">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/tufton-black-and-brass-plp.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/tufton/indexTufton.html">TUFTON</a></div>
        </div>`;
        grid2Speakers.style.gridTemplateRows = `1fr 1fr`;
        txtBottom.textContent = `Elevate every adventure, set the soundtrack to your story, and let our portable speakers be your go-to for epic sound on the move as the ultimate companions for your journey. Because when it comes to your music, there's no compromise—and with these speakers, there's no need to settle.`;
}

all.onclick = function() {
    portable.className = 'cat';
    all.className = 'catCheck';
    home.className = 'cat';

    gridSpeakers.innerHTML = `
    <div class="gridHBlock1">
            <div class="block1ImgDiv"><img class="block1Img" src="./imgspeakers/middleton-black-plp.jpg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/middleton/indexMIddleton.html">MIDDLETON</a></div>
        </div>
        <div class="gridHBlock2">
            <div class="block2ImgDiv"><img class="block2Img" src="./imgspeakers/acton-iii-black-plp.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/action_III/indexActionIII.html">ACTION III</a></div>
        </div>
        <div class="gridHBlock3">
            <div class="block3ImgDiv"><img class="block3Img" src="./imgspeakers/lny-emberton-iii_plp-lifestyle-tile_launch_mobile.jpeg"></div>
            <div class="blockTxtBig">Enjoy Marshall sound at home or on the road</div>
            <div class="blockTxtSmall">Experience Marshall signature sound in the comfort of your home or outdoors on the road. Say hello to seamless connection and hours of uninterrupted wireless listening. Iconic in sound and design, the perfect speaker is waiting for you.</div>
        </div>`;

    grid2Speakers.innerHTML = `
    <div class="grid2Block1S" id="grid2Block1S">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/emberton-iii-two-asset-hybrid-03.jpeg"></div>
        </div>
        <div class="grid2Block2">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/willen-ii-black-and-brass-front-desktop.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/willen_ii/indexWillenII.html"> WILLEN II</a></div>
        </div>
        <div class="grid2Block11">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/stanmore-iii-black-plp.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/stanmore_iii/indexStanmoreIII.html">STANMORE</a></div>
        </div>
        <div class="grid2Block5">

        </div>
        <div class="grid2Block5">

        </div>
        <div class="grid2Block3">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/emberton-black-steel-front-plp.jpg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/emberton_ii/indexEmbertonII.html">EMBERTON II</a></div>
        </div>
        <div class="grid2Block4">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/woburn-iii-black-plp.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/woburn/indexWoburn.html">WOBURN</a></div>
        </div>
        <div class="grid2Block5">

        </div>
        <div class="grid2Block6">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/stanmore_iii-pitch-hero-01.jpeg"></div>
        </div>
        <div class="grid2Block7">
           
        </div>
        <div class="grid2Block8">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/stockwell-ii-black-and-brass-plp.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/stockwell/indexStockwell.html">STOCKWELL</a></div>
        </div>
        <div class="grid2Block9">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/kilburn-ii-black-plp.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/kilburn_ii/indexKilburnII.html">KILBURN II</a></div>
        </div>
        <div class="grid2Block10">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/tufton-black-and-brass-plp.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/tufton/indexTufton.html">TUFTON</a></div>
        </div>`;
        txtBottom.textContent = `Indulge in the immersive world of Marshall signature sound, whether you're unwinding at home or embarking on an adventure outdoors. Our speakers redefine excellence, seamlessly blending superior audio quality with unmatched portability.`;
}

home.onclick = function() {
    portable.className = 'cat';
    all.className = 'cat';
    home.className = 'catCheck';

    gridSpeakers.innerHTML = `
    <div class="gridHBlock1">
            <div class="block1ImgDiv"><img class="block1Img" src="./imgspeakers/acton-iii-black-plp.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/action_III/indexActionIII.html">ACTION III</a></div>
        </div>
        <div class="gridHBlock2">
            <div class="block2ImgDiv"><img class="block2Img" src="./imgspeakers/stanmore-iii-black-plp.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/stanmore_iii/indexStanmoreIII.html">STANMORE III</a></div>
        </div>
        <div class="gridHBlock3">
            <div class="block3ImgDiv"><img class="block3Img" src="./imgspeakers/05-acton-iii-black-lifestyle-desktop.jpeg"></div>
            <div class="blockTxtBig">BRING THE BIG STAGE HOME</div>
            <div class="blockTxtSmall">Immerse yourself in music with a Marshall Bluetooth home speaker that is guaranteed to make any room come alive. Whether you want to bring the iconic look and sound of Marshall to your home or experience big-stage sound in a small space, we’ve built the perfect speaker for you.</div>
        </div>`;

        grid2Speakers.innerHTML = `
        <div class="grid2Block1Spek">
                <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/08-acton-iii-white-lifestyle-desktop.jpeg"></div>
            </div>
            <div class="grid2Block2">
                <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgspeakers/woburn-iii-black-plp.jpeg"></div>
                <div class="blockTxtBig"><a href="../../cardOfProducts/speakers/woburn/indexWoburn.html">WOBURN III</a></div>
            </div>
           `;
            grid2Speakers.style.gridTemplateRows = `1fr`;
            txtBottom.textContent = `Step up your home audio game with our range of Bluetooth home speakers. Crafted to deliver the iconic look and signature sound that Marshall is renowned for, our speakers are the ultimate addition to any music lover's space. `;
}