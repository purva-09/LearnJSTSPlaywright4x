JavaScript Keywords and Identifiers
Keywords-
Keywords are words which cannot be used for any other purposes like naming variable, identifiers etc.
example-
1. var, const and let keywords are used to define variables.
2. function keyword is used to define the functions.

await,break,case,catch,class,const,continue,debugger,default,delete,do,else,enum,export,extends,false,finally,for,function,if,implements,import,in,instanceof,interface,let,new,null,package,private,protected.public,return,super,switch,static,this,throw,try,true,typeof,var,void,while,with,yield

JavaScript Identifiers
An identifier is a name that is given to entities like variables, functions, classes, properties, or loops etc.

Rules for Naming JavaScript Identifiers
1. Identifier names must start with either a letter, an underscore _, or the dollar sign $. For example,
//valid
const a = 'hello';
const _a = 'hello';
const $a = 'hello';

2. Identifier names cannot start with numbers. For example,
//invalid
const 1a = 'hello'; // this gives an error

3. JavaScript is case-sensitive. So y and Y are different identifiers. For example,
const y = "hi";
const Y = 5;
console.log(y); // hi
console.log(Y); // 5

4. Keywords cannot be used as identifier names. For example,
//invalid
const new = 5; // Error! new is a keyword.

5. No Spaces or Special Characters: Hyphens, spaces, and punctuation (other than _ and $) are strictly forbidden.
 let first num= 10;


