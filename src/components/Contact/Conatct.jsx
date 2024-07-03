import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3e55aee4-5c14-4cb8-b945-dfa81252a6e0");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
                toast.success('Form submitted successfully!');
            } else {
                console.log("Error", data);
                setResult(data.message);
                toast.error('Form submission failed.');
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            setResult("Error submitting the form");
            toast.error('Form submission failed.');
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div id='contact' className='Contact flex flex-col justify-center items-center gap-20'>
                <div className="contact-title">
                    <h1 className='font-semibold text-4xl'>Get in touch</h1>
                </div>
                <div className="contact-section flex gap-36">
                    <div className="contact-left flex flex-col gap-7">
                        <h1>Let's talk</h1>
                        <p className='max-w-[550px] text-xl text-[#D8D8D8]'>I specialize in React, Next.js, Tailwind CSS, and creating responsive, user-friendly web designs. Let's bring your vision to life!</p>
                        <div className="contact-details text-xl text-[#D8D8D8] gap-7">
                            <div className='contact-detail'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/slmechys.json"
                                    trigger="hover"
                                    colors="primary:#fff">
                                </lord-icon>
                                <p>zaynhunzai15@gmail.com</p>
                            </div>
                            <div className='contact-detail'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/srsgifqc.json"
                                    trigger="hover"
                                    colors="primary:#fff" >
                                </lord-icon>
                                <p>+92 3421083883</p>
                            </div>
                            <div className='contact-detail'>
                                <IoLocationSharp className='location w-8 h-8' />
                                <p>Hunza, Gilgit</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="contact-right flex flex-col items-start gap-7">
                        <label htmlFor="">Your Name</label>
                        <input type="text" name='name' placeholder='Enter your name' />
                        <label htmlFor="">Your Email</label>
                        <input type="email" name='email' placeholder='Enter your email' />
                        <label htmlFor="">Write your message here</label>
                        <textarea className='text-area resize-none' name="message" id="" placeholder='Enter your message'></textarea>
                        <button type='submit' className='contact-submit'>Submit-now</button>
                    </form>
                </div>
                <div className="result-message">
                    {result && <p>{result}</p>}
                </div>
            </div>
        </>
    )
}

export default Contact;
