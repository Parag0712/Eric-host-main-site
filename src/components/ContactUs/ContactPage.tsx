'use client'

import Container from "../Conatianers/Container"
import { Button } from "../ui/button"
import { address, email, phone, facebook, instagram, linkdin, twitter, youtube } from '../../data/Navbar/link.json'
import { useState } from "react";
import axios from "axios";
import { sendGAEvent } from "@next/third-parties/google";
interface FormData {
    name: string;
    phone: string;
    email: string;
    message: string;
}
interface FormErrors {
    name: boolean;
    phone: boolean;
    email: boolean;
    message: boolean;
}
export function ContactPage() {
    const [loading, setLoading] = useState<boolean>();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [formErrors, setFormErrors] = useState<FormErrors>({
        name: false,
        phone: false,
        email: false,
        message: false,
    });

    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: value ? false : true,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = {
            name: !formData.name,
            phone: !formData.phone,
            email: !formData.email,
            message: !formData.message,
        };

        setFormErrors(newErrors);
        if (Object.values(newErrors).some((isError) => isError)) {
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post("api/openticket", {
                deptid: 1,
                subject: "Contact Us Fomr",
                message: formData.message,
                name: formData.name,
                email: formData.email,
                contactid: formData.phone
            });
            setFormData({
                email: "",
                message: "",
                name: "",
                phone: ""
            });
            console.log(response);
            alert("Form Submitted");
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false)
        }
    };

    return (
        <Container>

            <div className="mx-auto  lg:px-4">
                <div className="mx-auto py-10 md:py-16">
                    <div className="grid items-center justify-items-stretch xl:gap-x-4 gap-y-10 md:grid-cols-[1fr,1.3fr] lg:grid-cols-2">
                        {/* contact from */}
                        <div>

<button
  onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}
>
  Send Event
</button>
</div>
                        <div className="lg:w-1/2 lg:mx-6 order-1 md:order-[0]">
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                                Contact us for <br /> more info
                            </h1>

                            <div className="mt-6 space-y-8 md:mt-8">
                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                        <a href="#map">
                                            {address}
                                        </a>
                                    </span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                        <a href={`tel:${phone}`}>
                                            {phone}
                                        </a>
                                    </span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                        <a href={`mailto:${email}`}>

                                            {email}
                                        </a></span>
                                </p>
                            </div>

                            <div className="mt-6 w-80 md:mt-8">
                                <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>

                                <div className="flex mt-4 -mx-1.5 ">
                                    <a className="mx-1.5 dark:hover:text-indigo-400 text-gray-400 transition-colors duration-300 transform hover:text-indigo-500" href={twitter}>
                                        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                                        </svg>
                                    </a>

                                    <a className="mx-1.5 dark:hover:text-indigo-400 text-gray-400 transition-colors duration-300 transform hover:text-indigo-500" href={linkdin}>
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                            <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                            <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                                        </svg>
                                    </a>

                                    <a className="mx-1.5 dark:hover:text-indigo-400 text-gray-400 transition-colors duration-300 transform hover:text-indigo-500" href={facebook}>
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
                                        </svg>
                                    </a>

                                    <a className="mx-1.5 dark:hover:text-indigo-400 text-gray-400 transition-colors duration-300 transform hover:text-indigo-500" href={instagram}>
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* contact from */}
                        <div className="flex items-center justify-center">
                            {/* style={{ boxShadow: "7px 9px 66px 16px rgba(0,0,0,0.1)"  */}
                            <div className=" rounded-3xl   xl:px-12 py-7 lg:py-12 w-full shadow-none" >
                                <p className="text-2xl font-bold text-gray-900 md:text-4xl text-center md:text-left">Get in touch</p>
                                <p className="mt-4 text-lg text-gray-600 text-center md:text-left">
                                    Our friendly team would love to hear from you.
                                </p>
                                {submitted && (
                                    <p className="border-[1px] border-green-700 bg-green-50 py-2 px-2 rounded-lg text-[15px]  font-semibold mb-0 text-center text-green-500">
                                        Thank you for reaching out! We will get back to you shortly.
                                    </p>
                                )}

                                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                                    <div className="grid w-full gap-y-4 md:gap-x-4 ">
                                        <div className="grid w-full items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="name"
                                            >
                                                Name
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Name"
                                                value={formData.name}
                                                pattern="[A-Za-z\s]*"
                                                title="Only alphabet characters and spaces are allowed"
                                                onChange={handleChange}
                                            />
                                            {formErrors.name && (
                                                <p className="text-xs italic text-red-600">
                                                    Please fill out this field.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid w-full  items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                            type="email"
                                            required
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {formErrors.email && (
                                            <p className="text-xs italic text-red-600">
                                                Please fill out this field.
                                            </p>
                                        )}
                                    </div>
                                    <div className="grid w-full  items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="phone_number"
                                        >
                                            Phone number
                                        </label>
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                            type="tel"
                                            required                                        
                                            maxLength={12}
                                            minLength={10}
                                            id="phone_number"
                                            name="phone"
                                            placeholder="Phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            pattern="\d{10,12}"
                                            title="Phone number must be between 10 and 12 digits"
                                        />
                                        {formErrors.phone && (
                                            <p className="text-xs italic text-red-600">
                                                Please fill out this field.
                                            </p>
                                        )}
                                    </div>
                                    <div className="grid w-full  items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="message"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                            id="message"
                                            name="message"
                                            placeholder="Leave us a message"
                                            cols={3}
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                        {formErrors.message && (
                                            <p className="text-xs italic text-red-600">
                                                Please fill out this field.
                                            </p>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        onClick={() => sendGAEvent({ event: "HeroButtonClicked", value: "xyz" })
                                        }
                                        className={`rounded-md my-6 w-full text-[16px] border-[1px] border-primary font-poppins py-5 `}  >{loading ? "Loading..." : "Send Message"}</Button>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    )
}
