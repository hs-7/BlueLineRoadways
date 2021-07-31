import React from 'react';
import SearchBar from './SearchBar';

export default function HomeHeroSec() {
    return (
        <section class="hero-section container-fluid my-1">
        <div class="col-md-11 row mx-auto">
            <div class="my-5 mx-auto text-light">
                <div class="mb-5">
                    <h1 className="heroHeading">Hi! Welcome</h1>
                    <p className="heroText">Choose Your Sefe Routes</p>
                </div>
                <SearchBar/>
            </div>
        </div>
    </section>
    )
}
