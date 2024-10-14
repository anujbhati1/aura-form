'use client';

import AssistantForm from '@/components/assistantform';
import DoctorForm from '@/components/doctorform';
import HospitalForm from '@/components/hospitalform';
import { useState } from 'react';

export default function Home() {
  const [formType, setFormType] = useState('doctor');
  return (
    <main className="flex justify-center">
      <div className="">
        <div className="bg-green-400 text-white text-center p-4 text-lg font-bold">
          Aura Medicals
        </div>
        <div>
          <div className="relative mb-4 mx-2">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Please select
            </label>
            <select
              name="option"
              onChange={(e) => setFormType(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out py-3"
            >
              <option value="doctor">Doctor</option>
              <option value="hospital">Hospital</option>
              <option value="assistant">Assistant</option>
            </select>
          </div>
        </div>
        {formType === 'doctor' ? <DoctorForm /> : null}
        {formType === 'hospital' ? <HospitalForm /> : null}
        {formType === 'assistant' ? <AssistantForm /> : null}
      </div>
    </main>
  );
}
