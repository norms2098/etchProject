var getContainer = document.getElementById('grid-container');


function createGrid(rowsNum,colsNum){
    let totalCells=rowsNum*colsNum;
    for(let i=0;i<totalCells;i++){
        var createCell=document.createElement('div')
        createCell.className='cell';
        getContainer.appendChild(createCell)
    }
    getContainer.style.setProperty(`grid-template-columns`,`repeat(${colsNum},1fr)`) ;
}

createGrid(16,16)


