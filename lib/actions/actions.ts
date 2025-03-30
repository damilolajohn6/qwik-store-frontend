const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchAPI = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // Timeout after 10s

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      signal: controller.signal, // Attach timeout signal
    });

    clearTimeout(timeout);

    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Network error:", error);
    return null;
  }
};

// Collection APIs
export const getCollections = async () => fetchAPI("/collections");
export const getCollectionDetails = async (collectionId: string) => fetchAPI(`/collections/${collectionId}`);

// Product APIs
export const getProducts = async () => fetchAPI("/products");
export const getProductDetails = async (productId: string) => fetchAPI(`/products/${productId}`);
export const getSearchedProducts = async (query: string) => fetchAPI(`/search/${query}`);
export const getRelatedProducts = async (productId: string) => fetchAPI(`/products/${productId}/related`);

// Order APIs
export const getOrders = async (customerId: string) => fetchAPI(`/orders/customers/${customerId}`);
