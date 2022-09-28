import ProductDetail from "../productDetail";
import './productList.css';

function ProductList(){
    const productlist = [
        {
            name: 'Product 1',
            rs: 100,
            description: 'this is product 1',
            img: './img/1.jpg'
        },
        {
            name: 'Product 2',
            rs: 200,
            description: 'this is product 2',
            img: './img/2.jpg'
        }, {
            name: 'Product 3',
            rs: 150,
            description: 'this is product 3',
            img: './img/3.jpg'
        }, {
            name: 'Product 4',
            rs: 150,
            description: 'this is product 4',
            img: './img/4.jpg'
        }, {
            name: 'Product 5',
            rs: 150,
            description: 'this is product 5',
            img: './img/5.jpg'
        }, {
            name: 'Product 6',
            rs: 150,
            description: 'this is product 6',
            img: './img/6.jpg'
        }, {
            name: 'Product 7',
            rs: 150,
            description: 'this is product 7',
            img: './img/7.jpg'
        }, {
            name: 'Product 8',
            rs: 150,
            description: 'this is product 8',
            img: './img/8.jpg'
        },
    ]
    return(
        <>
            <section>
                <div className="container">
                <h1>product list</h1>
                    <div className="row">
                {
                    productlist.map((producr , index)=>{
                        return <ProductDetail sets={producr} key={`productDetail: ${productlist.name}`} />;
                    })
                }
                </div>
                </div>
            </section>
        </>
    )
}

export default ProductList;