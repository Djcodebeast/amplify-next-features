import Image from "next/image"
import Link from "next/link"

const ImageDemo = ({ product }) => {
    return (

        <div className="my-12">
            {product.map(pr => (
                <div
                    key={pr.id}>
                    <Image
                        alt="layout Responsive"
                        src={pr.image}
                        width={700}
                        height={475}
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />

                    <p> Title: {pr.title}</p>
                </div>
            ))

            }

        </div>
    )
}

export async function getStaticProps() {
    // Run API calls in parallel
    const productsResponse = await fetch('https://fakestoreapi.com/products')
    const products = await productsResponse.json()

    return {
        props: {
            product: products
        },
    }
}

export default ImageDemo