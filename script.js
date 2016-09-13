var a,b,c;
a=5;
b='лупрекаль';
c='3,5';
console.log(a);
console.log(b);
console.log(c);

if (null == undefined)
{
	console.log('true');
}
else
{
	console.log('false');
}

var s;
s="текст47";
s=Number(s);
console.log(s);
s=Boolean(s);
console.log(s);

var obj={a:3};
console.log(typeof obj);

var arr=[1,2,3];
console.log(typeof arr);

var object = new Date();
console.log(object instanceof Date);
var objectone = {};
console.log(objectone instanceof Date);