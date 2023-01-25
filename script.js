var getContainer = document.getElementById('grid-container');


function createGrid(elmt){
    var getContainer = document.getElementById('grid-container');
    for(let i=0;i<16;i++){
        var rowDiv=document.createElement('div');
        rowDiv.className='divRow';
        for(let j=0;j<16;j++){
            var columnDiv = document.createElement('div');
            columnDiv.className = 'divCol';
            rowDiv.appendChild(columnDiv);
        }
        getContainer.appendChild(rowDiv);
    }
    elmt.appendChild(getContainer);      
}

createGrid(document.body)


