const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const results = document.getElementById("result");
 const bodyElement = document.getElementById("body")

const isInvalidInput = () => {
  if (textInput.value === "") {
    alert("Please input a value");
    return true;
  }
  return false;
};

function checkInput() {
  if (!isInvalidInput()) {
    console.log("Input is valid:", textInput.value);
  } else {
    console.log("Input is invalid");
    return; 
  }

  const cleanedString = textInput.value.replace( /[^a-zA-Z0-9]/g, '').toLowerCase();
  const palindromeArray = cleanedString.split('');

  const palindromeCheck = () => {
    const isPalindrome = cleanedString === palindromeArray.reverse().join('');
    if (isPalindrome) {
      results.innerText = textInput.value + " is a Palindrome"; 
      return results;
    } else {
 document.getElementById("result").style.backgroundColor = "#010101";
      results.innerText = textInput.value + " is not a Palindrome";
      return results;
    }
  };

  console.log(palindromeArray);


  palindromeCheck();
}

checkButton.addEventListener("click", checkInput);    

