import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const Decisions = () => {
   return (
      <div className='min-h-screen h-screen'>
         <Header />
         <main className=" h-full flex flex-col flex-wrap  ">
            <div className="p-6 border-double border-[20px] border-white bg-black text-white font-gothiccc text-6xl absolute w-fit inset-x-1/4 top-40 text-center ">
               THE CHOICE IS YOURS
            </div>
            <div className="bg-[url('../public/heaven_decision.png')] bg-cover  h-full   flex flex-col flex-wrap justify-center items-center">
               <Link href="/heaven">
                  <button className="text-3xl mt-8 py-3 p-3 w-3/12 h-fit  flex flex-row justify-center justify-items-center border-2 border-solid border-white hover:bg-white hover:text-[#61CDFF]" >
                     Heaven
                  </button>
               </Link>
            </div>
            <div className="bg-[url('../public/hell_decision.png')] bg-cover text-black h-full  flex flex-col flex-wrap justify-center items-center">
               <Link href="/hell">
                  <button className="text-3xl mt-8 py-3 p-3 w-3/12 h-fit  flex flex-row justify-center justify-items-center border-2 border-solid border-black hover:bg-black hover:text-[#FF3333]" >
                     Hell
                  </button>
               </Link>
            </div>
         </main>
         <Footer />
      </div>
   );
};


export default Decisions;