// this is the sign in page
interface SignInProps { // declaring setPage as a function with type string and it wont return anything (void)
    setPage: (page: string) => void;
}

function SignIn({ setPage }: SignInProps) {
    return (
        <>
            <h1>Sign In To Account</h1>
		    <form action="/auth/sign-in" method="POST">
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

                <a href="/" type="button" className="btn btn-secondary me-2">Cancel</a>

                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
            <div className="d-flex gap-2 mt-2">
                <h5>Don't have an account yet? </h5>
                <a onClick={() => setPage("SignUp")} className="text-decoration-underline text-primary">Sign Up</a>
            </div>
        </>
    )
};

export default SignIn;