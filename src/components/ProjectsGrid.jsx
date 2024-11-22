function ProjectsGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white rounded-xl p-6">
        <div className="flex gap-2 mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>
        <h3 className="text-xl font-bold mb-2">DATA SCIENTIST</h3>
        <div className="flex gap-2">
          <button className="bg-gray-200 px-4 py-1 rounded text-sm">Follow Me</button>
          <button className="bg-blue-400 px-4 py-1 rounded text-sm text-white">Experience</button>
        </div>
      </div>
      
      {/* XAI Notebook */}
      <div className="bg-gray-800 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">XAI</h3>
        <div className="space-y-2">
          <div className="h-1 bg-blue-400 w-3/4"></div>
          <div className="h-1 bg-blue-400 w-1/2"></div>
          <div className="h-1 bg-blue-400 w-2/3"></div>
        </div>
      </div>

      {/* Computer Display */}
      <div className="bg-gray-800 rounded-xl p-6 text-white">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="font-mono text-sm text-green-400">
          <div>$ code --version</div>
          <div>$ npm start</div>
          <div>$ running...</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsGrid 