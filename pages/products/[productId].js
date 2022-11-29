import { useRouter } from 'next/router'
import Image from 'next/image'

const getStaticPathData = (product) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <div className="my-12">
            <h2 className='text-4xl font-extrabold dark:text-gray-900'> {product.product?.title} </h2>
            <Image
                width={700}
                height={500}
                alt={'image'}
                src={product?.product.image}
                unoptimized
            />
        </div>
    )
}



export default getStaticPathData;


export async function getStaticProps(context) {
    const { params } = context

    // Call an external API endpoint to get posts
    const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
    const data = await response.json()

    console.log(`Generating page for /products/${params.productId}`)

    return {
        props: {
            product: data
        }
    }
}

export async function getStaticPaths() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()

    const paths = data.map(product => {
        return {
            params: {
                productId: `${product.id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}
