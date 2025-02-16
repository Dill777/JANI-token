"use client";

import Image from "next/image";
import bearMascot from "./bear.jpeg";

export default function Home() {
    return (
        <div
            className="min-h-screen rotate-180"
            style={{ backgroundColor: "#FFF4D6", color: "#4E342E" }}
        >
            <section
                className="w-full flex flex-col items-center justify-center px-4 py-16 rotate-180"
                style={{
                    background: "linear-gradient(135deg, #FFC107, #FFB300)",
                }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6">
                        <Image
                            src={bearMascot}
                            alt="Bear Mascot"
                            width={300}
                            height={300}
                            className="mx-auto"
                            priority
                        />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">$JANI Token</h1>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        The sweetest and coolest meme token! We start from the
                        bottom and only go up, because bears love honey and
                        up‑only.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a
                            href="#"
                            className="bg-[#3E2723] text-white px-6 py-2 rounded hover:bg-[#5D4037] transition"
                        >
                            Buy Token
                        </a>
                        <a
                            href="#"
                            className="bg-[#3E2723] text-white px-6 py-2 rounded hover:bg-[#5D4037] transition"
                        >
                            Community
                        </a>
                    </div>
                </div>
            </section>
            <section
                className="w-full px-4 py-16 rotate-180"
                style={{ backgroundColor: "#FFF8E1" }}
            >
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">About the Token</h2>
                    <p className="text-lg">
                        Dis is jani meme, da man the myth the legend who we owe
                        everything on bera too dis is not jani just a bera who
                        knows he is the main reason most are here
                    </p>
                </div>
            </section>

            <section
                className="w-full px-4 py-16 rotate-180"
                style={{ backgroundColor: "#FFECB3" }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Tokenomics</h2>
                    <p className="text-lg mb-8">
                        Do you really dink there is tokenomics here?
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-bold mb-2">
                                Max Supply
                            </h3>
                            <p>I don`t know, not sry</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-bold mb-2">Burn</h3>
                            <p>13% of tokens locked</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-bold mb-2">
                                Jani lock
                            </h3>
                            <p>
                                Jani hab dis token 13%, I dink that he didn`t
                                know how to rug you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="w-full px-4 py-16 rotate-180"
                style={{ backgroundColor: "#FFE082" }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Roadmap</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded shadow">
                            <h3 className="text-xl font-bold">Phase 1</h3>
                            <p>just for fun</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h3 className="text-xl font-bold">Phase 2</h3>
                            <p>another fun</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h3 className="text-xl font-bold">Phase 3</h3>
                            <p>Maybe other fun ???</p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="w-full px-4 py-16 rotate-180"
                style={{ backgroundColor: "#FFD54F" }}
            >
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Join Our Community
                    </h2>
                    <p className="text-lg mb-8">
                        Become a part of our JANI den and stay updated with the
                        latest news!
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a
                            href="#"
                            className="bg-[#3E2723] text-white px-6 py-2 rounded hover:bg-[#5D4037] transition"
                        >
                            Telegram
                        </a>
                        <a
                            href="#"
                            className="bg-[#3E2723] text-white px-6 py-2 rounded hover:bg-[#5D4037] transition"
                        >
                            Twitter
                        </a>
                        <a
                            href="#"
                            className="bg-[#3E2723] text-white px-6 py-2 rounded hover:bg-[#5D4037] transition"
                        >
                            Discord
                        </a>
                    </div>
                </div>
            </section>

            <footer
                className="w-full px-4 py-6 text-center rotate-180"
                style={{ backgroundColor: "#3E2723", color: "#FFFFFF" }}
            >
                <p>© 2025 JANI Token. Not Financial Advice.</p>
            </footer>
        </div>
    );
}
