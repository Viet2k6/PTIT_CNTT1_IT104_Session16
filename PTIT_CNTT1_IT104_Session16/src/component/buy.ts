import { Product } from "./shop_data.ts";

interface CartItem {
    product: Product;
    quantity: number;
}

export class User {
    private cartItems: CartItem[] = [];

    constructor() {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            this.cartItems = JSON.parse(savedCart);
        }
    }

    private saveToLocalStorage(): void {
        localStorage.setItem("cart", JSON.stringify(this.cartItems));
    }

    getTotal(): number {
        return this.cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    }

    addToCart(product: Product): string | void { 
        const existingItem = this.cartItems.find(item => item.product.id === product.id);
        if (existingItem) {
            if (existingItem.quantity + 1 > product.stock) {
                return "Số lượng sản phẩm trong kho không đủ";
            }
            existingItem.quantity++;
        } else {
            if (product.stock < 1) {
                return "Số lượng sản phẩm trong kho không đủ";
            }
            this.cartItems.push({ product, quantity: 1 });
        }
        this.saveToLocalStorage();
    }

    increase(id: number): string | void { 
        const item = this.cartItems.find(item => item.product.id === id);
        if (item) {
            if (item.quantity + 1 > item.product.stock) {
                return "Số lượng sản phẩm trong kho không đủ";
            }
            item.quantity++;
            this.saveToLocalStorage();
        }
    }

    decrease(id: number): void {
        const item = this.cartItems.find(item => item.product.id === id);
        if (item) {
            item.quantity--;
            if (item.quantity <= 0) {
                const index = this.cartItems.indexOf(item);
                if (index > -1) {
                    this.cartItems.splice(index, 1);
                }
            }
            this.saveToLocalStorage();
        }
    }

    deleteFromCart(id: number): void {
        this.cartItems = this.cartItems.filter(item => item.product.id !== id);
        this.saveToLocalStorage();
    }

    getCartItems(): CartItem[] {
        return [...this.cartItems];
    }
}

export const user = new User();