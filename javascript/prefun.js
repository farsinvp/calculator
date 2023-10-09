function mobileCheck(mobile) {
    return mobile.length==10?`${mobile} is valid`:`${mobile}is invalid`
}
console.log(mobileCheck(`9946361684`));