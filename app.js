import React, { useState } from 'react'
import { ShoppingCart, Plus, Minus, Trash2, X } from 'lucide-react'

const RestaurantOrderSystem = () => {
	const [cart, setCart] = useState({})
	const [showModal, setShowModal] = useState(false)

	// Menu data extracted from images
	const menuData = {
		'Перші страви': [
			{
				id: 'p1',
				name: 'БОРЩ',
				desc: 'свинина, сметана, часник, картопля, морква, цибуля, капуста, буряк, квасоля, зелень',
				weight: '320/25',
				price: 48.0,
			},
			{
				id: 'p2',
				name: 'СУП З ПЕЛЬМЕНЯМИ',
				desc: 'свинина, пельмені',
				weight: '320/120',
				price: 55.0,
			},
			{
				id: 'p3',
				name: 'БУЛЬЙОН КУРЯЧИЙ З ДОМАШНЬОЮ ЛОКШИНОЮ',
				desc: 'курка, яйце, локшина, зелень, спеції',
				weight: '350',
				price: 48.0,
			},
			{
				id: 'p4',
				name: "БОРЩ УКРАЇНСЬКИЙ БЕЗ М'ЯСА",
				desc: 'сметана, часник, картопля, морква, цибуля, капуста, буряк, квасоля, зелень',
				weight: '320/25',
				price: 48.0,
			},
			{
				id: 'p5',
				name: "БОРЩ УКРАЇНСЬКИЙ З М'ЯСОМ",
				desc: 'свинина, сметана, часник, картопля, морква, цибуля, капуста, буряк, квасоля, зелень',
				weight: '320/90/25',
				price: 62.0,
			},
			{
				id: 'p6',
				name: 'СУП КУРЯЧИЙ З ГРИБАМИ ТА ГРІНКАМИ',
				desc: 'курка, печериці, вершки, гриби, яйце, морква, цибуля, зелень',
				weight: '280/20',
				price: 43.0,
			},
			{
				id: 'p7',
				name: 'СУП ГОРОХОВИЙ',
				desc: 'свинина, морква, цибуля, картопля, сухарики, часник, сіль',
				weight: '350',
				price: 52.0,
			},
		],
		'Другі страви': [
			{
				id: 'd1',
				name: 'СИР ПАСТУШИЙ',
				desc: 'свинина (лопатка, шия, реберця, карбонад, яйце, сіль)',
				weight: '1/100',
				price: 44.0,
			},
			{
				id: 'd2',
				name: 'ГОЛУБЦІ ІЗ СВИНИНОЮ',
				desc: 'свинина, рис, капуста, томатна паста, морква, цибуля, борошно, перець, часник, сіль)',
				weight: '350',
				price: 46.0,
			},
			{
				id: 'd3',
				name: "МЛИНЦІ З КУРЯЧИМ М'ЯСОМ",
				desc: 'куряче філе, молоко, борошно, яйце, цибуля, сіль, цукор, перець',
				weight: '1/150',
				price: 44.0,
			},
			{
				id: 'd4',
				name: 'МЛИНЦІ З ТВОРОГОМ І СМЕТАНОЮ',
				desc: 'молоко, яйце, творог, борошно, цукор, сіль, ванільний цукор, масло',
				weight: '1/200/',
				price: 62.0,
			},
			{
				id: 'd5',
				name: 'МЛИНЦІ З ВБУКАМИ',
				desc: 'борошно, яйце, молоко, вбуками, сіль, цукор, олія, масло, шоколад, мармелад, варення',
				weight: '1/185',
				price: 48.0,
			},
			{
				id: 'd6',
				name: 'МЛИНЦІ ПО-ЗАКАРПАТСЬКІЙ В СОУСІ',
				desc: 'молоко, борошно, яйце, цукор, сіль, олія, свинина, яйце, борошно, сметана, томатна паста, часник, спеції, цибуля',
				weight: '1/200/25',
				price: 48.0,
			},
			{
				id: 'd7',
				name: 'ПЕЛЬМЕНІ З МАСЛОМ',
				desc: 'борошно, яйце, свинина, яловичина, цибуля, перець, масло',
				weight: '1/320/10',
				price: 64.0,
			},
			{
				id: 'd8',
				name: 'СОСИСКИ ВІДВАРНІ',
				desc: '',
				weight: '1/100',
				price: 44.0,
			},
			{
				id: 'd9',
				name: 'КОВБАСКИ «НЮРНБЕРЗЬКІ»',
				desc: '',
				weight: '1/180',
				price: 50.0,
			},
			{
				id: 'd10',
				name: 'СПАГЕТІ З МАСЛОМ І ТВЕРДИМ СИРОМ',
				desc: 'макарони, масло, сир',
				weight: '1/300/20',
				price: 40.0,
			},
			{
				id: 'd11',
				name: "СПАГЕТІ З М'ЯСНИМ ФАРШЕМ",
				desc: 'макарони, свинина, томатна паста, спеції, цибуля',
				weight: '1/320',
				price: 66.0,
			},
			{
				id: 'd12',
				name: 'СВИНИНА ПІКАНТНА',
				desc: 'свинина (карбонад), печериці, аджика, кетчуп, олія, часник, борошно, сіль',
				weight: '1/135',
				price: 96.0,
			},
			{
				id: 'd13',
				name: 'КАРТОПЛЯ, ЗАПЕЧЕНА З БЕКОНОМ',
				desc: 'картопля, часник, бекон, сметана, сир, масло, зелень, спеції, сіль',
				weight: '1/310',
				price: 76.0,
			},
			{
				id: 'd14',
				name: 'ТЕФТЕЛІ СВИННІ В СМЕТАННОМУ СОУСІ',
				desc: 'свинина, яловичина, яйце, цибуля, рис, борошно, сметана, морква, сіль',
				weight: '1/215',
				price: 64.0,
			},
			{
				id: 'd15',
				name: 'СМІРЗ З ШИНКОЮ',
				desc: 'шинка копчена, яйце, цибуля, паприка, помідор, олія, цукор, масло',
				weight: '1/140',
				price: 60.0,
			},
			{
				id: 'd16',
				name: 'ОМЛЕТ СВИННИЙ',
				desc: 'яйце, свинина, цибуля, морква, яйце, томатна паста, перець, червоний сіль',
				weight: '1/300',
				price: 110.0,
			},
			{
				id: 'd17',
				name: 'ОМЛЕТ КЕБАБ',
				desc: 'яйце, свинина, цибуля, сіль, масло, червоний',
				weight: '1/100',
				price: 90.0,
			},
		],
		Гарніри: [
			{
				id: 'g1',
				name: 'КОТЛЕТА КУРЯЧА',
				desc: 'яйце, курка (філе), морква, цибуля, часник, олія, сіль',
				weight: '1/95',
				price: 34.0,
			},
			{
				id: 'g2',
				name: 'ВІДБИВНА СВИННА В ЯЙЦІ',
				desc: 'яйце, свинина (карбонад), борошно',
				weight: '1/100',
				price: 74.0,
			},
			{
				id: 'g3',
				name: 'ВІДБИВНА УКРАЇНСЬКА З ГРИБАМИ',
				desc: 'свинина (карбонад), печериці, морква, часник, олія, яйце, борошно, сіль, сухарі',
				weight: '1/130',
				price: 82.0,
			},
			{
				id: 'g4',
				name: 'КАРТОПЛЯ',
				desc: 'картопля, масло, зелень, олія, цибуля, сіль',
				weight: '1/250',
				price: 32.0,
			},
			{
				id: 'g5',
				name: 'КУРЯЧІ КРИЛЬЦЯ У ВЕЛИКОВОМУ СОУСІ',
				desc: 'курка, кетчуп, часник, спеції, сіль',
				weight: '100/70',
				price: 74.0,
			},
			{
				id: 'g6',
				name: 'КУРЯЧЕ ФІЛЕ У СУХАРЯХ / В ЯЙЦІ',
				desc: 'курка (філе), яйце, борошно, сухарі, сіль, олія',
				weight: '1/100',
				price: 76.0,
			},
			{
				id: 'g7',
				name: 'СТЕЙК КУРЯЧИЙ',
				desc: 'курка (філе), спеції, борошно, яйце, олія, сіль',
				weight: '1/100',
				price: 74.0,
			},
		],
		Закуски: [
			{
				id: 'z1',
				name: 'ГРЕЧКА ВІДВАРНА З МАСЛОМ',
				desc: 'гречка, вода, масло, сіль',
				weight: '1/200/10',
				price: 30.0,
			},
			{
				id: 'z2',
				name: 'ГРЕЧКА ВІДВАРНА З ЧЕРВОНИМ СОУС.',
				desc: 'гречка, томатна паста, морква, цибуля, часник, олія, масло, вода, зелень',
				weight: '1/200/60',
				price: 30.0,
			},
			{
				id: 'z3',
				name: 'РИС ПО-ЗАКАРПАТСЬКИЙ',
				desc: 'рис, цибуля, печериці, морква, часник, олія, вода, сіль, зелень, масло',
				weight: '1/200',
				price: 36.0,
			},
			{
				id: 'z4',
				name: 'МАКАРОНИ',
				desc: 'макарони, масло, олія, томатна паста, цибуля, масло',
				weight: '1/200/10',
				price: 30.0,
			},
			{
				id: 'z5',
				name: 'ОГІРКИ З МАСЛОМ',
				desc: 'огірки, масло, цибуля, зелень, олія',
				weight: '1/150/5',
				price: 28.0,
			},
			{
				id: 'z6',
				name: 'ГОТОЧКА ПО-КРЕОЛЬСЬКІЙ',
				desc: 'капуста, морква, цибуля, часник, олія, цукор, спеції, олія, сіль',
				weight: '1/200/100',
				price: 30.0,
			},
		],
		Соуси: [
			{
				id: 's1',
				name: 'СОУС СМЕТАННИЙ',
				desc: 'сметана, борошно, цукор, сіль',
				weight: '1/75',
				price: 10.0,
			},
			{
				id: 's2',
				name: 'СОУС СМЕТАНО-ГРИБНИЙ',
				desc: 'сметана, печериці, цибуля, борошно, часник, зелень',
				weight: '1/75',
				price: 15.0,
			},
			{
				id: 's3',
				name: 'СОУС ЧЕРВОНИЙ',
				desc: 'томатна паста, борошно, цукор, олія, вода, спеції',
				weight: '1/75',
				price: 5.0,
			},
			{ id: 's4', name: 'ГІРЧИЦЯ', desc: '', weight: '1/30', price: 3.0 },
			{ id: 's5', name: 'КЕТЧУП', desc: '', weight: '1/30', price: 3.0 },
			{ id: 's6', name: 'МАЙОНЕЗ', desc: '', weight: '1/30', price: 10.0 },
			{ id: 's7', name: 'СМЕТАНА', desc: '', weight: '1/30', price: 5.0 },
			{ id: 's8', name: 'БРОШ-ПІШТА', desc: '', weight: '1/30', price: 8.0 },
		],
		Салати: [
			{
				id: 'sal1',
				name: 'САЛАТ «ГУРМАН»',
				desc: 'яловичина, морква, цибуля, майонез, огірок, перець, часник',
				weight: '1/150',
				price: 48.0,
			},
			{
				id: 'sal2',
				name: 'САЛАТ «ГРЕЦЬКИЙ»',
				desc: 'помідор, огірок, маслини, перець, фета, цибуля, олія, лимон',
				weight: '1/150',
				price: 68.0,
			},
			{
				id: 'sal3',
				name: 'САЛАТ «ЦЕЗАР»',
				desc: 'куряче філе, майонез, пармезан, помідори, огірок, сухарі',
				weight: '1/150',
				price: 62.0,
			},
			{
				id: 'sal4',
				name: 'САЛАТ «ФІТНЕС»',
				desc: 'капуста, огірок, перець, помідор, зелень, олія, масло',
				weight: '1/150',
				price: 52.0,
			},
			{
				id: 'sal5',
				name: 'МОРКВА ПО - КОРЕЙСЬКІЙ',
				desc: 'морква, часник, цукор, перець, цибуля, олія, оцет, спеції',
				weight: '1/100',
				price: 40.0,
			},
			{
				id: 'sal6',
				name: 'САЛАТ ІЗ БУРЯКІВ',
				desc: 'буряк, майонез, часник, олія',
				weight: '1/150',
				price: 40.0,
			},
			{
				id: 'sal7',
				name: 'САЛАТ ІЗ БУРЯКА ТА СИРУ',
				desc: 'буряк, яйце, майонез, твердий сир',
				weight: '1/150',
				price: 43.0,
			},
			{
				id: 'sal8',
				name: 'САЛАТ ІЗ КАПУСТИ',
				desc: 'капуста (білоголова), морква, оцет, зелень, цукор',
				weight: '1/150',
				price: 42.0,
			},
			{
				id: 'sal9',
				name: 'САЛАТ ІЗ СВІЖИХ КАПУСТИ',
				desc: 'капуста (білоголова), огірок, помідор, зелень, цибуля, олія, сіль, перець',
				weight: '1/150',
				price: 45.0,
			},
			{
				id: 'sal10',
				name: 'САЛАТ «ПОЛЯНІКОВИЙ»',
				desc: 'яловичина язик, майонез, помідор, маслини, яйце',
				weight: '1/150',
				price: 58.0,
			},
			{
				id: 'sal11',
				name: 'САЛАТ «АСОРТІ»',
				desc: 'помідор, огірок, цибуля, зелень, олія, сіль, перець',
				weight: '1/150',
				price: 44.0,
			},
			{
				id: 'sal12',
				name: "САЛАТ «ОЛІВ'Є»",
				desc: 'свинина, огірок, морква, яйце, картопля, майонез, зелень, горошок, цибуля',
				weight: '1/140',
				price: 55.0,
			},
			{
				id: 'sal13',
				name: 'САЛАТ «МІМОЗА» З ФОРЕЛЮ',
				desc: 'форель копчена, огірок, яйце, морква, цибуля, майонез, масло',
				weight: '1/160',
				price: 92.0,
			},
			{
				id: 'sal14',
				name: 'САЛАТ «ПОЛОДНИЧНИЙ»',
				desc: 'яловичина, огірок, помідор, морква, капуста, часник, олія, борошно, олія',
				weight: '1/150',
				price: 48.0,
			},
			{
				id: 'sal15',
				name: 'САЛАТ «ВЕСНЯНИЙ»',
				desc: 'помідор, огірок, яйце, редиска, зелень, цибуля, майонез',
				weight: '1/150',
				price: 48.0,
			},
		],
	}

	const addToCart = item => {
		setCart(prev => ({
			...prev,
			[item.id]: {
				...item,
				quantity: (prev[item.id]?.quantity || 0) + 1,
			},
		}))
	}

	const updateQuantity = (itemId, change) => {
		setCart(prev => {
			const newCart = { ...prev }
			const currentQty = newCart[itemId]?.quantity || 0
			const newQty = currentQty + change

			if (newQty <= 0) {
				delete newCart[itemId]
			} else {
				newCart[itemId] = { ...newCart[itemId], quantity: newQty }
			}

			return newCart
		})
	}

	const removeFromCart = itemId => {
		setCart(prev => {
			const newCart = { ...prev }
			delete newCart[itemId]
			return newCart
		})
	}

	const getTotalPrice = () => {
		return Object.values(cart)
			.reduce((sum, item) => sum + item.price * item.quantity, 0)
			.toFixed(2)
	}

	const getTotalItems = () => {
		return Object.values(cart).reduce((sum, item) => sum + item.quantity, 0)
	}

	const clearCart = () => {
		setCart({})
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-amber-50 to-orange-50'>
			{/* Header */}
			<div className='sticky top-0 z-50 bg-white shadow-md border-b-4 border-orange-400'>
				<div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
					<h1 className='text-3xl font-bold text-orange-600'>Меню ресторану</h1>
					<button
						onClick={() => setShowModal(true)}
						disabled={getTotalItems() === 0}
						className='relative bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all disabled:cursor-not-allowed'
					>
						<ShoppingCart className='w-5 h-5' />
						Завершити замовлення
						{getTotalItems() > 0 && (
							<span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold'>
								{getTotalItems()}
							</span>
						)}
					</button>
				</div>
			</div>

			{/* Main Content */}
			<div className='max-w-7xl mx-auto px-4 py-8'>
				{Object.entries(menuData).map(([category, items]) => (
					<div key={category} className='mb-12'>
						<h2 className='text-2xl font-bold text-orange-700 mb-6 border-b-2 border-orange-300 pb-2'>
							{category}
						</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
							{items.map(item => (
								<div
									key={item.id}
									className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden'
								>
									<div className='p-3'>
										<h3 className='text-sm font-bold text-gray-800 mb-1 min-h-[2.5rem] line-clamp-2'>
											{item.name}
										</h3>
										<div className='flex justify-between items-center mb-2'>
											<span className='text-xs text-gray-500'>
												{item.weight}
											</span>
											<span className='text-base font-bold text-orange-600'>
												{item.price.toFixed(2)} грн
											</span>
										</div>

										{cart[item.id] ? (
											<div className='flex items-center justify-between gap-1'>
												<button
													onClick={() => updateQuantity(item.id, -1)}
													className='bg-gray-200 hover:bg-gray-300 p-1.5 rounded transition-colors'
												>
													<Minus className='w-3 h-3' />
												</button>
												<span className='text-sm font-semibold px-2'>
													{cart[item.id].quantity}
												</span>
												<button
													onClick={() => updateQuantity(item.id, 1)}
													className='bg-gray-200 hover:bg-gray-300 p-1.5 rounded transition-colors'
												>
													<Plus className='w-3 h-3' />
												</button>
												<button
													onClick={() => removeFromCart(item.id)}
													className='bg-red-500 hover:bg-red-600 text-white p-1.5 rounded transition-colors ml-1'
												>
													<Trash2 className='w-3 h-3' />
												</button>
											</div>
										) : (
											<button
												onClick={() => addToCart(item)}
												className='w-full bg-orange-500 hover:bg-orange-600 text-white py-1.5 rounded text-sm font-semibold flex items-center justify-center gap-1 transition-colors'
											>
												<Plus className='w-3 h-3' />
												Додати
											</button>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>

			{/* Order Modal */}
			{showModal && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
					<div className='bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col'>
						<div className='bg-orange-500 text-white p-6 flex justify-between items-center'>
							<h2 className='text-2xl font-bold'>Ваше замовлення</h2>
							<button
								onClick={() => setShowModal(false)}
								className='hover:bg-orange-600 p-2 rounded-lg transition-colors'
							>
								<X className='w-6 h-6' />
							</button>
						</div>

						<div className='p-6 overflow-y-auto flex-1'>
							{Object.values(cart).length === 0 ? (
								<p className='text-center text-gray-500 py-8'>Кошик порожній</p>
							) : (
								<div className='space-y-4'>
									{Object.values(cart).map(item => (
										<div
											key={item.id}
											className='flex justify-between items-start pb-4 border-b border-gray-200'
										>
											<div className='flex-1'>
												<h3 className='font-bold text-gray-800'>{item.name}</h3>
												<p className='text-sm text-gray-600'>{item.weight}</p>
												<p className='text-sm text-orange-600 font-semibold mt-1'>
													{item.price.toFixed(2)} грн × {item.quantity} ={' '}
													{(item.price * item.quantity).toFixed(2)} грн
												</p>
											</div>
										</div>
									))}
								</div>
							)}
						</div>

						<div className='border-t border-gray-200 p-6 bg-gray-50'>
							<div className='flex justify-between items-center mb-4'>
								<span className='text-xl font-bold text-gray-800'>
									Всього до сплати:
								</span>
								<span className='text-3xl font-bold text-orange-600'>
									{getTotalPrice()} грн
								</span>
							</div>
							<div className='flex gap-3'>
								<button
									onClick={clearCart}
									className='flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 rounded-lg font-semibold transition-colors'
								>
									Очистити
								</button>
								<button
									onClick={() => {
										alert(
											`Замовлення оформлено!\nВсього: ${getTotalPrice()} грн`
										)
										clearCart()
										setShowModal(false)
									}}
									className='flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors'
								>
									Підтвердити замовлення
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default RestaurantOrderSystem
