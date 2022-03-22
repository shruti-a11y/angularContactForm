<?php
   
header('Access-Control-Allow-Origin: *');

$con = mysqli_connect('localhost','root','','contact_form');

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$address = $_POST['address'];
$city = $_POST['city'];
$zip = $_POST['inputZip'];

$ins = "INSERT INTO `user-info` (`S.No`, `First Name`, `Last Name`, `Email`, `Address`, `City`, `Zip Code`) VALUES (NULL, '$fname', '$lname', '$email', '$address', '$city ', '$zip')";
if($con->query($ins)){
    $arr= array(
        'status' => 'success'
    );
}
else{
    $arr= array(
        'status' => 'error'
    );
}
echo json_encode($arr);

?>