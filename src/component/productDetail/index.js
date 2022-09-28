import './productDetail.css';

function ProductDetail(porps){

    let { sets } = porps;
    console.log(sets);
    return(
        <div className='box-25 product-item'>
            <div className='w-100'>
            <img src={sets.img}/>
            <div className='padding15'>
                <h1>{sets.name}</h1>
                <p>
                    {sets.description}
                </p>
                <label>Rs .{sets.rs}/-</label>
                <br/>
                <button>Add Cart</button>
            </div>
        </div>
        </div>        
    )
}

export default ProductDetail;