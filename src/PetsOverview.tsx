import { useEffect } from "react";
import { useNavigate } from "react-router";
import { AllPetsAtom } from "./PetAtom";
import { useAtom } from "jotai";

export default function PetsOverview() {
    const [allPets, setAllPets] = useAtom(AllPetsAtom);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://api-divine-grass-2111.fly.dev/GetPets")
            .then(res => res.json())
            .then(data => setAllPets(data));
    }, [setAllPets]);

    if (allPets.length === 0) {
        return <p className="text-center mt-10">No pets found 😿</p>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center text-purple-900 mb-6">
                🐾 Our Lovely Pets 🐾
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {allPets.map(pet => (
                    <div
                        key={pet.id}
                        onClick={() => navigate(`/pets/${pet.id}`)}
                        className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition transform hover:-translate-y-1 text-center"
                    >
                        <h3 className="mb-2 text-lg font-semibold text-purple-800">
                            {pet.name}
                        </h3>
                        <div className="w-64 h-64 mx-auto overflow-hidden">
                            <img
                                src={pet.imgurl}
                                alt={pet.name}
                                style={{width: "400px", height: "250px", objectFit: "contain"}}
                                className="rounded-full mx-auto"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
