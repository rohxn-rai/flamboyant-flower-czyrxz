import { Skeleton } from "@/components/ui/skeleton";

const SignFunctionLoading = () => {
  return (
    <div className="max-w-2xl w-full mx-auto border p-3 rounded-lg">
      <div className="m-6">
        <h1 className="text-center text-4xl">Loading...</h1>
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-xs" />
            <Skeleton className="h-9 w-full" />
          </div>
          
          <Skeleton className="h-10 w-full bg-primary" />
        </div>
      </div>
    </div>
  );
};

export default SignFunctionLoading;
