// Lab Test 1 - Question 1
// Anthony Giugni - 101259556
// 05-OCT-2021

function lowerCaseWords(array)
{
	let result = array.filter(element => typeof(element) == 'string');
	let prmse = new Promise(function(resolve, reject)
	{
		if(result.length > 0)
		{
			result = result.map(str => str.toLowerCase());
			resolve(result);
		}
		else
		{
			reject("No strings in array!");
		}
	});
	return prmse;
}

function successCallback(result)
{
	console.log("success: " + result);
}

function failureCallback(error)
{
	console.log("error: " + error);
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
	.then(successCallback)
	.catch(failureCallback);
