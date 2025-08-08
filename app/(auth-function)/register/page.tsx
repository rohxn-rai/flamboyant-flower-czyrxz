import SignUpForm from "./(register)";

const RegisterPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div className="max-w-2xl w-full mx-auto border p-3 rounded-lg">
      <SignUpForm />
    </div>
  );
};

export default RegisterPage;
