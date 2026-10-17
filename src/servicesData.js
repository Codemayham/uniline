import catalogueData from './catalogueData.json';

export const serviceCategories = catalogueData.categories.map(({ name, slug, cataloguePages, products }) => ({
  name,
  slug,
  cataloguePages,
  products,
}));

export const serviceProducts = serviceCategories.flatMap(({ products }) => products);
