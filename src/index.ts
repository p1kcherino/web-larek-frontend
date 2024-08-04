import './scss/styles.scss';
import { Modal } from './components/view/modal';
import { Model } from './components/base/model';
import { EventEmitter } from './components/base/events';
import { AppState } from './components/model/appState';
import { Page } from './components/view/page';
import { Card } from './components/view/card';
import { ApiProduct } from './components/ApiProduct';
import { CDN_URL, API_URL } from './utils/constants';
import { cloneTemplate, ensureElement } from './utils/utils';
import { IProductsItem } from './types';


const events = new EventEmitter();
const api = new ApiProduct(CDN_URL, API_URL);
const appData = new AppState({}, events);
const page = new Page(document.body, events);
const modal = new Modal(ensureElement<HTMLElement>('#modal-container'), events);

const cardCatalogTemplate = ensureElement<HTMLTemplateElement>('#card-catalog');







api.getProducts()
.then(appData.setCatalog.bind(appData))
.catch((error) => {
 console.error(error);
});

export type CatalogChangeEvent = {
 catalog: IProductsItem[];
};

events.on<CatalogChangeEvent>('items:changed', () => {
 page.catalog = appData.catalog.map((item) => {
   const card = new Card(cloneTemplate(cardCatalogTemplate), {
     onClick: () => events.emit('card:select', item),
   });
   return card.render({
     title: item.title,
     image: item.image,
     price: item.price,
     category: item.category,
   });
 });
});

