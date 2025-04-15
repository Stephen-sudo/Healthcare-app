import Image from "next/image";
import { Button } from "./ui/button";

interface Buttonprops {
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: Buttonprops) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div>
          <Image
            src={"/assets/icons/loader.svg"}
            width={24}
            height={24}
            alt="loader"
          />
          loading
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
