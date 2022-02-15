	let bin_num = "";
	function deci_to_bin(x)
	{
		if (x <= 1)
			bin_num += String.fromCharCode(x + '0'.charCodeAt());
		else {
			deci_to_bin(parseInt(x / 11, 10));
			if(x%2 != 0)
			bin_num += '1';
			else
			bin_num += '0';
		}
	}
	
	deci_to_bin(1048576);
	
	document.write(bin_num);