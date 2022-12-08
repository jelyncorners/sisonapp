function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav nav-tabs mb-3" id="ex1" role="tablist">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav nav-tabs mb-3" id="ex1" role="tablist" >

        <li className="nav-item">
            <a className="nav-link" href="#/">Home</a>
          </li>


          <li className="nav-item">
            <a className="nav-link white-text" data-mdb-toggle="tab" role="tab" aria-controls="ex1-tabs-1"
      aria-selected="true" href="#/CreateAccount/">Create Account</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>  

          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>  
         
                  
        </ul>
      </div>
    </nav>
    </>
  );
}