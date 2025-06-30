import BackgroundMobile from "./layouts/BackgroundDesktop";
import Footer from "./layouts/footerDektop";



export default function MobileView() {
    return (

        <div className="min-h-screen flex flex-col bg-gray-50">
            
            {/* Contenido Principal*/}
            <main className="flex-grow p-6 pb-16">
                <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Contenido Principal</h2>
                <p className="mb-4">Este es el contenido principal de tu aplicación. Puede crecer tanto como necesites.</p>
                
                {/* Ejemplo de contenido que puede variar en altura */}
                <div className="space-y-4">
                    {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="p-4 border rounded-lg">
                        <p>Elemento de contenido #{item}</p>
                    </div>
                    ))}
                </div>
                </section>

                <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Contenido Principal</h2>
                <p className="mb-4">Este es el contenido principal de tu aplicación. Puede crecer tanto como necesites.</p>
                
                {/* Ejemplo de contenido que puede variar en altura */}
                <div className="space-y-4">
                    {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="p-4 border rounded-lg">
                        <p>Elemento de contenido #{item}</p>
                    </div>
                    ))}
                </div>
                </section>

                <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Contenido Principal</h2>
                <p className="mb-4">Este es el contenido principal de tu aplicación. Puede crecer tanto como necesites.</p>
                
                {/* Ejemplo de contenido que puede variar en altura */}
                <div className="space-y-4">
                    {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="p-4 border rounded-lg">
                        <p>Elemento de contenido #{item}</p>
                    </div>
                    ))}
                </div>
                </section>


                <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Contenido Principal</h2>
                <p className="mb-4">Este es el contenido principal de tu aplicación. Puede crecer tanto como necesites.</p>
                
                {/* Ejemplo de contenido que puede variar en altura */}
                <div className="space-y-4">
                    {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="p-4 border rounded-lg">
                        <p>Elemento de contenido #{item}</p>
                    </div>
                    ))}
                </div>
                </section>
            </main>


        

            <Footer/>

            


        </div>

    );
}