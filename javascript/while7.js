// amstrong Number
num=370
input=num
sum=0
while (num>0) {
    temp=num%10
    sum=sum+temp**3
    num=Math.floor(num/10)
}
console.log(input==sum?`${input} is amstrong`:`${input} is not amstrong`);
