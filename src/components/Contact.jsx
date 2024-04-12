// import React from "react";

const Contact = () => {
  return (
    <div
      className="flex justify-center my-5 h-full sm:h-[80vh] items-center pb-10"
      id="contact"
    >
      <div className="mx-auto max-w-[1200px]">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mx-1 my-6 bg-gray-800 rounded-xl flex flex-col justify-around">
              <h1 className="text-4xl  text-white">
                Contact <span>ME</span>
              </h1>
              <p className="text-normal text-lg font-medium text-gray-400">
                Let&apos;s Connect on LinkedIn <br /> Or Send Me an Email
              </p>
              <div className="flex items-center text-gray-400 ">
                <svg
                  className="size-9 fill-gray-500"
                  data-name="1-Email"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z" />
                </svg>
                <div className="ml-4 text-md tracking-wide w-40">
                  <p>Hashir Dev</p>
                </div>
              </div>
            </div>

            <form
              action="https://api.web3forms.com/submit"
              method="post"
              className=" p-6 flex flex-col justify-center max-w-[700px]"
            >
              <input
                type="hidden"
                name="access_key"
                value="af1eaeb3-c648-487f-ac87-7c58aa8ef2fb"
              />
              <div className="fkex flex-col">
                <input
                  type="name"
                  name="name"
                  required
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                />
              </div>
              <div className="fkex flex-col">
                <input
                  type="email"
                  name="email"
                  required
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                />
              </div>

              <div className="fkex flex-col">
                <textarea
                  type="message"
                  required
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className=" w-100 mt-2 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                />
              </div>

              <button
                type="submit"
                className=" md:w-32 bg-primary-color text-white py-3 px-6 rounded-lg mt-3 hover:text-purple-300 "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
