// import { useState } from 'react'

interface NavbarProps { // declaring setPage as a function with type string and it wont return anything (void)
    setPage: (page: string) => void;
}

function Navbar({ setPage }: NavbarProps) {

	return (
		<>
			{/* feed, main content */}
			{/* my profile */}
			{/* sign in - links to signup */}

            {/* sticky top bar */}
            <nav className="navbar bd-navbar fixed-top p-2 bg-primary">
                <button
                    className="btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#sidebar"
                >
                    <span className="navbar-toggler-icon"></span> {/* hamburger button */}
                </button>
                <h3 style={{justifySelf: "center"}}>Emotion Tracker</h3>
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
					<h5 data-bs-dismiss="offcanvas" onClick={() => setPage("Home")}>Home</h5>
					<h5 data-bs-dismiss="offcanvas" onClick={() => setPage("MyProfile")}>My Profile</h5>
					<h5 data-bs-dismiss="offcanvas" onClick={() => setPage("SignIn")}>Sign In</h5>
				</div>
			</div>
		</>
	);
}

export default Navbar;
