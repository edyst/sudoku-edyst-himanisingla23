const EASY = [
    [0, 0, 8, 0, 0, 7, 0, 0, 6],
    [0, 1, 0, 3, 2, 0, 8, 0, 0],
    [0, 4, 6, 5, 0, 0, 0, 0, 9],
    [0, 2, 0, 0, 3, 0, 0, 6, 0],
    [0, 0, 0, 2, 6, 9, 0, 0, 0],
    [0, 9, 0, 0, 8, 0, 0, 3, 0],
    [5, 0, 0, 0, 0, 1, 4, 9, 0],
    [0, 0, 7, 0, 4, 3, 0, 5, 0],
    [9, 0, 0, 8, 0, 0, 6, 0, 0],
]
const MEDIUM = [
    [5, 0, 0, 3, 2, 0, 0, 0, 0],
    [0, 0, 0, 1, 6, 0, 8, 0, 0],
    [0, 1, 0, 0, 8, 0, 6, 2, 0],
    [0, 2, 0, 5, 0, 0, 3, 0, 7],
    [0, 0, 5, 0, 0, 0, 0, 8, 0],
    [0, 0, 4, 0, 0, 8, 0, 6, 0],
    [0, 7, 2, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 9, 0, 0],
    [0, 0, 3, 4, 3, 0, 1, 0, 0],
]
const HARD = [
    [0, 7, 0, 0, 5, 9, 3, 0, 1],
    [0, 0, 0, 6, 0, 7, 4, 5, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 9],
    [0, 0, 0, 0, 7, 0, 0, 1, 4],
    [0, 0, 4, 0, 6, 0, 9, 0, 0],
    [5, 3, 0, 0, 1, 0, 0, 0, 0],
    [2, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 4, 3, 5, 0, 2, 0, 0, 0],
    [1, 0, 8, 7, 9, 0, 0, 4, 0],
]


// declarions
const easy_btn = document.getElementById("difi-1");
const medium_btn = document.getElementById("difi-2");
const hard_btn = document.getElementById("difi-3");
const validate_btn = document.getElementById("validate-btn");
const query = document.querySelectorAll('input');
let inputs_arr = [];

// init
var row=[];
for(var i=0;i<81;i++){
    row.push(query[i]);
    if(row.length === 9){
        inputs_arr.push(row);
        row = [];
    }
}



// event listener
easy_btn.addEventListener('click',() =>{createBoard(EASY)});
medium_btn.addEventListener('click',() =>{createBoard(MEDIUM)});
hard_btn.addEventListener('click',() =>{createBoard(HARD)});
validate_btn.addEventListener('click', validate);
window.onload = ()=>{createBoard(EASY)};


// functions....

function createBoard (arr){
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            if(arr[i][j]!== 0){
                inputs_arr[i][j].value=arr[i][j];
                inputs_arr[i][j].disabled = true;
            }
            else{
                inputs_arr[i][j].value = null;
                inputs_arr[i][j].disabled = false;
            }
        }
    }
}

function validate(){
    var value_array = [];
    var  temp_array =[];

    for(var i=0;i<81;i++){
        if(query[i].value === "" ){
            alert("Box not filled!!");
            return ;
        }

        temp_array.push(query[i].value);
        if(temp_array.length === 9){
            value_array.push(temp_array);
            temp_array = [];
        }
    }

    if(validateRow(value_array)){
        validateCol(value_array);
    }
    // else if(validateCol(value_array)){
    //     validateBox(value_array);
    // }
}

function validateRow(arg){
    for(var i=0;i<9;i++){
        var temp = [...arg[i]];
        for(var j=0;j<9;j++){
            temp.shift()
    
            var index=temp.indexOf(arg[i][j])
            if( index !== -1){
                inputs_arr[i][j].classList.add('input_color');
                inputs_arr[i][j+1+index].classList.add('input_color');
                return false; 
            }
        } 
    }
    return true
}

function validateCol(arg){
    for(var i=0;i<9;i++){
        var temp = [];
        for(var x=0;x<9;x++){
            temp.push(arg[x][i])
        }
        for(var j=0;j<9;j++){
            temp.shift()
    
            var index=temp.indexOf(arg[j][i])
            if( index !== -1){
                inputs_arr[j][i].classList.add('input_color');
                inputs_arr[j+1+index][i].classList.add('input_color');
                return false; 
            }
        }
    }
    return true
}















