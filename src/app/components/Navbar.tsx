export default function Navbar({ currentTab, setCurrentTab }: { currentTab: number; setCurrentTab: (tab: number | ((prev: number) => number)) => void }) {
    const hoverStyle = `hover:text-tan1 transition 150 ease-in cursor-pointer`
    const tabs = ['About me', 'Projects', 'Experience', 'Extras'];

    return (
        <div className="flex bg-blue1 py-4 px-8 text-xl items-center justify-center">
            <ul className="hidden lg:flex flex-row gap-32">
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
            <div className="lg:hidden flex flex-row gap-8">
                <i onClick={() => setCurrentTab((prev: number) => Math.max(0, prev - 1))} className="fa-solid fa-left-long text-3xl"></i>
                <h1>{tabs[currentTab]}</h1>
                <i onClick={() => setCurrentTab((prev: number) => Math.min(3, prev + 1))} className="fa-solid fa-right-long text-3xl"></i>
            </div>
        </div>

    )
}