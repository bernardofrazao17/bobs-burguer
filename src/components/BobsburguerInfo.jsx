import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./BobsburguerInfo.module.css"

export function BobsburguerInfo() {
    const { id } = useParams()
    const [bobsburguer, setBobsburguer] = useState([])

    useEffect(() => {
        fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`)
            .then(response => response.json())
            .then(data => {
                setBobsburguer(data)

            })


    }, [id])
    return (
        <>
            <div className={styles.container}>
                <div className={styles.bobsburguer}>
                    <div className={styles.imageAndName}>

                        <div className={styles.bobsburguerImage} style={{ backgroundImage: `url(${bobsburguer.image})` }} />



                       
                    </div>
                </div>
                <div className={styles.info}>
                    <section className={styles.information}>
                    <div className={styles.bobsburguerName}>
Nome: {bobsburguer.name}

</div>
                        <section>
                            <div className={styles.bobsburguerAge}>

                                <div>
                                    Age: {bobsburguer.age}
                                </div>

                            </div>
                        </section>
                        <section>
                            <div className={styles.bobsburguerOccupation}>
                                <div>
                                    Occupation: {bobsburguer.occupation}
                                </div>

                            </div>
                        </section>
                        <section>
                            <div className={styles.bobsburguerGender}>
                                <div>
                                    Gender: {bobsburguer.gender}
                                </div>

                            </div>
                        </section>
                        <section>
                            <div className={styles.bobsburguerHairColor}>
                                <div>
                                    Hair Color: {bobsburguer.hairColor}
                                </div>

                            </div>
                        </section>
                    </section>
                </div>

            </div>
        </>
    )
}