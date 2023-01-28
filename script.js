/*function createGrid(tot){
    //let totalCells=rowsNum*colsNum;
    for(let i=0;i<tot*tot;i++){
        var createCell=document.createElement('div');
        createCell.className='cell';
        getContainer.appendChild(createCell);
    }
    getContainer.style.setProperty(`grid-template-columns`,`repeat(${tot},1fr)`) ;
    getContainer.style.setProperty(`grid-template-rows`,`repeat(${tot},1fr)`) ;
}*/


var gridContainer = document.getElementById('grid-container');
const sliderElement = document.getElementById("sliderGrid");
const resetBtn = document.getElementById("resetbtn");
const sliderLabel=document.querySelector('.slider-label');


sliderElement.addEventListener('change',() =>{
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
})
