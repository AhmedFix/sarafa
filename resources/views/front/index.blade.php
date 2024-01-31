@extends('layouts.front.app')

@section('content')

    <div class="section center"><img
            src="https://assets-global.website-files.com/65b744f730039d33f4c5fa3f/65b744f730039d33f4c5faed_arrow.svg"
            alt="" class="arrow">
        <div data-w-id="6b220cb1-4b9c-7fb0-75b9-53ff4a6c35a2"
            style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); opacity: 1; transform-style: preserve-3d;"
            class="hero-content">
            <h1 class="heading-3">Sarafa Co</h1>
            <h3 class="hero-subhead">Confidence and speed in buying and exchanging crypto currences.</h3>
            <a href="#" class="button w-button">Buy</a>
            <a href="#" class="button contact w-button">Sell</a>
        </div>
        <img src="assets/images/startup.svg" alt="" data-w-id="77e69727-c455-8e07-0990-833a661c94ea"
            style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); opacity: 1; transform-style: preserve-3d;"
            class="hero-image">
    </div>
    <div id="about" class="section wide img">
        <div data-w-id="b126983d-9126-fc06-c81d-1318685e2add"
            style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); opacity: 1; transform-style: preserve-3d;"
            class="wrap">
            <div class="title">Crypto Price Chart</div>
            <h2 class="heading-4">Now you can know the current currency rates.</h2>
        </div>
        <table class="table crypto-table table-nowrap align-middle table-borderless">
            <thead>
                <tr>
                    <th scope="col">Icon</th>
                    <th scope="col">Crypto Name</th>
                    <th scope="col">Buy Price</th>
                    <th scope="col">Sell Price</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Chart</th>
                    <th scope="col" style="width: 120px;">Action</th>
                </tr>
            </thead>
            <tbody>
                 
                @foreach($currencies as $currency)
                    <tr>
                        <td>
                            <img src="{{$currency -> icon_path}}" alt="" class="avatar-sm rounded-circle me-2" />
                        </td>
                        <td>
                            <a href="#" class="text-body">{{$currency -> name}}</a>
                        </td>
                        <td>{{$currency -> price * 1.05}} SDG</td>
                        <td>{{$currency -> price - ($currency -> price  * 0.05)}} SDG</td>
                        <td><span class="badge {{$currency ->rate <=0 ? 'badge-soft-danger' : ($currency ->rate < 5 ? 'badge-soft-info' : 'badge-soft-success')}} mb-0">{{$currency -> rate}}%</span></td>
                        <td>125</td>
                        <td>
                            <a href="#" class="btn-sell-primary button w-button">Sell</a>
                            <a href="#" class="btn-buy-primary button w-button">Buy</a>
                        </td>
                    </tr>
                @endforeach
                {{-- <tr>
                    <td>
                        <img src="assets/images/ethereum_icon.png" alt="" class="avatar-sm rounded-circle me-2" />
                    </td>
                    <td>
                        <a href="#" class="text-body">Ethereum ETH</a>
                    </td>
                    <td>2,200 SDG</td>
                    <td>2,310 SDG</td>
                    <td><span class="badge badge-soft-info mb-0">+ 7,02%</span></td>
                    <td>132</td>
                    <td>
                        <a href="#" class="btn-sell-primary button w-button">Sell</a>
                        <a href="#" class="btn-buy-primary button w-button">Buy</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="assets/images/ripple_icon.png" alt="" class="avatar-sm rounded-circle me-2" />
                    </td>
                    <td>
                        <a href="#" class="text-body">Ripple XRE</a>
                    </td>
                    <td>5,800 SDG</td>
                    <td>5,090 SDG</td>
                    <td><span class="badge badge-soft-danger mb-0">- 6.41%</span></td>
                    <td>112</td>
                    <td>
                        <a href="#" class="btn-sell-primary button w-button">Sell</a>
                        <a href="#" class="btn-buy-primary button w-button">Buy</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="assets/images/litecoin_icon.png" alt="" class="avatar-sm rounded-circle me-2" />
                    </td>
                    <td>
                        <a href="#" class="text-body">LiteCoin LTC</a>
                    </td>
                    <td>75,100 SDG</td>
                    <td>78,855 SDG</td>
                    <td><span class="badge badge-soft-info mb-0">+ 3.50%</span></td>
                    <td>121</td>
                    <td>
                        <a href="#" class="btn-sell-primary button w-button">Sell</a>
                        <a href="#" class="btn-buy-primary button w-button">Buy</a>
                    </td>
                </tr> --}}
            </tbody>
        </table>
    </div>
    <div class="section">
        <div id="features" class="feature-wrap">
            <div data-w-id="4593c4b7-56e8-060a-be57-648b0e08fc65"
                style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); opacity: 1; transform-style: preserve-3d;"
                class="feature-content">
                <div class="title">About Us</div>
                <h2 class="black">Sarafa Co</h2>
                <p class="paragraph-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                    in eros elementum tristique. </p>
            </div>
            <div class="feature-image"></div><img src="assets/images/Logo.jpg" width="341" alt="" class="image-2">
        </div>
        <div class="feature-wrap icons">
            <div class="feature-content icons"><img src="assets/images/feature-1.svg" width="80" alt=""
                    class="feature-icon">
                <h4 class="black-text">Easy to buy &amp; sell</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique. </p>
            </div>
            <div class="feature-content icons"><img src="assets/images/feature-2.svg" width="74" alt=""
                    class="feature-icon">
                <h4 class="black-text">Different Payment ways</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique. </p>
            </div>
            <div class="feature-content icons"><img src="assets/images/feature-3.svg" alt="" class="feature-icon">
                <h4 class="black-text">Speed Support</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique. </p>
            </div>
        </div>
        <div data-delay="4000" data-animation="slide" class="quote-slider w-slider" data-autoplay="false"
            data-easing="ease"
            style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); opacity: 1; transform-style: preserve-3d;"
            data-hide-arrows="false" data-disable-swipe="false" data-w-id="321c18fb-db93-7e62-3afc-4dab2862f5d4"
            data-autoplay-limit="0" data-nav-spacing="8" data-duration="500" data-infinite="true" role="region"
            aria-label="carousel">
            <div class="w-slider-mask" id="w-slider-mask-0">
                <div class="w-slide" aria-label="1 of 2" role="group" style="transform: translateX(0px); opacity: 1;">
                    <div class="quote-wrap">
                        <img src="assets/images/client_1.png" alt="" class="avatar" />
                        <h5>Ahmed Adli</h5>
                        <div class="quote-attribution">
                            <p class="paragraph-5">RozerTechnology</p>
                            <div class="quote-dash"></div>
                            <p class="paragraph-6"><small>Co-Founder</small></p>
                        </div>
                        <h3>HeadNulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi
                            erat porttitor ligula, eget lacinia odio sem nec elit. Pus sit amet fermentum. Donec id elit
                            non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.ing</h3>

                    </div>
                </div>
                <div class="slide w-slide" aria-label="2 of 2" role="group" aria-hidden="true"
                    style="transform: translateX(0px); opacity: 1;">
                    <div class="quote-wrap" aria-hidden="true">
                        <img src="assets/images/client_2.jpg" alt="" class="avatar" aria-hidden="true" />
                        <h5></h5> Eman Hassan</h5>
                        <div class="quote-attribution">
                            <p class="paragraph-5">Queenzoo</p>
                            <div class="quote-dash"></div>
                            <p class="paragraph-6"><small>Co-Founder</small></p>
                        </div>
                        <h3 class="heading-5" aria-hidden="true">HeadNulla vitae elit libero, a pharetra augue. Duis
                            mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                            Pus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem
                            malesuada magna mollis euismod.ing</h3>
                    </div>
                </div>
                <div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore=""></div>
            </div>
            <div class="left-arrow w-slider-arrow-left" role="button" tabindex="0" aria-controls="w-slider-mask-0"
                aria-label="previous slide">
                <div class="slider-arrow w-icon-slider-left"></div>
            </div>
            <div class="right-arrow w-slider-arrow-right" role="button" tabindex="0" aria-controls="w-slider-mask-0"
                aria-label="next slide">
                <div class="slider-arrow w-icon-slider-right"></div>
            </div>
            <div class="slide-nav w-slider-nav w-slider-nav-invert w-round">
                <div class="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 2" aria-pressed="true"
                    role="button" tabindex="0" style="margin-left: 8px; margin-right: 8px;"></div>
                <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 2" aria-pressed="false"
                    role="button" tabindex="-1" style="margin-left: 8px; margin-right: 8px;"></div>
            </div>
        </div>
        <div data-w-id="23f92271-dba9-fb12-00d3-758ef4d10fb2"
            style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); opacity: 1; transform-style: preserve-3d;"
            class="feature-wrap logos">
            <img src="assets/images/Payment-Way-Banner.png" alt=""
                sizes="(max-width: 991px) 90vw, (max-width: 3885px) 70vw, 2720px"
                srcset="https://assets-global.website-files.com/65b744f730039d33f4c5fa3f/65b752241c3ea747225b7645_Payment-Way%20Banner-p-500.png 500w, https://assets-global.website-files.com/65b744f730039d33f4c5fa3f/65b752241c3ea747225b7645_Payment-Way%20Banner-p-800.png 800w, https://assets-global.website-files.com/65b744f730039d33f4c5fa3f/65b752241c3ea747225b7645_Payment-Way%20Banner-p-1080.png 1080w, https://assets-global.website-files.com/65b744f730039d33f4c5fa3f/65b752241c3ea747225b7645_Payment-Way%20Banner-p-1600.png 1600w, https://assets-global.website-files.com/65b744f730039d33f4c5fa3f/65b752241c3ea747225b7645_Payment-Way%20Banner-p-2000.png 2000w, https://assets-global.website-files.com/65b744f730039d33f4c5fa3f/65b752241c3ea747225b7645_Payment-Way%20Banner-p-2600.png 2600w, https://assets-global.website-files.com/65b744f730039d33f4c5fa3f/65b752241c3ea747225b7645_Payment-Way%20Banner.png 2720w"
                class="image-6">
        </div>
    </div>
    <div class="bottom-image-wrap"></div>
    <div id="download" class="section wide purple">
        <div data-w-id="376e2a1f-ec70-0dab-11ea-b1863101e37b"
            style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); opacity: 1; transform-style: preserve-3d;"
            class="wrap">
            <h2 class="heading-6">Ready to get started?</h2>
            <div class="button-wrap">
                <a href="#" class="button w-button">Buy</a>
                <a href="#" class="button contact w-button">Sell</a>
            </div>
        </div>
    </div>
    <div class="section wide">
        <div data-w-id="8cf47482-19f1-1f52-25ba-910a60bc91de"
            style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); opacity: 1; transform-style: preserve-3d;"
            class="wrap">
            <h2 class="heading-7">Get updates from Richard</h2>
            <p class="paragraph-2">Join to our Newleater, discounts and free lessons</p>
            <div class="form-block w-form">
                <form id="email-form" name="email-form" data-name="Email Form" method="get" class="form-2"
                    data-wf-page-id="65b744f730039d33f4c5fa94" data-wf-element-id="538f9bd6-8ca5-4ea7-b7d3-6a7d798b371d"
                    aria-label="Email Form"><input class="input w-input" maxlength="256" name="email-2"
                        data-name="Email 2" placeholder="Enter your email" type="text" id="email-2" required=""><input
                        type="submit" data-wait="Please wait..." class="button form-button w-button" value="Subscribe">
                </form>
                <div class="w-form-done" tabindex="-1" role="region" aria-label="Email Form success">
                    <div>Thank you! Your submission has been received!</div>
                </div>
                <div class="w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure">
                    <div>Oops! Something went wrong while submitting the form.</div>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <script>
    
    </script>

@endpush