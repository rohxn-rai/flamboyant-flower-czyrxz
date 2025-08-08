"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignInForm = () => {
  interface SigninType {
    email: string;
    password: string;
  }

  const initialForm: SigninType = {
    email: "",
    password: "",
  };
  const [login, setLogin] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="m-6" onSubmit={handleSubmit}>
      <h1 className="text-center text-4xl">Log In</h1>

      <div className="flex flex-col gap-4 mt-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email Address</label>
          <Input
            id="email"
            name="email"
            value={login.email}
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
            value={login.password}
            onChange={handleChange}
            type="password"
            autoComplete="new-password"
          />
        </div>

        <Button size="lg" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
