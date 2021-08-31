import React from "react"
import Navtitle from "./Navtitle"
import TiSlider from "./Title_slider/App"
import CLASS1 from "./SCTOP10/1"
import CLASS2 from "./SCTOP10/2"
import CLASS3 from "./SCTOP10/3"
function Appad() {
  return (
    <div>
<TiSlider/><br></br>
<div className="flex h-screen bg-gray-50" className="{ 'overflow-hidden': isSideMenuOpen }">
<div className="flex flex-col flex-1 w-full">
  <div className="h-full overflow-y-auto">
    <div className="container px-6 mx-auto grid">
    <Navtitle />
      <h2 className="my-6 text-2xl font-semibold text-gray-700">10 ອັນດັບຄະແນນສູງສຸດ</h2>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs">
          <h4 className="mb-4 font-semibold text-gray-800">ປີ 1</h4>
          <CLASS1 />
        </div>
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs">
          <h4 className="mb-4 font-semibold text-gray-800">ປີ 2</h4>
          <CLASS2 />
        </div>
        </div>
          <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h4 className="mb-4 font-semibold text-gray-800">ປີ 3</h4>
          <CLASS3 />
          </div>
    </div>
  </div>
</div>
</div>

</div>
)
}

export default Appad