import React from 'react';

export const MenuContext = React.createContext({
	menu: null,
	menuHandler: () => {},
});

// Provider
const MenuProvider = (props) => {
	const [menu, setMenu] = React.useState(false);

	const menuHandler = () => setMenu(!menu);

	return (
		<MenuContext.Provider
			value={{
				menuHandler: menuHandler,

				menu: menu,
			}}
		>
			{props.children}
		</MenuContext.Provider>
	);
};

export default MenuProvider;

// consumer
export const ActiveConsumer = MenuContext.Consumer;
