import React from "react";

const ProjectsCard = ({
  image,
  projectName,
  date,
  description,
  github,
  demo,
  skills,
}) => {
  return (
    <div className="w-full lgl:w-3/4">
      <div className="w-full h-auto flex flex-col lgl:flex-row justify-between rounded-lg shadow-shadowOne p-4 bg-gradient-to-r from-[#1e2024] to-[#23272b]">
        <div className="w-full h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-2 flex flex-col lgl:flex-col gap-3 justify-center">
          <img
            className="h-72 lgl:h-80 rounded-lg object-cover overflow-hidden "
            src={image}
            alt="Loading"
          />
          <div className="w-full flex flex-row justify-center lgl:px-6 py-3 gap-4">
            <button
              type="button"
              class="text-gray-900 bg-[#F7BE38] hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 gap-2"
              onClick={demo}
            >
              <svg
                class="w-4 h-4 me-2 -ms-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="paypal"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
                ></path>
              </svg>
              Project Demo
            </button>
            <button
              type="button"
              class="text-black bg-[#f8f8f8] hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2 gap-2"
              onClick={github}
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              Project Code
            </button>
          </div>
        </div>
        <div className="w-full h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 lgl:p-10 flex flex-col justify-center gap-4 lgl:gap-8">
          <div className="flex flex-col justify-center lgl:items-center py-2 lgl:py-6 border-b-2 border-b-gray-900">
            <div className="flex flex-col justify-center lgl:items-center">
              <h3 className="text-xl lgl:text-2xl font-bold  text-center">
                {projectName}
              </h3>
              <p className="text-base text-designColor mt-3 text-center">
                {date}
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {skills.map((skill, index) => (
                  <div key={index}>{skill}</div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-base text-justify  text-gray-400 font-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
