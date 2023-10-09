//                                   *
//                          *                  *
//                      *                          *
//                  *   *   *        *          *   *   *
// 
// generate for loop for row
for(row=1;row<=4;row++){
    // to hold row elements

    str=''
    // create loop for space
    for(space=4;space>row;space--){
        // add space to the content of row
        str=str+' '
    }
    // create loop for col
    for(col=1;col<=row;col++){
        str=str+'* '
    }
    // display content
    console.log(str);
}