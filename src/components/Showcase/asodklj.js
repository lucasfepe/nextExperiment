
    const isPalindrome = (str) => {
  if (typeof str !== 'string' || !str) {
    return "Input must be a string"; // Return false if input is not a string
  } 
    return recursion(str)
    }
    
    const recursion = (str) => {
        if(str.length > 1){
            if(str[0] !== str[str.length - 1]){
                return false;
            }
            if(str.length <= 3){
                return true;
            }
            return recursion(str.slice(1,str.length - 1));
        }
    }
    // console.log("aa".slice(1,1)); // true
    console.log(isPalindrome("hello")); // fals
    console.log(isPalindrome("aa")); // fals
    console.log(isPalindrome("racecar")); // fals