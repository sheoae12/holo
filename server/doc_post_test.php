<?php

$db_host = "localhost"; 

$db_user = "holo"; 

$db_passwd = "kitce2022*";

$db_name = "holo"; 

$conn = mysqli_connect($db_host,$db_user,$db_passwd,$db_name);



if (mysqli_connect_errno($conn)) {

echo "데이터베이스 연결 실패: " . mysqli_connect_error();

} else {

echo "데이터베이스 연결 성공";

}

mysqli_set_charset($conn,"utf8");

/*
$wquery = "INSERT INTO `document_post` (`id`, `user_id`, `title`, `content`, `reg_date`, `view`, `like`) VALUES
 (NULL, '13', '게시물2', '게시물2입니다.', now(), '25', '0');";

if (mysqli_query($conn,$wquery)) {
	echo "테이블에 값 쓰기 완료: $wquery<br/>";
} else {
	echo "테이블에 값 쓰기 오류: ".mysqli_error($conn);
}

$rquery = " SELECT * FROM document_post";
if($result = mysqli_query($conn,$rquery)){
	echo "<table border = '1' cellpadding='5'> <tr nowrap>
	<th>post_id</th>
	<th>writer_id</th>
	<th>title</th>
	<th>content</th>
	<th>reg_date</th>
	<th>view</th>
	<th>like</th>";

	while($row=mysqli_fetch_array($result)){
		echo "<tr>";
		echo "<td nowrap>".$row['id']."</td>";
		echo "<td nowrap>".$row['user_id']."</td>";
		echo "<td nowrap>".$row['title']."</td>";
		echo "<td nowrap>".$row['content']."</td>";
		echo "<td nowrap>".$row['reg_date']."</td>";
		echo "<td nowrap>".$row['view']."</td>";
		echo "<td nowrap>".$row['like']."</td>";
		echo "</tr>";
	}
	echo "</table>";

	mysqli_close($conn);
} else {
	echo "테이블 쿼리 오류: ".mysqli_error($conn);
	exit;
}
?>
*/