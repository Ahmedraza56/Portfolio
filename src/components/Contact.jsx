import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'; // Import SweetAlert
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc/index";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      "service_wnjmkag",
      "template_g5chrdh",
      {
        from_name: form.name,
        to_name: "Ahmed Raza",
        from_email: form.email,
        to_email: "ahmedrazy830@gmail.com",
        message: form.message
      },
      's_CGy9xLfBQLZqfk9'
    ).then(() => {
      setLoading(false);
      // Use SweetAlert instead of alert
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Submitted successfully!',
      });
      setForm({ name: "", email: "", message: "" });
    }, (error) => {
      // Use SweetAlert instead of alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={`${styles.sectionSubText}`}>Get In Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='mb-4 text-white font-medium'>Your Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='Whats your name' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' required/>
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 text-white font-medium'>Your Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='Whats your Email' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' required/>
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 text-white font-medium'>Your Message</span>
            <textarea rows={7} name='message' value={form.message} onChange={handleChange} placeholder='What do you what to say' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' required/>
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>{loading ? "Sending..." : "Send"}</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tweet", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
