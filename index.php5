 <?php require('programming/common_words.inc');
   start_common_words();
?> 
<title> Welcome To University </title>
<link rel="stylesheet" href="css/index.css"/> 
</head> 
<body onresize='media_query()'>
    <div id="margin">
        <div id="container">
            <header>
            <h1>Computer University Mandalay</h1>
            </header>
            <div id="wrapper">
                <nav> 
                <?php require('programming/nav_welcome.php5'); ?>
                </nav>
                  	<main>
                        <div id="menu_box">
                            <a id="nav"  href="#"></a>
                            Welcome To University
                            <a id="aside" href="#"></a>
                        </div>    
                        <div id="receiver"></div>
                        <div id="main_container">

                            
                        </div>
                  	</main>                
                <aside>
                        
                </aside>    
            </div>
            	<footer>
                    &copy;2016 Computer University (Mandalay)<br>
                    Web Developer by <a href="#"> Wagle (Max)</a>
            	</footer>
        </div>
    </div>
<script language="JavaScript" src="script/jquery-1.11.2.js"> </script>
<script language="JavaScript" src="script/index.js"> </script>
</body>
</html>



