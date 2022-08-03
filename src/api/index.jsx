const URL = 'https://dummyjson.com'

export const getProducts = (skip) => {
  return fetch(`${URL}/products?skip=${skip}&limit=10`).then((res) => res.json())
}