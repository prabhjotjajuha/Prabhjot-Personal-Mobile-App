Prabhjot-Personal-Mobile-App
============================

My Solo App Design

<!doctype html>
<html>
<head>
<meta charset="utf-8">

<title>ElevationAndDirection</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<link rel="stylesheet" href="CSS_Files/newthemeforapp.min.css" />
<link rel="stylesheet" href="CSS_Files/structure.css" />

<!--<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.css" />-->
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.js"></script>
 

<script src="Javascript_Files/myscript.js"></script>
<link rel="stylesheet" href="CSS_Files/myStyles.css" />
</head>

<body>
<!--<img src="images/mountains-valleys-phoneapp.jpg" alt="" height="100%" width="100%"/>-->
<div id="home" 
data-role="page" 
data-theme="a"
data-transition="slide"
data-title="View Source: Home">

<div data-role="header" data-position="fixed" data-theme="a">
<h1>Home</h1>
<!--<a href="#Coordinates">Cordinates</a>-->
<a href="#info" data-role="button" data-icon="info" data-iconpos="right" class="ui-btn-right" >Info</a>
</div>
<div data-role="content">
<a href="#Coordinates" data-transition="slide" data-role="button" data-icon="arrow-r">Get Location Co-ordinates</a>
</div><!--content ends-->
</div><!--page ends-->

<div id="Coordinates"
data-role="page"
data-theme="a"
data-transition="slide"
data-title="View Source: Co-ordinates">
<div data-role="header" data-position="fixed" data-theme="a">
<h1>Co-ordinates</h1>
<a href="#home" data-icon="home" data-iconpos="notext" class="ui-btn-right">Home</a>
</div><!--header ends-->


<div data-role="content">
<a href="#Location">Location</a>
<p>Latitude</p>
<p>Longitude</p>
</div>
<a href="#Get Elevation" data-role="button">Get Elevation</a>
<a href="#Get Direction" data-role="button">Get Direction</a>
<li><div data-role="footer" data-position="fixed" data-id="vs_footer">
<div data-role="navbar">
<ul>
<li><a href="#home" data-role="button" data-icon="home" data-iconpos="right" data-inline="true" >Home</a></li>
<li>
<a href="#Refresh" data-role="button" data-icon="refresh" data-iconpos="right" data-inline="true" class="ui-btn-block" data-position="fixed">Refresh</a></li>
<li><a href="#info" data-role="button" data-icon="info" data-iconpos="right" data-inline="true" >Info</a></li>
<li><a href="#home" data-role="button" data-icon="back" data-iconpos="right" data-inline="true" >Back</a></li>
</ul>
</div><!--navbar ends-->
</div><!--footer-->
</div><!--page ends-->


<div id="Location"
data-role="page"
data-theme="a"
data-transition="slide"
data-title="View Source: Location">
<div data-role="header" data-position="fixed" data-theme="a">
<h1>Location</h1>
<a href="#Coordinates" data-icon="home" data-iconpos="notext" class="ui-btn-right">Home</a>
</div><!--header ends-->
<p>Your Location Page</p>
<a href="#Coordinates">Co-odinates</a>

<div data-role="footer" data-position="fixed" data-id="vs_footer" >
<div data-role="navbar">
<ul>
<li><a href="#home" data-role="button" data-icon="home" data-iconpos="right">Home</a></li>
<li><a href="#Refresh" data-role="button" data-icon="refresh" data-iconpos="right"  class="ui-btn-block" >Refresh</a></li>
<li><a href="#info" data-role="button" data-icon="info" data-iconpos="right" data-inline="true" >Info</a></li>
<li><a href="#home" data-role="button" data-icon="back" data-iconpos="right" data-inline="true" class="ui-btn-block" >Back</a></li>
</ul>
</div><!--navbar ends-->
</div><!--footer-->
</div><!--page ends-->

<div data-role="page" id="info" data-theme="a">
<div data-role="header" data-theme="a">
<h1>About the App</h1>
</div>
<div data-role="content"
<p>This info icon when clicked will display the information about using the app.</p>
<a href="#"
data-role="button"
data-inline="true"
data-rel="back">Cancel</a>
<a href="#home"
data-role="button"
data-inline="true">Home</a>
</div><!--content ends-->
</div><!-- page ends-->

</body>
</html>

