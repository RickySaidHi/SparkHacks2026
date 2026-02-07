import React from 'react'
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white mx-auto">
        <header className="border-b bg-white backdrop-blur sticky top-0 z-50">
            <div className="container flex h-16 items-center justify-between">
                <a href="\"className="px-12 text-2xl font-bold text-black">GRYFT</a>
                <nav className="hidden md:flex gap-10">
                    <a className="text-2xl font-bold text-black">ABOUT</a>
                    <a className="text-2xl font-bold text-black">FIND</a>
                    <a className="text-2xl font-bold text-black">CONNECT</a>
                </nav>
                <div className="">
                    <nav>
                    <a href='\login' className="text-2xl font-bold text-black">LOGIN</a>
                    <a className="px-12 text-2xl font-bold text-black">SIGNUP</a>
                </nav>
                </div>
            </div>
        </header>

        <div className="flex justify-end text-4xl py-4 px-27">
            <input className="border-3 shadow-lg py-2 px-5"type="text" placeholder="Search..."></input>   
        </div>

        <main className="flex-1">
        <section className="w-full">
            <div className="container mx-auto px-16">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-24">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black">
                            Gryft: We want to get you connected!
                        </h1>
                        <div className="grid items-center grid-cols-2 gap-12">
                            <span className="text-slate-700 text-3xl text-bold">AI Summarys - ✔</span>
                            <span className="text-slate-700 text-3xl text-bold">Hashtags - ✔</span>
                            <span className="text-slate-700 text-3xl text-bold">Gryft Community - ✔</span>
                            <span className="text-slate-700 text-3xl text-bold">Gryft Profiles - ✔</span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-xl overflow-hidden ">
                            <img className="w-full object-cover h-full" src="./hashtag.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
    
  )
}

export default Home