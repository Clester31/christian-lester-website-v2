import ImageGallery from "./ImageGallery";

export default function AboutMe() {
    return (
        <div className="sm:flex flex-col justify-center text-center p-8">
            <div className="title-section">
                <h1 className="text-4xl sm:text-6xl font-semibold">Hi, I&apos;m <span className="name-text">Christian Lester</span></h1>
            </div>
            <div className="text-xl w-4/6 sm:desc-section flex flex-col mt-8 w-1/2 m-auto gap-8 text-base">
                <p>On this website, you can find anything such as my projects, experience/resume, things to mess around with and other mildly-interesting things about me!</p>
                <p>I am a currently a senior at the University of Pittsburgh. I will be graduating in 2025 with a major in Computer Science and a minor in Information Science. My main area of interest is in full-stack web development.</p>
                <p>Outside of tech stuff, I enjoy outdoors activites such as hiking and long distance running, music production, traveling (I&apos;ve been to 12 national parks!) and cooking Latin American cuisine</p>
            </div>
            <div className="image-gallery mt-32">
                <ImageGallery />
            </div>
        </div>
    )
}