import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

import styles from "@/components/bookcard/bookcard.module.css";
import Image from "next/image";

interface Book{
    _id: string;
    name: string;
}

const Bookcard = () => {
    const [books, setBooks] = useState<Book[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch("https://the-one-api.dev/v2/book", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const { docs } = await res.json();
            setBooks(docs);
            setLoading(false);
        }
        fetchData();
    }, [])

    return (
        <div className={styles.bookShelf}>
            { loading ? 
                <>
                    <Skeleton height={280} width={200} />
                    <Skeleton height={20} width={`80%`} />
                </> :
                books?.map((book: Book) => (
                    <div key={book._id} className={styles.bookCard}>
                        <div className={styles.bookFrame}>
                            <Image
                                src={`/images/${book.name}.jpg`}
                                width={200}
                                height={280}
                                alt={book.name}
                                className={styles.bookImage}
                            />
                        </div>
                        <div className={styles.bookDatas}>
                            <p>{book.name}</p>
                        </div>  
                    </div>
                ))
            }
        </div>
    )
}

export default Bookcard;