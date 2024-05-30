<?php
// Establish a database connection
$servername = "localhost"; // Change to your MySQL server address
$username = "root";
$password = "";
$database = "rent";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$first_name = $_POST['fname'];
$last_name = $_POST['name'];
$gender = $_POST['gendertype'];
$email = $_POST['email'];
$contact = $_POST['contact'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

// Insert data into the database
$sql = "INSERT INTO users (first_name, last_name, gender, email, contact, password) VALUES ('$first_name', '$last_name', '$gender', '$email', '$contact', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Registration successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    // Additional error information
    echo "MySQL Error: " . mysqli_error($conn);
}

$conn->close();
?>
