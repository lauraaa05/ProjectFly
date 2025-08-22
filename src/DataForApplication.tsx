import {useEffect} from "react";
import {useAtom} from "jotai";
import {AllPetsAtom} from "./PetAtom.ts";

export function DataForApplication() {

    const [, setAllPets] = useAtom(AllPetsAtom)

    useEffect(() => {
        fetch('https://api-divine-grass-2111.fly.dev/GetPets')
            .then(result => {
                result.json().then(allPets => {
                    setAllPets(allPets);
                })
            });

    }, [])
}