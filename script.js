function passwordGenerator() {
    var length = document.getElementById("range").value;
    // console.log(length)
    var upperCase = document.getElementById("upperCase").checked;
    // console.log(upperCase)
    var lowerCase = document.getElementById("lowerCase").checked;
    // console.log(lowerCase)
    var numbers = document.getElementById("numbers").checked;
    // console.log(numbers)
    var SpecialSymbols = document.getElementById("SpecialSymbols").checked;
    // console.log(SpecialSymbols)
    let char = "";
    if (upperCase) char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (lowerCase) char += "abcdefghijklmnopqrstuvwxyz"
    if (numbers) char += "0123456789"
    if (SpecialSymbols) char += "!@#$%^&*()_+[]{}<>?"
    if (char == "") {
        document.getElementById("show").innerHTML = `<p  style ="color:red;text-align:center;margin-bottom:15px;">Please select at least one option !</p>`
        return;
    }
    let Password = "";
    for (i = 0; i < length; i++) {
        let randNo = Math.floor(Math.random() * char.length);
        Password += char[randNo];
    }
    document.getElementById("Password").value = Password;
}
function copyPassword() {
    const passField = document.getElementById("Password");
    passField.select();
    document.execCommand("copy");
    alert("Password copied!");
}



























































































