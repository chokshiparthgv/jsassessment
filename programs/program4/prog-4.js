const str1 = '(())';
const str2 = '(()';
const validateBrackets = (str = '') => {
   const strArr = str.split('');
   let counter = 0;
   for (let i = 0, len = strArr.length; i < len; i++) {
      if (strArr[i] === "(") {
         counter++;
      }else if (strArr[i] === ")") {
         counter--;
      };
      if (counter < 0) {
         return false;
      };
   };
   if (counter === 0) {
      return true;
   };
   return false;
};
document.write(validateBrackets(str1));
document.write(validateBrackets(str2));