"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
}: InputProps) {
  return (
    <div className="mb-4">
      <label className="block text-md font-medium mb-2">{label}</label>
      <input
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        className={`border rounded p-2 w-full transition-colors ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-neutral-300/50 focus:border-neutral-400"
        }`}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  function validateData(): ValidationErrors {
    const newErrors: ValidationErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 2) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    return newErrors;
  }

  async function submithandler() {
    const validationErrors = validateData();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setLoading(false);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setErrors({});
    setLoading(false);
  }

  return (
    <section className="min-h-screen flex relative">
      <div className="mx-auto w-full max-w-xl px-6">
        <div className="relative mt-16 border border-neutral-300/50 flex flex-col items-center p-3 rounded-md">
          <div className="text-2xl font-bold my-6">Contact me</div>
          <div className="flex flex-col w-full px-6">
            <Input
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              value={formData.name}
              type={"text"}
              label={"Name"}
              placeholder={"Enter your name"}
              error={errors.name}
            />
            <Input
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              value={formData.email}
              type={"email"}
              label={"Email"}
              placeholder={"Enter your email"}
              error={errors.email}
            />
            <div className="mb-4">
              <label className="block text-md font-medium mb-2">Message</label>
              <textarea
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                value={formData.message}
                rows={4}
                placeholder="Enter your message"
                className={`border rounded p-2 w-full transition-colors ${
                  errors.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-neutral-300/50 focus:border-neutral-400"
                }`}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>
            <button
              onClick={submithandler}
              disabled={loading}
              className={`flex items-center justify-center bg-neutral-900 text-white rounded px-4 py-2 mt-2 hover:bg-neutral-700 ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} transition-all duration-300 mb-6`}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-[-1] opacity-10">
            <Send className="text-neutral-500 h-1/2 w-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}
