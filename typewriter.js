const sentence = "hello there from lighthouse labs"; 

const wordSpitter = (string) => {
  let index = 0;
  
  const printNextChar = () => {
    if (index < string.length) {
      process.stdout.write(string[index]);
      index++;
      setTimeout(printNextChar, 500);
    }
  };
  
  printNextChar();
};


wordSpitter(sentence)