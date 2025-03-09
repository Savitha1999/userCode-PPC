// import React from 'react'

// export default function Footer() {
//   return (
// {/* <div class="container">
//   <footer class="py-5">
//     <div class="row">
//       <div class="col-6 col-md-2 mb-3">
//         <h5>Section</h5>
//         <ul class="nav flex-column">
//           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
//           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
//           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
//           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
//           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
//         </ul>
//       </div>

//       <div class="col-6 col-md-2 mb-3">
//         <h5>Section</h5>
//         <ul class="nav flex-column">
//           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
//           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
//           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
//           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
//           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
//         </ul>
//       </div>

//       <div class="col-6 col-md-2 mb-3">
//         <h5>Section</h5>
//         <ul class="nav flex-column">
//           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
//           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
//           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
//           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
//           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
//         </ul>
//       </div>

//       <div class="col-md-5 offset-md-1 mb-3">
//         <form>
//           <h5>Subscribe to our newsletter</h5>
//           <p>Monthly digest of what's new and exciting from us.</p>
//           <div class="d-flex flex-column flex-sm-row w-100 gap-2">
//             <label for="newsletter1" class="visually-hidden">Email address</label>
//             <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
//             <button class="btn btn-primary" type="button">Subscribe</button>
//           </div>
//         </form>
//       </div>
//     </div>

//     <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
//       <p>&copy; 2024 Company, Inc. All rights reserved.</p>
//       <ul class="list-unstyled d-flex">
//         <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24">fasdf</svg></a></li>
//         <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24">dfsdf</svg></a></li>
//         <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24">thfdfg</svg></a></li>
//       </ul>
//     </div>
//   </footer>
// </div> */}

//   )
// }

import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <>
     <div className="container-fluid my-5 p-0" style={{position:'fixed',bottom:'0%'}}>
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#45526e" }}
      >
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section className="">
            {/*Grid row*/}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                About us
                </h6>
                <p>
                  <a className="text-white">About us</a>
                </p>
                <p>
                  <a className="text-white">Terms & Conditions</a>
                </p>
                <p>
                  <a className="text-white">Privacy Policy</a>
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                How to sell fast                </h6>
                <p>
                  <a className="text-white">Buy Now on PUC</a>
                </p>
                <p>
                  <a className="text-white">Price Plan</a>
                </p>
                <p>
                  <a className="text-white">Promote your ads</a>
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                Help & Support
                </h6>
                <p>
                  <i className="fas fa-home mr-3" /> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope mr-3" /> info@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3" /> +91 0413-2222244
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/*Grid row*/}
          </section>
          {/* Section: Links */}
          <hr className="my-3" />
          {/* Section: Copyright */}
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              {/* Grid column */}
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                {/* Copyright */}
                <div className="p-3">
                  © 2020 Copyright:
                  <a className="text-white" href="https://mdbootstrap.com/">
                  Rent Pondy
                  </a>
                </div>
                {/* Copyright */}
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                {/* Facebook */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                {/* Twitter */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-twitter" />
                </a>
                {/* Google */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-google" />
                </a>
                {/* Instagram */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
              {/* Grid column */}
            </div>
          </section>
          {/* Section: Copyright */}
        </div>
        {/* Grid container */}
      </footer>
      {/* Footer */}
    </div>
    </>
  )
}
