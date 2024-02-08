import React from 'react';
import { useRouter } from 'next/router';
import { getContact } from '../../services';
import { Loader, Layout } from '../../components';

const Contact = ({ contact }) => {

  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <Layout metaContent={contact.metaContent} title={contact.title}>
    <div className="bg-white shadow-lg py-24 mt-8 rounded-lg lg:p-8 pb-12 mb-8">
      <div className="px-4 lg:px-0">
          <h1 className="mb-8 text-3xl font-semibold">{contact.title}</h1>

            <section className="section py-14" id="home">
                <div className="container">
                    <div className="lg:flex justify-center">
                       <div className="lg:w-2/3 mx-2">
                           <div className="text-center">
                               <h1 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
                                   Let's keep in touch.
                                </h1>
                                <p className="text-base text-gray-400">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor Aenean sollicitudin, adipisicing elit sed lorem quis bibendum auctor.</p>
                            </div>
                          </div>
                      </div>
                   </div>
              </section>



              <section className="section py-10">
                  <div className="container">
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                           <div className="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between">
                                <div className="mb-6">
                                   <h1 className=" text-base font-medium mb-2">Email Address</h1>
                                      <a className="text-gray-400 text-sm font-medium" href="mailto:studentfontein@gmail.com">studentfontein@gmail.com</a>
                                 </div>

                                       <div className="mb-6">
                                           <h1 className=" text-base font-medium mb-2">Telephone</h1>
                                           <a  className="text-gray-400 text-sm font-medium" href="/">+(27)71 128-1113</a>
                                       </div>

                                       <div className="mb-6">
                                           <h1 className=" text-base font-medium mb-2">Address</h1>
                                           <h1 className="text-gray-400 text-sm">Mbombela</h1>
                                       </div>
                                   </div>
                               </div>

                               <div className="lg:col-span-2">
                                  <form>
                                       <p id="error-msg"></p>
                                       <div id="simple-msg"></div>
                                       <div className="space-y-6">
                                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                              <input type="text" name="name" id="name" className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3" placeholder="Your Name" />

                                              <input type="email" className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3" id="email" name="email" placeholder="Your Email" />
                                           </div>

                                           <input type="text" name="subject" id="subject" placeholder="Subject" className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3" />

                                          <textarea className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3" placeholder="Your Message" name="comments" id="comments" rows="3" spellcheck="false"></textarea>

                                         <div className="text-right">
                                               <input type="submit" id="submit" name="send" className="py-4 px-6 rounded-full uppercase cursor-pointer text-sm transition-all bg-slate-800 hover:bg-black text-white" value="Send Message" />
                                           </div>
                                       </div>
                                   </form>
                               </div>
                           </div>
                       </div>
             </section>
          </div>
      </div>
    </Layout>
  );
};

export default Contact;

export async function getStaticProps() {
  const contact = (await getContact()) || [];
  return {
    props: { contact },
  };
}
