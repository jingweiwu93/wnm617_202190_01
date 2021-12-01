<?php

function makeConn() {
   include "auth.php";
   try {
      $conn = new PDO(...Auth());
      $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      return $conn;
   } catch(PDOException $e) {
      die('{"error":"'.$e->getMessage().'"}');
   }
}


/* $r = PDO result */
function fetchAll($r) {
   $a = [];
   while($row = $r->fetch(\PDO::FETCH_OBJ)) $a[] = $row;
   return $a;
}

/*
$c = connection
$ps = prepared statement
$p = parameters
*/
function makeQuery($c,$ps,$p,$makeResults=true) {
   try {
      if(count($p)) {
         $stmt = $c->prepare($ps);
         $stmt->execute($p);
      } else {
         $stmt = $c->query($ps);
      }

      $r = $makeResults ? fetchAll($stmt) : [];

      return [
         // "statement"=>$ps,
         // "params"=>$p,
         "result"=>$r
      ];
   } catch(PDOException $e) {
      return ["error"=>"Query Failed: ".$e->getMessage()];
   }
}

function makeStatement($data) {
   try{
      $c = makeConn();
      $t = @$data->type;
      $p = @$data->params;

      switch($t) {
         // case "users_all":
         //    return makeQuery($c,"SELECT * FROM `track_users`",$p);
         // case "animals_all":
         //    return makeQuery($c,"SELECT * FROM `track_animals`",$p);
         // case "locations_all":
         //    return makeQuery($c,"SELECT * FROM `track_locations`",$p);

         //CRUD

         case "user_by_id":
            return makeQuery($c,"SELECT id,username,name,email,img FROM `track_users` WHERE `id`=?",$p);
         case "animal_by_id":
            return makeQuery($c,"SELECT * FROM `track_animals` WHERE `id`=?",$p);
         case "location_by_id":
            return makeQuery($c,"SELECT * FROM `track_locations` WHERE `id`=?",$p);

         case "animals_by_user_id":
            return makeQuery($c,"SELECT * FROM `track_animals` WHERE `user_id`=?",$p);
         case "locations_by_animal_id":
            return makeQuery($c,"SELECT * FROM `track_locations` WHERE `animal_id`=?",$p);


         case "check_signin":
            return makeQuery($c,"SELECT id FROM `track_users` WHERE `username`=? AND `password`=md5(?)",$p);

         case "recent_animal_locations":
            return makeQuery($c,"SELECT *
               FROM `track_animals` a
               JOIN (
                  SELECT lg.*
                  FROM `track_locations` lg
                  WHERE lg.id = (
                     SELECT lt.id
                     FROM `track_locations` lt
                     WHERE lt.animal_id = lg.animal_id
                     ORDER BY lt.date_create DESC
                     LIMIT 1
                  )
               ) l
               ON a.id = l.animal_id
               WHERE a.user_id = ?
               ORDER BY l.animal_id, l.date_create DESC
               ",$p);


         /* CREATE */

         case "insert_user":
            $r = makeQuery($c,"SELECT id FROM `track_202190_users` WHERE `username`=? OR `email` = ?",$p);
            if(count($r['result'])) return ["error"=>"Username or Email already exists"];

            $r = makeQuery($c,"INSERT INTO
               `track_202190_users`
               (`username`, `email`, `password`, `img`, `date_create`)
               VALUES
               (?, ?, md5(?), 'http://via.placeholder.com/400/?text=USER', NOW())
               ",$p,false);
            return ["id" => $c->lastInsertId()];

         case "insert_animal":
            $r = makeQuery($c,"INSERT INTO
               `track_202190_animals`
               (`user_id`, `name`, `type`, `breed`, `description`, `img`, `date_create`)
               VALUES
               (?, ?, ?, ?, ?, 'http://via.placeholder.com/400/?text=ANIMAL', NOW())
               ",$p,false);
            return ["id" => $c->lastInsertId()];

         case "insert_location":
            $r = makeQuery($c,"INSERT INTO
               `track_202190_locations`
               (`animal_id`, `lat`, `lng`, `description`, `photo`, `icon`, `date_create`)
               VALUES
               (?, ?, ?, ?, 'http://via.placeholder.com/400/?text=PHOTO', 'http://via.placeholder.com/400/?text=ICON', NOW())
               ",$p,false);
            return ["id" => $c->lastInsertId()];


         /* UPDATE */

         case "update_user":
            $r = makeQuery($c,"UPDATE
               `track_202190_users`
               SET
                  `username` = ?,
                  `name` = ?,
                  `email` = ?
               WHERE `id` = ?
               ",$p,false);
            return ["result" => "success"];

         case "update_user_password":
            $r = makeQuery($c,"UPDATE
               `track_202190_users`
               SET
                  `password` = md5(?)
               WHERE `id` = ?
               ",$p,false);
            return ["result" => "success"];

         case "update_animal":
            $r = makeQuery($c,"UPDATE
               `track_202190_animals`
               SET
                  `name` = ?,
                  `type` = ?,
                  `breed` = ?,
                  `description` = ?
               WHERE `id` = ?
               ",$p,false);
            return ["result" => "success"];

         case "update_location":
            $r = makeQuery($c,"UPDATE
               `track_202190_locations`
               SET
                  `description` = ?
               WHERE `id` = ?
               ",$p,false);
            return ["result" => "success"];


         default: return ["error"=>"No Matched Type"];
      }
   } catch(Exception $e) {
      return ["error"=>"Bad Data"];
   }
}



$data = json_decode(file_get_contents("php://input"));

die(
   json_encode(
      makeStatement($data),
      JSON_NUMERIC_CHECK
   )
);
