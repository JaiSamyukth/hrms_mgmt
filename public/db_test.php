<?php
$host = '127.0.0.1';
$db   = 'hr_management';
$user = 'postgres';
$pass = 'admin';
$port = '5432';

$dsn = "pgsql:host=$host;port=$port;dbname=$db";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    echo "Connected successfully to PostgreSQL!";
} catch (\PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    echo "\nCode: " . $e->getCode();
}
