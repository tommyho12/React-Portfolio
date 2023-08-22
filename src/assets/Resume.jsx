import Header from "./Header";
const Resume = () => {
  return (
    <>
      <Header res="bg-gray-500 " />
      <body className="h-screen flex flex-col px-1.5 items-center ">
        <h1 className="text-gray-400 text-bold font-bold text-5xl pt-12">
          Resume
        </h1>
        <a href="Resume.pdf" download>
          <h2 className="pt-12 text-3xl underline">Download my Resume!</h2>
        </a>
        <h1 className="pt-16 font-bold text-4xl">Technical Skills</h1>
        <ul className="pt-7 text-2xl">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>MySQL</li>
          <li>Express</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </body>
    </>
  );
};

export default Resume;