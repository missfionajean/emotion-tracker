// this is our sign up form

interface SignUpProps {
	setPage: (page: string) => void;
}

function SignUp({ setPage }: SignUpProps) {

    return (
        <>
            <h1>Sign Up</h1>
            <form action="/auth/sign-up" method="POST"> {/* this will be updated to the correct path */}
			<div className="form-group">
				<label htmlFor="username" className="form-label ms-1">Username</label>
				<input
					type="text"
					name="username"
					id="username"
					className="form-control mb-3"
                    placeholder="Enter username"
				/>
			</div>
            
			<div className="form-group">
				<label htmlFor="password" className="form-label ms-1">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					className="form-control mb-3"
                    placeholder="Enter password"
				/>
			</div>

			<div className="form-group">
				<label htmlFor="confirmPassword" className="form-label ms-1">Confirm Password</label>
				<input
					type="password"
					name="confirmPassword"
					id="confirmPassword"
					className="form-control mb-3"
                    placeholder="Re-enter password"
				/>
			</div>

			<a href="/" type="button" className="btn btn-secondary me-2">Cancel</a>

			<button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
			<div className="d-flex mt-2">
                <h5>Already have an account? </h5>
                <a onClick={() => setPage("SignIn")} className="text-decoration-underline text-primary">Sign In</a>
            </div>
        </>
    )
}

export default SignUp;