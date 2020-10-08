import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const CustomFooter = () => {
    return (
        
            <MDBFooter color="pink" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Mochoice
            </h6>
            <p>
             This is best site where you can find affordable,trendy and quality fashion.
             spoil yourself,your friend,your partner and we promise we wont disappoint.
            Fast delivery only for you!
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a href="/Bags">Bags</a>
            </p>
            <p>
              <a href="/Shoes">Shoes</a>
            </p>
            <p>
              <a href="Watches">Watches</a>
            </p>
            <p>
              <a href="Dress">Dresses</a>
            </p>
            <p>
              <a href="Skirt">Skirt</a>
            </p>
            <p>
              <a href="Trouser">Trouser</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Quick links
            </h6>
            <p>
              <a href="#!">Your Account</a>
            </p>
            <p>
              <a href="/About">About us</a>
            </p>
           <p>
              <a href="/OurServices">our Services</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" /> Nairobi,Kenya
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> mochoice@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +254 798 777 814
            </p>
           
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.MDBootstrap.com"> MOCHOICE</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="btn-floating btn-sm rgba-white-slight mx-1">
                    <i href="fab fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>

    )
}

export default CustomFooter
