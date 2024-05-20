import { Search } from "@carbon/icons-react";
import { useForm } from "react-hook-form";
import PrivacyImage from "../assets/images/privacy.png";
export default function PrivacyPolicy(){
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const sendRequest = (data) => {
        console.log(data);
          
    }
    return(
        <>
            <section className="xui-pt-7 xui-pb-8 light-grey-bg xui-container">
                <div className="xui-d-flex xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse">
                    <div className="xui-lg-col-7 xui-col-12">
                        <h1 className="xui-lg-font-sz-300 xui-font-sz-180 xui-lg-w-fluid-80 xui-w-fluid-100 bold-font xui-font-w-600 xui-font-9">Privacy Policy</h1>
                        <p className="xui-font-sz-90 xui-lg-w-fluid-60 xui-w-fluid-100 xui-line-height-1-half xui-opacity-8 xui-mt-half">Protecting your privacy is our priority. Discover how we ensure your data stays safe.</p>
                        <form className="xui-mt-1-half" noValidate onSubmit={handleSubmit(sendRequest)} autoComplete="off">
                            <div className="xui-d-flex xui-bdr-rad-half xui-font-sz-80 xui-mt-half xui-max-w-400 xui-w-fluid-100 search-keyword">
                                <button className="xui-w-50 xui-h-50 xui-bg-none xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                    <Search />
                                </button>
                                <input style={{"width": "calc(100% - 50px)", "outline": "none", "border": "none", "padding": "0 0 0 .5rem", "border": "none"}} {...register('search', {required: true})} type="text" className="xui-font-sz-90 xui-bg-none" placeholder="Search for keyword" />
                            </div>
                            {errors.search && errors.search.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Field is empty</span> : null}
                            
                        </form>
                    </div>
                    <div className="xui-lg-col-5 xui-col-12">
                        <img className="xui-img-500" src={PrivacyImage} alt="" />
                    </div>
                </div>
                
            </section>
            <section className="xui-container xui-py-3">
                <div className="xui-d-grid xui-lg-grid-col-1 xui-flex-ai-center xui-grid-col-1 xui-grid-gap-4">
                    <div>
                        <p className="xui-font-sz-90 xui-opacity-6">01)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">Introduction</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">Welcome to Sunflower Pantry! We are committed to safeguarding your privacy and ensuring the security of your personal information. This Privacy Policy outlines how Sunflower Pantry collects, uses, maintains, and discloses information obtained from users (each referred to as a "User") of our Sunflower Pantry mobile application ("App"). This Privacy Policy applies to all aspects of the App and extends to cover all products and services provided by Sunflower Pantry, emphasizing our dedication to protecting your privacy across all interactions with our platform.</p>
                    </div>
                    <div>
                        <p className="xui-font-sz-90 xui-opacity-6">02)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">Information We Collect</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">Sunflower Pantry may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users register an account within the App, subscribe to our newsletter, respond to a survey, or fill out a form. Users may be asked for, as appropriate, name, email add-ress, mailing address, and phone number. Users may, however, visit the App anonymously. Sunflower Pantry will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personal identification information, except that it may prevent them from engaging in certain App-related activities.</p>
                    </div>
                    <div>
                        <p className="xui-font-sz-90 xui-opacity-6">03)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">How We Use Your Information</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">Sunflower Pantry may collect and utilize Users' personal information for various purposes. Firstly, we use this information to enhance customer service by efficiently responding to their inquiries and support needs. Secondly, we employ collected data to customize the user experience, gaining insights 
into how Users collectively interact with our App and its resources. Additionally, we may utilize Users' email addresses to send periodic updates,
account-related information, and responses to inquiries. Users also have the option to opt into our mailing list, receiving emails containing 
company news, updates, and related product or service information. Should Users wish to unsubscribe from receiving future emails, 
detailed unsubscribe instructions are provided at the bottom of each email.</p>
                    </div>
                    <div>
                        <p className="xui-font-sz-90 xui-opacity-6">04)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">Information Sharing and Disclosure</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">We may share your information with trusted third parties for various purposes, encompassing data processing, analytics, and marketing endeavors. These third parties may comprise service providers, business partners, or other entities with whom we have established contractual agreements to facilitate the delivery of our services and enhance your experience. Rest assured, we uphold a commitment to safeguarding your privacy, and 
under no circumstances will we sell or rent your personal information to third parties without first obtaining your explicit consent.</p>
                    </div>
                    <div>
                        <p className="xui-font-sz-90 xui-opacity-6">05)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">Your Choices</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">You retain autonomy concerning the collection and utilization of your information within the app. You possess the option to opt-out of specific data collection practices, exercise control over the updating or deletion of your personal information, and regulate your communication preferences 
within the app settings.  It's imperative to acknowledge that while exercising these choices, it's plausible that certain features of the app may 
become unavailable should you opt to curtail the collection of particular information.
</p>
                    </div>
                    <div>
                        <p className="xui-font-sz-90 xui-opacity-6">06)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">Data Security</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">Ensuring the security of your information is a paramount priority for us, and we have instituted robust measures to safeguard it against unauthorized access, disclosure, alteration, or destruction. These comprehensive measures encompass encryption protocols, stringent access controls, 
and periodic security audits to fortify our defenses and maintain the integrity of your data. However, it's essential to recognize 
that despite our diligent efforts, no method of transmission over the internet or electronic storage can be entirely 
impervious to vulnerabilities and we cannot guarantee absolute security.</p>
                    </div>
                    <div>
                        <p className="xui-font-sz-90 xui-opacity-6">07)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">Changes to This Privacy Policy</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">Periodically, we reserve the right to update our privacy policy to align with evolving practices, as well as for operational, legal, or regulatory compliance purposes. Any alterations deemed material will be promptly communicated to you by means of posting the revised privacy policy on this page. We strongly advise you to make it a regular practice to periodically review this privacy policy so that you can stay well-informed about any 
modifications or updates that may have been implemented.</p>
                    </div>
                    <div>
                        <p className="xui-font-sz-90 xui-opacity-6">08)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">Contact Us</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">If you have any questions or concerns about our privacy policy or our practices regarding your personal information, please contact us at [email address]. We will respond to your inquiry as soon as possible and work to address any concerns you may have. The protection of your privacy is 
of paramount importance to us, and we are steadfastly dedicated to ensuring the safeguarding and confidentiality of your personal informa-
tion.</p>
                    </div>
                </div>
            </section>
          
    
        </>
    )
}