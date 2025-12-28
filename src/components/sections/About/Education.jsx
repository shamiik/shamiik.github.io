
const Education = () => {
  return (
    <div id="education" className="py-12 bg-gray-50/50 dark:bg-black/20 relative z-10 rounded-3xl my-8">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 reveal">
          My <span className="text-primary">Journey</span>
        </h2>
        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 space-y-12">
          <div className="relative pl-8 md:pl-12 reveal">
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-gray-50 dark:border-dark"></div>
            <span className="text-sm text-primary font-bold uppercase tracking-wider">2019 - 2023</span>
            <h3 className="text-xl font-bold mt-1">B.Sc. in Elelctrical and Electronic Engineering</h3>
            <p className="text-gray-500 italic mb-2">Ahsanullah University of Science and Technology, Dhaka, Bangladesh</p>
          </div>
          <div className="relative pl-8 md:pl-12 reveal">
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-gray-50 dark:border-dark"></div>
            <span className="text-sm text-primary font-bold uppercase tracking-wider">2016 - 2018</span>
            <h3 className="text-xl font-bold mt-1">Science</h3>
            <p className="text-gray-500 italic mb-2">Government Science College, Dhaka </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
