import { motion } from "framer-motion";

const usesData = [
  {
    section: "Databases and Cloud",
    items: [
      { name: "MongoDB" },
      { name: "PHPmyAdmin" },
      { name: "Firebase" },
    ],
  },
  {
    section: "Editor",
    items: [
      { name: "Visual Studio Code" },
      { name: "EclipseIDE" },
      { name: "AndroidStudio" },
    ],
  },
  {
    section: "Operating System",
    items: [
      { name: "UBUNTU" },
      { name: "WINDOWS" },
    ],
  },
  {
    section: "Other Software",
    items: [
      { name: "Adobe PS" },
      { name: "Adobe AI" },
      { name: "CANVA" },
      { name: "Figma" },
      { name: "WORD" },
      { name: "POWERPOINT" },
      { name: "EXCEL" },

    ],
  },
];

const UsesList = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "linear", duration: 0.5 }}
      className="container relative"
    >
      <div className="flex flex-col items-start">
        {usesData.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4 dark:text-white">
              {section.section}
            </h2>
            <ul>
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="list-inside list-disc leading-loose text-neutral-700 dark:text-neutral-300"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default UsesList;
