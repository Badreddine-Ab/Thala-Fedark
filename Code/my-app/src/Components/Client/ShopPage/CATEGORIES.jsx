import React from 'react'

export default function CATEGORIES() {
  return (  
    <div>
        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
        <div className="space-y-2">
            <div className="flex items-center">
                <input type="checkbox" name="cat-1" id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                <label for="cat-1" className="text-gray-600 ml-3 cusror-pointer">Bedroom</label>
                <div className="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
            <div className="flex items-center">
                <input type="checkbox" name="cat-2" id="cat-2"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                <label for="cat-2" className="text-gray-600 ml-3 cusror-pointer">Sofa</label>
                <div className="ml-auto text-gray-600 text-sm">(9)</div>
            </div>
            <div className="flex items-center">
                <input type="checkbox" name="cat-3" id="cat-3"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                <label for="cat-3" className="text-gray-600 ml-3 cusror-pointer">Office</label>
                <div className="ml-auto text-gray-600 text-sm">(21)</div>
            </div>
            <div className="flex items-center">
                <input type="checkbox" name="cat-4" id="cat-4"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                <label for="cat-4" className="text-gray-600 ml-3 cusror-pointer">Outdoor</label>
                <div className="ml-auto text-gray-600 text-sm">(10)</div>
            </div>
        </div>
    </div>
  )
}
