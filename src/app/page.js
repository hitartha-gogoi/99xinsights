"use client"
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Tweets from "@/components/tweets";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-black">
        <Navbar />
   

    {/* BANNER */}

    <div className={`flex flex-col w-full h-screen justify-center items-center pt-96 sm:pt-72 `}> 
        <h1 className="text-9xl text-white text-center uppercase  font-extrabold"> 99x</h1>
        <span className="text-6xl text-white text-center uppercase  font-light"> Insights</span>

    </div>

        <div className="mt-96 sm:mt-40 w-full h-2 border-t border-white"></div>
        <div className="mt-14 w-full h-2 border-t border-white"></div>
        <div className="mt-14 w-full h-2 border-t border-white"></div>
        <div className="mt-14 w-full h-2 border-t border-white"></div>
        <div className="mt-14 w-full h-2 border-t border-white"></div>

    {/* THE PROBLEM */}

    <div className={`flex flex-col w-full  h-screen justify-start items-center mt-24`}> 

        <div className="flex flex-col justify-between space-y-24 w-full mt-40 ">
            <h1 className="text-4xl sm:text-6xl text-left ml-6 sm:ml-20 text-white uppercase montserrat-extrabold "> the problem ?</h1>
            <p className="text-2xl sm:text-4xl text-left self-end mr-0 sm:mr-20 text-white uppercase montserrat-light w-80 sm:w-96">In today's era of AI and ML, brushing up skills have really become difficult</p>
        </div>

    </div>

    {/* THE SOLUTION */}


    <div className={`flex flex-col w-full h-screen justify-start items-center border-t border-white`}> 

        <div className="flex flex-col justify-between space-y-12 w-full mt-40 ">
            <h1 className="text-4xl sm:text-6xl text-left ml-6 sm:ml-20 text-white uppercase montserrat-extrabold "> the solution </h1>
            <p className="text-2xl sm:text-4xl text-left self-end mr-0 sm:mr-20 text-white uppercase montserrat-light w-80 sm:w-96">In today's era of AI and ML, brushing up skills have really become difficult</p>
        </div>

    </div>

     {/* THE SOLUTION WITH IMAGE */}


    <div className={`flex flex-col sm:flex-row w-full  min-h-screen justify-between items-center sm:items-start sm:flex-nowrap flex-wrap py-20 gap-y-16 gap-x-8 border-t border-white`}> 

        <div className="flex flex-col self-start justify-between w-full mt-40 ">
          <h1 className="self-start inline text-3xl md:text-5xl sm:text-6xl text-left ml-6 sm:ml-20 text-white uppercase banner-text font-semibold w-72 sm:w-3/5 break-words"> Get the latest news from local, national and international titles. </h1>
        </div>


        <div className="flex flex-col justify-between space-y-12  mt-40 w-80 sm:w-full md:w-4/5 lg:w-3/5 ">

          <div className="relative group w-full max-w-xs h-80 rounded-lg bg-[url('https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_xlarge_2x.jpg')] bg-cover bg-center cursor-pointer shadow-md  transition-transform duration-300 transform  hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
            {/* gradient overlay only */}
                
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
            {/* text container above the gradient */}
              <div className="absolute inset-0 flex flex-col items-start pt-6 pl-4 z-20">
                <p className="text-base banner-text font-bold  text-gray-200"> Chip and battery Life </p>
                <p className="text-3xl mt-2 font-bold  text-white banner-text"> Fast that last</p>
              </div>
          </div>

          <p className="flex flex-wrap break-words text-2xl sm:text-4xl  mr-0 sm:mr-20 text-white uppercase montserrat-light w-80 sm:w-full">In today's era of AI and ML, brushing up skills have really become difficult</p>
        </div>
      </div>


      {/* THE SOLUTION WITH IMAGE */}


    <div className={`flex flex-col sm:flex-row w-full  min-h-screen justify-between items-center sm:items-start sm:flex-nowrap flex-wrap py-20 gap-y-16 gap-x-8 border-t border-white`}> 

        <div className="flex flex-col self-start justify-between w-full mt-40 ">
          <h1 className="self-start inline text-3xl md:text-5xl sm:text-6xl text-left ml-6 sm:ml-20 text-white uppercase banner-text font-semibold w-72 sm:w-3/5 break-words"> Get the latest news from local, national and international titles. </h1>
        </div>


        <div className="flex flex-col justify-between space-y-12  mt-40 w-80 sm:w-full md:w-4/5 lg:w-3/5 ">

          <div className="relative group w-full max-w-xs h-80 rounded-lg bg-[url('https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_xlarge_2x.jpg')] bg-cover bg-center cursor-pointer shadow-md  transition-transform duration-300 transform  hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
            {/* gradient overlay only */}
                
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
            {/* text container above the gradient */}
              <div className="absolute inset-0 flex flex-col items-start pt-6 pl-4 z-20">
                <p className="text-base banner-text font-bold  text-gray-200"> Chip and battery Life </p>
                <p className="text-3xl mt-2 font-bold  text-white banner-text"> Fast that last</p>
              </div>
          </div>

          <p className="flex flex-wrap break-words text-2xl sm:text-4xl  mr-0 sm:mr-20 text-white uppercase montserrat-light w-80 sm:w-full">In today's era of AI and ML, brushing up skills have really become difficult</p>
        </div>
      </div>


      {/* THE SOLUTION WITH IMAGE */}


    <div className={`flex flex-col sm:flex-row w-full  min-h-screen justify-between items-center sm:items-start sm:flex-nowrap flex-wrap py-20 gap-y-16 gap-x-8 border-t border-white`}> 

        <div className="flex flex-col self-start justify-between w-full mt-40 ">
          <h1 className="self-start inline text-3xl md:text-5xl sm:text-6xl text-left ml-6 sm:ml-20 text-white uppercase banner-text font-semibold w-72 sm:w-3/5 break-words"> Get the latest news from local, national and international titles. </h1>
        </div>


        <div className="flex flex-col justify-between space-y-12  mt-40 w-80 sm:w-full md:w-4/5 lg:w-3/5 ">

          <div className="relative group w-full max-w-xs h-80 rounded-lg bg-[url('https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_xlarge_2x.jpg')] bg-cover bg-center cursor-pointer shadow-md  transition-transform duration-300 transform  hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
            {/* gradient overlay only */}
                
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
            {/* text container above the gradient */}
              <div className="absolute inset-0 flex flex-col items-start pt-6 pl-4 z-20">
                <p className="text-base banner-text font-bold  text-gray-200"> Chip and battery Life </p>
                <p className="text-3xl mt-2 font-bold  text-white banner-text"> Fast that last</p>
              </div>
          </div>

          <p className="flex flex-wrap break-words text-2xl sm:text-4xl  mr-0 sm:mr-20 text-white uppercase montserrat-light w-80 sm:w-full">In today's era of AI and ML, brushing up skills have really become difficult</p>
        </div>
      </div>



      <div>
        
      </div>




    <h1 className="text-left w-4/5 text-5xl text-white font-bold banner-text uppercase mt-80">Our Services</h1>


    <div className="w-full h-screen overflow-x-auto overflow-y-hidden py-10 pl-10 sm:pl-40">

        <div className="inline-flex w-max h-screen flex-nowrap space-x-14 pl-4 pr-0 pt-10">
                {/* CARD 1 */}
                
                <div className="relative group w-96 h-4/5 rounded-lg bg-[url('https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_xlarge_2x.jpg')] bg-cover bg-center cursor-pointer shadow-md  transition-transform duration-300 transform  hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                {/* gradient overlay only */}
                
                  <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
                  {/* text container above the gradient */}
                    <div className="absolute inset-0 flex flex-col items-start pt-6 pl-4 z-20">
                      <p className="text-base banner-text font-bold  text-gray-200"> Chip and battery Life </p>
                       <p className="text-3xl mt-2 font-bold  text-white banner-text"> Fast that last</p>
                   </div>
                </div>
        
                {/* CARD 2 */}
                <div className="relative group w-96 h-4/5 rounded-lg bg-[url('https://www.apple.com/v/iphone/home/cb/images/overview/consider/camera__exi2qfijti0y_xlarge_2x.jpg')] bg-cover bg-center cursor-pointer shadow-md  transition-transform duration-300 transform  hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                {/* gradient overlay only */}
                
                  <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
                  {/* text container above the gradient */}
                    <div className="absolute inset-0 flex flex-col items-start pt-6 pl-4 z-20">
                    <p className="text-base banner-text font-bold  text-gray-200"> Chip and battery Life </p>
                    <p className="text-3xl mt-2 font-bold  text-white banner-text"> Fast that last</p>
                 </div>
                </div>
        
                {/* CARD 3 */}
                <div className="relative group w-96 h-4/5 rounded-lg bg-[url('https://www.apple.com/v/iphone/home/cb/images/overview/consider/battery__2v7w6kmztvm2_xlarge_2x.jpg')] bg-cover bg-center cursor-pointer shadow-md  transition-transform duration-300 transform  hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                {/* gradient overlay only */}
                
                  <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
                  {/* text container above the gradient */}
                    <div className="absolute inset-0 flex flex-col items-start pt-6 pl-4 z-20">
                    <p className="text-base banner-text font-bold  text-gray-200"> Chip and battery Life </p>
                    <p className="text-3xl mt-2 font-bold  text-white banner-text"> Fast that last</p>
                   </div>
                </div>
        
                {/* CARD 4 */}
                <div className="relative group w-96 h-4/5 rounded-lg bg-[url('https://www.apple.com/v/iphone/home/cb/images/overview/consider/innovation__os9bmmo3mjee_xlarge_2x.jpg')] bg-cover bg-center cursor-pointer shadow-md  transition-transform duration-300 transform  hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                {/* gradient overlay only */}
                
                  <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
                  {/* text container above the gradient */}
                    <div className="absolute inset-0 flex flex-col items-start pt-6 pl-4 z-20">
                    <p className="text-base banner-text font-bold  text-gray-200"> Chip and battery Life </p>
                    <p className="text-3xl mt-2 font-bold  text-white banner-text"> Fast that last</p>
                   </div>
                </div>
        
                {/* CARD 5 */}
                <div className="relative group w-96 h-4/5 rounded-lg bg-[url('https://www.apple.com/v/iphone/home/cb/images/overview/consider/privacy__ckc0wa30o55y_xlarge_2x.jpg')] bg-cover bg-center cursor-pointer shadow-md  transition-transform duration-300 transform  hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                {/* gradient overlay only */}
                
                  <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
                  {/* text container above the gradient */}
                    <div className="absolute inset-0 flex flex-col items-start pt-6 pl-4 z-20">
                    <p className="text-base banner-text font-bold  text-gray-200"> Chip and battery Life </p>
                    <p className="text-3xl mt-2 font-bold  text-white banner-text"> Fast that last</p>
                   </div>
                </div>
      
        
              </div>
            </div>


    {/* */}

    <h1 className="text-center text-5xl text-white font-bold banner-text uppercase mt-80">Don't just take our words</h1>
    <div className="flex items-center gap-2 mt-2 text-lg text-gray-700 group-hover:text-gray-300"> Here's what others have said about us</div>


    {/* TWEETS */}
    <div className="flex flex-col flex-wrap justify-center items-center w-full h-screen ">
        <Tweets />
      </div>

    <div className="relative h-screen w-full py-20 overflow-hidden">
      
      {/* Scrolling Row */}
      <div className="scroll-container">
        <div className="scroll-content">
          {/* Cards (Manually Inserted) */}
          <div className="scroll-item bg-[url('https://babahadurgarh.com/admin/uploads/ba7ab5ef3af20e247f595aa741283ed5.jpeg')]"></div>
          <div className="scroll-item bg-[url('https://babahadurgarh.com/admin/uploads/3dbf5a0d625c25ca0332f8be8e7743e4.jpeg')]"></div>
          <div className="scroll-item bg-[url('https://babahadurgarh.com/admin/uploads/318e41bc02f71c5294ceed19f630095c.jpeg')]"></div>
          <div className="scroll-item bg-[url('https://babahadurgarh.com/admin/uploads/0e94cae23079e600b375339fec9ae5a4.jpeg')]"></div>
        </div>

        {/* Duplicate Content to Ensure Seamless Loop */}
        <div className="scroll-content">
        <div className="scroll-item bg-[url('https://babahadurgarh.com/admin/uploads/ba7ab5ef3af20e247f595aa741283ed5.jpeg')]"></div>
          <div className="scroll-item bg-[url('https://babahadurgarh.com/admin/uploads/3dbf5a0d625c25ca0332f8be8e7743e4.jpeg')]"></div>
          <div className="scroll-item bg-[url('https://babahadurgarh.com/admin/uploads/318e41bc02f71c5294ceed19f630095c.jpeg')]"></div>
          <div className="scroll-item bg-[url('https://babahadurgarh.com/admin/uploads/0e94cae23079e600b375339fec9ae5a4.jpeg')]"></div>
        </div>
      </div>

      
    </div>

    <Footer />

    </div>
  );
}
