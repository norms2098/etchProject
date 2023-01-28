var gridContainer = document.getElementById('grid-container');
const sliderElement = document.getElementById("sliderGrid");
const resetBtn = document.getElementById("resetbtn");
const sliderLabel=document.querySelector('.slider-label');


function createGrid(tot){
    for(let i=0;i<tot*tot;i++){
        var cell=document.createElement('div');
        cell.className='cells';
        gridContainer.appendChild(cell);
    }
    gridContainer.style.setProperty(`grid-template-columns`,`repeat(${tot},1fr)`) ;
    gridContainer.style.setProperty(`grid-template-rows`,`repeat(${tot},1fr)`) ;
}

sliderLabel.innerHTML=`${sliderElement.value} X ${sliderElement.value}`;
createGrid(sliderElement.value);

sliderElement.addEventListener('input',() =>{
    gridContainer.innerHTML="";
    let dimensions = sliderElement.value;
    sliderLabel.innerHTML=`${dimensions} X ${dimensions}`;
    for (let i = 0; i < (dimensions*dimensions); i++) {
        let cell = document.createElement('div');
        cell.className='cells';
        gridContainer.appendChild(cell);
    }
    gridContainer.style.setProperty(`grid-template-columns`,`repeat(${dimensions},1fr)`) ;
    gridContainer.style.setProperty(`grid-template-rows`,`repeat(${dimensions},1fr)`) ;

    const cellsInGrid = document.querySelectorAll(".cells");

    cellsInGrid.forEach(cell =>{
        cell.addEventListener("mouseover",()=>{
            cell.classList.add("hover-cell");
        })
    })
})




resetBtn.addEventListener('click',()=>{
    gridContainer.innerHTML="";
    sliderLabel.innerHTML=`${sliderElement.defaultValue} X ${sliderElement.defaultValue}`;
    createGrid(sliderElement.defaultValue);
})
