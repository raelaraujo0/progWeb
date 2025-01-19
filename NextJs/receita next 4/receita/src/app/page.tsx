import Link from 'next/link'

export default function Home(){
    return (
        <div>           
            <div>
                <h1>
                    Viva Santana!
                </h1>
                <Link href="/movies/">Movies</Link><br /><br />
                <Link href="/novarota/botafogo/">Rota</Link> <br/><br/>            
            </div>
        </div>       
    )
}