<?php

    function outputOrderRow($file, $title, $quantity, $price) {
        $newPrice=number_format($price,2);
        $amount=$quantity*$newPrice;
        $newAmount=number_format($amount,2);
        echo "<tr>";
        echo "<td> <img src='./images/books/tinysquare/$file'> </td>";
        echo "<td> $title </td>";
        echo "<td> $quantity </td>";
        echo "<td> $$newPrice </td>";
        echo "<td> $$newAmount </td>";
        echo "</tr>";
    }
?>