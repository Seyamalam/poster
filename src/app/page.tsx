import CardiovascularPoster from '@/components/CardiovascularPoster'
import TuberculosisPoster from '@/components/TuberculosisPoster'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Academic Posters</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cardiovascular Risk Prediction Poster</h2>
        <div className="border border-gray-300 p-4 overflow-auto" style={{width: '100vw', height: '80vh'}}>
          <CardiovascularPoster />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Tuberculosis Risk Level Poster</h2>
        <div className="border border-gray-300 p-4 overflow-auto" style={{width: '100vw', height: '80vh'}}>
          <TuberculosisPoster />
        </div>
      </div>
    </main>
  )
}