import ImageGallery from "./ImageGallery";

export default function AboutMe() {
    return (
        <div className="flex flex-col justify-center text-center p-8">
            <div className="title-section">
                <h1 className="text-5xl font-semibold">Hi, I&apos;m <span className="name-text">Christian Lester</span></h1>
            </div>
            <div className="desc-section flex flex-col mt-8 w-1/2 m-auto gap-4 text-lg">
                <p>On this website, you can find anything such as my projects, experience/resume, things to mess around with and other mildly-interesting things about me!</p>
                <p>I am a currently a senior at the University of Pittsburgh. I will be graduating in 2025 with a major in Computer Science and a minor in Information Science. My main area of interest is in full-stack web development.</p>
                <p>Outside of tech stuff, I enjoy outdoors activites such as hiking and long distance running, music production, traveling (I&apos;ve been to 12 national parks!) and cooking Latin American cuisine</p>
            </div>
            <div className="image-gallery mt-8">
                <ImageGallery />
            </div>
        </div>
    )
}