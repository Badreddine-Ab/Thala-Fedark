import {useState} from 'react'

export default function addCommand() {
    const [command,SetCommand]=useState({})
    function handleInput(e){
SetCommand({
    ...command,
    [e.target.name]: e.target.value,

})
    }
  return (
    <div>
         <div
              className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
            >
              <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Invalid input
                </span>
                <input
                  className="block w-full mt-1 text-sm border-red-600 dark:text-gray-300 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red form-input"
                  placeholder="Jane Doe"
                />
                <span className="text-xs text-red-600 dark:text-red-400">
                  Your password is too short.
                </span>
              </label>

              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Valid input
                </span>
                <input
                  className="block w-full mt-1 text-sm border-green-600 dark:text-gray-300 dark:bg-gray-700 focus:border-green-400 focus:outline-none focus:shadow-outline-green form-input"
                  placeholder="Jane Doe"
                />
                <span className="text-xs text-green-600 dark:text-green-400">
                  Your password is strong.
                </span>
              </label>

              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Helper text
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                  placeholder="Jane Doe"
                />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Your password must be at least 6 characters long.
                </span>
              </label>
            </div>
    </div>
  )
}
