/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
export default function FunPage() {
    return (
        <div className="flex flex-col justify-center text-center p-8">
            <div className="header flex flex-col gap-8">
                <h1 className="text-3xl font-semibold">Welcome to the Extras page!</h1>
                <p className="text-lg">This is where I show off some cool stuff i&apos;m into or just other things I&apos;ve worked on.</p>
            </div>
            <div className="row-1 flex flex-row gap-8 mt-8 mx-16">
                <div className="music-section flex flex-col bg-blue1 p-8 rounded-xl gap-4">
                    <h1 className="text-2xl font-semibold">Music Production</h1>
                    <p className="mx-16 text-lg bg-blue3 p-4 rounded-xl">For the past two years, I have been pursuing music production as a hobby. When I started out, alot of what I made was pretty bad, but I had a knack for experimenting with sounds, ideas, and themes in ways that proved that if I could keep doing this, eventually I would make something great. From 2023 onwards, I have put out high quality songs and albums that continue to improve on the styles and sounds of my previous works, and I continue to do so today. Music has always been a passion of mine since a young age, and it feels incredibly rewarding to make something that I can be proud of now, and 15 years later. Currently, I have been working on sample-based house/dance music that takes insipration from the Avalanches and Daft Punk</p>
                    <h1 className="text-2xl font-semibold">How to Listen</h1>
                    <p className="mx-16 text-lg">Click on the streaming links below each album cover to listen to it</p>
                    <div className="album-section flex flex-row gap-8 justify-center">
                        <div className="flex flex-col">
                        <h1 className="underline text-lg">And Then You Wake Up</h1>
                            <img src="./music_pics/28.png" style={{ width: 256 }} />
                            <div className="flex flex-row justify-around mt-8">
                                <a href="https://open.spotify.com/album/2Ke2PyHtPqRX8TuRtmgPXW?si=h_n_VT_MR7OaxYlWsygcog" target="_blank" rel="noopener noreferrer"><img src="./logos/spotify.png" className="cursor-pointer bg-blue2 p-2 rounded-xl hover:bg-blue3 transition 150" style={{ width: 64 }}/></a>
                                <a href="https://music.apple.com/us/album/and-then-you-wake-up/1753567182" target="_blank" rel="noopener noreferrer"><img src="./logos/apple.png" className="cursor-pointer bg-blue2 p-2 rounded-xl hover:bg-blue3 transition 150" style={{ width: 64 }}/></a>
                            </div>
                        </div>
                        <div className="flex flex-col">
                        <h1 className="underline text-lg">Nobody Home</h1>
                            <img src="./music_pics/38.png" style={{ width: 256 }} />
                            <div className="flex flex-row justify-around mt-8">
                                <a href="https://open.spotify.com/album/34nk6Jm63tnPMUVnRtF9ew?si=DrPtpOXCSbqf6uVRWfyBtA" target="_blank" rel="noopener noreferrer"><img src="./logos/spotify.png" className="cursor-pointer bg-blue2 p-2 rounded-xl hover:bg-blue3 transition 150" style={{ width: 64 }}/></a>
                                <a href="https://music.apple.com/us/album/nobody-home/1782372167" target="_blank" rel="noopener noreferrer"><img src="./logos/apple.png" className="cursor-pointer bg-blue2 p-2 rounded-xl hover:bg-blue3 transition 150" style={{ width: 64 }}/></a>
                            </div>
                        </div>
                        <div className="flex flex-col">
                        <h1 className="underline text-lg">Twice in a Lifetime</h1>
                            <img src="./music_pics/37.png" style={{ width: 256 }} />
                            <div className="flex flex-row justify-around mt-8">
                                <a href="https://open.spotify.com/album/3tvOwFE4IfugdZ0pomdsqa?si=TBcoAEuNTuS7YneFIpu1jQ" target="_blank" rel="noopener noreferrer"><img src="./logos/spotify.png" className="cursor-pointer bg-blue2 p-2 rounded-xl hover:bg-blue3 transition 150" style={{ width: 64 }}/></a>
                                <a href="https://music.apple.com/us/album/twice-in-a-lifetime/1697881056" target="_blank" rel="noopener noreferrer"><img src="./logos/apple.png" className="cursor-pointer bg-blue2 p-2 rounded-xl hover:bg-blue3 transition 150" style={{ width: 64 }}/></a>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="underline text-lg">EP 3x1</h1>
                            <img src="./music_pics/42.png" style={{ width: 256 }} />
                            <div className="flex flex-row justify-around mt-8">
                                <a href="https://open.spotify.com/album/2Ke2PyHtPqRX8TuRtmgPXW?si=h_n_VT_MR7OaxYlWsygcog" target="_blank" rel="noopener noreferrer"><img src="./logos/spotify.png" className="cursor-pointer bg-blue2 p-2 rounded-xl hover:bg-blue3 transition 150" style={{ width: 64 }}/></a>
                                <a href="https://music.apple.com/us/album/and-then-you-wake-up/1753567182" target="_blank" rel="noopener noreferrer"><img src="./logos/apple.png" className="cursor-pointer bg-blue2 p-2 rounded-xl hover:bg-blue3 transition 150" style={{ width: 64 }}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}