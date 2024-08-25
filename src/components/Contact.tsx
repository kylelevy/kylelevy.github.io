"use client";
import React, { useState } from "react";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  subject: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = "kylerlevy@gmail.com";

    const url = `mailto:${email}?subject=${formData.name.value} - ${formData.subject.value}&body=${formData.message.value}`;

    var win = window.open(url, '_blank');
    win? win.focus : null;
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Name"
          className="bg-neutral-100 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:dark:ring-neutral-700 px-2 py-2 rounded-md text-sm text-neutral-700 dark:text-gray-200 w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="subject"
          placeholder="Subject"
          className="bg-neutral-100 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:dark:ring-neutral-700 px-2 py-2 rounded-md text-sm text-neutral-700 dark:text-gray-200 w-full"
          value={formData.subject.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              subject: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Message..."
          rows={10}
          className="bg-neutral-100 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:dark:ring-neutral-700 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 dark:text-gray-200 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 dark:bg-neutral-900 rounded-md font-bold text-neutral-500 dark:text-gray-300"
        type="submit"
      >
        Submit{" "}
      </button>
    </form>
  );
};
