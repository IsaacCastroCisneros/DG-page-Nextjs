import { CardsSeminar } from "./CardsSeminar"


export const MostrarCardsSemina = () => {
  return (
    <section className="bg-[#1c2e6c] -mt-[82px]">
        <article className="container mx-auto">
            <div className="p-10">
                <p className="text-white text-center text-4xl font-bold">Lista de Seminarios</p>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(17.3rem,1fr))] mt-20 gap-5">
                  <CardsSeminar />
                  <CardsSeminar />
                  <CardsSeminar />
                  <CardsSeminar />
                  <CardsSeminar />
                </div>
            </div>
        </article>
    </section>
  )
}
