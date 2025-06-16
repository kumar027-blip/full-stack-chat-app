import chatGif from "../assets/Chatting.gif"; // Use the correct file name and path

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="flex justify-center mb-8">
          <img
            src={chatGif}
            alt="Chatting Animation"
            className="max-w-xs w-full h-auto rounded-2xl"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
