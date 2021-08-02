import React from 'react'

export default function HomeContSec() {
    return (
            <section class="contact-section py-5 mt-1">
                <div class="contact col-md-9 d-flex mx-auto">
                    <div class="contactus w-25 bg-dark text-white p-4">
                        <h4>Contact Us</h4>
                        <p class="fs-sm fw-light">We would to hear our customers feedbacks and queries to makes our services better.</p>
                    </div>
                    <div class="contactForm w-75 p-5 d-flex flex-column">
                        <input type="email" class="emailIn d-block mb-4" placeholder="Email"/>
                        <textarea placeholder="Write here" class="textIn d-block mb-4"></textarea>
                        <input type="submit" class="subBtn btn"/>
                    </div>
                </div>
            </section>
    )
}
