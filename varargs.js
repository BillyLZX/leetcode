function sum(){
	var result=0;
	for(var i=0;i<arguments.length;i++){
		result+=arguments[i];
	}
	return result;
}

console.log(sum(12,25));
console.log(sum(12,25,"you"));