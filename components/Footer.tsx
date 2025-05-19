export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center p-4 text-white bg-peach-brand z-50">
      <div className="flex flex-row flex-wrap md:flex-nowrap gap-1 items-center">
        {/* Left Side */}
        <div className=" flex flex-col gap-2 mt-2 w-full md:items-start pl-10 items-center pr-10">
          <div className="flex flex-nowrap gap-3">
            <svg
              className="w-[25px] h-[25px] fill-[#fff]"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path>
            </svg>
            McGee Street, Pembroke, Ont
          </div>
          <div className="flex flex-nowrap gap-3">
            <svg
              className="w-[25px] h-[25px] fill-[#fff]"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
            </svg>
            613-735-2825
          </div>
          <div className="flex flex-nowrap gap-3">
            <svg
              className="w-[25px] h-[25px] fill-[#fff]"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
            </svg>
            silklady@cogeco.ca
          </div>
        </div>
        {/* Right Side  */}
        <div className="w-full">
          <h1 className="font-bold satisfy text-xl">About The Silk Lady</h1>
          <p>
            Providing heartfelt remembrance through Silk Tombstone Saddles,
            Tombstone Cones, Seasonal Tombstone Arrangements, and Custom
            Orders—crafted with care here in the Ottawa Valley.
          </p>
        </div>
      </div>

      {/* Base */}
      <div className="flex flex-col items-center justify-center gap-2 mt-6">
        <div><svg className="w-[25px] h-[25px] fill-[#fff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>

</svg></div>
        <p className="text-sm">
          © 2025 <span className="satisfy">The Silk Lady </span>All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
