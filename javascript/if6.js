num1=50
num2=5
num3=1
if (num1>num2 && num1>num3){
    console.log(`largest is num1`);
    if (num2>num3){
    console.log(`2nd largest is num2`);
    console.log(`accending`, num3,num2,num1);
    }
    else{
        console.log(`2nd largest num3`);
        console.log(`accending`,num2,num3,num1);

    }
}
else if (num2>num3 && num2>num1){
    console.log(`largest is num2`);
    if (num2>num3){
    console.log(`2nd largest is num1`);
    console.log(`accending`, num2,num3,num1);
    }
    else{
        console.log(`2nd largest num3`);
        console.log(`accending`,num1,num3,num3);

    }
}
if (num3>num1 && num3>num2){
    console.log(`largest is num3`);
    if (num2>num3){
    console.log(`2nd largest is num2`);
    console.log(`accending`, num1,num2,num1);
    }
    else{
        console.log(`2nd largest num1`);
        console.log(`accending`,num2,num1,num3);

    }
}


