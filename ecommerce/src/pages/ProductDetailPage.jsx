import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductDetails from "../components/ProductDetails"

const ProductDetailsPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  
  useEffect(()=>{
    const fetchProduct = async () => {
      try{
        const response = await fetch(`http://localhost:5000/items/${id}`)
        if(!response.ok) throw new Error("Failed to fetch product")
        const data = await response.json()
        setProduct(data)
      }
      catch(error) {
        console.log(error.message)
      }
    }
    fetchProduct()
  },[id])
  if (!product) return <p>Loading...</p>;
  
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  )
}
export default ProductDetailsPage