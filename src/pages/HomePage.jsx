import React from 'react';


export default function HomePage() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-screen w-screen">
            <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                <div className="aspect-[1097/1045] w-[68.5625rem] bg-gradient-to-tr from-[#D4D3D1] to-[#04ff00] opacity-20" style={{
                    clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                }}></div>
            </div>
            <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                <div className="aspect-[1097/1045] w-[68.5625rem] bg-gradient-to-tr from-[#D4D3D1] to-[#04ff00] opacity-20" style={{
                    clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                }}></div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 align-middle">
                <div className="flex flex-row  gap-12  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 w-full justify-center items-center">
                    <div className="flex flex-col items-center">
                        <img className="rounded-full grayscale-0" src="https://media.licdn.com/dms/image/D5603AQFDpr3lscYe7w/profile-displayphoto-shrink_800_800/0/1709067496866?e=1717632000&v=beta&t=na7dsqmA7i4yDrgMchg7q06wtvkGzffg7GtAHNspcQc" alt="Bonnie image" />
                    </div>
                    <div className="mx-auto max-w-2xl lg:mx-0 justify-center">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl"> Jdmejiav</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">A dedicated Software Engineer, looking for new challenges, a friendly person with great work ethic, and team work, a problem solver, constantly staying abreast of emerging technologies to contribute with fresh ideas.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}