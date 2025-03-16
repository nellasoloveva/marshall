let earbuds = document.getElementById('earbuds');
let all = document.getElementById('all');
let on = document.getElementById('on');
let over = document.getElementById('over');
let gridHeadphones = document.getElementById('gridHeadphones');
let grid2Headphones = document.getElementById('grid2Headphones');
let txtBottom = document.getElementById('txtBottom');


earbuds.onclick = function() {
    earbuds.className = 'catCheck';
    all.className = 'cat';
    on.className = 'cat';
    over.className = 'cat';

    gridHeadphones.innerHTML = `
        <div class="gridHBlock2">
            <div class="block2ImgDiv"><img class="block2Img" src="./imgHead/minor-iv-black-front-desktop-1.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/headphones/major_v/indexMajorV.html">MINOR IV</a></div>
        </div>
        <div class="gridHBlock1">
            <div class="block1ImgDiv"><img class="block1Img" src="./imgHead/minor-iii-black-side-desktop-2.jpg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/headphones/minor_iii/indexMinorIII.html"> MINOR III</a></div>
        </div>
        <div class="gridHBlock3">
            <div class="block3ImgDiv"><img class="block3Img" src="./imgHead/05-Motif-II-ANC-lifestyle-01-desktop.jpg"></div>
            <div class="morz">
            <div class="blockTxtBig">NO CLUTTER, JUST MUSIC.</div>
            <div class="blockTxtSmall">Marshall earbuds fit tightly into your ear and never let you miss a beat. Take your pick from wired and wireless Bluetooth models, or noise cancelling for when you want to really get lost in your music.</div>
            </div>
            </div>`;

    grid2Headphones.innerHTML = `
    <div class="grid2Block1">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgHead/motif-ii-anc-black-desktop-3.jpg"></div>
        </div>
        <div class="grid2Block5">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgHead/motif-ii-anc-plp.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/headphones/motif_ii/indexMotifII.html">MOTIF II</a></div>
        </div>
        <div class="grid2Block6">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgHead/mode-eq-plp.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/headphones/mode_eq/indexModeEQ.html">MODE EQ</a></div>
        </div>
        <div class="grid2Block2">
           
        </div>
        <div class="grid2Block3">
            
        </div>
        <div class="grid2Block4">
           
        </div>
        <div class="grid2Block8">
        
        </div>
        <div class="grid2Block7">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgHead/mode-front-desktop-1.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/headphones/mode/indexMode.html">MODE</a></div>
        </div>
        `;
    txtBottom.textContent = `Welcome to a world where music meets convenience and style. Marshall earbuds are not just about delivering exceptional sound; they're designed to seamlessly integrate into your life, offering a hassle-free listening experience that amplifies every moment.`;
}

all.onclick  = function() {
    earbuds.className = 'cat';
    all.className = 'catCheck';
    on.className = 'cat';
    over.className = 'cat';

    gridHeadphones.innerHTML = `
    <div class="gridHBlock1">
            <div class="block1ImgDiv"><img class="block1Img" src="./imgHead/major-v-black-front-desktop-1.jpeg"></div>
            <div class="blockTxtBig">MAJOR V</div>
        </div>
        <div class="gridHBlock2">
            <div class="block2ImgDiv"><img class="block2Img" src="./imgHead/minor-iv-black-front-desktop-1.jpeg"></div>
            <div class="blockTxtBig">MINOR IV</div>
        </div>
        <div class="gridHBlock3">
            <div class="block3ImgDiv"><img class="block3Img" src="./imgHead/monitor-iii-anc-lifestyle-desktop-02.jpeg"></div>
            <div class="morz">
            <div class="blockTxtBig">Explore the diverse world of Marshall headphones to find your ideal match.</div>
            <div class="blockTxtSmall">Whether you lean towards wireless convenience, traditional wired setups, or immersive noise cancellation, discover the perfect pair that suits your preferences. Your music, your way.</div>
            </div>
        </div>`;

    grid2Headphones.innerHTML = `
            <div class="grid2Block1">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgHead/minor-iv-black-lifestyle-desktop-2.jpeg"></div>
        </div>
        <div class="grid2Block2">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgHead/monitor-ii-anc-plp.jpeg"></div>
            <div class="blockTxtBig">MONITOR II</div>
        </div>
        <div class="grid2Block3">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgHead/major-iv-black-plp.jpeg"></div>
            <div class="blockTxtBig">MAJOR IV</div>
        </div>
        <div class="grid2Block4">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgHead/minor-iii-black-side-desktop-2.jpg"></div>
            <div class="blockTxtBig">MINOR III</div>
        </div>
        <div class="grid2Block5">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgHead/motif-ii-anc-plp.jpeg"></div>
            <div class="blockTxtBig">MOTIF II</div>
        </div>
        <div class="grid2Block6">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgHead/mode-eq-plp.jpeg"></div>
            <div class="blockTxtBig">MODE EQ</div>
        </div>
        <div class="grid2Block7">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgHead/mode-front-desktop-1.jpeg"></div>
            <div class="blockTxtBig">MODE</div>
        </div>
        <div class="grid2Block8">
        </div>`;

    txtBottom.textContent = `Sound of the highest quality. It’s time for your music to meet its master. Marshall headphones feature custom-tuned dynamic drivers, delivering roaring bass, smooth mids, and brilliant treble for a rich, unrivalled sound that you’ll never want to turn off. Experience a superior signature sound only Marshall can deliver.`;
}

