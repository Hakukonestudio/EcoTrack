'use client'

import { useChat } from 'ai/react'

export default function ChatWindow() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4 bg-green-500 text-white">
        <h2 className="text-xl font-bold">EcoTrack Avustaja</h2>
      </div>
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-3/4 p-3 rounded-lg ${m.role === 'user' ? 'bg-green-100 text-right' : 'bg-gray-100'}`}>
              {m.content}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-4">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Kysy jotain..."
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Lähetä
          </button>
        </div>
      </form>
    </div>
  )
}