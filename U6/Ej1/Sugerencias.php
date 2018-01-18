<?php header("Access-Control-Allow-Origin: *");
// Array with names
$a[] = "Adrian";
$a[] = "Bea";
$a[] = "Carlos";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fulgencio";
$a[] = "Gonzalo";
$a[] = "Hector";
$a[] = "Ignacio";
$a[] = "Juan";
$a[] = "Kimberly";
$a[] = "Laura";
$a[] = "Noelia";
$a[] = "Oscar";
$a[] = "Paula";
$a[] = "Andres";
$a[] = "Raquel";
$a[] = "Carla";
$a[] = "Dani";
$a[] = "Estela";
$a[] = "Eustaquio";
$a[] = "Santi";
$a[] = "Tiara";
$a[] = "Unai";
$a[] = "Vegeta";
$a[] = "Lorena";
$a[] = "Enrique";
$a[] = "Evaristo";
$a[] = "Wendy";
$a[] = "Victor";

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from ""
if ($q !== "") {
   $q = strtolower($q);
   $len=strlen($q);
   foreach($a as $name) {
       if (stristr($q, substr($name, 0, $len))) {
           if ($hint === "") {
               $hint = $name;
           } else {
               $hint .= ", $name";
           }
       }
   }
}

// Output "no suggestion" if no hint was found or output correct values
echo $hint === "" ? "sin sugerencias" : $hint;
?>
