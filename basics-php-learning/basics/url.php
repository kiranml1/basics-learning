<<<<<<< HEAD
<?php
	$_FILE
?>
<html>
<body>
File:<input type="file" name="file" id="file"/>
URL:<input type="url" name="url" id="url"/>
<button onclick="myFunc()">Create</button>
</body>
<script>
function myFunc()
{
	var btn = document.createElement("input");
	var val = document.querySelector("#url").value;
	btn.setAttribute("type","file");
	btn.setAttribute("id","furl");
	btn.setAttribute("value",val);
	btn.setAttribute("onclick","func_2()");
	document.body.appendChild(btn);
}
function func_2()
{
	alert(this.value);
	return false;
}
</script>
=======
<?php
	$_FILE
?>
<html>
<body>
File:<input type="file" name="file" id="file"/>
URL:<input type="url" name="url" id="url"/>
<button onclick="myFunc()">Create</button>
</body>
<script>
function myFunc()
{
	var btn = document.createElement("input");
	var val = document.querySelector("#url").value;
	btn.setAttribute("type","file");
	btn.setAttribute("id","furl");
	btn.setAttribute("value",val);
	btn.setAttribute("onclick","func_2()");
	document.body.appendChild(btn);
}
function func_2()
{
	alert(this.value);
	return false;
}
</script>
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
</html>