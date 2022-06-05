function App() {
  return (
    <>
      <div className=" bg-slate-800 w-screen h-screen m-0 flex justify-center items-center">
        <div className=" bg-slate-800 m-0 flex justify-center items-center w-4/5 h-4/5">
          <div className="flex flex-col bg-slate-800 ">
            <a href="#static" className="sticky bg-transparent mx-2">
              static
            </a>
            <a href="#absolute" className="sticky bg-transparent mx-2">
              absolute
            </a>
            <a href="#fixed" className="sticky bg-transparent mx-2">
              fixed
            </a>
            <a href="#relative" className="sticky bg-transparent mx-2">
              relative
            </a>
            <a href="#sticky" className="sticky bg-transparent mx-2">
              sticky
            </a>
          </div>
          <div className="no-scrollbar overflow-hidden w-4/5 h-4/5">
            <div
              id="static"
              className="no-scrollbar overflow-hidden bg-slate-800 w-full h-full m-0 flex justify-center items-center"
            >
              <div className="overflow-x-auto bg-orange-400 w-5/6 h-5/6">
                <div className="bg-orange-400">
                  <div className="static  left-11 top-11 w-32 h-32 m-0 flex justify-center items-center bg-blue-300">
                    Static
                  </div>
                  <div className="static left-11 top-11 w-32 h-32 m-0 flex justify-center items-center bg-green-300">
                    Static
                  </div>
                  <p className="bg-orange-400 h-96">
                    An element is static when it occupies a certain space within
                    its order. Example in this case was put before the original
                    and remains static.
                    <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    .FIN
                  </p>
                </div>
              </div>
            </div>
            <div
              id="absolute"
              className="bg-slate-800 w-full h-full m-0 flex justify-center items-center"
            >
              <div className="overflow-x-auto bg-orange-400 w-5/6 h-5/6">
                <div className="bg-orange-400">
                  <div className="absolute right-11 top-11 w-32 h-32 m-0 flex justify-center items-center bg-blue-300">
                    Absolute
                  </div>
                  <div className="static left-11 top-11 w-32 h-32 m-0 flex justify-center items-center bg-green-300">
                    Static
                  </div>
                  <p className="bg-orange-400 h-96">
                    An absolute element will only take into account the
                    dimensions of the original window, its position will be
                    static regardless of other objects. But if it moved with the
                    scroll and the other elements.
                    <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    .FIN
                  </p>
                </div>
              </div>
            </div>
            <div
              id="fixed"
              className="bg-slate-800 w-full h-full m-0 flex justify-center items-center"
            >
              <div className="overflow-x-auto bg-orange-400 w-5/6 h-5/6">
                <div className="bg-orange-400">
                  <div className="fixed left-11 top-11 w-32 h-32 m-0 flex justify-center items-center bg-blue-300">
                    Fixed
                  </div>
                  <div className="static left-11 top-11 w-32 h-32 m-0 flex justify-center items-center bg-green-300">
                    Static
                  </div>
                  <p className="bg-orange-400 h-96">
                    A fixed element is the same as the absolute but it won't
                    move for anything in the world. Taking into account only the
                    parent window element.
                    <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    .FIN
                  </p>
                </div>
              </div>
            </div>
            <div
              id="relative"
              className="bg-slate-800 w-full h-full m-0 flex justify-center items-center"
            >
              <div className="overflow-x-auto bg-orange-400 w-5/6 h-5/6">
                <div className="bg-orange-400">
                  <div className="relative left-11 top-11 w-32 h-32 m-0 flex justify-center items-center bg-blue-300">
                    Relative
                  </div>
                  <div className="static left-11 top-11 w-32 h-32 m-0 flex justify-center items-center bg-green-300">
                    Static
                  </div>
                  <p className="bg-orange-400 h-96">
                    Un elemento relativo puede ser desplazado desde su posicion
                    original. En este caso el objeto relativo esta 44px desde la
                    izquierda y 44px desde arriba. Su posicion es diferente a la
                    de original que es estatico. Pero el lugar de orignal de
                    relative sigue quedando libre <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    .FIN
                  </p>
                </div>
              </div>
            </div>
            <div
              id="sticky"
              className="bg-slate-800 w-full h-full m-0 flex justify-center items-center"
            >
              <div className="overflow-x-auto bg-orange-400 w-5/6 h-5/6">
                <div className="bg-orange-400">
                  <div className="sticky left-11 top-11 w-32 h-32 m-0 flex justify-center items-center bg-blue-300">
                    Sticky
                  </div>
                  <div className="static left-11 top-11 w-32 h-32 m-0 flex justify-center items-center bg-green-300">
                    Static
                  </div>
                  <p className="bg-orange-400 h-96">
                    UA sticky element is treated the same as a relative element.
                    We can move it from its position but it will always stay
                    inside its parent container.
                    <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    .FIN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-96"></div>
    </>
  );
}

export default App;