on.onclick = function() {
    earbuds.className = 'cat';
    all.className = 'cat';
    on.className = 'catCheck';
    over.className = 'cat';

    gridHeadphones.innerHTML = `
    <div class="gridHBlock1">
            <div class="block1ImgDiv"><img class="block1Img" src="./imgHead/major-v-black-front-desktop-1.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/headphones/major_v/indexMajorV.html">MAJOR V</a></div>
        </div>
        <div class="gridHBlock2">
            <div class="block2ImgDiv"><img class="block2Img" src="./imgHead/major-iv-black-plp.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/headphones/major_iv/indexMajoriv.html">MAJOR IV</a></div>
        </div>
        <div class="gridHBlock3">
            <div class="block3ImgDiv"><img class="block3Img" src="./imgHead/major-v-pitch-hero-desktop-01.jpeg"></div>
            <div class="morz">
            <div class="blockTxtBig">MADE TO FIT YOUR EARS FOR HOURS ON END, SO YOU CAN LISTEN WITH NO DISTRACTIONS.</div>
            <div class="blockTxtSmall">On-ear headphones are made for all-day listening. Ready for whatever the day throws at you, they combine iconic heritage design with contemporary technology so you can listen endlessly.</div>
            </div>
            </div>`;    

        grid2Headphones.innerHTML = `
        <div class="grid2Block1">
            
        </div>
        <div class="grid2Block2">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgHead/major-v-two-asset-hybrid-03.png"></div>
        </div>
        <div class="grid2Block3">
           
        </div>
        <div class="grid2Block4">
            
        </div>
        `;

    grid2Headphones.style.gridTemplateRows = '1fr';
    txtBottom.textContent = `On-ear headphones deliver the signature Marshall sound that you’ve come to expect. Over 60 years of knowledge is packed into each set for an explosive experience. Custom-tuned dynamic drivers deliver roaring bass, smooth mids and brilliant treble for a rich, unrivalled signature sound that you’ll never want to turn off.`;
}

over.onclick = function() {
    earbuds.className = 'cat';
    all.className = 'cat';
    on.className = 'cat';
    over.className = 'catCheck';

    gridHeadphones.innerHTML = `
    <div class="gridHBlock1">
            <div class="block1ImgDiv"><img class="block1Img" src="./imgHead/monitor-ii-anc-plp.jpeg"></div>
            <div class="blockTxtBig"><a href="../../cardOfProducts/headphones/monitor_ii/indexMonitorii.html">MONITOR II</a></div>
        </div>
        <div class="gridHBlock2">
            
        </div>
        <div class="gridHBlock3">
            <div class="block3ImgDiv"><img class="block3Img" src="./imgHead/monitor-iii-anc_single-asset-left_desktop_09.jpeg"></div>
            <div class="morz">
            <div class="blockTxtBig">IMMERSE YOURSELF IN THE MUSIC YOU LOVE.</div>
            <div class="blockTxtSmall">Battery life and comfort should never restrict listening to the music you love. Over-ear headphones are substantial and built to keep going for as long as your session needs to last. </div>
            </div>
            </div>`;    

        grid2Headphones.innerHTML = `
        <div class="grid2Block1">
            
        </div>
        <div class="grid2Block2">
            <div class="grid2Block1ImgDiv"><img class="grid2Block1Img" src="./imgHead/monitor-iii-anc_two-asset_hybrid_07.jpeg"></div>
        </div>
        <div class="grid2Block3">
           
        </div>
        <div class="grid2Block4">
            
        </div>
        `;

    grid2Headphones.style.gridTemplateRows = '1fr';
    txtBottom.textContent = `Over-ear headphones deliver the signature Marshall sound that you’ve come to expect. Over 60 years of knowledge is packed into each set for an explosive experience. Custom-tuned dynamic drivers deliver roaring bass, smooth mids and brilliant treble for a rich, unrivalled sound that you’ll never want to turn off.`;
}