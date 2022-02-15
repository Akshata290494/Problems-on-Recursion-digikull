
function gcd(a, b)
{

	if (a == 0)
	return b;
	if (b == 0)
	return a;


	if (a == b)
		return a;

	if (a > b)
		return gcd(a-b, b);
	return gcd(a, b-a);
}

	let a = 6, b = 9;
	document.write("GCD of "+ a + " and " + b + " is " + gcd(a, b));