function mailCkeck(mail) {
    return mail.endsWith(`@gmail.com`)?`${mail} is valid mail`:`${mail} is not a valid mail`
}
console.log(mailCkeck(`farsinvp55@gmail.com`));