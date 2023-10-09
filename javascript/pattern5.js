// 1
// 2 2
// 3 3 3 
// 4  4  4  4

for(row=1;row<=4;row++){
    // to hold rowelements

    str=''
    // create loop for col
    for(col=1;col<=row;col++){
        str=str+row+'\t'

    }
    console.log(str);
}

