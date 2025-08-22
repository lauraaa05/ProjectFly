import { useParams, useNavigate } from "react-router";
import { useAtom } from "jotai";
import { AllPetsAtom } from "./PetAtom";

export default function PetDetails() {
    const { petId } = useParams();
    const navigate = useNavigate();
    const [allPets, setAllPets] = useAtom(AllPetsAtom);

    const pet = allPets.find(p => p.id === petId);

    if (!pet) return <p className="text-center mt-10">Pet not found 😿</p>;

    const toggleSold = async () => {
        const updated = { ...pet, sold: !pet.sold };
        await fetch(`https://api-divine-grass-2111.fly.dev/UpdatePet`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updated),
        });
        setAllPets(allPets.map(p => (p.id === pet.id ? updated : p)));
    };

    const deletePet = async () => {
        await fetch(`https://api-divine-grass-2111.fly.dev/DeletePet?id=${pet.id}`, { method: "DELETE" });
        setAllPets(allPets.filter(p => p.id !== pet.id));
        navigate("/pets");
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center text-purple-900 mb-2">
                {pet.name}
            </h2>
            <img
                src={pet.imgurl}
                alt={pet.name}
                style={{width: "400px", height: "250px", objectFit: "contain"}}
                className="rounded-full mx-auto"
            />
            <p className="text-lg"><strong>Breed:</strong> {pet.breed}</p>
            <p className="text-lg mb-4">
                <strong>Sold:</strong> {pet.sold ? "✅ Yes" : "❌ No"}
            </p>

            <div className="flex gap-4 justify-center">
                <button
                    onClick={() => navigate(-1)}
                    className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
                    Go Back
                </button>
                { " " }
                <button
                    onClick={toggleSold}
                    className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
                    Toggle Sold
                </button>
                {" "}
                <button
                    onClick={deletePet}
                    className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
                    Delete Pet
                </button>
            </div>
        </div>
    );
}
