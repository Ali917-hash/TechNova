<?php
include '../db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Secure hashing
    $gender = $_POST['gender'];
    $dob = $_POST['dob'];

    // Check if email already exists
    $check = "SELECT * FROM users WHERE email='$email'";
    $res = mysqli_query($conn, $check);

    if (mysqli_num_rows($res) > 0) {
        echo "<script>alert('Email already used!'); window.location.href='Registration.html';</script>";
    } else {
        $sql = "INSERT INTO users (first_name, last_name, email, password, gender, dob) 
                VALUES ('$fname', '$lname', '$email', '$password', '$gender', '$dob')";
        
        if (mysqli_query($conn, $sql)) {
            echo "<script>alert('Registration Successful!'); window.location.href='../Login Form/Login.html';</script>";
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    }
}
?>