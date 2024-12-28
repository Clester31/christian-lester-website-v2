/* eslint-disable @next/next/no-img-element */
export default function ProjectBox({ image, title, desc, repoLink, siteLink }: { image: string, title: string, desc: string, repoLink: string, siteLink: string }) {
    return (
        <div className="flex flex-col justify-center text-center p-4 bg-blue1 w-1/5 rounded-xl items-center">
            <img
                className="rounded-xl my-4"
                src={image}
                alt="project image"
                style={{ width: 218, height: 172, objectFit: 'cover' }}
            />
            <h1 className="font-semibold text-xl">{title}</h1>
            <p className="mt-4">{desc}</p>
            <div className="flex flex-row gap-4 justify-center my-8">
                <a
                    className="bg-emerald-500 p-2 rounded-md text-black hover:text-white transition 200ms ease-in w-16"
                    href={repoLink}
                >
                    <i className="fa-brands fa-github text-3xl"></i>
                </a>
                <a
                    className="bg-amber-500 p-2 rounded-md text-black hover:text-white transition 200ms ease-in w-16"
                    href={siteLink}
                >
                    <i className="fa-solid fa-globe text-3xl"></i>
                </a>
            </div>
        </div>
    )
}