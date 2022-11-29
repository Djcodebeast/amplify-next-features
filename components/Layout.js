const Layout = ({ children }) => {


    return (
        <main className="min-h-screen max-w-screen-xl mx-auto sm:p-16 flex flex-1 flex-col font-karla">
            <header>
                <h1 className='mb-4 text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'> Nextjs v13 features Demo with Amplify Hosting</h1>

                <p className='mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'> This demonstrates Nextjs13 features work well with Amplify Hosting</p>

            </header>
            {children}

        </main>
    )
}

export default Layout