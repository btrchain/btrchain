import React from 'react'
import './Team.css'

export default function Team() {
    return (
        <div>
            <div className="container">
		<div className="row">
			<div className="col-sm-6 offset-sm-3 mt-4 mb-4">
				<h2 className="text-center">Our Expert Team</h2>
				<p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
			</div>
		</div>

		<div className="row">
			<div className="col-md-4">
				<div className="card-box text-center">
					<div className="user-pic">
						<img src="https://www.markuptag.com/images/user-img-1.jpg" className="img-fluid" alt="User Pic"></img>
					</div>
					<h4>Rajnish Kumar</h4>
					<h6>Web Designer</h6>
					<hr></hr>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
					<hr></hr>
					<a href="#" className="btn btn-primary">Know More</a>
				</div>
			</div>

			<div className="col-md-4">
				<div className="card-box text-center">
					<div className="user-pic">
						<img src="https://www.markuptag.com/images/user-img-2.jpg" className="img-fluid" alt="User Pic"></img>
					</div>
					<h4>Satyam Tiwari</h4>
					<h6>Web Developer</h6>
					<hr></hr>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					<hr></hr>
					<a href="#" className="btn btn-primary">Know More</a>
				</div>
			</div>

			<div className="col-md-4">
				<div className="card-box text-center">
					<div className="user-pic">
						<img src="https://www.markuptag.com/images/user-img-3.jpg" className="img-fluid" alt="User Pic"></img>
					</div>
					<h4>Salim Malik</h4>
					<h6>Front End Developer</h6>
					<hr></hr>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					<hr></hr>
					<a href="#" className="btn btn-primary">Know More</a>
				</div>
			</div>
		</div>
	</div>
        </div>
    )
}
