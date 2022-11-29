import Image from "next/image"

const getStaticprops = ({ product }) => {
    return (

        <div className="my-12">
            <h2 className='text-4xl font-extrabold dark:text-gray-900'> Static Site Generation with <code>getStaticProps()</code> </h2>
            {product.map(pr => (
                <div
                    key={pr.id}
                    className="border-2 shadow-sm border-gray-200 rounded p-3 space-y-2 my-4"
                >
                    <Image
                        width={700}
                        height={500}
                        alt={'image'}
                        src={pr.image}
                        className="m-auto"
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