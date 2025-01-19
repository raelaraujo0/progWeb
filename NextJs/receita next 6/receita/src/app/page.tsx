import Link from 'next/link'

export default function Home(){
    return (
        <div>           
            <div>
                <h1>
                    Viva Santana!
                </h1>
                <Link href="/clienteMovies/">cliente Movies</Link><br /><br />
                <Link href="/moviesearch/">Movies Search</Link><br /><br />
                <Link href="/movies/">Movies</Link><br /><br />
                <Link href="/novarota/">Rota</Link> <br/><br/>            
            </div>
        </div>       
    )
}