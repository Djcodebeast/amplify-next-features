import Image from "next/image"

const getServersideprops = ({ data }) => {
    // console.log(data.image)
    return (
        <div className="my-12">
            <h2 className='text-4xl font-extrabold dark:text-gray-900'>Load page with Server side data </h2>

            {data.map(dt => (
                <div>
                    <h3> {dt.title}</h3>
                    <p> {dt.price}</p>
                    <p> {dt.description}</p>
                    <p> {dt.category}</p>
                    <Image
                        width="600"
                        alt="image"
                        height="400"
                        src={dt.image}
                        unoptimized
                    />
                </div>
            ))}
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
}

export default getServersideprops