import { useEffect, useState } from "react"
import { BobsburguerCard } from "./BobsburguerCard";
import styles from "./BobsburguerList.module.css"
import { Search } from "./Search"


export function BobsburguerList() {

    const [bobsburguers, setBobsburguers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")

    useEffect(() => {
        setLoading(true)
        fetch("https://bobsburgers-api.herokuapp.com/characters")
            .then(response => response.json())
            .then(data => {
                const sortedBobsburguers = data.sort((a, b) => a.name.
                localeCompare(b.name))
                setBobsburguers(sortedBobsburguers)
                setLoading(false)
            }).catch(error => {
                setError(error)
                setLoading(false)


            })
    }, [])

    const filteredBobsburguers = bobsburguers.filter(bobsburguer => bobsburguer.name.toLowerCase().includes(search))


    function getSearchValue(e) {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase())

    }

    if (loading) {
        return <div>Loading....</div>

    } else if (error) {
        return <div>error</div>
    } else {

        return (
            <>
                <Search
                    total={filteredBobsburguers.length}
                    search={getSearchValue}

                />
                <div className={styles.container}>
                    {filteredBobsburguers.map(bobsburguer => (

                        <BobsburguerCard
                            key={bobsburguer.id}
                            id={bobsburguer.id}
                            image={bobsburguer.image} 
                            name={bobsburguer.name}
                        />




                    ))}
                </div>
            </>
        )
    }
}



