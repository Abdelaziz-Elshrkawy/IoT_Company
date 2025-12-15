"use client";

import { motion } from "framer-motion";
import {Positions} from '@/helpers/helpers'
import Link from "next/link";
import {Routes} from "@/types/enums";
import {PositionDescriptionI} from "@/types/types";


export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#0f1e38] text-white py-16 px-4 sm:px-6 md:px-12 flex justify-center">
        <div className='w-full md:w-[70%] flex justify-center items-start flex-clo mt-5 flex-col gap-4'>
          {
            Positions.map((position,i) => (<PositionCard key={i} name={position.name} description={position.description} index={i} />))
          }
        </div>
    </main>
  );
}

function PositionCard({name, description, index}: {name: string; description: PositionDescriptionI, index:number}) {
  return           (<motion.div
      initial={{ opacity: 0, y: 10}}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay: index * 0.1 }}
      className='w-full flex hover:underline justify-center items-start flex-col flex-shrink-0 bg-white p-6 rounded-sm shadow-md text-black  cursor-pointer'>
    <Link href={`${Routes.Career}/${name}`}>
    <h1 className='mb-4 text-2xl lg:text-4xl font-bold text-left lg:hover:underline cursor-pointer w-full'>{name}</h1>
    <p className="break-words text-lg whitespace-pre-line cursor-pointer w-full">
      {description.jobDescription.length > 100 ? description.jobDescription.slice(0, 200) + '...' : description.jobDescription}
    </p>
    </Link>
  </motion.div>)
}


// <h1 className="text-4xl font-bold mb-10 text-center">Join Our Team</h1>
//
// <motion.form
//     onSubmit={handleSubmit}
//     className="max-w-2xl mx-auto bg-white text-black p-8 rounded-xl shadow-md space-y-6"
//     initial={{ opacity: 0, y: 40 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
// >
//   <div>
//     <label htmlFor="name" className="block font-semibold mb-1">
//       Full Name
//     </label>
//     <input
//         id="name"
//         name="name"
//         value={form.name}
//         onChange={handleChange}
//         type="text"
//         required
//         className="w-full border rounded p-2"
//     />
//   </div>
//
//   <div>
//     <label htmlFor="email" className="block font-semibold mb-1">
//       Email Address
//     </label>
//     <input
//         id="email"
//         name="email"
//         value={form.email}
//         onChange={handleChange}
//         type="email"
//         required
//         className="w-full border rounded p-2"
//     />
//   </div>
//
//   <div>
//     <label htmlFor="phone" className="block font-semibold mb-1">
//       Phone Number
//     </label>
//     <input
//         id="phone"
//         name="phone"
//         value={form.phone}
//         onChange={handleChange}
//         type="tel"
//         required
//         pattern="[0-9]{10,15}"
//         placeholder="e.g. 01012345678"
//         className="w-full border rounded p-2"
//     />
//   </div>
//
//   <div>
//     <label htmlFor="position" className="block font-semibold mb-1">
//       Position Applying For
//     </label>
//     <select
//         id="position"
//         name="position"
//         value={form.position}
//         onChange={handleChange}
//         required
//         className="w-full border rounded p-2"
//     >
//       <option value="">Select Position</option>
//       {positions.map((pos) => (
//           <option key={pos} value={pos}>
//             {pos}
//           </option>
//       ))}
//     </select>
//   </div>
//
//   <div>
//     <label htmlFor="experience" className="block font-semibold mb-1">
//       Years of Experience
//     </label>
//     <input
//         id="experience"
//         name="experience"
//         value={form.experience}
//         onChange={handleChange}
//         type="number"
//         min={0}
//         required
//         className="w-full border rounded p-2"
//     />
//   </div>
//
//   <div>
//     <label htmlFor="graduationYear" className="block font-semibold mb-1">
//       Graduation Year
//     </label>
//     <input
//         id="graduationYear"
//         name="graduationYear"
//         value={form.graduationYear}
//         onChange={handleChange}
//         type="number"
//         min={2010}
//         max={new Date().getFullYear()}
//         required
//         className="w-full border rounded p-2"
//     />
//   </div>
//
//   <div>
//     <label htmlFor="university" className="block font-semibold mb-1">
//       University & College Name
//     </label>
//     <input
//         id="university"
//         name="university"
//         value={form.university}
//         onChange={handleChange}
//         type="text"
//         required
//         className="w-full border rounded p-2"
//     />
//   </div>
//
//   <div>
//     <label htmlFor="cv" className="block font-semibold mb-1">
//       Upload CV (PDF)
//     </label>
//     <input
//         id="cv"
//         type="file"
//         accept=".pdf"
//         onChange={handleFileChange}
//         required
//         className="w-full border rounded p-2"
//     />
//   </div>
//
//   <button
//       type="submit"
//       className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
//   >
//     Submit Application
//   </button>
// </motion.form>