import errorImage from "../assets/images/error.svg";
import PrimaryBtn from "../components/buttons/primaryBtn";

const ErrorPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container min-h-screen px-6 py-12 mx-auto flex flex-col-reverse items-center justify-center lg:flex-row lg:gap-12">
        {/* Text content */}
        <div className="lg:w-1/2">
          <p className="text-sm font-medium text-custom-green">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Sorry, the page you are looking for doesn't exist.
          </p>

          <PrimaryBtn text="Take me home" />
        </div>

        <div className="relative w-full mb-8 lg:mb-0 lg:w-1/2 lg:mt-0">
          <img className="" src={errorImage} alt="Error Image" />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
