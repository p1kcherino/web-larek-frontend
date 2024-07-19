// Категории товара
type ProductCategory =
	| 'софт-скил'
	| 'другое'
	| 'дополнительное'
	| 'кнопка'
	| 'хард-скил';

//Интерфейс для товара
interface ProductsItem {
	id: string;
	description: string;
	image: string;
	title: string;
	category: ProductCategory;
	price: number | null;
 selected: boolean;
}

//Интерфейс главной страницы с карточками
interface ProductsList {
	products: ProductsItem[];
}

//Интерфейс modal карточки товара
interface ProductModal extends ProductsItem {
	button: string;
}

//Cпособ оплаты
type PaymentMethod = 'card' | 'cash';

//Интерфейс для формы заполнения адреса и способа оплаты
interface AdressForm {
	typePayment: PaymentMethod;
	address: string;
}

//Интерфейс для формы заполнения контактов
interface ContactForm {
	email: string;
	phone: number;
}

//Интерфейс корзины
interface BasketItems {
 id: string;
 price: number;
 total: number;
	items: ProductsItem[];
}



