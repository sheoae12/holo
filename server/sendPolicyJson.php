<?php
  function openURL($url) {
    // Create a new cURL resource
    $ch = curl_init();

    // Set the file URL to fetch through cURL
    curl_setopt($ch, CURLOPT_URL, $url);

    // Do not check the SSL certificates
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

    // Return the actual result of the curl result instead of success code
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
  }
  //express서버로부터 document 게시글 json 수
  //---------------------------------------------------------------------------------------
  /*
  $content = file_get_contents('temp.json');
  if($content !== false){
    //print_r($content);
    $jsonArray = json_decode($content, true);   //json 문자열을 객체나 배열로 변환
    //print_r($jsonArray);
  } else {
    echo '파일 가져오기 실패!';
  }
  */


  $params = $argv[1];
  $data = json_decode($params,true);

  // API URL
  $url = 'http://holo.dothome.co.kr/receivePolicyJson.php';

  // Create a new cURL resource
  $ch = curl_init($url);

  // Setup request to send json via POST
  $payload = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);  //다시 json 문자열로 변환

  curl_setopt($ch, CURLOPT_POST, 1);

  // Attach encoded JSON string to the POST fields
  curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

  // Set the content type to application/json
  curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));

  // Return response instead of outputting
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

  // Execute the POST request
  $result = curl_exec($ch);
  $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

  echo print_r($result);

  // Close cURL
  curl_close($ch);

  echo openURL('http://holo.dothome.co.kr/receivePolicyJson.php');
?>
