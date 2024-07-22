import Image from 'next/image';
import React from 'react';

export const Projects: React.FC = () => {
    return (
        <div className="bg-color flex items-center flex-col px-4">

            <h2 className="flex items-center justify-center text-3xl font-semibold mb-4">Projects</h2>

            <div className="hd-color rounded-lg flex flex-row items-start w-full max-w-5xl p-10 gap-8">
                <div className="flex-shrink-0 w-full max-w-xl bg-gray-200 border border-gray-300 rounded-md overflow-hidden">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                        <video className="absolute top-0 left-0 w-full h-full" controls>
                            <source src="/ECG.mp4" type="video/mp4" />
                            Your browser does not support the video.
                        </video>
                    </div>
                </div>
                <p className="text-left text-white">Developed an ECG Sonification System that converts
                    ECG signals into audio. This system helps users detect and diagnose heart irregularities through
                    real-time sonification. ECG signals were collected using electrodes, AD8232 heart rate monitor, and an Arduino,
                    and also from the MIT-BIH Arrhythmia dataset. The ECG data then underwent various signal processing methods, particularly
                    denoising through Fast Fourier Transforms and Wavelet Transforms, as well as identification and amplification of the P, R, and T waves. This research was conducted
                    under Dr. Bashir Morshed during the Texas Tech Clark Scholars program [<a className='link' target='_blank' href="/ECG_Sonification.pdf">ECG Sonification Paper</a>]. </p>
            </div>

            <div className="flex justify-center container mx-auto py-12">
                <a className="link" target="_blank" href="https://github.com/Rahel-Joshi/Rahel-Joshi.github.io">Website Source Code</a>
            </div>
                
        </div>
    );
}