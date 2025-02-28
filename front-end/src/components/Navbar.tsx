// import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
	return (
		<>
			{/* feed, main content */}
			{/* my profile */}
			{/* sign in - links to signup */}

            {/* sticky top bar */}
            <nav className="navbar navbar-expand-lq bd-navbar fixed-top p-2 bg-primary">
                <button
                    className="btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#sidebar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h3>Emotion Tracker</h3>
            </nav>


            {/* offcanvas */}
			<div
				className="offcanvas offcanvas-start"
				data-bs-scroll="true"
				tabIndex={-1}
				id="sidebar"
			>
				<div className="offcanvas-header">
					<h4
						className="offcanvas-title"
						id="offcanvasLabel"
					>
						Menu
					</h4>
					<button
                        type="button"
						className="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body">
					<h5>Home</h5>
					<h5>My Profile</h5>
					<h5>Sign In</h5>
				</div>
			</div>
		</>
	);
}

export default Navbar;
