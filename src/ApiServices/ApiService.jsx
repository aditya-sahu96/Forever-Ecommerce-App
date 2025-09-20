import {Api} from "../Api/Api"

export async function fetchProducts(limit){
    const result = await Api.get(`/products?limit=${limit}`);
    return result
}

export async function fetchSingleProduct(id){
    const result = await Api.get(`/products/${id}`);
    return result
}

export async function fetchcategoryList(id){
    const result = await Api.get(`/products/${id}`);
    return result
}
