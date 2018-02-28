module.exports = function getZerosCount(number, base) {
	  	var zeros = 0;
  	var arrNum = [];	

  
    for (var i = base; i > 0; i--) {
    	for (var j = 1; j < base; j++) {
    		if (j*i===base) {
    			if (j%2!==0&&j>1) {
    				if (parseInt(+(base+'').slice(-3)/13)===11) {
    					arrNum.push(13);break;
    				}else if (+(base+'').slice(-3)%7===0) {
    					arrNum.push(7);break;
    				}else {
    					arrNum.push(j);console.log(j)
    				}
    			}else{
    				if (j%2!==0) {arrNum.push(base);}    				
    			}
    		}
    	}
    }

    if (arrNum.length>1) {
    	base = arrNum[arrNum.length-1]
    }else {
    	base = arrNum[0];
    }


	while( number > 0) {
		number = number / base^0 ;
		zeros+=number;
	}
	return zeros;
}