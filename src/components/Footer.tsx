
export default function Footer () {
    return (
      <>
        <div className="footer-dark">
            <div className="f-row">
                <div className="col-sm-6 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Hosting</a></li>
                    </ul>
                </div> <br />
                <div className="col-sm-6 col-md-3 item">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div> <br />
                <div className="col-md-6 item text">
                    <h3>Company Name</h3>
                    <p>Coding Temple</p>
                </div>
            </div>
            <div className="col item social">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-youtube"></a>
                <a href="#" className="fa fa-instagram"></a>
                <a href="#" className="fa fa-linkedin"></a>
                <a href="#" className="fa fa-github"></a>
            </div>
                <p className="copyright">Company Name © 2018</p>
        </div>
      </>
    )
  }