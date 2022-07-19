import { useState } from 'react';

const initialState = {
	cart: [],
	priceList: []
}

const useInitialState = () => {
	const [state, setState ] = useState(initialState);
	
	const addToCart = (payload) => {
		setState({
		...state,
		cart: [...state.cart, payload],
		priceList: [...state.priceList, payload.price]
		})
	}

	const removeFromCart = (payload, indexValue) => {
		setState({
			...state,
			cart: state.cart.filter((item, index) => item.id != payload && index != indexValue)
		})
	}
	
	return {
		state,
		addToCart,
		removeFromCart
	}
}

export default useInitialState;
