<style>
	.navbar {
	  overflow: visible !Important;
	  background-color: #333;
	  font-family: Arial;
	  -webkit-box-pack: start !Important;
	  justify-content: start !Important;
	}

	/* Links inside the navbar */
	.navbar a {
	  float: left;
	  font-size: 16px;
	  color: white;
	  text-align: center;
	  padding: 14px 16px;
	  text-decoration: none;
	}

	/* The dropdown container */
	.dropdown1 {
	  float: left;
	  overflow: hidden;
	}
	
	
	.dropdown2 {
	  float: right;
	  overflow: hidden;
	}

	/* Dropdown button */
	.dropdown1 .dropbtn {
	  font-size: 16px;
	  border: none;
	  outline: none;
	  color: white;
	  padding: 14px 16px;
	  background-color: inherit;
	  font-family: inherit; /* Important for vertical align on mobile phones */
	  margin: 0; /* Important for vertical align on mobile phones */
	}

	/* Add a red background color to navbar links on hover */
	.navbar a:hover, .dropdown:hover .dropbtn {
	  /*background-color: red;*/
	}

	/* Dropdown content (hidden by default) */
	.dropdown-content {
	  display: none;
	  position: absolute;
	  background-color: #f9f9f9;
	  min-width: 160px;
	  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	  z-index: 1;
	}

	/* Links inside the dropdown */
	.dropdown-content a {
	  float: none;
	  color: black;
	  padding: 12px 16px;
	  padding-top: 8px !Important;
	  padding-bottom: 8px !Important;
	  text-decoration: none;
	  display: block;
	  text-align: left;
	  border-bottom: 1px solid #d9d9d9;
	}

	/* Add a grey background color to dropdown links on hover */
	.dropdown-content a:hover {
	  background-color: #ddd;
	}

	/* Show the dropdown menu on hover */
	.dropdown1:hover .dropdown-content {
	  display: block;
	}
</style>


<div class="navbar">
	<div class="dropdown1">
		<button class="dropbtn"><i class="fa fa-calculator text-danger" aria-hidden="true"></i> &nbsp;GCSE Maths/English
		  <i class="fa fa-caret-down"></i>
		</button>
		<div class="dropdown-content">
			<a href="/{{getUrlPathPrefix()}}gcse-maths-english/view-data/tbl-01">Deadline: 07/11/25</a>
			<a href="/{{getUrlPathPrefix()}}gcse-maths-english/view-data/tbl-02">Deadline: 14/11/25</a>
			<a href="/{{getUrlPathPrefix()}}gcse-maths-english/view-data/tbl-03">Deadline: 21/11/25</a>
			<a href="/{{getUrlPathPrefix()}}gcse-maths-english/view-data/tbl-04">Deadline: 28/11/25</a>
			<a href="/{{getUrlPathPrefix()}}gcse-maths-english/view-data/tbl-05">Deadline: 05/12/25</a>
			<a href="/{{getUrlPathPrefix()}}gcse-maths-english/view-data/tbl-06">Deadline: 12/12/25</a>
			<a href="/{{getUrlPathPrefix()}}gcse-maths-english/view-data/tbl-07">Students not referred</a>
			<a href="/{{getUrlPathPrefix()}}gcse-maths-english/view-data/tbl-08">No Online Referral</a>
			<a href="/{{getUrlPathPrefix()}}gcse-maths-english/view-data/tbl-09">Referrals Being Processed</a>
			<a href="/{{getUrlPathPrefix()}}gcse-maths-english/view-data/tbl-10">EAAs Approved</a>
			<a href="/{{getUrlPathPrefix()}}gcse-maths-english/view-data/tbl-11">EAAs Rejected</a>
			<a href="/{{getUrlPathPrefix()}}gcse-maths-english/view-data/tbl-12">No EAAs Required</a>
			<a href="/{{getUrlPathPrefix()}}gcse-maths-english/view-data/tbl-13">GCSE EAAs Expiring</a>
		</div>
	</div>
</div>