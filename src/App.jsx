import React, { useState, useRef } from 'react';

export default function App() {
  const [image, setImage] = useState(null);
  const [br, setBr] = useState(0);
  const [con, setCon] = useState(100);
  const [sepia, setSepia] = useState(0);
  const [hue, setHue] = useState(0);
  const [w, setw] = useState(200);
  const [h, seth] = useState(120);
  const [brightness, setBrightness] = useState(100);
  const [grayscale, setGrayscale] = useState(0);

  const canvasRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setImage(imgURL);
    }
  };


  const resetFilters = () => {
    setBr(0);
    setCon(100);
    setSepia(0);
    setHue(0);
    setw(200);
    seth(120);
  };

  return (
    <>
      <div className="bg-gray-700 flex h-screen justify-center items-center p-4">

        <div className="bg-slate-300 flex flex-col rounded-xl justify-center items-center p-4  gap-12">
         <h1 className='text-3xl font-extrabold text-gray-700'>Pixello</h1>

          <div className="border-dotted border-black w-full bg-red-50 flex flex-col justify-center gap-8 p-4 items-center mb-8">

            <label className='cursor-pointer w-40 h-10 flex justify-center items-center text-white bg-slate-400 rounded-xl hover:bg-gray-700' htmlFor='fileinput'>Upload Image</label>
            <input type="file" accept="image/*" id='fileinput' onChange={handleImageChange} className='hidden' />


            {image && (
              <>
                <img
                  src={image}
                  alt="Selected"
                  className='p-2'
                  style={{
                    width: `${w}px`,
                    height: `${h}px`,
                    marginTop: '10px',
                    filter: `blur(${br}px) contrast(${con}%) hue-rotate(${hue}deg) sepia(${sepia}%) brightness(${brightness}%) grayscale(${grayscale}%)`,
                    
                  }}
                  />
              </>
            )}
          </div>

          <div className="bg-red-50 flex justify-center items-center gap-4 sm:gap-12 p-4">

            <div className="flex flex-col gap-4">

              <div className="flex flex-col sm:flex-row gap-2">
                <lebel>Blur  </lebel>
                <input
                  type='range'
                  min={0}
                  max={20}
                  value={br}
                  onChange={(e) => setBr(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <lebel>Contrast  </lebel>
                <input
                  type='range'
                  min={0}
                  max={200}
                  value={con}
                  onChange={(e) => setCon(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <lebel>Width  </lebel>
                <input
                  type='range'
                  min={120}
                  max={400}
                  value={w}
                  onChange={(e) => setw(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <label>Grayscale</label>
                <input
                  type='range'
                  min={0}
                  max={100}
                  value={grayscale}
                  onChange={(e) => setGrayscale(e.target.value)}
                />
              </div>
            </div>

            <div className=" flex flex-col gap-4">

              <div className="flex flex-col sm:flex-row gap-2">
                <lebel>Hue  </lebel>
                <input
                  type='range'
                  min={0}
                  max={360}
                  value={hue}
                  onChange={(e) => setHue(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <label>Sepia  </label>
                <input
                  type='range'
                  min={0}
                  max={100}
                  value={sepia}
                  onChange={(e) => setSepia(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <label>Height  </label>
                <input
                  type='range'
                  min={100}
                  max={180}
                  value={h}
                  onChange={(e) => seth(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <label>Brightness</label>
                <input
                  type='range'
                  min={0}
                  max={200}
                  value={brightness}
                  onChange={(e) => setBrightness(e.target.value)}
                />
              </div>

            </div>

          </div>

          <button
            onClick={resetFilters}
            className='bg-red-500 text-white p-2 rounded hover:bg-red-700'>
            Reset Filters
          </button>

        </div>

      </div>
    </>
  );
}
