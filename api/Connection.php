<?php
class Connection {
    
    private $user_name = "root";
    private $password = "";
    private $host = "localhost";
    private $dbname = "sms";

    public function Connect() {
        try {
            $conn = new PDO('mysql:host='.$this->host.';dbname='.$this->dbname, $this->user_name, $this->password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
            return null; 
        }
    }
}
?>
