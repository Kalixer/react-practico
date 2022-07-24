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

	const removeFromCart = (payload) => {
		setState({
			...state,
			cart: state.cart.filter(item => item.id != payload.id),
			priceList: state.priceList.filter(item => item != payload.price)
		})
	}
	
	return {
		state,
		addToCart,
		removeFromCart
	}
}

export default useInitialState;
