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
                        placeholder="blur"
                        blurDataURL={`data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48RXJyb3I+PENvZGU+SHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ8L0NvZGU+PE1lc3NhZ2U+VGhlIEhUVFAgdmVyc2lvbiBzcGVjaWZpZWQgaXMgbm90IHN1cHBvcnRlZC48L01lc3NhZ2U+PFJlcXVlc3RJZD43MkQ4NUVCQkMxQjg3QUVGPC9SZXF1ZXN0SWQ+PEhvc3RJZD5FdWxFc05sTWVLYnBHNStSVlc1bWFFTWlENzJNQ1pCTW8zbytGWmJuVnBYVVJrV1RQZkxoZC9iSWpoa0pUWDJ3czBOSVJQQVcyNGY1U3BwdUNEVkQwK25qQVkvbDNsVDQ8L0hvc3RJZD48L0Vycm9yPg==`}
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