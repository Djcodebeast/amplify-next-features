import Image from "next/image"
import Link from "next/link"

const getStaticprops = ({ product }) => {
    return (

        <div className="my-12">
            {product.map(pr => (
                <div
                    key={pr.id}>
                    <Image
                        width={700}
                        height={500}
                        alt={'image'}
                        src={pr.image}
                        unoptimized
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

export default getStaticprops