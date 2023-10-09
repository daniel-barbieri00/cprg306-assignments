import Link from "next/link";

export default function Home() {
    const weekDemos = [1, 2, 3, 4];
    const doneUpTo = 4;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
                <p>Name: Daniel Barbieri</p>
                <p>Course Section: CPRG 306 E</p>
                <a href="https://github.com/daniel-barbieri00/cprg306-assignments" className="hover:text-blue-400">My GitHub Assignments</a>
                <div>
                    <ul>
                        {weekDemos.map((week) =>
                            week <= doneUpTo ? (
                                <li key={week} className="hover:text-green-300 list-disc">
                                    <Link href={`/week${week}`}>Week {week}</Link>
                                </li>
                            ) : (
                                <li key={week} className="list-disc">
                                    🚧 Week {week}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </main>
    );
}
