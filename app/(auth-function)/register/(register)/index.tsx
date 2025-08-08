"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const RegisterForm = () => {
  interface SigninType {
    name: string;
    email: string;
    password: string;
  }

  const initialForm: SigninType = {
    name: "",
    email: "",
    password: "",
  };
  const [signup, setSignup] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // signup api

    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignup((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="m-6" onSubmit={handleSubmit}>
      <h1 className="text-center text-4xl">Sign Up</h1>

      <div className="flex flex-col gap-4 mt-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Your Name</label>
          <Input
            id="name"
            name="name"
            value={signup.name}
            onChange={handleChange}
            type="text"
            autoComplete="name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email Address</label>
          <Input
            id="email"
            name="email"
            value={signup.email}
            onChange={handleChange}
            type="text"
            autoComplete="email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            name="password"
            value={signup.password}
            onChange={handleChange}
            type="password"
            autoComplete="new-password"
          />
        </div>

        <Button size="lg" type="submit" disabled={loading}>
          {loading ? "Signing Up…" : "Sign Up"}
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
