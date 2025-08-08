import LoginForm from "./(login)";

const SignUpPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div className="max-w-2xl w-full mx-auto border p-3 rounded-lg">
      <LoginForm />
    </div>
  );
};

export default SignUpPage;
