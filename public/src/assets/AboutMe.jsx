import Header from './Header';
const AboutMe = () => {
    return (
      <>
      <Header about="bg-gray-500" />
      <body className="h-screen flex flex-col px-1.5 items-center">
        <h1 className="text-gray-400 text-bold font-bold text-5xl pt-12">About Me</h1>
        <div className="flex-shrink-0 pt-5">
        <img src="pfp.png" alt="Profile Picture" width="200" height="200"/>
        </div>
        <p className="pt-12 px-14 text-3xl text-white">Greetings! My name is Tommy Ho, I am a passionate front-end developer with a strong affinity for crafting immersive digital experiences. With a keen eye for design and a deep understanding of HTML, CSS, and JavaScript, I thrive on bringing static ideas to life through interactive and responsive websites. Drawing inspiration from both aesthetics and functionality, I aspire to further expand my skill set by delving into modern frameworks such as React and Vue.js, in order to create seamless and dynamic user interfaces. Driven by an insatiable curiosity, I am committed to staying at the forefront of evolving web technologies, ensuring that my work remains innovative, impactful, and user-centered.</p>
     </body>
      </>
    );
  };
  
  export default AboutMe;