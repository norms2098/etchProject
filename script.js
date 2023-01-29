var gridContainer = document.getElementById('grid-container');
const sliderElement = document.getElementById("sliderGrid");
const resetBtn = document.getElementById("resetbtn");
const sliderLabel=document.querySelector('.slider-label');
const clearBtn = document.getElementById("clearbtn");
const rainbowBtn=document.getElementById("rainbowbtn");

function createGrid(tot){
    for(let i=0;i<tot*tot;i++){
        var cell=document.createElement('div');
        cell.className='cells';
        gridContainer.appendChild(cell);
    }
    gridContainer.style.setProperty(`grid-template-columns`,`repeat(${tot},1fr)`) ;
    gridContainer.style.setProperty(`grid-template-rows`,`repeat(${tot},1fr)`) ;
    const cellsInGrid = document.querySelectorAll(".cells");

    cellsInGrid.forEach(cell =>{
        cell.addEventListener("mouseover",()=>{
            cell.classList.add("hover-cell");
        })
    })
}

function clearGrid(){
    gridContainer.innerHTML="";
    createGrid(sliderElement.value);
}

function resetGrid(){
    gridContainer.innerHTML="";
    sliderLabel.innerHTML=`Adjust grid size:<br>${sliderElement.defaultValue} X ${sliderElement.defaultValue}`;
    sliderElement.value=sliderElement.defaultValue;
    createGrid(sliderElement.defaultValue);
}
function rainbowModeOn(){
    const rainbowColors=["red","orange","yellow","green","blue","purple"];
    const cellsInGrid = document.querySelectorAll(".cells");
    cellsInGrid.forEach(cell => {
        cell.addEventListener("mouseover",()=>{
            const colorChoice=Math.floor(Math.random()*rainbowColors.length);
            cell.style.setProperty('background-color',rainbowColors[colorChoice])
        })
    })
}

sliderLabel.innerHTML=`Adjust grid size:<br>${sliderElement.value} X ${sliderElement.value}`;
createGrid(sliderElement.value);

sliderElement.addEventListener('input',() =>{
    gridContainer.innerHTML="";
    sliderLabel.innerHTML=`Adjust grid size:<br>${sliderElement.value} X ${sliderElement.value}`;
    createGrid(sliderElement.value);
});

clearBtn.addEventListener('click',() => {clearGrid()});
resetBtn.addEventListener('click',()=>{resetGrid()})
rainbowBtn.addEventListener('click',()=>{rainbowModeOn()});
