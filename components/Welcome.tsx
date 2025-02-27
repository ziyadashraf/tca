

interface WelcomeProps {
  heading: string;
  paragraph: string;
}

const Welcome = ({ heading, paragraph }: WelcomeProps) => {
  return (
    <div className="flex flex-col items-center border-bottom lg:px-64 md:px-12 pt-24 px-6 pb-12">
      <h3 className="text-black text-3xl font-semibold mb-8 uppercase text-center">
        {heading}
      </h3>
      <p className="text-black text-lg font-normal text-justify">{paragraph}</p>
    </div>
  );
};

export default Welcome;
