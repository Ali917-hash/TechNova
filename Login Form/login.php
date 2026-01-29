<?php
session_start();
include '../db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $sql);

    if ($row = mysqli_fetch_assoc($result)) {
        if (password_verify($password, $row['password'])) {
            $_SESSION['user_name'] = $row['first_name'];
            echo "<script>alert('GitHub does not supported Backend or Database!'); window.location.href='../index.html';</script>";
        } else {
            echo "<script>alert('Wrong Password'); window.location.href='Login.html';</script>";
        }
    } else {
        echo "<script>alert('User not found'); window.location.href='../Registration Form/Registration.html';</script>";
    }
}
?>