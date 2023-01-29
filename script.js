var gridContainer = document.getElementById('grid-container');
const sliderElement = document.getElementById("sliderGrid");
const resetBtn = document.getElementById("resetbtn");
const sliderLabel=document.querySelector('.slider-label');
const clearBtn = document.getElementById("clearbtn");

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

sliderLabel.innerHTML=`Adjust grid size:<br>${sliderElement.value} X ${sliderElement.value}`;
createGrid(sliderElement.value);

sliderElement.addEventListener('input',() =>{
    gridContainer.innerHTML="";
    let dimensions = sliderElement.value;
    sliderLabel.innerHTML=`Adjust grid size:<br>${dimensions} X ${dimensions}`;
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
});

clearBtn.addEventListener('click',() => {
    gridContainer.innerHTML="";
    createGrid(sliderElement.value);
});


resetBtn.addEventListener('click',()=>{
    gridContainer.innerHTML="";
    sliderLabel.innerHTML=`Adjust grid size:<br>${sliderElement.defaultValue} X ${sliderElement.defaultValue}`;
    sliderElement.value=sliderElement.defaultValue;
    createGrid(sliderElement.defaultValue);
})
