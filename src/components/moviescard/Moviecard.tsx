import {useState, useEffect} from "react";
import styles from "@/components/moviescard/moviecard.module.css";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

interface Movie {
    _id: string;
    name: string;
    academyAwardNominations: number;
    academyAwardWins: number;
    boxOfficeRevenueInMillions: number;
    budgetInMillions: number;
    rottenTomatoesScore: number;
    runtimeInMinutes: number;
}

const Moviecard = () => {
    const [movies, setMovies] = useState< Movie[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            try{
				const res = await fetch("/apis/movies/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const data = await res.json();
                setMovies(data.docs)
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])
    return (
        <div className={styles.moviesShelf}>
            {loading ? 
                <>
                    <Skeleton height={300} width={200} />
                    <Skeleton height={20} width={`80%`} />
                    <Skeleton height={20} width={`60%`} />
                </> : 
                movies?.map((movie) => (
                <div key={movie._id} className={styles.movieInner}>
                    <div  className={styles.moviecard}>
                        <div className={styles.moviePicture}>
                            <Image 
                                src={`/images/movies/${movie.name}.jpg`}
                                width={200}
                                height={300}
                                alt={movie.name}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.movieContents}>
                            <h3 className={styles.movieh3}>{movie.name}</h3>
                            <div className={styles.details}>
                                <span>Academy Award Nominations: {
                                    movie.academyAwardNominations
                                    }
                                </span>
                                <span>
                                    Academy Award Wins: {
                                        movie.academyAwardWins
                                    }
                                </span>
                            </div>
                            <div className={styles.details}>
                                <span>
                                    Rotten Tomatoe: {movie.rottenTomatoesScore}%
                                </span>
                                <span>
                                    Run Time: {movie.runtimeInMinutes} minutes
                                </span>
                            </div>
                            <div className={styles.details}>
                                <span>
                                    Budget: {movie.budgetInMillions} Millions
                                </span>
                                <span>
                                    Revenue: {movie.boxOfficeRevenueInMillions} Millions
                                </span>
                            </div>
                        </div>
                </div>
            </div>
                
            ))}
        </div>
    )
}

export default Moviecard;