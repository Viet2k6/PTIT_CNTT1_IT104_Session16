import { Component } from "react";
import { Product, products } from "./Cart/shop_data";
import { user } from "./Cart/buy";
import "../style/Shop.css";
interface ShoppingCartState {
    showCart: boolean;
    warning: string | null;
}

class ShoppingCart extends Component {
    state: ShoppingCartState = {
        showCart: false,
        warning: null
    };

    constructor() {
        super({});
    }

    handleAdd(product: Product) {
        const result = user.addToCart(product);
        if (typeof result === "string") {
            this.setState({ warning: result });
            setTimeout(() => this.setState({ warning: null }), 3000); 
        } else {
            this.setState({ showCart: true });
        }
    }

    handleIncrease(product: Product) {
        const result = user.increase(product.id);
        if (typeof result === "string") {
            this.setState({ warning: result });
            setTimeout(() => this.setState({ warning: null }), 3000);
        } else {
            this.setState({ showCart: true });
        }
    }

    handleDecrease(product: Product) {
        user.decrease(product.id);
        this.setState({ showCart: true });
    }

    handleDelete(product: Product) {
        user.deleteFromCart(product.id);
        this.setState({ showCart: true });
    }

    render() {
        const total = user.getTotal();
        return (
            <div className="shopping-cart">
                <div className="navbar">
                    <p>Trang chủ</p>
                    <span
                        style={{fontSize: "20px" }}
                        onClick={() => this.setState({ showCart: !this.state.showCart })}
                    >
                        &#128722;
                    </span>
                </div>
                {this.state.warning && <div style={{ color: "red", textAlign: "center" }}>{this.state.warning}</div>}
                <div className="product-list">
                    {products.map((product: Product) => (
                        <div className="product-item" key={product.id}>
                            <img src={product.img} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>Giá: {product.price.toLocaleString()} VNĐ</p>
                            <button onClick={() => this.handleAdd(product)}>Thêm vào giỏ hàng</button>
                        </div>
                    ))}
                </div>
                {this.state.showCart && (
                    <div className="cart-card">
                        <h2>Cart</h2>
                        <hr />
                        <div className="order-list">
                            {user.getCartItems().map((item) => (
                                <div key={item.product.id} className="cart-item">
                                    <img src={item.product.img} alt={item.product.name} style={{ width: "60px" }} />
                                    <span className="title-product">{item.product.name}</span>
                                    <button onClick={() => this.handleDecrease(item.product)}>-</button>
                                    <span className="quantity-product">{item.quantity}</span>
                                    <button onClick={() => this.handleIncrease(item.product)}>+</button>
                                    <span
                                        onClick={() => this.handleDelete(item.product)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        &#128465;
                                    </span>
                                </div>
                            ))}
                        </div>
                        <hr />
                        <p><b>Tổng tiền: {total.toLocaleString()} VNĐ</b></p>
                    </div>
                )}
            </div>
        );
    }
}

export default ShoppingCart;