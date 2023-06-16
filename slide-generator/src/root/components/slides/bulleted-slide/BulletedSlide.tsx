
export default function BulletedSlide() {
    return (
        <div className="border-slate-700 p-4 w-full">
            <div className="border-slate-700 flex flex-col justify-center items-center border-4 p-6 rounded-lg bg-white">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Spiderman</h2>
                <div className="border-slate-700 flex flex-col justify-center items-center border-4 p-6 rounded-lg bg-white">
                    <h3 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Información sobre Spiderman:</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-2">Spiderman es un personaje icónico del universo de los cómics y del cine.</li>
                        <li className="mb-2">Fue creado por Stan Lee y Steve Ditko en 1962.</li>
                        <li className="mb-2">El nombre real de Spiderman es Peter Parker.</li>
                        <li className="mb-2">Obtuvo sus habilidades arácnidas después de ser picado por una araña radioactiva.</li>
                        <li className="mb-2">Spiderman es conocido por su agilidad y habilidad para trepar por las paredes.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}