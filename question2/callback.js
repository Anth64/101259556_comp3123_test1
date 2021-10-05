const delayedSuccess = () => {
	setTimeout(() => {
			let success = {'message': 'delayed success!'}
			console.log(success);
	}, 500)
}

const delayedException = () => {
	setTimeout(() => {
		try {
			throw new Error('error: delayed exception!');
		} 
		catch(e){
			console.error(e);
		}
	}, 500);
}

// delayedSuccess();
// delayedException();

function resolvedPromise()
{
	return new Promise(resolve => setTimeout(resolve, 500, console.log({'message': 'delayed success!'})));
}

function rejectedPromise()
{
	return new Promise(reject => setTimeout(reject, 500, console.log({'error': 'delayed exception!'})));
}

resolvedPromise();
rejectedPromise();

