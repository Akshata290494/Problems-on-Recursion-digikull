

function findClosing(c)
{
	if (c == '(')
		return ')';
	if (c == '{')
		return '}';
	if (c == '[')
		return ']';
	return -1;
}
function check(expr, n)
{
	// Base cases
	if (n == 0)
		return true;
	if (n == 1)
		return false;
	if (expr[0] == ')' || expr[0] == '}' || expr[0] == ']')
		return false;

	var closing = findClosing(expr[0]);
	var i, count = 0;
	for (i = 1; i < n; i++) {
		if (expr[i] == expr[0])
			count++;
		if (expr[i] == closing) {
			if (count == 0)
				break;
			count--;
		}
	}

	
	if (i == n)
		return false;

	if (i == 1)
		return check(expr + 2, n - 2);


	return check(expr + 1, i - 1) && check(expr + i + 1, n - i - 1);
}


var expr = "[(])";
var n = expr.length;
if (check(expr, n))
	document.write( "Balanced");
else
	document.write( "Not Balanced");


