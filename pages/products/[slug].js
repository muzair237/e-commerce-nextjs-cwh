import Image from 'next/image'
import { useRouter } from 'next/router'

export default function slug() {
  const router = useRouter()
  return (
    //  <p>Post: {router.query.slug}</p>
    <>
      <section style={{backgroundColor: "#eee;"}}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card" style={{borderRadius: "15px;"}}>
                <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light">
                  <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81gb2Hwt0qL._AC_UL600_FMwebp_QL65_.jpg&w=640&q=75"
                    style={{borderTopLeftRadius: "15px;", borderTopRightRadius: "15px;"}} className="img-fluid"
                    alt="Laptop" />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
                <div className="card-body pb-0">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p><a href="#!" className="text-dark">Dell Xtreme 270</a></p>
                      <p className="small text-muted">Laptops</p>
                    </div>
                    <div>
                      <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="small text-muted">Rated 4.0/5</p>
                    </div>
                  </div>
                </div>
                <hr className="my-0" />
                <div className="card-body pb-0">
                  <div className="d-flex justify-content-between">
                    <p><a href="#!" className="text-dark">$3,999</a></p>
                    <p className="text-dark">#### 8787</p>
                  </div>
                  <p className="small text-muted">VISA Platinum</p>
                </div>
                <hr className="my-0" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                    {/* <a href="#!" className="text-dark fw-bold">Cancel</a> */}
                    <button type="button" className="btn btn-primary">Add to Cart!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}