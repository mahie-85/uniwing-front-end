import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'
import Sidebarleft from './Sidebarleft';
import Sidebarrirght from './Sidebarright';
import { useNavigate } from 'react-router-dom';

const EcommerceForm = () => {

    const navigate = useNavigate()

    const [product, setProduct] = useState({
        productcode: 0, productname: "", description: "", image: "", price: 0
    })

    const handleInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!product.productcode || !product.productname || !product.description || !product.image || !product.price) {
            Swal.fire({
                icon: "warning",
                title: "All Details Are Mandatory"
            })
        } else {
            createProduct()
        }
        setProduct({ productcode: 0, productname: "", description: "", image: "", price: 0 })
    }

    const createProduct = async () => {
        try {
            const response = await axios.post("http://localhost:3000/ecommerce", product)
            console.log(response)
            Swal.fire({
                title: 'Data Added Successfully for Ecommerce Product',
                icon: "success"
            })
            navigate("/dashboard/ecommerce")
        } catch (err) {
            Swal.fire({
                title: `Ecommerce Product Not Added - ${err}`,
                icon: "warning"
            })
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "20vw" }}>
                <Sidebarleft />
            </div>
            <div className="container" style={{ paddingTop: "50px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                <h1>E-COMMERCE FORM</h1>
                <div className="container" style={{ paddingTop: "50px", maxWidth: "600px" }}>
                    <form onSubmit={handleSubmit} style={{ width: 'auto' }}>
                        {/* Product Code */}
                        <div className="mb-3">
                            <label htmlFor="productcode" className="form-label">Product Code</label>
                            <input
                                type="number"
                                className="form-control"
                                id="productcode"
                                name="productcode"
                                value={product.productcode}
                                onChange={handleInputChange}
                                placeholder="Product Code"
                            />
                        </div>

                        {/* Product Name */}
                        <div className="mb-3">
                            <label htmlFor="productname" className="form-label">Product Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="productname"
                                name="productname"
                                value={product.productname}
                                onChange={handleInputChange}
                                placeholder="Product Name"
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                value={product.description}
                                onChange={handleInputChange}
                                placeholder="Product Description"
                                rows="3"
                            ></textarea>
                        </div>

                        {/* Image */}
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                id="image"
                                name="image"
                                value={product.image}
                                onChange={handleInputChange}
                                placeholder="Product Image URL"
                            />
                        </div>

                        {/* Price */}
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                name="price"
                                value={product.price}
                                onChange={handleInputChange}
                                placeholder="Price"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mb-3">
                            <button type="submit" className="btn btn-dark w-100">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div style={{ width: "20vw" }}>
                <Sidebarrirght />
            </div>
        </div>
    )
}

export default EcommerceForm
