import { useForm } from "react-hook-form";
import { motion } from "framer-motion";




const ContactUs = () => {
  const inputStyles = "mb-5 w-full rounded-lg px-5 py-3 placeholder-black ";

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="mx-auto pt-1 pb-32">
     
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText> */}
        </motion.div>

          <h2 className="text-4xl py-1 mx-auto text-left mb-10 dark:text-white  ">Contact</h2>
        {/* FORM*/}
        <div className=" mt-10 w-4/4 md:w-4/6  ">
          <motion.div
            className="mt-10  md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/028616904d610b41d25ce8d70864adc6"
              method="POST"
            >
              <input
                className={`${inputStyles} bg-gradient-to-r from-cyan-500 to-teal-500`}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-teal-400">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className={`${inputStyles}bg-gradient-to-r from-cyan-500 to-teal-500`}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-teal-600">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={`${inputStyles} bg-gradient-to-r from-cyan-500 to-teal-500`}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 bg-teal-600">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="mt-1 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          
        </div>
    
    </section>
  );
};

export default ContactUs;