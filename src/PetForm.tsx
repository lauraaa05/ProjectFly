import { useState } from "react";
import { useAtom } from "jotai";
import { AllPetsAtom } from "./PetAtom";
import { useNavigate } from "react-router";

export default function PetForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [imgurl, setImgurl] = useState("");
    const [allPets, setAllPets] = useAtom(AllPetsAtom);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newPet = { name, breed, imgurl, sold: false };
        const res = await fetch("https://api-divine-grass-2111.fly.dev/CreatePet", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPet),
        });
        const savedPet = await res.json();
        setAllPets([...allPets, savedPet]);
        navigate("/pets");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Pet</h2>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
            <input placeholder="Breed" value={breed} onChange={e => setBreed(e.target.value)} required />
            <input placeholder="Image URL" value={imgurl} onChange={e => setImgurl(e.target.value)} required />
            <button type="submit">Create Pet</button>
        </form>
    );
}
