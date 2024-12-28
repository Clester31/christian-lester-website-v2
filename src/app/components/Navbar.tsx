export default function Navbar({ setCurrentTab }: { setCurrentTab: (tab: number) => void }) {
    const hoverStyle = `hover:text-tan1 transition 150 ease-in cursor-pointer`

    return (
        <div className="flex bg-blue1 py-4 px-8 text-xl items-center justify-center">
            <ul className="flex flex-row gap-32">
                <li
                    className={hoverStyle}
                    onClick={() => setCurrentTab(0)}
                >
                    About Me
                </li>
                <li
                    className={hoverStyle}
                    onClick={() => setCurrentTab(1)}
                >
                    Projects
                </li>
                <li
                    className={hoverStyle}
                    onClick={() => setCurrentTab(2)}
                >
                    Experience
                </li>
                <li
                    className={hoverStyle}
                    onClick={() => setCurrentTab(3)}
                >
                    Extras
                </li>
            </ul>
        </div>
    )
}