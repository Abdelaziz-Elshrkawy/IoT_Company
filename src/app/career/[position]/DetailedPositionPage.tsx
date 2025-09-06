'use client'
import React, {useState} from 'react';
import { toast } from 'sonner';
import {motion} from "framer-motion";
import { Loader2 } from 'lucide-react';
import {PositionI} from "@/types/types";
export default function DetailedPositionPage ({currentPosition}:{currentPosition: PositionI}) {
    return (
        <div className="min-h-screen w-full bg-gray-900 flex items-center justify-start flex-col my-24">
            <motion.div
                key={currentPosition.name}
                className='w-[90%] md:w-[70%] p-4 rounded-md bg-white flex flex-col items-center justify-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 mb-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
                    >
                        {currentPosition.name}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-gray-800 text-sm sm:text-base space-y-6 leading-relaxed"
                    >
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">Job Description</h2>
                            <p className="whitespace-pre-line">{currentPosition.description.jobDescription}</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">Key Responsibilities</h2>
                            <ul className="list-disc list-inside space-y-1 whitespace-pre-line">
                                {currentPosition.description.keyResponsibilities
                                    .split('\n\n')
                                    .map((line, i) => <li key={i}>{line.trim()}</li>)}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">Requirements</h2>
                            <ul className="list-disc list-inside space-y-1 whitespace-pre-line">
                                {currentPosition.description.requirements
                                    .split('\n\n')
                                    .map((line, i) => <li key={i}>{line.trim()}</li>)}
                            </ul>
                        </div>

                        {currentPosition.description.preferred && (
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">Preferred</h2>
                                <ul className="list-disc list-inside space-y-1 whitespace-pre-line">
                                    {currentPosition.description.preferred
                                        .split('\n\n')
                                        .map((line, i) => <li key={i}>{line.trim()}</li>)}
                                </ul>
                            </div>
                        )}
                    </motion.div>
                </div>


                <motion.div
                    className='w-full'
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                >
                    <JobApplicationForm />
                </motion.div>
            </motion.div>
        </div>);
}





function JobApplicationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        setIsSubmitting(true);

        // Fake async submission
        setTimeout(() => {
            form.reset();
            setIsSubmitting(false);
            toast.success('Application submitted!');
        }, 2000); // 2 seconds
    };

    return (
        <div className="relative">
            {isSubmitting && (
                <div className="absolute inset-0 backdrop-blur-sm z-20 flex items-center justify-center ">
                    <Loader2 className="animate-spin w-10 h-10 text-blue-700" />
                </div>
            )}


            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto p-8 bg-white relative z-10"
            >
                <div className="col-span-2">
                    <label className="block font-medium mb-1">Resume *</label>
                    <input type="file" accept='application/pdf' required className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24" />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="block font-medium mb-1">Your First/Last Name *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24" />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="block font-medium mb-1">Nationality *</label>
                    <input type="text" defaultValue="Egyptian" required className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24" />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="block font-medium mb-1">Date of Birth *</label>
                    <input type="date" required className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24" />
                </div >

                <div className="col-span-2 md:col-span-1">
                    <label className="block font-medium mb-1">Current Address *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24" />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="block font-medium mb-1">Mobile Number *</label>
                    <input type="number" required className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24" />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="block font-medium mb-1">Your Email *</label>
                    <input type="email" required className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24" />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="block font-medium mb-1">Faculty *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24" />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="block font-medium mb-1">University *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24" />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="block font-medium mb-1">Degree *</label>
                    <select required className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24">
                        <option>Graduate</option>
                        <option>Undergraduate</option>
                        <option>Postgraduate</option>
                    </select>
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="block font-medium mb-1">Graduation Date *</label>
                    <input type="date" required className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24" />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="block font-medium mb-1">How did you know us? *</label>
                    <select required className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24">
                        <option>Search engine</option>
                        <option>Social media</option>
                        <option>Referral</option>
                    </select>
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="block font-medium mb-1">Latest position & Employer *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24" />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="block font-medium mb-1">Relative years of experience *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24" />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="block font-medium mb-1">Total years of experience *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24" />
                </div>

                <div className="col-span-2">
                    <label className="block font-medium mb-1">Short Introduction *</label>
                    <textarea
                        rows={4}
                        required
                        placeholder="Optional introduction, or any question you might have about the job..."
                        className="w-full border border-gray-300 rounded px-3 py-2 scroll-mt-24"
                    />
                </div>

                <div className="col-span-2 text-right">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                </div>
            </form>
        </div>
    );
}
