export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
			if (serializedState === null ) {
				return undefined;
			}
			return JSON.parse(serializedState);
	} catch (err) {
			return undefined;
	}
}

export const saveState = state => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState)	
			
	} catch (err) {
			// 
	}
}

// @todo Clear state on page unload
export const clearState = state => {
	try {
		localStorage.removeItem('state');
	} catch (err) {
			// 
	}
}
