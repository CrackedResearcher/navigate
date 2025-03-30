import { Plus, ArrowUpCircle, Menu, Paperclip, Smile } from 'lucide-react'

export default function Chat() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 z-3">
      <div className="text-center mb-12">
        <h1 className="text-8xl font-serif text-gray-800 mb-4 tracking-tight">Navigate</h1>
        <p className="text-gray-600 text-xl">Tell me where to go, I'll handle the clicks</p>
      </div>

      <div className="w-full max-w-3xl mb-20">
        <div className="bg-[#1C1C1C] rounded-xl shadow-lg p-4 border border-gray-800">
          <div className="relative">
            <textarea
              placeholder="Take me to..."
              className="w-full bg-transparent outline-none resize-none text-gray-200 placeholder-gray-400 min-h-[60px] max-h-[200px] overflow-y-auto"
              rows={1}
            />
            
            <div className="flex justify-between items-center mt-3 border-t border-gray-700 pt-3">
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-700 rounded-lg transition-all duration-200 tooltip" title="Attach files">
                  {/* <Paperclip className="w-5 h-5 text-gray-400" /> */}
                </button>
                <button className="p-2 hover:bg-gray-700 rounded-lg transition-all duration-200 tooltip" title="Add emoji">
                  {/* <Smile className="w-5 h-5 text-gray-400" /> */}
                </button>
                <button className="p-2 hover:bg-gray-700 rounded-lg transition-all duration-200 tooltip" title="More options">
                  {/* <Menu className="w-5 h-5 text-gray-400" /> */}
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400 font-medium">Navigate v1.0</span>
                <button 
                  className="bg-[#F97B5C] p-2.5 rounded-lg hover:bg-[#E56A4D] transition-all duration-200 flex items-center gap-2 text-white font-medium"
                >
                  <ArrowUpCircle className="w-5 h-5" />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}