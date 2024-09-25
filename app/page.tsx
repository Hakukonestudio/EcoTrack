import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      <main className="text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Tervetuloa EcoTrackiin
        </h1>
        <p className="text-xl text-green-700 mb-8">
          Projekti on parhaillaan kehitteillä ja valmistuu pian.
        </p>
        <div className="space-y-4">
          <p className="text-lg text-green-600">
            Pysy kuulolla! Pääset pian seuraamaan ja pienentämään hiilijalanjälkeäsi.
          </p>
          <Link 
            href="/notify" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          >
            Ilmoita minulle kun valmis
          </Link>
        </div>
      </main>
      <footer className="mt-8 text-green-600">
        <p>&copy; 2023 EcoTrack. Kaikki oikeudet pidätetään.</p>
      </footer>
    </div>
  )
}