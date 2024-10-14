import React from 'react';
import InputBox from './inputbox';

function DoctorForm() {
  return (
    <section className="text-gray-600 body-font">
      <div className="bg-gray-100 rounded-lg p-4 lg:p-8 flex flex-col w-full">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Add Doctor Details
        </h2>
        <div className="flex space-x-1">
          <InputBox label={'First Name'} />
          <InputBox label={'Last Name'} />
        </div>
        <InputBox label={'Mobile Number'} />
        <div className="flex space-x-1">
          <InputBox label={'House No'} />
          <InputBox label={'Pincode'} />
        </div>
        <InputBox label={'Address'} />
        <InputBox label={'City'} />
        <InputBox label={'State'} />
        <InputBox label={'Hospital Name'} />
        <InputBox label={'Address'} />
        <InputBox label={'Gmail'} />
        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Submit
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Literally you probably havent heard of them jean shorts.
        </p>
      </div>
    </section>
  );
}

export default DoctorForm;
