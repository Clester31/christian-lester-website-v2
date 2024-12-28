/* eslint-disable @next/next/no-img-element */
export default function Experience() {
    const toolImages = [
        './logos/c.png',
        './logos/cpp.png',
        './logos/css.png',
        './logos/html.png',
        './logos/fb.png',
        './logos/java.png',
        './logos/js.png',
        './logos/njs.png',
        './logos/python.png',
        './logos/react.png',
        './logos/tailwind.png',
        './logos/ts.png',
        './logos/sql.png',
        './logos/node.png'
    ]

    return (
        <div className="flex flex-col justify-center text-center p-8">
            <h1 className="mb-8 text-3xl font-semibold">Experience</h1>
            <div className="flex flex-row gap-4">
                <div className="resume-section w-1/2 bg-blue1 p-4 rounded-xl">
                    <h1 className="flex flex-col"><span className="text-xl font-semibold underline">Work Experience</span><span className="my-2 flex justify-center m-auto text-black hover:text-white transition 500 ease-in p-1 rounded-xl bg-emerald-500 w-1/3"><button>Download Resume (PDF)</button></span></h1>
                    <div className="job-list flex flex-col text-start mx-8">
                        <div className="id-tech-desc my-2">
                            <h1 className="flex flex-row justify-between"><span className="font-semibold">Virtual Instructor</span><span>May 2022 - August 2024</span></h1>
                            <h2 className="italic">InternalDrive | Remote</h2>
                            <ul className="flex flex-col ml-16 mr-24 text-md list-disc gap-2 my-2">
                                <li>Instructed one-on-one and group lessons focused on STEM education and programming for kids and teenagers</li>
                                <li>Guided students in developing programming projects based on class materials and personal interests</li>
                            </ul>
                        </div>
                        <div className="ms-desc my-2">
                            <h1 className="flex flex-row justify-between"><span className="font-semibold">Member Services Attendant</span><span>September 2023 - May 2024</span></h1>
                            <h2 className="italic">University of Pittsburgh | Pittsburgh, PA</h2>
                            <ul className="flex flex-col ml-16 mr-24 text-md list-disc gap-2 my-2">
                                <li>Check guests in at the Baierl Recreation Center at the University of Pittsburgh&apos;s main campus</li>
                                <li>Handle gym equipment checkouts for patrons</li>
                                <li>Answer phone calls related to the university&apos;s recreational facilities</li>
                            </ul>
                        </div>
                        <div className="ops-desc my-2">
                            <h1 className="flex flex-row justify-between"><span className="font-semibold">Operations Manager</span><span>May 2024 - Present</span></h1>
                            <h2 className="italic">University of Pittsburgh | Pittsburgh, PA</h2>
                            <ul className="flex flex-col ml-16 mr-24 text-md list-disc gap-2 my-2">
                                <li>Oversee the daily operations of the University of Pittsburgh&apos;s recreation facilities</li>
                                <li>Handle the openings and closings of various facilites</li>
                                <li>Ensure attendants are in-place and sufficiently performing duties</li>
                                <li>Handle tasks related to laundry, patron counts, equipment, and cleanings </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tools-section w-1/2 bg-blue1 p-4 rounded-xl">
                    <h1 className="text-xl font-semibold underline">What I Use</h1>
                    <div className="languages flex flex-row gap-8 justify-center bg-blue2 py-8 rounded-lg my-8">
                        <img src={toolImages[0]} alt="C" style={{ width: 72, height:84, objectFit: 'cover'}}/>
                        <img src={toolImages[1]} alt="C++" style={{ width: 72, height: 84, objectFit: 'cover'}}/>
                        <img src={toolImages[5]} alt="Java" style={{ width: 72, height: 72, objectFit: 'cover'}}/>
                        <img src={toolImages[6]} alt="JavaScript"style={{ width: 72, height: 72, objectFit: 'cover'}} />
                        <img src={toolImages[11]} alt="TypeScript"style={{ width: 72, height: 72, objectFit: 'cover'}} />
                        <img src={toolImages[8]} alt="Python" style={{ width: 72, height: 72, objectFit: 'cover'}}/>
                    </div>
                    <div className="languages flex flex-row gap-8 justify-center bg-blue2 py-8 rounded-lg my-8">
                        <img src={toolImages[3]} alt="HTML" style={{ width: 72, height:72, objectFit: 'cover'}}/>
                        <img src={toolImages[2]} alt="CSS" style={{ width: 72, height: 72, objectFit: 'cover'}}/>
                        <img src={toolImages[9]} alt="React" style={{ width: 84, height: 72, objectFit: 'cover'}}/>
                        <img src={toolImages[10]} alt="Tailwind"style={{ width: 108, height: 64, objectFit: 'cover'}} />
                    </div>
                    <div className="languages flex flex-row gap-8 justify-center bg-blue2 py-8 rounded-lg my-8">
                        <img src={toolImages[4]} alt="Firebase" style={{ width: 72, height:72, objectFit: 'cover'}}/>
                        <img src={toolImages[7]} alt="Next JS" style={{ width: 72, height: 72, objectFit: 'cover'}}/>
                        <img src={toolImages[13]} alt="Node JS" style={{ width: 72, height: 84, objectFit: 'cover'}}/>
                        <img src={toolImages[12]} alt="SQL"style={{ width: 96, height: 72, objectFit: 'cover'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}