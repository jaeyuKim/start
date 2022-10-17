<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>무제 문서</title>
</head>

<body>
	<?php
	if($_GET['search'] == '더조은호텔'){
	?> 
	  <img src="J.png" alt="호텔">
	<?php
	} else {
			echo '검색하신 호텔명은 없습니다';
	}
	?>
</body>
</html>

<?php
echo "<mm:dwdrfml documentRoot=" . __FILE__ .">";$included_files = get_included_files();foreach ($included_files as $filename) { echo "<mm:IncludeFile path=" . $filename . " />"; } echo "</mm:dwdrfml>";
?>