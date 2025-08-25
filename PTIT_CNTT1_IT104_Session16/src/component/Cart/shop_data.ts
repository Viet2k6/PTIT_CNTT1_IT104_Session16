export class Product {
    id: number;
    name: string;
    price: number;
    img: string;
    stock: number; 
    constructor(id: number, name: string, price: number, img: string, stock: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.stock = stock;
    }
}
export const products: Product[] = [
    new Product(1, "Xiaomi Poco M7 Pro 5G", 5790000, "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/xiaomi_poco_m7_pro_xanh_5_20cec22a7c.jpg", 10),
    new Product(2, "Samsung Galaxy M55", 7290000, "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/samsung_galaxy_m55_den_4_d7f9674500.jpg", 10),
    new Product(3, "Honor X9c", 9490000, "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/honor_x9c_tim_5_0ac40e3956.png", 10),
    new Product(4, "Honor Magic V3", 29990000, "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/honor_magic_v3_xanh_2_2e82ae0429.png", 5),
    new Product(5, "Xiaomi 14T Pro", 18990000, "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/xiaomi_14t_pro_blue_1_5f61c0cb50.png", 10),
    new Product(6, "Honor X7c", 4700000, "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/honor_x7c_xanh_5_560007b413.jpg", 10),
    new Product(7, "Honor 400 Pro 5G", 17650000, "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/honor_400_pro_xam_4_7d109271f9.png", 8),
    new Product(8, "Nubia V70 Design", 2790000, "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/nubia_v70_design_xanh_5_93acc5fb92.jpg", 15),
    new Product(9, "Tecno Spark 30 (8GB/128GB)", 3120000, "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/tecno_spark_30_8gb_vang_e940f9f07a.png", 12),
    new Product(10, "TCL 60R 5G", 2790000, "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/tcl_60r_trang_1_d26798e6b5.png", 10),
    new Product(11, "iPhone 15 Pro Max 256GB", 27990000, "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/iphone_15_pro_max_f589ed5358.png", 5),
    new Product(12, "Nubia A76 (4GB/128GB)", 2190000, "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/nubia_a76_xam_5_87aade2a96.jpg", 20),
];