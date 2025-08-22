import { Link, Outlet } from "react-router";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
            <header className="bg-white shadow-md p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-purple-900">
                    Petshop ✨
                </h1>
                <nav className="flex gap-4">
                    <Link to="/" className="text-purple-700 hover:underline">
                        Home {"| "}
                    </Link>
                    <Link to="/pets" className="text-purple-700 hover:underline">
                        Pets {"| "}
                    </Link>
                    <Link to="/pets/new" className="text-purple-700 hover:underline">
                        Add Pet
                    </Link>
                </nav>
            </header>

            <main className="p-6">
                <Outlet />
            </main>
        </div>
    );
}
