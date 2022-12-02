import api from "../api";

export default {
  async getProdutos() {
    const resultado = await api.get("/products");
    return resultado.data;
  },
  async getProduto(id) {
    const resultado = await api.get(`/products/${id}`);
    return resultado.data;
  },
  async createProduto(data) {
    data.createdAt = new Date().toLocaleString();
    data.image = "https://i.dummyjson.com/data/products/1/thumbnail.jpg";
    const resultado = await api.post("/products", data);
    return resultado.data;
  },
};
